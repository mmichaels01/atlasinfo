export const rows = 15;
export const cols = 15;
export const totalCells = rows * cols;
export const cellSize = 200 / rows;
export const halfCellSize = cellSize * .5;
export const quarterCellSize = cellSize * .25;

export const getCentroid = function (arr) {
    var twoTimesSignedArea = 0;
    var cxTimes6SignedArea = 0;
    var cyTimes6SignedArea = 0;

    var length = arr.length

    var x = function (i) { return arr[i % length][0] };
    var y = function (i) { return arr[i % length][1] };

    for (var i = 0; i < arr.length; i++) {
        var twoSA = x(i) * y(i + 1) - x(i + 1) * y(i);
        twoTimesSignedArea += twoSA;
        cxTimes6SignedArea += (x(i) + x(i + 1)) * twoSA;
        cyTimes6SignedArea += (y(i) + y(i + 1)) * twoSA;
    }
    var sixSignedArea = 3 * twoTimesSignedArea;
    return [cxTimes6SignedArea / sixSignedArea, cyTimes6SignedArea / sixSignedArea];
}

export const getGridBoundsByName = function (cellName) {
    var x = (cellName.toUpperCase().charCodeAt(0) - 72) * cellSize;
    var y = (parseInt(cellName.slice(1) * -1, 10) + 8) * cellSize;
    var col = cellName.toUpperCase().charCodeAt(0) - 65
    var row = (parseInt(cellName.slice(1), 10)) - 1;

    let center = { lng: x, lat: y };
    let bottomLeft = {
        lng: center.lng - halfCellSize,
        lat: center.lat - halfCellSize
    };
    let bottomRight = {
        lng: center.lng + halfCellSize,
        lat: center.lat - halfCellSize
    };
    let topRight = {
        lng: center.lng + halfCellSize,
        lat: center.lat + halfCellSize
    }
    let topLeft = {
        lng: center.lng - halfCellSize,
        lat: center.lat + halfCellSize
    }
    return {
        name: cellName,
        center: center,
        bottomLeft: bottomLeft,
        bottomRight: bottomRight,
        topLeft: topLeft,
        topRight: topRight,
        polygon: [
            bottomLeft,
            bottomRight,
            topRight,
            topLeft,
            bottomLeft
        ],
        labelPosition: {
            lng: center.lng,
            lat: center.lat + cellSize * .3
        },
        populationPosition: {
            lng: center.lng,
            lat: center.lat - cellSize * .3,
        },
        index: col * rows + row
    }
}

export const getGridBoundsByNameRelativeCell = (cellName, xOffset, yOffset) => {
    let location = getGridBoundsByName(cellName);
    return {
        lng: location.center.lng + xOffset * cellSize,
        lat: location.center.lat + yOffset * cellSize,
    }
}

export const voyageOfPowerPoints = [
    {
        type: "Feature",
        properties: {
            name: "Power Stone 1",
            quest: "Voyage of Power",
            color: "purple",
            number: 1
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("O14").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Power Stone 2",
            quest: "Voyage of Power",
            color: "blue",
            number: 2
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("C6").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Power Stone 3",
            quest: "Voyage of Power",
            color: "turquoise",
            number: 3
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("D12").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Power Stone 4",
            quest: "Voyage of Power",
            color: "green",
            number: 4
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("F8").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Power Stone 5",
            quest: "Voyage of Power",
            color: "yellow",
            number: 5
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("G3").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Power Stone 6",
            quest: "Voyage of Power",
            color: "orange",
            number: 6
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("H6").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Power Stone 7",
            quest: "Voyage of Power",
            color: "red",
            number: 7
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("M12").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Power Stone 8",
            quest: "Voyage of Power",
            color: "white",
            number: 8
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("O7").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Center Maw",
            quest: "Voyage of Power",
            color: "black"
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("H8").center
        }
    }
]

export const ghostShipPath = [
    { lat: -75, lng: -32 },
    { lat: -52, lng: -33 },
    { lat: -25, lng: -31 },
    { lat: -21, lng: -15 },
    { lat: -24, lng: -4 },
    { lat: -21, lng: 3 },
    { lat: -24, lng: 22 },
    { lat: -44, lng: 21 },
    { lat: -61, lng: 16 },
    { lat: -77, lng: 22 },
    { lat: -75, lng: 13 },
    { lat: -75, lng: -13 },
    { lat: -70, lng: -20 },
    { lat: -75, lng: -32 },
]

export const goldenAgeZones = [
    "O14",
    "C6",
    "D12",
    "F8",
    "G3",
    "H6",
    "M12",
    "O7",
];

export const freeportZones = [
    "A6",
    "A10",
    "C14",
    "D8",
    "E4",
    "E12",
    "G7",
    "H13",
    "I3",
    "J9",
    "L5",
    "L8",
    "L12",
    "M2",
    "M7",
    "M9"
]

