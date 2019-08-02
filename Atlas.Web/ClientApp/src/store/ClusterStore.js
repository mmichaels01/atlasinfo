import { clusters } from '../map/MapConstants';
import { getGridBoundsByName } from '../map/MapGeometry';
import moment from 'moment';
import { actionCreators as mapControlsActionCreators } from './MapControlsStore'

const initialClusterState = {
    ...clusters[0],
    serverSnapshots: [],
    clusterLoading: false,
    clusterTimestamp: null,
    requestTimestamp: null,
    playerMax: 150,
    serverMax: 150,
    playerCount: 0,
};


const requestPlayerCountForServerType = 'REQUEST_PLAYER_COUNT_FOR_SERVER';
const receivePlayerCountForServerType = 'RECEIVE_PLAYER_COUNT_FOR_SERVER';
const changeClusterIdType = 'CHANGE_CLUSTER_ID';
const tier1Bottom = 0.00;
const tier2Bottom = 0.10;
const tier3Bottom = 0.35;
const tier4Bottom = 0.67;


const requestPlayerCountForServer = () => async (dispatch, getState) => {
    if (getState().cluster.clusterLoading) {
        return;
    }
    dispatch({
        type: requestPlayerCountForServerType,
        payload: {
            requestTimestamp: moment().toISOString()
        }
    })

    const url = `api/Map/Population/${getState().cluster.id}`
    const response = await fetch(url);
    const payload = await response.json();

    dispatch({
        type: receivePlayerCountForServerType,
        payload: payload
    })

    if (getState().map.autoRefresh) {

    }
}

export const actionCreators = {
    requestPlayerCountForServer: requestPlayerCountForServer,
    receivePlayerCountForServer: resp => ({ type: receivePlayerCountForServerType, payload: resp }),
    changeClusterId: clusterId => async (dispatch, getState) => {
        if (getState().mapControls.autoRefresh)
            dispatch(mapControlsActionCreators.toggleAutoRefresh());

        dispatch({
            type: changeClusterIdType,
            payload: clusterId,
        });
        dispatch(requestPlayerCountForServer());
    },
};

export const reducer = (state, action) => {
    state = state || initialClusterState;

    switch (action.type) {
        case requestPlayerCountForServerType:
            return {
                ...state,
                serverSnapshots: [],
                clusterLoading: true,
                clusterTimestamp: null,
                requestTimestamp: action.payload.requestTimestamp,
                playerMax: 150,
                serverMax: 150,
                playerCount: 0,
            }
        case receivePlayerCountForServerType:
            let serverSnapshots = action.payload.serverSnapshots.map((x, i) => {
                let serverMax = action.payload.serverMax ? action.payload.serverMax : 150;
                let playerMax = action.payload.playerMax;

                let playerTier = 4
                let serverTier = 4

                if (x.playerCount >= serverMax * tier4Bottom)
                    serverTier = 4;
                else if (x.playerCount >= serverMax * tier3Bottom)
                    serverTier = 3;
                else if (x.playerCount >= serverMax * tier2Bottom)
                    serverTier = 2;
                else if (x.playerCount >= serverMax * tier1Bottom)
                    serverTier = 1;

                if (x.playerCount >= playerMax * tier4Bottom)
                    playerTier = 4;
                else if (x.playerCount >= playerMax * tier3Bottom)
                    playerTier = 3;
                else if (x.playerCount >= playerMax * tier2Bottom)
                    playerTier = 2;
                else if (x.playerCount >= playerMax * tier1Bottom)
                    playerTier = 1;

                return {
                    ...x,
                    ...getGridBoundsByName(x.gridCellName),
                    percentageOfPlayerMax: action.payload.playerMax ? (x.playerCount * 1.0) / action.payload.playerMax : 0,
                    percentageOfServerMax: (x.playerCount * 1.0) / serverMax,
                    playerTier: playerTier,
                    serverTier: serverTier
                };
            });
            return {
                ...state,
                clusterLoading: false,
                serverSnapshots: serverSnapshots,
                clusterTimestamp: action.payload.endTimestamp,
                playerMax: action.payload.playerMax,
                playerCount: action.payload.playerCount,
                clusterMax: action.payload.clusterMax ? action.payload.clusterMax : 0 // TODO: Model this
            }
        case changeClusterIdType:
            return {
                ...state,
                ...clusters.find(x => x.id === action.payload),
                serverSnapshots: [],
                clusterLoading: false,
                clusterTimestamp: null,
                requestTimestamp: null,
                playerMax: 150,
                serverMax: 150,
                playerCount: 0,
            }
        default:
            return state;
    }
};
