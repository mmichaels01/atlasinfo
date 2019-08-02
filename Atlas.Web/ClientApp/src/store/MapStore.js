
const initialMapState = {
    minZoom: 1,
    maxZoom: 7,
    maxNativeZoom: 6,
    viewport: {
        zoom: 2,
        center: {
            lng: 0,
            lat: 0
        },
    },
    tileBounds: [
        {
            lng: -100,
            lat: -100
        },
        {
            lng: 100,
            lat: 100
        }
    ],
    tileSize: 256,
    locator: {
        coordinates: {
            lat: 0,
            lng: 0,
        },
        show: false,
        name: "Player Locator"
    }
};


const updateMapCoordinateLocatorType = 'UPDATE_MAP_COORDINATE_LOCATOR';
const resetType = 'RESET_MAP';

export const actionCreators = {
    updateMapCoordinateLocator: coordinates => ({ type: updateMapCoordinateLocatorType, payload: coordinates }),
    reset: () => ({ type: resetType }),
};

export const reducer = (state, action) => {
    state = state || initialMapState;

    switch (action.type) {
        case resetType:
            return {
                ...state,
                locator: {
                    ...state.locator,
                    coordinates: {
                        ...state.locator.coordinates
                    }
                },
                viewport: {
                    center: {
                        lng: 0,
                        lat: 0
                    },
                    zoom: 2
                },
                tileBounds: {
                    ...state.tileBounds
                }
            }
        case updateMapCoordinateLocatorType:
            if (!action.payload)
                return {
                    ...state,
                    locator: {
                        show: false,
                        coordinates: {
                            lat: 0,
                            lng: 0
                        },
                        zoom: 2
                    },
                    viewport: {
                        ...state.viewport,
                        center: {
                            ...state.viewport.center
                        }
                    },
                    tileBounds: {
                        ...state.tileBounds
                    }
                }
            return {
                ...state,
                viewport: {
                    center: action.payload.coordinates,
                    zoom: action.payload.zoom,
                },
                locator: {
                    ...action.payload,
                    coordinates: {
                        ...action.payload.coordinates
                    }
                },
                tileBounds: {
                    ...state.tileBounds
                }
            }
        default:
            return state;
    }
};