export const lawlessZones = [
    "A5",
    "A7",
    "B6",
    "O6",

    "A9",
    "A11",
    "B10",
    "O10",

    "C13",
    "C15",
    "D14",
    "B14",

    "D7",
    "D9",
    "E8",
    "C8",

    "E3",
    "E5",
    "D4",
    "F4",

    "E11",
    "E13",
    "F12",

    "G6",
    "G8",
    "F7",
    "H7",

    "H12",
    "H14",
    "I13",
    "G13",

    "I2",
    "I4",
    "J3",
    "H3",

    "J10",
    "J8",
    "K9",
    "I9",

    "L4",
    "L6",
    "M5",
    "K5",

    "K8",

    "L11",
    "L13",
    "K12",

    "M6",
    "M8",
    "N7",
    "L7",

    "M10",
    "N9",
    "L9",

    "M1",
    "M3",
    "L2",
    "N2"
]

export const biomePolygons = [
    {
        type: "Feature",
        properties: {
            uniqueName: "southernPolar",
            name: "Polar",
            type: "Polar"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100, lat: -100 },
                { lng: 100, lat: -100 },
                { lng: 100, lat: -100 + cellSize },
                { lng: -100, lat: -100 + cellSize },
                { lng: -100, lat: -100 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "southWestTundra",
            name: "Western Tundra",
            type: "Tundra"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100, lat: -100 + cellSize },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 3 },
                { lng: -100, lat: -100 + cellSize * 3 },
                { lng: -100, lat: -100 + cellSize },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "southCentralTundra",
            name: "Central Tundra",
            type: "Tundra"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 2 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 2 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "southEastTundra",
            name: "Eastern Tundra",
            type: "Tundra"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize },
                { lng: -100 + 15 * cellSize, lat: -100 + cellSize },
                { lng: -100 + 15 * cellSize, lat: -100 + cellSize * 3 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 3 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "southWestTemperate",
            name: "Western Temperate",
            type: "Temperate"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100, lat: -100 + cellSize * 3 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 3 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 5 },
                { lng: -100, lat: -100 + cellSize * 5 },
                { lng: -100, lat: -100 + cellSize * 3 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "southHighDesert",
            name: "High Desert",
            type: "High Desert"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 2 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 2 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 5 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 5 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 2 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "southEastTemperate",
            name: "Eastern Temperate",
            type: "Temperate"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 3 },
                { lng: -100 + 15 * cellSize, lat: -100 + cellSize * 3 },
                { lng: -100 + 15 * cellSize, lat: -100 + cellSize * 5 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 5 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 3 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "southWestTropics",
            name: "Western Tropics",
            type: "Tropics"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100, lat: -100 + cellSize * 5 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 5 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 7 },
                { lng: -100, lat: -100 + cellSize * 7 },
                { lng: -100, lat: -100 + cellSize * 5 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "southLowDesert",
            name: "Low Desert",
            type: "Low Desert"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 5 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 5 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 7 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 7 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 5 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "southEastTropics",
            name: "Eastern Tropics",
            type: "Tropics"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 5 },
                { lng: -100 + 15 * cellSize, lat: -100 + cellSize * 5 },
                { lng: -100 + 15 * cellSize, lat: -100 + cellSize * 7 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 7 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 5 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "equatorial",
            name: "Equatorial",
            type: "Equatorial"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100, lat: -.5 * cellSize },
                { lng: 100, lat: -.5 * cellSize },
                { lng: 100, lat: .5 * cellSize },
                { lng: -100, lat: .5 * cellSize },
                { lng: -100, lat: -.5 * cellSize },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "northWestTropics",
            name: "Western Tropics",
            type: "Tropics"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100, lat: -100 + cellSize * 8 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 8 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 10 },
                { lng: -100, lat: -100 + cellSize * 10 },
                { lng: -100, lat: -100 + cellSize * 8 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "northLowDesert",
            name: "Low Desert",
            type: "Low Desert"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 8 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 8 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 10 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 10 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 8 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "northEastTropics",
            name: "Eastern Tropics",
            type: "Tropics"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 8 },
                { lng: -100 + 15 * cellSize, lat: -100 + cellSize * 8 },
                { lng: -100 + 15 * cellSize, lat: -100 + cellSize * 10 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 10 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 8 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "northWestTemperate",
            name: "Western Temperate",
            type: "Temperate"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100, lat: -100 + cellSize * 10 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 10 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 12 },
                { lng: -100, lat: -100 + cellSize * 12 },
                { lng: -100, lat: -100 + cellSize * 10 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "northHighDesert",
            name: "High Desert",
            type: "High Desert"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 10 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 10 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 13 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 13 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 10 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "northEastTemperate",
            name: "Eastern Temperate",
            type: "Temperate"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 10 },
                { lng: -100 + 15 * cellSize, lat: -100 + cellSize * 10 },
                { lng: -100 + 15 * cellSize, lat: -100 + cellSize * 12 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 12 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 10 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "northWestTundra",
            name: "Western Tundra",
            type: "Tundra"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100, lat: -100 + cellSize * 12 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 12 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 14 },
                { lng: -100, lat: -100 + cellSize * 14 },
                { lng: -100, lat: -100 + cellSize * 12 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "northCentralPolar",
            name: "Central Tundra",
            type: "Tundra"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 13 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 13 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 14 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 14 },
                { lng: -100 + 5 * cellSize, lat: -100 + cellSize * 13 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "northEastTundra",
            name: "Eastern Tundra",
            type: "Tundra"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 12 },
                { lng: -100 + 15 * cellSize, lat: -100 + cellSize * 12 },
                { lng: -100 + 15 * cellSize, lat: -100 + cellSize * 14 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 14 },
                { lng: -100 + 10 * cellSize, lat: -100 + cellSize * 12 },
            ]]
        }
    },
    {
        type: "Feature",
        properties: {
            uniqueName: "northernPolar",
            name: "Polar",
            type: "Polar"
        },
        geometry: {
            type: "Polygon",
            coordinates: [[
                { lng: -100, lat: - 100 + 14 * cellSize },
                { lng: -100 + 15 * cellSize, lat: - 100 + 14 * cellSize },
                { lng: -100 + 15 * cellSize, lat: - 100 + 15 * cellSize },
                { lng: -100, lat: - 100 + 15 * cellSize },
                { lng: -100, lat: - 100 + 14 * cellSize },
            ]]
        }
    },
]

