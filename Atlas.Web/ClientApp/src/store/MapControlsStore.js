import { actionCreators as clusterActionCreators } from './ClusterStore'

const initialMapState = {
    showLayersControl: false,
    showSearchControl: false,
    showInfoControl: true,
    autoRefresh: false,
    zoomControl: false,
    showGrid: true,
    showGridLabels: false,
    showBiomes: false,
    showFreeports: false,
    showLawless: false,
    showVoyageOfPower: false,
    showFountainOfYouth: false,
    showTerritory: true,
    showPopulations: true,
    showPopulationShading: true,
};

const closeLayersControlType = 'CLOSE_LAYERS';
const openLayersControlType = 'OPEN_LAYERS';
const openSearchControlType = 'OPEN_SEARCH';
const closeSearchControlType = 'CLOSE_SEARCH';
const openInfoControlType = 'OPEN_INFO';
const closeInfoControlType = 'CLOSE_INFO';
const toggleGridType = 'TOGGLE_GRID';
const toggleGridLabelsType = 'TOGGLE_GRID_LABELS';
const toggleBiomesType = 'TOGGLE_BIOMES';
const toggleFreeportsType = 'TOGGLE_FREEPORTS';
const toggleLawlessType = 'TOGGLE_LAWLESS';
const toggleVoyageOfPowerType = 'TOGGLE_VOYAGE_OF_POWER';
const toggleFountainOfYouthType = 'TOGGLE_FOUNTAIN_OF_YOUTH';
const toggleTerritoryType = 'TOGGLE_TERRITORY';
const togglePopulationsType = 'TOGGLE_POPULATIONS';
const togglePopulationShadingType = 'TOGGLE_POPULATION_SHADING';
const toggleAutoRefreshType = 'TOGGLE_AUTO_REFRESH';

const refreshRate = 20000;
let autoRefreshInterval = null;

const toggleAutoRefresh = () => async (dispatch, getState) => {
    dispatch({ type: toggleAutoRefreshType });

    if (!getState().mapControls.autoRefresh)
        clearInterval(autoRefreshInterval);

    else {
        dispatch(clusterActionCreators.requestPlayerCountForServer())

        autoRefreshInterval = setInterval(() => {
            dispatch(clusterActionCreators.requestPlayerCountForServer())
        }, refreshRate)
    }
}

export const actionCreators = {
    toggleGrid: () => ({ type: toggleGridType }),
    toggleGridLabels: () => ({ type: toggleGridLabelsType }),
    toggleBiomes: () => ({ type: toggleBiomesType }),
    toggleFreeports: () => ({ type: toggleFreeportsType }),
    toggleLawless: () => ({ type: toggleLawlessType }),
    toggleVoyageOfPower: () => ({ type: toggleVoyageOfPowerType }),
    toggleFountainOfYouth: () => ({ type: toggleFountainOfYouthType }),
    toggleTerritory: () => ({ type: toggleTerritoryType }),
    togglePopulations: () => ({ type: togglePopulationsType }),
    togglePopulationShading: () => ({ type: togglePopulationShadingType }),
    toggleAutoRefresh: toggleAutoRefresh,
    closeLayersControl: () => ({ type: closeLayersControlType }),
    openLayersControl: () => ({ type: openLayersControlType }),
    openSearchControl: () => ({ type: openSearchControlType }),
    closeSearchControl: () => ({ type: closeSearchControlType }),
    openInfoControl: () => ({ type: openInfoControlType }),
    closeInfoControl: () => ({ type: closeInfoControlType }),
};

export const reducer = (state, action) => {
    state = state || initialMapState;

    switch (action.type) {
        case toggleGridType:
            return { ...state, showGrid: !state.showGrid }
        case toggleGridLabelsType:
            return { ...state, showGridLabels: !state.showGridLabels }
        case toggleBiomesType:
            return { ...state, showBiomes: !state.showBiomes }
        case toggleFreeportsType:
            return { ...state, showFreeports: !state.showFreeports }
        case toggleLawlessType:
            return { ...state, showLawless: !state.showLawless }
        case toggleVoyageOfPowerType:
            return { ...state, showVoyageOfPower: !state.showVoyageOfPower }
        case toggleFountainOfYouthType:
            return { ...state, showFountainOfYouth: !state.showFountainOfYouth }
        case toggleTerritoryType:
            return { ...state, showTerritory: !state.showTerritory }
        case togglePopulationsType:
            return { ...state, showPopulations: !state.showPopulations }
        case togglePopulationShadingType:
            return { ...state, showPopulationShading: !state.showPopulationShading }
        case toggleAutoRefreshType:
            return { ...state, autoRefresh: !state.autoRefresh }
        case closeLayersControlType:
            return { ...state, showLayersControl: false }
        case openLayersControlType:
            return { ...state, showLayersControl: true }
        case openSearchControlType:
            return { ...state, showSearchControl: true }
        case closeSearchControlType:
            return { ...state, showSearchControl: false }
        case openInfoControlType:
            return { ...state, showInfoControl: true }
        case closeInfoControlType:
            return { ...state, showInfoControl: false }
        default:
            return state
    }
};