export const gridColumns = [
    {
        type: "Feature",
        properties: {
            name: "A",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "B",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("B1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "C",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("C1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "D",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("D1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "E",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("E1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "F",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("F1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "G",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("G1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "H",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("H1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "I",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("I1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "J",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("J1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "K",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("K1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "L",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("L1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "M",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("M1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "N",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("N1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "O",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O1", 0, 1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "A",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "B",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("B15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "C",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("C15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "D",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("D15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "E",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("E15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "F",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("F15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "G",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("G15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "H",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("H15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "I",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("I15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "J",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("J15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "K",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("K15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "L",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("L15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "M",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("M15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "N",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("N15", 0, -1)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "O",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O15", 0, -1)
        }
    },
]

export const gridRows = [
    {
        type: "Feature",
        properties: {
            name: "1",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A1", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "2",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A2", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "3",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A3", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "4",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A4", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "5",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A5", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "6",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A6", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "7",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A7", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "8",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A8", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "9",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A9", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "10",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A10", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "11",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A11", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "12",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A12", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "13",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A13", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "14",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A14", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "15",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("A15", -1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "1",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O1", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "2",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O2", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "3",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O3", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "4",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O4", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "5",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O5", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "6",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O6", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "7",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O7", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "8",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O8", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "9",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O9", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "10",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O10", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "11",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O11", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "12",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O12", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "13",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O13", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "14",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O14", 1, 0)
        }
    },
    {
        type: "Feature",
        properties: {
            name: "15",
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByNameRelativeCell("O15", 1, 0)
        }
    }
]

export const fountainOfYouthPoints = [
    {
        type: "Feature",
        properties: {
            name: "Fountain Rotation 1",
            quest: "Fountain of Youth",
            order: 1,
            grid: getGridBoundsByName("C6")
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("C6").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Fountain Rotation 2",
            quest: "Fountain of Youth",
            order: 2,
            grid: getGridBoundsByName("D12")
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("D12").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Fountain Rotation 3",
            quest: "Fountain of Youth",
            order: 3,
            grid: getGridBoundsByName("F8")
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("F8").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Fountain Rotation 4",
            quest: "Fountain of Youth",
            order: 4,
            grid: getGridBoundsByName("G3")
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("G3").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Fountain Rotation 5",
            quest: "Fountain of Youth",
            order: 5,
            grid: getGridBoundsByName("H6")
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("H6").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Fountain Rotation 6",
            quest: "Fountain of Youth",
            order: 6,
            grid: getGridBoundsByName("M12")
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("M12").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Fountain Rotation 7",
            quest: "Fountain of Youth",
            order: 7,
            grid: getGridBoundsByName("O7")
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("O7").center
        }
    },
    {
        type: "Feature",
        properties: {
            name: "Fountain Rotation 8",
            quest: "Fountain of Youth",
            order: 8,
            grid: getGridBoundsByName("O14")
        },
        geometry: {
            type: "Point",
            coordinates: getGridBoundsByName("O14").center
        }
    },
]