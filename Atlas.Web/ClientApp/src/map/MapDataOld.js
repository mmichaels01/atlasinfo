let aColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "A1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "A2"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "A3"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "A4"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "A5",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "A6",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "A7",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "A8"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "A9",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "A10",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "A11",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "A12"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "A13"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "A14"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "A15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[0], boundPositions[0])
        }
    }
]
let bColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "B1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "B2"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "B3"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "B4"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "B5"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "B6",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "B7"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "B8"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "B9"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "B10",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "B11"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "B12"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "B13"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "B14",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "B15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[1], boundPositions[0])
        }
    }
]
let cColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "C1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "C2"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "C3"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "C4"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "C5"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "C6",
            voyageOfPower: "Power Stone 2",
            quests: [
                {
                    name: voyageOfPower,
                    value: "Power Stone 2"
                }
            ],
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "C7"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "C8",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "C9"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "C10"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "C11"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "C12"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "C13",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "C14",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "C15",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[2], boundPositions[0])
        }
    }
]
let dColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "D1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "D2"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "D3"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "D4",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "D5"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "D6"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "D7"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "D8",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "D9",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "D10"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "D11"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "D12",
            voyageOfPower: "Power Stone 3",
            quests: [
                {
                    name: voyageOfPower,
                    value: "Power Stone 3"
                }
            ]
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "D13"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "D14",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "D15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[3], boundPositions[0])
        }
    }
]
let eColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "E1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "E2"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "E3",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "E4"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "E5",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "E6"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "E7"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "E8",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "E9"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tropics",
            name: "E10"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "E11",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Temperate",
            name: "E12",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "E13",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Western",
            biome: "Tundra",
            name: "E14"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "E15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[4], boundPositions[0])
        }
    }
]

let fColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "F1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "F2"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "F3"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "F4",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "F5"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "F6"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "F7",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "F8",
            voyageOfPower: "Power Stone 4",
            quests: [
                {
                    name: voyageOfPower,
                    value: "Power Stone 4"
                }
            ]
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "F9"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "F10"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "F11"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "F12",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "F13"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "F14"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "F15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[5], boundPositions[0])
        }
    }
]
let gColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "G1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "G2"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "G3",
            voyageOfPower: "Power Stone 5",
            quests: [
                {
                    name: voyageOfPower,
                    value: "Power Stone 5"
                }
            ]
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "G4"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "G5"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "G6",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "G7",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "G8",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "G9"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "G10"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "G11"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "G12"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "G13",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "G14"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "G15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[6], boundPositions[0])
        }
    }
]
let hColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "H1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "H2"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "H3",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "H4"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "H5"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "H6",
            voyageOfPower: "Power Stone 6",
            quests: [
                {
                    name: voyageOfPower,
                    value: "Power Stone 6"
                }
            ]
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "H7",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "H8",
            voyageOfPower: "Center Maw"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "H9"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "H10"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "H11"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "H12",
            zoneType: "Lawless",
            voyageOfPower: "Power Stone 9 - Ghost Ship Route",
            quests: [
                {
                    name: voyageOfPower,
                    value: "Power Stone 9 - Ghost Ship Route"
                }
            ]
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "H13",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "H14",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "H15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[7], boundPositions[0])
        }
    }
]
let iColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "I1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "I2",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "I3",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "I4",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "I5"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "I6"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "I7"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "I8"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "I9",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "I10"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "I11"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "I12"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "I13",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "I14"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "I15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[8], boundPositions[0])
        }
    }
]
let jColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "J1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "J2"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "J3",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "J4"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "J5"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "J6"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "J7"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "J8",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "J9",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Low Desert",
            name: "J10",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "J11"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "High Desert",
            name: "J12"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "J13"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Central",
            biome: "Tundra",
            name: "J14"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "J15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[9], boundPositions[0])
        }
    }
]

let kColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "K1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "K2"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "K3"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "K4"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "K5",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "K6"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "K7"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "K8",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "K9",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "K10"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "K11"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "K12",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "K13"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "K14"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "K15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[10], boundPositions[0])
        }
    }
]
let lColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "L1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "L2",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "L3"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "L4",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "L5",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "L6",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "L7",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "L8",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "L9",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "L10"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "L11",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "L12",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "L13",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "L14"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "L15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[11], boundPositions[0])
        }
    }
]
let mColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "M1",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "M2",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "M3",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "M4"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "M5",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "M6",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "M7",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "M8",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "M9",
            zoneType: "freeport"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "M10",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "M11"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "M12",
            voyageOfPower: "Power Stone 7",
            quests: [
                {
                    name: voyageOfPower,
                    value: "Power Stone 7"
                }
            ]
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "M13"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "M14"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "M15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[12], boundPositions[0])
        }
    }
]
let nColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "N1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "N2",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "N3"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "N4"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "N5"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "N6"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "N7",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "N8"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "N9",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "N10"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "N11"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "N12"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "N13"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "N14"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "N15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[13], boundPositions[0])
        }
    }
]
let oColumn = [
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "O1"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[14])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "O2"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[13])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "O3"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[12])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "O4"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[11])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "O5"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[10])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "O6",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[9])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "O7",
            voyageOfPower: "Power Stone 8",
            quests: [
                {
                    name: voyageOfPower,
                    value: "Power Stone 8"
                }
            ]
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[8])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Equatorial",
            name: "O8"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[7])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "O9"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[6])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tropics",
            name: "O10",
            zoneType: "Lawless"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[5])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "O11"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[4])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Temperate",
            name: "O12"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[3])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "O13"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[2])
        }
    },
    {
        type: "Feature",
        properties: {
            region: "Eastern",
            biome: "Tundra",
            name: "O14",
            voyageOfPower: "Power Stone 1",
            quests: [
                {
                    name: voyageOfPower,
                    value: "Power Stone 1"
                }
            ],
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[1])
        }
    },
    {
        type: "Feature",
        properties: {
            biome: "Polar",
            name: "O15"
        },
        geometry: {
            type: "Polygon",
            coordinates: getGridPoly(boundPositions[14], boundPositions[0])
        }
    }
]

export const gridPolygons = [
    ...aColumn,
    ...bColumn,
    ...cColumn,
    ...dColumn,
    ...eColumn,
    ...fColumn,
    ...gColumn,
    ...hColumn,
    ...iColumn,
    ...jColumn,
    ...kColumn,
    ...lColumn,
    ...mColumn,
    ...nColumn,
    ...oColumn,
];

let islands = [
    {
        "name": "The Hopeless Reef",
        "points": [
            4.074328,
            -3.90095234,
            5.417989,
            -5.244613
        ],
        "rotation": 0.0
    },
    {
        "name": "The Haunted Islet",
        "points": [
            13.9422922,
            -2.99072981,
            14.7802744,
            -3.79981637
        ],
        "rotation": 0.0
    },
    {
        "name": "Shefcola Island",
        "points": [
            9.737932,
            -5.750294,
            13.1909971,
            -9.029984
        ],
        "rotation": 46.39698
    },
    {
        "name": "Digshaw Atoll",
        "points": [
            4.955654,
            -10.3736658,
            8.11976051,
            -14.2890682
        ],
        "rotation": 0.0
    },
    {
        "name": "Croyterel Refuge",
        "points": [
            13.1043139,
            -13.8700514,
            14.0723295,
            -14.7080336
        ],
        "rotation": 0.0
    },
    {
        "name": "The Stone Bridge",
        "points": [
            14.9608841,
            -24.7710476,
            14.9608841,
            -24.7710476
        ],
        "rotation": 0.0
    },
    {
        "name": "The Red Enclave",
        "points": [
            10.3736429,
            -26.2519684,
            12.0929508,
            -27.7690048
        ],
        "rotation": 0.0
    },
    {
        "name": "The Isolated Island",
        "points": [
            4.753383,
            -22.1776371,
            8.639887,
            -25.4139824
        ],
        "rotation": 0.0
    },
    {
        "name": "Marauders Beach",
        "points": [
            14.2312593,
            -25.39954,
            14.2312593,
            -25.39954
        ],
        "rotation": 0.0
    },
    {
        "name": "Troheller Key",
        "points": [
            9.460421,
            -42.8454552,
            12.4836588,
            -46.61638
        ],
        "rotation": -16.91626
    },
    {
        "name": "The Rough Ait",
        "points": [
            4.22603273,
            -41.12254,
            6.696636,
            -43.33308
        ],
        "rotation": 0.0
    },
    {
        "name": "The Barracude Refuge",
        "points": [
            8.939685,
            -38.1968269,
            10.2725086,
            -39.3996239
        ],
        "rotation": 0.0
    },
    {
        "name": "Wintry Skerry",
        "points": [
            6.761652,
            -63.1629333,
            8.907177,
            -64.39823
        ],
        "rotation": 0.0
    },
    {
        "name": "Stockfait Key",
        "points": [
            3.9984777,
            -54.7758675,
            9.167239,
            -60.1071777
        ],
        "rotation": -38.65338
    },
    {
        "name": "Seashell Reef",
        "points": [
            8.159493,
            -61.63507,
            10.0449543,
            -63.0004044
        ],
        "rotation": 0.0
    },
    {
        "name": "Penwood Island",
        "points": [
            12.255496,
            -59.9121437,
            13.45829,
            -61.11493
        ],
        "rotation": 0.0
    },
    {
        "name": "The Shadowed Reef",
        "points": [
            4.811176,
            -72.65526,
            6.59911251,
            -74.7682648
        ],
        "rotation": 0.0
    },
    {
        "name": "The Bursting Atoll",
        "points": [
            12.0279455,
            -74.8983,
            14.2384834,
            -77.4339142
        ],
        "rotation": 0.0
    },
    {
        "name": "Millercona Chain",
        "points": [
            6.436573,
            -77.92154,
            10.2074938,
            -82.08256
        ],
        "rotation": 33.95649
    },
    {
        "name": "The Silver Isles",
        "points": [
            7.834413,
            -113.7778,
            11.0201912,
            -116.540962
        ],
        "rotation": 0.0
    },
    {
        "name": "The Maroon Enclave",
        "points": [
            2.50311065,
            -110.331955,
            5.298794,
            -113.225143
        ],
        "rotation": 0.0
    },
    {
        "name": "The Desolate Cay",
        "points": [
            11.7678776,
            -106.235954,
            14.6285744,
            -109.031616
        ],
        "rotation": 0.0
    },
    {
        "name": "Davelsonee Atoll",
        "points": [
            7.866921,
            -103.700333,
            10.40254,
            -106.1059
        ],
        "rotation": 0.0
    },
    {
        "name": "Tiverfail Archipelago",
        "points": [
            2.95822239,
            -122.782425,
            6.40406561,
            -126.423332
        ],
        "rotation": 0.0
    },
    {
        "name": "Laniston Chain",
        "points": [
            9.949839,
            -123.510544,
            13.1031084,
            -126.598778
        ],
        "rotation": 0.0
    },
    {
        "name": "Hudrood Holm",
        "points": [
            5.55043,
            -128.678528,
            11.9544935,
            -134.855042
        ],
        "rotation": 0.0
    },
    {
        "name": "The New Atoll",
        "points": [
            2.438096,
            -148.496338,
            6.078985,
            -151.324524
        ],
        "rotation": 0.0
    },
    {
        "name": "Robrial Isles",
        "points": [
            7.704381,
            -137.8012,
            10.2725086,
            -140.206757
        ],
        "rotation": 0.0
    },
    {
        "name": "Lockethon Isle",
        "points": [
            6.95669937,
            -145.863144,
            10.4025421,
            -148.43129
        ],
        "rotation": 0.0
    },
    {
        "name": "Chamgonie Isles",
        "points": [
            9.979938,
            -141.994659,
            12.8406372,
            -144.6278
        ],
        "rotation": 0.0
    },
    {
        "name": "The New Atoll",
        "points": [
            3.73841453,
            -180.516571,
            7.931938,
            -184.32
        ],
        "rotation": -38.26297
    },
    {
        "name": "Luseden Archipelago",
        "points": [
            6.72914267,
            -172.974762,
            8.712128,
            -174.37262
        ],
        "rotation": 0.0
    },
    {
        "name": "Fallcaster Isles",
        "points": [
            9.134731,
            -175.835434,
            11.670352,
            -178.176
        ],
        "rotation": 0.0
    },
    {
        "name": "Bloomslis",
        "points": [
            11.8653965,
            -180.419052,
            13.88089,
            -182.954666
        ],
        "rotation": 0.0
    },
    {
        "name": "Cresney Cay",
        "points": [
            5.85143,
            -194.36496,
            11.0852079,
            -199.72876
        ],
        "rotation": -18.31537
    },
    {
        "name": "Albernoque Skerry",
        "points": [
            5.883938,
            -191.634354,
            7.47682762,
            -192.9347
        ],
        "rotation": 0.0
    },
    {
        "name": "The Shadowy Key",
        "points": [
            3.47834945,
            -209.936279,
            5.7539053,
            -212.114334
        ],
        "rotation": 0.0
    },
    {
        "name": "The Rippling Haven",
        "points": [
            8.907176,
            -210.261337,
            12.9381609,
            -214.1623
        ],
        "rotation": 0.0
    },
    {
        "name": "The Barracuda Reef",
        "points": [
            6.11149263,
            -214.552429,
            7.379302,
            -215.982758
        ],
        "rotation": 0.0
    },
    {
        "name": "Pachampton Island",
        "points": [
            7.281779,
            -229.831146,
            10.8576527,
            -233.764618
        ],
        "rotation": 0.0
    },
    {
        "name": "Chibouwe Ait",
        "points": [
            10.6300983,
            -226.970383,
            12.5155592,
            -228.7908
        ],
        "rotation": 0.0
    },
    {
        "name": "Versack Island",
        "points": [
            1.8529526,
            -241.403976,
            2.795683,
            -242.476746
        ],
        "rotation": 0.0
    },
    {
        "name": "The Westerly Chain",
        "points": [
            4.25854,
            -248.978287,
            6.696636,
            -251.416382
        ],
        "rotation": 0.0
    },
    {
        "name": "The Sterling Skerry",
        "points": [
            11.1177158,
            -252.716721,
            12.2554941,
            -253.821945
        ],
        "rotation": 0.0
    },
    {
        "name": "Racier Refuge",
        "points": [
            5.16876364,
            -242.184174,
            8.452065,
            -245.304932
        ],
        "rotation": 0.0
    },
    {
        "name": "Northquest Island",
        "points": [
            2.89320731,
            -253.5619,
            4.063493,
            -254.53714
        ],
        "rotation": 0.0
    },
    {
        "name": "Hatlants Haven",
        "points": [
            12.84064,
            -241.338959,
            14.3360033,
            -243.029388
        ],
        "rotation": 0.0
    },
    {
        "name": "Creston Island",
        "points": [
            10.3050175,
            -246.410233,
            13.7833672,
            -250.213669
        ],
        "rotation": 0.0
    },
    {
        "name": "Sennewich Enclave",
        "points": [
            27.6245251,
            -9.029983,
            30.0806789,
            -11.457242
        ],
        "rotation": 23.62564
    },
    {
        "name": "Rossby Ait",
        "points": [
            28.7370186,
            -3.323033,
            29.4594135,
            -3.87205648
        ],
        "rotation": 0.0
    },
    {
        "name": "Parabraiand Island",
        "points": [
            21.7731,
            -5.59136438,
            24.9516544,
            -8.509854
        ],
        "rotation": 36.36505
    },
    {
        "name": "Grensby Ait",
        "points": [
            21.729744,
            -11.6884089,
            22.7266541,
            -12.4974957
        ],
        "rotation": 0.0
    },
    {
        "name": "Campmer Holm",
        "points": [
            24.1425552,
            -26.4253387,
            26.4108868,
            -28.50585
        ],
        "rotation": 0.0
    },
    {
        "name": "Boothliers Ait",
        "points": [
            22.6399727,
            -20.3138447,
            26.09304,
            -23.75246
        ],
        "rotation": 19.30348
    },
    {
        "name": "Tecumtawa Atoll",
        "points": [
            25.8438129,
            -39.3020935,
            29.5172119,
            -42.9104767
        ],
        "rotation": 25.82349
    },
    {
        "name": "Bloomworth Ait",
        "points": [
            27.5017147,
            -45.8687057,
            28.8670483,
            -47.2015343
        ],
        "rotation": 0.0
    },
    {
        "name": "Allerdon Islet",
        "points": [
            20.15492,
            -42.7804451,
            22.07289,
            -44.37334
        ],
        "rotation": 0.0
    },
    {
        "name": "Parawich Peninsula",
        "points": [
            20.6100349,
            -54.0715446,
            22.9506073,
            -56.5204773
        ],
        "rotation": 0.0
    },
    {
        "name": "Malarwood Chain",
        "points": [
            27.4800434,
            -62.9787178,
            29.6905842,
            -65.05922
        ],
        "rotation": 0.0
    },
    {
        "name": "Deldes Isle",
        "points": [
            24.6193485,
            -58.99108,
            26.0063572,
            -60.2047157
        ],
        "rotation": 0.0
    },
    {
        "name": "Terrennear Refuge",
        "points": [
            28.47696,
            -73.04535,
            30.06985,
            -74.24813
        ],
        "rotation": 0.0
    },
    {
        "name": "Shauquet Haven",
        "points": [
            23.3407021,
            -77.49894,
            27.9243221,
            -81.88751
        ],
        "rotation": 0.0
    },
    {
        "name": "Eatoswell Island",
        "points": [
            24.9010887,
            -71.09488,
            26.2339134,
            -72.33017
        ],
        "rotation": 0.0
    },
    {
        "name": "Carnpawa Island ",
        "points": [
            21.39023,
            -72.98032,
            22.8205814,
            -74.410675
        ],
        "rotation": 0.0
    },
    {
        "name": "Nicoterre Island",
        "points": [
            24.8685837,
            -96.87367,
            26.33144,
            -98.07647
        ],
        "rotation": 0.0
    },
    {
        "name": "Francaster Cay",
        "points": [
            28.7370243,
            -92.32256,
            30.1023579,
            -93.42782
        ],
        "rotation": 0.0
    },
    {
        "name": "Comgue Peninsula",
        "points": [
            25.5187283,
            -87.28382,
            27.72927,
            -89.55937
        ],
        "rotation": 0.0
    },
    {
        "name": "Blaincier Island",
        "points": [
            21.3577213,
            -91.6398849,
            24.70604,
            -95.02071
        ],
        "rotation": 0.0
    },
    {
        "name": "Trito Enclave",
        "points": [
            20.024889,
            -104.935616,
            22.69054,
            -107.601288
        ],
        "rotation": 0.0
    },
    {
        "name": "The Spring Skerry",
        "points": [
            21.8453369,
            -113.062622,
            24.6410217,
            -115.63076
        ],
        "rotation": 0.0
    },
    {
        "name": "Brimingcona Haven",
        "points": [
            26.6240025,
            -106.20343,
            30.4924488,
            -110.461975
        ],
        "rotation": 45.71086
    },
    {
        "name": "Herminoque Archipelago",
        "points": [
            27.8268013,
            -122.684952,
            30.3299141,
            -125.318092
        ],
        "rotation": 0.0
    },
    {
        "name": "Hermicord Island",
        "points": [
            21.19518,
            -129.706665,
            24.9661045,
            -132.827423
        ],
        "rotation": 0.0
    },
    {
        "name": "Farnterre Enclave",
        "points": [
            20.6425381,
            -122.229881,
            23.5357475,
            -124.863022
        ],
        "rotation": 0.0
    },
    {
        "name": "The raging Atoll",
        "points": [
            25.0961361,
            -138.906509,
            29.0621052,
            -142.872452
        ],
        "rotation": 46.31549
    },
    {
        "name": "Readwich Peninsula",
        "points": [
            29.09461,
            -146.87085,
            31.5002,
            -149.1139
        ],
        "rotation": 0.0
    },
    {
        "name": "Attleburg Reef",
        "points": [
            20.9676189,
            -145.668076,
            23.7958088,
            -148.561264
        ],
        "rotation": 0.0
    },
    {
        "name": "The Shrimp Enclave",
        "points": [
            26.2339115,
            -155.25795,
            27.5342331,
            -156.49324
        ],
        "rotation": 0.0
    },
    {
        "name": "The Giant Holm",
        "points": [
            27.4692116,
            -165.985519,
            28.86705,
            -167.643433
        ],
        "rotation": 0.0
    },
    {
        "name": "Oxsend Island",
        "points": [
            19.3747387,
            -165.5955,
            22.8855953,
            -168.358688
        ],
        "rotation": 26.32255
    },
    {
        "name": "Ogegami Island",
        "points": [
            24.3484478,
            -158.411163,
            27.8918152,
            -161.466934
        ],
        "rotation": -21.49977
    },
    {
        "name": "Leaminggus Skerry",
        "points": [
            29.2896557,
            -157.923553,
            30.752512,
            -159.516434
        ],
        "rotation": 0.0
    },
    {
        "name": "Triholm Chain",
        "points": [
            29.35467,
            -181.68689,
            31.662735,
            -183.994965
        ],
        "rotation": 0.0
    },
    {
        "name": "The Dreary Skerry",
        "points": [
            20.2849522,
            -179.671356,
            24.2834282,
            -184.385025
        ],
        "rotation": 35.51525
    },
    {
        "name": "Glasstone Island",
        "points": [
            23.600769,
            -174.145,
            24.8035641,
            -175.575363
        ],
        "rotation": 0.0
    },
    {
        "name": "Croyberry Island",
        "points": [
            28.0218449,
            -176.778152,
            29.2896557,
            -178.111
        ],
        "rotation": 0.0
    },
    {
        "name": "The Collapsing Holm",
        "points": [
            23.3732147,
            -195.8603,
            25.81131,
            -198.330933
        ],
        "rotation": 0.0
    },
    {
        "name": "The Cheerless Island",
        "points": [
            21.22769,
            -191.114166,
            23.76331,
            -193.812317
        ],
        "rotation": 0.0
    },
    {
        "name": "Rockholm Island",
        "points": [
            27.8267975,
            -198.59108,
            30.3624172,
            -201.386734
        ],
        "rotation": 0.0
    },
    {
        "name": "Zara's Spot",
        "points": [
            27.8593121,
            -210.4239,
            29.2896633,
            -211.821762
        ],
        "rotation": 0.0
    },
    {
        "name": "Bloomfail Chain",
        "points": [
            25.3561935,
            -208.571,
            27.3716869,
            -210.42395
        ],
        "rotation": 0.0
    },
    {
        "name": "Bienstable Reef",
        "points": [
            21.8128338,
            -212.959579,
            25.32369,
            -216.37291
        ],
        "rotation": 0.0
    },
    {
        "name": "Hancoln Island",
        "points": [
            21.1626663,
            -225.995209,
            23.6007614,
            -228.4333
        ],
        "rotation": 0.0
    },
    {
        "name": "Grandmeda Reef",
        "points": [
            28.3144226,
            -226.222717,
            29.9073162,
            -227.848145
        ],
        "rotation": 0.0
    },
    {
        "name": "Fairher Cay",
        "points": [
            24.6735268,
            -231.879074,
            27.956831,
            -235.2924
        ],
        "rotation": 73.24532
    },
    {
        "name": "Pasland Island",
        "points": [
            21.8453369,
            -242.736832,
            24.34845,
            -245.500031
        ],
        "rotation": 0.0
    },
    {
        "name": "Hinwood Island",
        "points": [
            29.4196911,
            -240.233734,
            30.6875,
            -241.469025
        ],
        "rotation": 0.0
    },
    {
        "name": "Hilboia Reef",
        "points": [
            26.2989254,
            -248.425644,
            29.842289,
            -252.2616
        ],
        "rotation": -26.68068
    },
    {
        "name": "Glenminster Holm",
        "points": [
            20.7400646,
            -252.81424,
            22.07289,
            -253.724426
        ],
        "rotation": 0.0
    },
    {
        "name": "Bordgar Cay",
        "points": [
            25.3887024,
            -245.727524,
            26.2664165,
            -247.417953
        ],
        "rotation": 0.0
    },
    {
        "name": "Playnia Holm",
        "points": [
            35.91766,
            -13.2632408,
            36.8278847,
            -14.2312565
        ],
        "rotation": 0.0
    },
    {
        "name": "Kensinghill Enclave",
        "points": [
            43.70512,
            -4.44997549,
            46.9848061,
            -7.70076942
        ],
        "rotation": 25.62972
    },
    {
        "name": "Hebjour Reef",
        "points": [
            39.34183,
            -3.8576088,
            40.1798172,
            -4.580007
        ],
        "rotation": 0.0
    },
    {
        "name": "Effinglam Peninsula",
        "points": [
            39.67413,
            -10.9371166,
            44.1674538,
            -15.3437471
        ],
        "rotation": 41.9712
    },
    {
        "name": "Bexbalt Reef",
        "points": [
            40.48321,
            -9.145566,
            41.9569054,
            -10.2580595
        ],
        "rotation": 0.0
    },
    {
        "name": "Alafil Atoll",
        "points": [
            48.44405,
            -11.5005856,
            49.2964821,
            -12.1218481
        ],
        "rotation": 0.0
    },
    {
        "name": "Somerhill Refuge",
        "points": [
            43.2138748,
            -26.2519627,
            44.6442261,
            -27.4655914
        ],
        "rotation": 0.0
    },
    {
        "name": "Hillburns Archipelago",
        "points": [
            39.3273773,
            -23.4924068,
            40.8155174,
            -24.821619
        ],
        "rotation": 0.0
    },
    {
        "name": "Chanwater Island",
        "points": [
            43.47395,
            -20.5450172,
            46.9992523,
            -24.04143
        ],
        "rotation": 56.04023
    },
    {
        "name": "Salismar Cay",
        "points": [
            39.4321327,
            -42.9104767,
            42.6504173,
            -46.32381
        ],
        "rotation": 0.0
    },
    {
        "name": "Camware Isle",
        "points": [
            43.0080032,
            -37.8717422,
            45.9987335,
            -41.41511
        ],
        "rotation": 45.42595
    },
    {
        "name": "Turtle Island",
        "points": [
            43.4089432,
            -53.4863968,
            45.90122,
            -56.0653648
        ],
        "rotation": 0.0
    },
    {
        "name": "The Colossal Atoll",
        "points": [
            39.9847641,
            -58.0158424,
            42.1736336,
            -60.33474
        ],
        "rotation": 0.0
    },
    {
        "name": "Stoughcam Haven",
        "points": [
            46.9848061,
            -58.25423,
            48.480175,
            -59.9229736
        ],
        "rotation": 0.0
    },
    {
        "name": "Itugami Island",
        "points": [
            44.5792274,
            -59.05609,
            46.31299,
            -60.2047043
        ],
        "rotation": 0.0
    },
    {
        "name": "Draytown Key",
        "points": [
            42.9321556,
            -62.71866,
            44.1674576,
            -63.8455963
        ],
        "rotation": 0.0
    },
    {
        "name": "Brightdurn Islands",
        "points": [
            46.2913132,
            -60.3780746,
            47.69999,
            -61.78676
        ],
        "rotation": 0.0
    },
    {
        "name": "Keeltawa Haven",
        "points": [
            38.32686,
            -76.39367,
            40.8299751,
            -79.12434
        ],
        "rotation": 0.0
    },
    {
        "name": "Gorgons Haven",
        "points": [
            44.4383621,
            -72.29767,
            47.13652,
            -75.0283356
        ],
        "rotation": 0.0
    },
    {
        "name": "Bassard Island",
        "points": [
            44.2758141,
            -78.31163,
            46.87645,
            -80.7497253
        ],
        "rotation": 0.0
    },
    {
        "name": "Flemfield Haven",
        "points": [
            40.34236,
            -91.47735,
            44.2108078,
            -94.79315
        ],
        "rotation": 0.0
    },
    {
        "name": "Magriden Holm",
        "points": [
            39.9197578,
            -105.1957,
            41.02503,
            -106.300964
        ],
        "rotation": 0.0
    },
    {
        "name": "Doland Atoll",
        "points": [
            42.1627922,
            -104.968132,
            45.901207,
            -108.609009
        ],
        "rotation": 0.0
    },
    {
        "name": "Chever Archipelago",
        "points": [
            38.7169647,
            -114.200394,
            42.22782,
            -116.89856
        ],
        "rotation": 0.0
    },
    {
        "name": "Blythewich Island",
        "points": [
            44.3733444,
            -111.794807,
            45.8362045,
            -112.965096
        ],
        "rotation": 0.0
    },
    {
        "name": "Templeter Refuge",
        "points": [
            39.7247124,
            -124.57045,
            42.68293,
            -127.398643
        ],
        "rotation": 0.0
    },
    {
        "name": "Maidligan Holm",
        "points": [
            36.05131,
            -128.959061,
            38.5544243,
            -131.559708
        ],
        "rotation": 0.0
    },
    {
        "name": "Kinideen Key",
        "points": [
            45.90121,
            -126.878525,
            48.27429,
            -129.186569
        ],
        "rotation": 0.0
    },
    {
        "name": "Winderden Island",
        "points": [
            36.11632,
            -150.089188,
            37.3841324,
            -151.324478
        ],
        "rotation": 0.0
    },
    {
        "name": "Plaintry Enclave",
        "points": [
            39.4321327,
            -148.268768,
            41.96775,
            -150.576843
        ],
        "rotation": 0.0
    },
    {
        "name": "Minnepon Island",
        "points": [
            45.6086464,
            -139.589127,
            49.18452,
            -142.709885
        ],
        "rotation": 0.0
    },
    {
        "name": "Hammere Cay",
        "points": [
            43.4306145,
            -144.400284,
            46.291317,
            -146.96843
        ],
        "rotation": 0.0
    },
    {
        "name": "The Seagrass Atoll",
        "points": [
            41.0250244,
            -164.295151,
            43.46312,
            -166.765762
        ],
        "rotation": 0.0
    },
    {
        "name": "Kerrocroft Island",
        "points": [
            39.0420456,
            -156.168137,
            41.415123,
            -158.44368
        ],
        "rotation": 0.0
    },
    {
        "name": "Bonedry Island",
        "points": [
            46.9414635,
            -167.025864,
            48.40432,
            -168.39119
        ],
        "rotation": 0.0
    },
    {
        "name": "Bereslet Reef",
        "points": [
            38.61943,
            -159.971649,
            41.1225433,
            -162.377213
        ],
        "rotation": 0.0
    },
    {
        "name": "Delisborg Cay",
        "points": [
            43.8207,
            -181.4593,
            46.3563232,
            -183.9624
        ],
        "rotation": 0.0
    },
    {
        "name": "Chesduff Haven",
        "points": [
            43.52813,
            -175.282837,
            46.3563232,
            -178.208542
        ],
        "rotation": 63.50911
    },
    {
        "name": "Bermere Peninsula",
        "points": [
            38.8469963,
            -178.403641,
            41.415123,
            -181.004257
        ],
        "rotation": 0.0
    },
    {
        "name": "Gaulto Reef",
        "points": [
            44.43835,
            -193.194733,
            47.1040077,
            -195.762878
        ],
        "rotation": 0.0
    },
    {
        "name": "Ganarial Island",
        "points": [
            37.44915,
            -196.608078,
            42.2603264,
            -201.224213
        ],
        "rotation": 0.0
    },
    {
        "name": "Saufield Key",
        "points": [
            40.8949966,
            -215.170044,
            44.5358849,
            -218.908432
        ],
        "rotation": 0.0
    },
    {
        "name": "Chesterland Haven",
        "points": [
            41.90274,
            -207.563263,
            46.06376,
            -211.0416
        ],
        "rotation": 0.0
    },
    {
        "name": "Wally Enclave",
        "points": [
            36.6202,
            -251.12381,
            37.9367752,
            -252.5379
        ],
        "rotation": 0.0
    },
    {
        "name": "The Brilliant Isle",
        "points": [
            42.1790581,
            -250.538666,
            45.3485832,
            -254.04953
        ],
        "rotation": 0.0
    },
    {
        "name": "Terreboro Archipelago",
        "points": [
            46.616394,
            -247.076569,
            47.9817276,
            -248.295624
        ],
        "rotation": 0.0
    },
    {
        "name": "Strafthon Island",
        "points": [
            41.69144,
            -241.468948,
            44.95849,
            -244.979813
        ],
        "rotation": 37.77928
    },
    {
        "name": "Penechill Holm",
        "points": [
            38.0342979,
            -245.906281,
            39.4483948,
            -247.46666
        ],
        "rotation": 0.0
    },
    {
        "name": "Beavercoln Cay",
        "points": [
            36.1488342,
            -239.778625,
            37.41664,
            -240.851379
        ],
        "rotation": 0.0
    },
    {
        "name": "Walfield Atoll",
        "points": [
            56.462677,
            -4.84007072,
            58.90438,
            -7.26732969
        ],
        "rotation": 0.0
    },
    {
        "name": "The Decayed Archipelago",
        "points": [
            60.4792137,
            -9.232253,
            63.8311424,
            -12.4974947
        ],
        "rotation": 0.0
    },
    {
        "name": "Templebalt Islet",
        "points": [
            54.64224,
            -12.41081,
            56.0292435,
            -13.76892
        ],
        "rotation": 0.0
    },
    {
        "name": "Shrewtara Archipelago",
        "points": [
            64.1489944,
            -3.03407383,
            64.90029,
            -4.291047
        ],
        "rotation": 0.0
    },
    {
        "name": "Berthierforte Holm",
        "points": [
            54.49774,
            -2.39836264,
            55.4946556,
            -3.16410518
        ],
        "rotation": 0.0
    },
    {
        "name": "Yarsard Reef",
        "points": [
            59.4967422,
            -26.65651,
            62.8920059,
            -30.2973957
        ],
        "rotation": 52.62294
    },
    {
        "name": "The Shadowy Isle",
        "points": [
            57.344,
            -22.1198444,
            59.1066437,
            -23.9113941
        ],
        "rotation": 0.0
    },
    {
        "name": "Winterholm Atoll",
        "points": [
            56.3362541,
            -44.1782875,
            60.0746727,
            -47.4615936
        ],
        "rotation": 0.0
    },
    {
        "name": "Midland Isles",
        "points": [
            59.749588,
            -39.0095253,
            62.2201958,
            -41.3500938
        ],
        "rotation": 0.0
    },
    {
        "name": "The Steep Reef",
        "points": [
            54.6133461,
            -64.06232,
            55.9570045,
            -65.33373
        ],
        "rotation": 0.0
    },
    {
        "name": "Hermisea Island",
        "points": [
            62.02516,
            -59.0344238,
            63.74447,
            -61.1438255
        ],
        "rotation": 0.0
    },
    {
        "name": "Arborbiens Haven",
        "points": [
            58.572094,
            -54.5988922,
            60.8693161,
            -56.7805367
        ],
        "rotation": 0.0
    },
    {
        "name": "Turborg Isle",
        "points": [
            54.48331,
            -69.95709,
            57.1489525,
            -72.39519
        ],
        "rotation": 0.0
    },
    {
        "name": "Lanishaw Holm",
        "points": [
            55.78363,
            -75.0933456,
            57.9291534,
            -77.23887
        ],
        "rotation": 0.0
    },
    {
        "name": "Grocona Reef",
        "points": [
            60.36725,
            -78.1165848,
            62.90287,
            -80.52218
        ],
        "rotation": 0.0
    },
    {
        "name": "The Gloomy Reef",
        "points": [
            60.9523926,
            -91.7049,
            63.7805824,
            -94.33805
        ],
        "rotation": 0.0
    },
    {
        "name": "Notbron Ait",
        "points": [
            55.6861076,
            -88.6491547,
            58.5142975,
            -90.69716
        ],
        "rotation": 0.0
    },
    {
        "name": "Nipapids Island",
        "points": [
            53.7681427,
            -97.4263,
            55.1334763,
            -98.69411
        ],
        "rotation": 0.0
    },
    {
        "name": "Moonlit Haven",
        "points": [
            63.3904953,
            -98.401535,
            65.7960739,
            -100.742111
        ],
        "rotation": 0.0
    },
    {
        "name": "Whitgar Archipelago",
        "points": [
            57.4415359,
            -108.869095,
            59.58706,
            -111.112144
        ],
        "rotation": 0.0
    },
    {
        "name": "Stambel Key",
        "points": [
            62.70782,
            -104.578049,
            65.43849,
            -107.503761
        ],
        "rotation": 0.0
    },
    {
        "name": "Okograve Islands",
        "points": [
            59.4895248,
            -110.884575,
            61.797596,
            -113.160141
        ],
        "rotation": 0.0
    },
    {
        "name": "Bracebour Atoll",
        "points": [
            54.5158234,
            -113.875336,
            56.3687744,
            -115.565735
        ],
        "rotation": 0.0
    },
    {
        "name": "Tranquil Island",
        "points": [
            57.9616623,
            -138.45134,
            61.8301,
            -141.409576
        ],
        "rotation": 0.0
    },
    {
        "name": "Nokonan Island",
        "points": [
            53.4755669,
            -147.261,
            57.14896,
            -150.641815
        ],
        "rotation": 0.0
    },
    {
        "name": "Hinghead Island",
        "points": [
            63.42299,
            -147.130951,
            65.82858,
            -150.4793
        ],
        "rotation": 0.0
    },
    {
        "name": "Bracepool Holm",
        "points": [
            61.2449646,
            -142.514832,
            63.585537,
            -145.14798
        ],
        "rotation": 0.0
    },
    {
        "name": "Unstabke Island",
        "points": [
            62.2527161,
            -162.214645,
            65.3734741,
            -165.237885
        ],
        "rotation": 0.0
    },
    {
        "name": "The Adamantine Refuge",
        "points": [
            56.3037567,
            -158.281189,
            59.6845779,
            -160.8818
        ],
        "rotation": 0.0
    },
    {
        "name": "Pladosa Island",
        "points": [
            62.90287,
            -156.395721,
            65.04839,
            -158.866333
        ],
        "rotation": 0.0
    },
    {
        "name": "Bredenmark Reef",
        "points": [
            56.9864273,
            -164.652786,
            58.57931,
            -166.180649
        ],
        "rotation": 0.0
    },
    {
        "name": "Sherrood Island",
        "points": [
            60.5297852,
            -175.9655,
            63.22795,
            -178.696167
        ],
        "rotation": 0.0
    },
    {
        "name": "Miltown Enclave",
        "points": [
            63.0654068,
            -181.784424,
            65.2759552,
            -184.190018
        ],
        "rotation": 0.0
    },
    {
        "name": "Gravetown Island",
        "points": [
            54.3207664,
            -174.242569,
            56.9864235,
            -176.810715
        ],
        "rotation": 0.0
    },
    {
        "name": "Bigsevain Atoll",
        "points": [
            57.9941673,
            -193.422318,
            61.797596,
            -197.38826
        ],
        "rotation": 0.0
    },
    {
        "name": "The Bare Enclave",
        "points": [
            57.92916,
            -214.357437,
            60.43227,
            -216.828
        ],
        "rotation": 0.0
    },
    {
        "name": "Dignigan Island",
        "points": [
            61.1799545,
            -209.318619,
            64.98338,
            -213.4471
        ],
        "rotation": 0.0
    },
    {
        "name": "Mulmeda Island",
        "points": [
            53.881916,
            -229.668564,
            55.3935356,
            -231.228958
        ],
        "rotation": 0.0
    },
    {
        "name": "Kensinggate Peninsula",
        "points": [
            59.34325,
            -231.570282,
            63.1954422,
            -234.8861
        ],
        "rotation": 0.0
    },
    {
        "name": "Cottlelem Peninsula",
        "points": [
            57.734108,
            -225.328766,
            59.9283943,
            -227.425522
        ],
        "rotation": 0.0
    },
    {
        "name": "Readmeny Reef",
        "points": [
            54.9546776,
            -246.052567,
            57.587822,
            -248.5882
        ],
        "rotation": 27.12566
    },
    {
        "name": "Langisle Holm",
        "points": [
            63.5367737,
            -241.273911,
            64.99963,
            -242.395432
        ],
        "rotation": 0.0
    },
    {
        "name": "Kinichester Reef",
        "points": [
            59.1482,
            -252.976761,
            60.5622978,
            -254.098282
        ],
        "rotation": 0.0
    },
    {
        "name": "Kamcord Enclave",
        "points": [
            61.1962,
            -251.85524,
            62.65906,
            -253.123047
        ],
        "rotation": 0.0
    },
    {
        "name": "Enguay Refuge",
        "points": [
            61.0499153,
            -245.711243,
            64.5607758,
            -249.514664
        ],
        "rotation": 22.62585
    },
    {
        "name": "Buchside Holm",
        "points": [
            54.6133461,
            -240.8838,
            56.27125,
            -242.0541
        ],
        "rotation": 0.0
    },
    {
        "name": "Weswe Isle",
        "points": [
            71.34408,
            -13.4655161,
            72.26875,
            -14.4624262
        ],
        "rotation": 0.0
    },
    {
        "name": "Varencam Ait",
        "points": [
            74.45041,
            -3.40972114,
            75.9818954,
            -4.580007
        ],
        "rotation": 0.0
    },
    {
        "name": "The Jagged Atoll",
        "points": [
            81.2698441,
            -2.28277946,
            82.26676,
            -3.164106
        ],
        "rotation": 0.0
    },
    {
        "name": "Oxhurst Cay",
        "points": [
            82.23786,
            -14.2746,
            83.17698,
            -15.1703739
        ],
        "rotation": 0.0
    },
    {
        "name": "Lapland",
        "points": [
            78.35135,
            -7.26732874,
            81.9055557,
            -10.7492895
        ],
        "rotation": 0.0
    },
    {
        "name": "Clifmar Reef",
        "points": [
            72.3409958,
            -8.75547,
            74.92718,
            -11.3272095
        ],
        "rotation": 0.0
    },
    {
        "name": "Grimriden Holm",
        "points": [
            78.22131,
            -21.09404,
            81.87665,
            -24.7638245
        ],
        "rotation": 69.29388
    },
    {
        "name": "Dedhill Refuge",
        "points": [
            73.1211853,
            -26.3242054,
            76.80541,
            -29.1126671
        ],
        "rotation": 0.0
    },
    {
        "name": "Wrentgueuil Atoll",
        "points": [
            73.79303,
            -39.78972,
            75.22337,
            -41.02502
        ],
        "rotation": 0.0
    },
    {
        "name": "Wesdwell Holm",
        "points": [
            79.25436,
            -40.4073677,
            80.84724,
            -41.90273
        ],
        "rotation": 0.0
    },
    {
        "name": "Petrogar Skerry",
        "points": [
            75.5159454,
            -45.1860352,
            77.49893,
            -46.746418
        ],
        "rotation": 0.0
    },
    {
        "name": "The Rough Reef",
        "points": [
            76.29613,
            -74.24813,
            77.92154,
            -75.97106
        ],
        "rotation": 0.0
    },
    {
        "name": "Stingray Island",
        "points": [
            76.16611,
            -70.34719,
            78.5066757,
            -73.01283
        ],
        "rotation": 0.0
    },
    {
        "name": "Thetnora Island",
        "points": [
            79.87201,
            -94.79316,
            81.1398239,
            -96.09348
        ],
        "rotation": 0.0
    },
    {
        "name": "Oxson Chain",
        "points": [
            72.557724,
            -88.22656,
            74.0530853,
            -89.91696
        ],
        "rotation": 0.0
    },
    {
        "name": "Greencona Cay",
        "points": [
            72.10262,
            -95.18325,
            75.5484543,
            -98.56409
        ],
        "rotation": 0.0
    },
    {
        "name": "Gocook Haven",
        "points": [
            78.5066757,
            -88.8442,
            81.2698441,
            -91.73742
        ],
        "rotation": 0.0
    },
    {
        "name": "Oyster Island",
        "points": [
            77.3689041,
            -110.331955,
            79.31938,
            -111.794807
        ],
        "rotation": 0.0
    },
    {
        "name": "Gravelcouche Skerry",
        "points": [
            73.04535,
            -105.65081,
            74.3131561,
            -107.016144
        ],
        "rotation": 0.0
    },
    {
        "name": "Ferhazy Haven",
        "points": [
            78.34414,
            -112.640015,
            81.7899857,
            -116.020844
        ],
        "rotation": 0.0
    },
    {
        "name": "Calwin Holm",
        "points": [
            75.58096,
            -107.048668,
            77.04382,
            -108.576523
        ],
        "rotation": 0.0
    },
    {
        "name": "Wellingforte Island",
        "points": [
            78.79925,
            -121.839737,
            82.27761,
            -124.700455
        ],
        "rotation": 0.0
    },
    {
        "name": "Rochgamau Island",
        "points": [
            76.81628,
            -130.3569,
            79.57944,
            -133.1851
        ],
        "rotation": 0.0
    },
    {
        "name": "Hannola Reef",
        "points": [
            70.34719,
            -124.5379,
            73.76052,
            -127.3661
        ],
        "rotation": 0.0
    },
    {
        "name": "Wrentcana Island",
        "points": [
            78.7342453,
            -147.48851,
            80.32714,
            -148.983871
        ],
        "rotation": 0.0
    },
    {
        "name": "Fairby Archipelago",
        "points": [
            78.70173,
            -142.48233,
            80.65221,
            -144.205246
        ],
        "rotation": 0.0
    },
    {
        "name": "Broadstead Island",
        "points": [
            75.38592,
            -140.044281,
            77.5964661,
            -142.2223
        ],
        "rotation": 0.0
    },
    {
        "name": "Blackrood Haven",
        "points": [
            77.56395,
            -148.9189,
            79.15684,
            -150.251709
        ],
        "rotation": 0.0
    },
    {
        "name": "Eastdon Cay",
        "points": [
            78.92928,
            -161.8246,
            81.69246,
            -165.205414
        ],
        "rotation": 0.0
    },
    {
        "name": "Claresonee Island",
        "points": [
            75.74351,
            -155.2579,
            78.4091644,
            -157.891052
        ],
        "rotation": 0.0
    },
    {
        "name": "Caraly Isle",
        "points": [
            78.53918,
            -158.671234,
            79.87201,
            -160.036575
        ],
        "rotation": 0.0
    },
    {
        "name": "Boucherbel Enclave",
        "points": [
            75.45093,
            -165.465424,
            78.76674,
            -168.326141
        ],
        "rotation": 0.0
    },
    {
        "name": "Krakens Bay",
        "points": [
            79.6119461,
            -175.185318,
            81.7899857,
            -177.623413
        ],
        "rotation": 0.0
    },
    {
        "name": "Gracestone Island",
        "points": [
            73.5329742,
            -179.183731,
            76.2311249,
            -181.751877
        ],
        "rotation": 0.0
    },
    {
        "name": "Readborough Island",
        "points": [
            79.2218552,
            -213.479614,
            80.78224,
            -214.942474
        ],
        "rotation": 0.0
    },
    {
        "name": "Radmark Skerry",
        "points": [
            71.51748,
            -207.693283,
            75.0283356,
            -211.106628
        ],
        "rotation": 0.0
    },
    {
        "name": "Mahostable Island",
        "points": [
            76.26363,
            -216.40538,
            78.1165848,
            -218.128281
        ],
        "rotation": 0.0
    },
    {
        "name": "The Bland Haven",
        "points": [
            74.94706,
            -224.841141,
            78.2141,
            -228.400757
        ],
        "rotation": 0.0
    },
    {
        "name": "Bayney Atoll",
        "points": [
            77.67773,
            -230.156189,
            80.94477,
            -234.105911
        ],
        "rotation": 0.0
    },
    {
        "name": "The Eroded Haven",
        "points": [
            72.89906,
            -249.904755,
            74.11811,
            -250.88
        ],
        "rotation": 0.0
    },
    {
        "name": "Prescola Island",
        "points": [
            70.02211,
            -248.295624,
            71.24116,
            -249.319626
        ],
        "rotation": 0.0
    },
    {
        "name": "Emerald Peninsula ",
        "points": [
            72.21639,
            -253.07428,
            73.67925,
            -253.952
        ],
        "rotation": 0.0
    },
    {
        "name": "Colipar Peninsula",
        "points": [
            78.1653442,
            -242.2979,
            81.4811554,
            -246.003815
        ],
        "rotation": 23.42431
    },
    {
        "name": "Bloomport Island",
        "points": [
            73.82554,
            -241.566483,
            75.23963,
            -242.49295
        ],
        "rotation": 0.0
    },
    {
        "name": "Bentisle Refuge",
        "points": [
            77.04382,
            -249.17334,
            80.4083939,
            -252.781708
        ],
        "rotation": 33.68093
    },
    {
        "name": "Battlena Island",
        "points": [
            71.92382,
            -245.808762,
            73.5817261,
            -247.369141
        ],
        "rotation": 0.0
    },
    {
        "name": "The Gloomy Isle",
        "points": [
            87.69919,
            -3.95874429,
            88.58051,
            -4.68114376
        ],
        "rotation": 0.0
    },
    {
        "name": "Susfair Island",
        "points": [
            97.52381,
            -13.8845015,
            98.6074,
            -14.8091736
        ],
        "rotation": 0.0
    },
    {
        "name": "Shawgan Reef",
        "points": [
            90.89219,
            -6.703859,
            93.86847,
            -9.723486
        ],
        "rotation": 0.0
    },
    {
        "name": "Okoside Skerry",
        "points": [
            96.67138,
            -1.47369277,
            97.84167,
            -2.383915
        ],
        "rotation": 0.0
    },
    {
        "name": "Coham Peninsula",
        "points": [
            97.84167,
            -2.55729055,
            98.9686,
            -3.59754443
        ],
        "rotation": 0.0
    },
    {
        "name": "Carignola Refuge",
        "points": [
            88.3349,
            -12.7720032,
            89.89528,
            -14.2023516
        ],
        "rotation": 0.0
    },
    {
        "name": "Boxworth Isle",
        "points": [
            97.1626053,
            -7.52739334,
            99.64766,
            -9.997996
        ],
        "rotation": 0.0
    },
    {
        "name": "Windsons Isle",
        "points": [
            97.85611,
            -28.52029,
            99.5176239,
            -30.1529121
        ],
        "rotation": 0.0
    },
    {
        "name": "Hatgami Cay",
        "points": [
            91.31118,
            -27.35001,
            92.72707,
            -28.7225723
        ],
        "rotation": 0.0
    },
    {
        "name": "Bosbridge Key",
        "points": [
            95.717804,
            -23.53574,
            99.34425,
            -27.017704
        ],
        "rotation": 33.03857
    },
    {
        "name": "Framingris Holm",
        "points": [
            91.86744,
            -40.5374031,
            96.28851,
            -45.31607
        ],
        "rotation": 0.0
    },
    {
        "name": "Clarede Enclave",
        "points": [
            88.6166458,
            -37.254097,
            91.18476,
            -39.8872375
        ],
        "rotation": 0.0
    },
    {
        "name": "Barkriden Island",
        "points": [
            97.2962646,
            -46.6163864,
            99.63683,
            -49.2820435
        ],
        "rotation": 0.0
    },
    {
        "name": "Mahobourg Refuge",
        "points": [
            94.1755142,
            -55.45856,
            98.98668,
            -59.58706
        ],
        "rotation": 0.0
    },
    {
        "name": "Ellingsort Holm",
        "points": [
            87.96649,
            -59.5545464,
            89.65689,
            -61.2449532
        ],
        "rotation": 0.0
    },
    {
        "name": "Brimside Cay",
        "points": [
            95.57335,
            -62.8378563,
            96.87367,
            -64.13817
        ],
        "rotation": 0.0
    },
    {
        "name": "Witbridge Haven",
        "points": [
            96.90618,
            -79.2218552,
            99.57182,
            -82.05005
        ],
        "rotation": 0.0
    },
    {
        "name": "Puthazy Enclave",
        "points": [
            90.4696045,
            -76.9463,
            93.3303,
            -79.9370346
        ],
        "rotation": 0.0
    },
    {
        "name": "Exroy Peninsula",
        "points": [
            95.89843,
            -74.0205841,
            97.10121,
            -75.19087
        ],
        "rotation": 0.0
    },
    {
        "name": "Whitebiens Holm",
        "points": [
            89.5918961,
            -89.00675,
            92.51761,
            -91.67239
        ],
        "rotation": 0.0
    },
    {
        "name": "Radtois Refuge",
        "points": [
            94.143,
            -94.27303,
            97.19874,
            -97.23125
        ],
        "rotation": 0.0
    },
    {
        "name": "Eplow Key",
        "points": [
            96.1584854,
            -90.33957,
            97.68637,
            -91.7374039
        ],
        "rotation": 0.0
    },
    {
        "name": "Wasanora Island",
        "points": [
            95.44332,
            -105.943382,
            96.71113,
            -107.308716
        ],
        "rotation": 0.0
    },
    {
        "name": "Jamstino Enclave",
        "points": [
            93.3303,
            -109.714287,
            97.71887,
            -114.460449
        ],
        "rotation": 0.0
    },
    {
        "name": "Hillsjour Ait",
        "points": [
            88.87672,
            -106.8211,
            91.41233,
            -109.226669
        ],
        "rotation": 0.0
    },
    {
        "name": "Chesterlams Island",
        "points": [
            89.68942,
            -124.733,
            96.84117,
            -132.50238
        ],
        "rotation": 70.31269
    },
    {
        "name": "Smison Archipelago",
        "points": [
            90.24205,
            -140.954483,
            92.90769,
            -143.457611
        ],
        "rotation": 0.0
    },
    {
        "name": "Readlow Island",
        "points": [
            93.72039,
            -145.083008,
            97.91392,
            -148.983948
        ],
        "rotation": 0.0
    },
    {
        "name": "Menberry Island",
        "points": [
            89.68939,
            -163.28746,
            91.89994,
            -165.5955
        ],
        "rotation": 0.0
    },
    {
        "name": "Kinitonas Key",
        "points": [
            94.988205,
            -160.069168,
            97.6213455,
            -163.254929
        ],
        "rotation": 0.0
    },
    {
        "name": "Colisack Island",
        "points": [
            90.17703,
            -157.1434,
            91.57487,
            -158.411209
        ],
        "rotation": 0.0
    },
    {
        "name": "Portsraine Skerry",
        "points": [
            95.89843,
            -176.615616,
            99.31176,
            -180.12648
        ],
        "rotation": 0.0
    },
    {
        "name": "Englebo Reef",
        "points": [
            91.2823,
            -175.152756,
            92.38758,
            -176.128
        ],
        "rotation": 0.0
    },
    {
        "name": "Chanhurst Island",
        "points": [
            90.63214,
            -180.549072,
            93.492836,
            -183.312256
        ],
        "rotation": 0.0
    },
    {
        "name": "Rutliers Skerry",
        "points": [
            98.72662,
            -192.707077,
            99.76688,
            -193.747345
        ],
        "rotation": 0.0
    },
    {
        "name": "Primeval Island",
        "points": [
            91.31481,
            -189.521255,
            92.87519,
            -191.114166
        ],
        "rotation": 0.0
    },
    {
        "name": "Evercaster Island",
        "points": [
            97.36128,
            -199.468781,
            98.75912,
            -200.899124
        ],
        "rotation": 0.0
    },
    {
        "name": "Epdale Reef",
        "points": [
            87.93397,
            -193.519791,
            92.64763,
            -198.200928
        ],
        "rotation": 0.0
    },
    {
        "name": "Effinggate Holm",
        "points": [
            94.37056,
            -201.1592,
            95.63837,
            -202.524521
        ],
        "rotation": 0.0
    },
    {
        "name": "Duparson Island",
        "points": [
            95.11825,
            -208.375854,
            98.98669,
            -212.829483
        ],
        "rotation": 0.0
    },
    {
        "name": "Brisnear Island",
        "points": [
            89.2343,
            -215.56015,
            91.83494,
            -217.835663
        ],
        "rotation": 0.0
    },
    {
        "name": "Hillslam Island",
        "points": [
            89.91698,
            -223.963425,
            91.76993,
            -226.157715
        ],
        "rotation": 0.0
    },
    {
        "name": "Haverduff Peninsula",
        "points": [
            92.89146,
            -225.5238,
            96.5486,
            -228.790863
        ],
        "rotation": 0.0
    },
    {
        "name": "Dolgan Refuge",
        "points": [
            96.25603,
            -229.668564,
            99.81564,
            -233.7158
        ],
        "rotation": 35.47195
    },
    {
        "name": "Southshall Ait",
        "points": [
            90.06326,
            -241.859055,
            92.9402161,
            -244.492188
        ],
        "rotation": 29.27525
    },
    {
        "name": "Monkware Chain",
        "points": [
            87.86898,
            -246.97905,
            89.08803,
            -247.905518
        ],
        "rotation": 0.0
    },
    {
        "name": "Hamgough Key",
        "points": [
            96.6948853,
            -245.321136,
            98.06021,
            -246.735245
        ],
        "rotation": 0.0
    },
    {
        "name": "Chiver Skerry",
        "points": [
            98.01145,
            -253.610672,
            99.3767853,
            -254.53714
        ],
        "rotation": 0.0
    },
    {
        "name": "Bloomsrey Ait",
        "points": [
            91.67241,
            -248.783234,
            95.2807846,
            -252.147812
        ],
        "rotation": 0.0
    },
    {
        "name": "Barrpar Peninsula",
        "points": [
            97.71888,
            -241.176376,
            99.13298,
            -242.590469
        ],
        "rotation": 0.0
    },
    {
        "name": "Wakemeda Islet",
        "points": [
            111.639481,
            -9.969099,
            114.153419,
            -12.32412
        ],
        "rotation": 0.0
    },
    {
        "name": "Montview Archipelago",
        "points": [
            112.939789,
            -13.3499317,
            113.503281,
            -14.5057688
        ],
        "rotation": 0.0
    },
    {
        "name": "Limingmota Enclave",
        "points": [
            106.756081,
            -5.66360474,
            110.512558,
            -9.261149
        ],
        "rotation": 48.62445
    },
    {
        "name": "Falvista Holm",
        "points": [
            114.514626,
            -4.392184,
            115.699348,
            -5.576917
        ],
        "rotation": 0.0
    },
    {
        "name": "Ellishurst Haven",
        "points": [
            105.397934,
            -13.349925,
            106.337059,
            -14.1301155
        ],
        "rotation": 0.0
    },
    {
        "name": "Wintercier Holm",
        "points": [
            109.68898,
            -22.5532818,
            112.217384,
            -24.9949875
        ],
        "rotation": 0.0
    },
    {
        "name": "The Autmn Isle",
        "points": [
            106.7416,
            -23.7958088,
            108.099716,
            -24.9949875
        ],
        "rotation": 0.0
    },
    {
        "name": "Leily Isle",
        "points": [
            112.145149,
            -27.4222546,
            115.887161,
            -30.9620075
        ],
        "rotation": 21.15366
    },
    {
        "name": "Eswood Atoll",
        "points": [
            109.031647,
            -40.69994,
            112.9976,
            -44.2107964
        ],
        "rotation": 0.0
    },
    {
        "name": "The Roaring Cay",
        "points": [
            107.016144,
            -55.13347,
            108.316475,
            -56.271244
        ],
        "rotation": 0.0
    },
    {
        "name": "Picsons Peninsula",
        "points": [
            110.527,
            -56.82388,
            113.257668,
            -59.26198
        ],
        "rotation": 0.0
    },
    {
        "name": "Grandale Haven",
        "points": [
            112.705048,
            -61.505024,
            116.085861,
            -65.0809
        ],
        "rotation": 0.0
    },
    {
        "name": "Turbulent Holm",
        "points": [
            106.4635,
            -71.87506,
            109.194168,
            -74.8983
        ],
        "rotation": 0.0
    },
    {
        "name": "Fountain Island",
        "points": [
            112.282433,
            -80.3271255,
            115.045616,
            -82.53766
        ],
        "rotation": 0.0
    },
    {
        "name": "Depraved Isle",
        "points": [
            111.3722,
            -74.86579,
            113.712776,
            -77.43392
        ],
        "rotation": 0.0
    },
    {
        "name": "Stingray Ait",
        "points": [
            106.756081,
            -89.23431,
            110.169418,
            -92.77767
        ],
        "rotation": 0.0
    },
    {
        "name": "Berthierterel Key",
        "points": [
            111.567238,
            -94.2405243,
            115.695763,
            -98.14148
        ],
        "rotation": 39.75877
    },
    {
        "name": "Triumphant Holm",
        "points": [
            111.85981,
            -128.861542,
            115.110619,
            -132.437424
        ],
        "rotation": 0.0
    },
    {
        "name": "Shutterland Island",
        "points": [
            105.000656,
            -127.691254,
            107.861343,
            -130.584473
        ],
        "rotation": 0.0
    },
    {
        "name": "Chammouth Atoll",
        "points": [
            109.259178,
            -122.359955,
            111.957344,
            -124.895576
        ],
        "rotation": 57.16141
    },
    {
        "name": "The Frozen Reef",
        "points": [
            106.528526,
            -142.319824,
            109.324188,
            -145.01799
        ],
        "rotation": 0.0
    },
    {
        "name": "Petroden Haven",
        "points": [
            112.477478,
            -145.082947,
            115.110619,
            -147.846146
        ],
        "rotation": 0.0
    },
    {
        "name": "Salisroy Peninsula",
        "points": [
            111.047134,
            -160.101624,
            114.005348,
            -162.474716
        ],
        "rotation": 0.0
    },
    {
        "name": "Pinfell Island",
        "points": [
            113.095146,
            -158.053619,
            114.623,
            -159.353958
        ],
        "rotation": 0.0
    },
    {
        "name": "Legami Chain",
        "points": [
            105.325729,
            -163.059814,
            108.251442,
            -166.083054
        ],
        "rotation": 0.0
    },
    {
        "name": "Suflan Island",
        "points": [
            106.008385,
            -180.809219,
            108.771568,
            -183.669937
        ],
        "rotation": 0.0
    },
    {
        "name": "Sanctum Island",
        "points": [
            109.3242,
            -177.590927,
            112.15239,
            -181.134308
        ],
        "rotation": 0.0
    },
    {
        "name": "Rosbourg Holm",
        "points": [
            112.444962,
            -175.412857,
            113.87532,
            -177.005768
        ],
        "rotation": 0.0
    },
    {
        "name": "Sinkasing Island",
        "points": [
            108.739075,
            -194.462479,
            110.006882,
            -195.8278
        ],
        "rotation": 0.0
    },
    {
        "name": "Rossraine Island",
        "points": [
            112.786308,
            -194.072388,
            115.078117,
            -196.608
        ],
        "rotation": 0.0
    },
    {
        "name": "Hulgan Enclave",
        "points": [
            110.39698,
            -198.119614,
            112.737549,
            -200.557709
        ],
        "rotation": 0.0
    },
    {
        "name": "Trenmeuse Island",
        "points": [
            106.934883,
            -214.454865,
            108.20269,
            -215.868958
        ],
        "rotation": 0.0
    },
    {
        "name": "Stelden Island",
        "points": [
            114.151642,
            -211.236572,
            117.22364,
            -214.454865
        ],
        "rotation": 0.0
    },
    {
        "name": "Elmguay Ait",
        "points": [
            107.4225,
            -207.4819,
            109.324211,
            -209.6762
        ],
        "rotation": 0.0
    },
    {
        "name": "Cliffcolm Island",
        "points": [
            104.252975,
            -217.185516,
            106.30098,
            -219.184769
        ],
        "rotation": 0.0
    },
    {
        "name": "The Terraced Enclave",
        "points": [
            110.640785,
            -226.816,
            111.908592,
            -228.010666
        ],
        "rotation": 0.0
    },
    {
        "name": "Stelgue Island",
        "points": [
            111.469742,
            -227.913147,
            114.54174,
            -230.7901
        ],
        "rotation": 0.0
    },
    {
        "name": "Durmore Island",
        "points": [
            111.5185,
            -232.155426,
            114.785545,
            -236.105148
        ],
        "rotation": -24.78671
    },
    {
        "name": "Thetheller Refuge",
        "points": [
            105.374504,
            -250.782471,
            106.983643,
            -252.147812
        ],
        "rotation": 0.0
    },
    {
        "name": "The Rolling Enclave",
        "points": [
            114.395454,
            -242.49295,
            115.663261,
            -243.370667
        ],
        "rotation": 0.0
    },
    {
        "name": "Rotheline Peninsula",
        "points": [
            111.713547,
            -248.5882,
            114.834312,
            -252.099045
        ],
        "rotation": 44.7797
    },
    {
        "name": "Nottingbour Island",
        "points": [
            115.760788,
            -244.540955,
            117.028595,
            -245.418671
        ],
        "rotation": 0.0
    },
    {
        "name": "Biengate Ait",
        "points": [
            107.227455,
            -242.688,
            110.835831,
            -245.857529
        ],
        "rotation": -50.01815
    },
    {
        "name": "Yorkmack Skerry",
        "points": [
            132.70459,
            -12.8153543,
            133.687057,
            -13.7544718
        ],
        "rotation": 0.0
    },
    {
        "name": "Troheim Isle",
        "points": [
            126.073036,
            -10.0268927,
            128.5292,
            -12.2374306
        ],
        "rotation": 0.0
    },
    {
        "name": "The Teal Isle",
        "points": [
            127.647842,
            -5.02789354,
            130.927521,
            -8.264239
        ],
        "rotation": 72.04572
    },
    {
        "name": "Terrengonie Isle",
        "points": [
            122.114319,
            -14.2745962,
            122.952286,
            -15.1992683
        ],
        "rotation": 0.0
    },
    {
        "name": "Romdover Haven",
        "points": [
            123.544624,
            -2.268332,
            124.989441,
            -3.64088941
        ],
        "rotation": 0.0
    },
    {
        "name": "Lamkasing Cay",
        "points": [
            122.143158,
            -8.322031,
            123.111183,
            -9.261149
        ],
        "rotation": 0.0
    },
    {
        "name": "Wellingtawa Ait",
        "points": [
            127.214363,
            -28.70812,
            129.09259,
            -30.5863552
        ],
        "rotation": 0.0
    },
    {
        "name": "Ridgecana Islet",
        "points": [
            123.559105,
            -20.9784546,
            127.026611,
            -24.6626873
        ],
        "rotation": -21.88487
    },
    {
        "name": "Gracewood Peninsula",
        "points": [
            128.977036,
            -23.91139,
            131.606583,
            -26.2230644
        ],
        "rotation": -9.462318
    },
    {
        "name": "Wapedeen Island",
        "points": [
            128.536377,
            -40.89499,
            131.072,
            -43.52813
        ],
        "rotation": 0.0
    },
    {
        "name": "The Harmonious Reef",
        "points": [
            130.584427,
            -44.4383621,
            132.014755,
            -45.8687134
        ],
        "rotation": 0.0
    },
    {
        "name": "Oakpon Refuge",
        "points": [
            126.130836,
            -39.10705,
            128.178833,
            -40.9274979
        ],
        "rotation": 0.0
    },
    {
        "name": "Gandale Haven",
        "points": [
            123.85524,
            -37.48165,
            125.513145,
            -39.042038
        ],
        "rotation": 0.0
    },
    {
        "name": "Brilliant Islands",
        "points": [
            131.429626,
            -47.8516922,
            132.72995,
            -48.9244537
        ],
        "rotation": 0.0
    },
    {
        "name": "The Holten Haven",
        "points": [
            123.497688,
            -54.9384155,
            126.130836,
            -57.57156
        ],
        "rotation": 0.0
    },
    {
        "name": "Marlgue Isles",
        "points": [
            130.747009,
            -54.7433739,
            133.1851,
            -57.14896
        ],
        "rotation": 0.0
    },
    {
        "name": "Autumncam Cay",
        "points": [
            126.293335,
            -62.1551781,
            128.926483,
            -64.6582947
        ],
        "rotation": 0.0
    },
    {
        "name": "The Blue Enclave",
        "points": [
            131.4621,
            -71.90757,
            133.315048,
            -73.59798
        ],
        "rotation": 0.0
    },
    {
        "name": "Derstable Chain",
        "points": [
            124.862976,
            -73.20788,
            129.869217,
            -77.30388
        ],
        "rotation": 0.0
    },
    {
        "name": "Bonabalt Reef",
        "points": [
            122.61998,
            -79.8395157,
            125.545692,
            -82.76523
        ],
        "rotation": 0.0
    },
    {
        "name": "Castois Island",
        "points": [
            126.03331,
            -91.76993,
            129.739212,
            -95.3132858
        ],
        "rotation": 0.0
    },
    {
        "name": "Traywaki Island",
        "points": [
            128.959061,
            -105.748337,
            131.9498,
            -108.316475
        ],
        "rotation": 0.0
    },
    {
        "name": "Surfil Peninsula",
        "points": [
            123.367569,
            -110.006866,
            126.325806,
            -112.900085
        ],
        "rotation": 0.0
    },
    {
        "name": "Castois Island",
        "points": [
            131.267044,
            -112.737526,
            132.632385,
            -114.135384
        ],
        "rotation": 0.0
    },
    {
        "name": "Varenland Island",
        "points": [
            129.186615,
            -141.214478,
            131.819763,
            -143.750092
        ],
        "rotation": 0.0
    },
    {
        "name": "The Jade Holm",
        "points": [
            124.668015,
            -146.96846,
            126.683517,
            -148.658875
        ],
        "rotation": 0.0
    },
    {
        "name": "Clarenson Haven",
        "points": [
            126.228355,
            -162.0521,
            128.4714,
            -164.132614
        ],
        "rotation": 0.0
    },
    {
        "name": "Carleton Island",
        "points": [
            128.341339,
            -157.20845,
            131.9497,
            -160.751831
        ],
        "rotation": -21.15664
    },
    {
        "name": "Tecumlinet Skerry",
        "points": [
            128.861542,
            -179.899,
            131.85228,
            -182.824722
        ],
        "rotation": 0.0
    },
    {
        "name": "Boisliers Island",
        "points": [
            124.115334,
            -174.86026,
            126.488426,
            -177.135834
        ],
        "rotation": 0.0
    },
    {
        "name": "Donnahead Isle",
        "points": [
            124.684189,
            -197.04686,
            126.000763,
            -198.2659
        ],
        "rotation": 0.0
    },
    {
        "name": "Carighaze Island",
        "points": [
            129.804184,
            -197.875809,
            132.291046,
            -200.118851
        ],
        "rotation": 0.0
    },
    {
        "name": "Baxris Bay",
        "points": [
            128.438858,
            -192.316956,
            130.828186,
            -194.657516
        ],
        "rotation": 0.0
    },
    {
        "name": "Oroston Island",
        "points": [
            128.877716,
            -228.59581,
            132.339813,
            -232.399231
        ],
        "rotation": 36.05384
    },
    {
        "name": "Minilam Refuge",
        "points": [
            127.658669,
            -223.670853,
            129.4141,
            -225.572571
        ],
        "rotation": 0.0
    },
    {
        "name": "Hafsay Island",
        "points": [
            123.270096,
            -231.27771,
            127.122284,
            -235.276184
        ],
        "rotation": 33.09757
    },
    {
        "name": "Eastmer Island",
        "points": [
            129.511612,
            -248.0518,
            132.7299,
            -251.5139
        ],
        "rotation": 0.0
    },
    {
        "name": "Corcord Island",
        "points": [
            123.904,
            -243.712,
            127.658669,
            -247.271622
        ],
        "rotation": 0.0
    },
    {
        "name": "Chesgueuil Cay",
        "points": [
            132.534851,
            -242.688,
            134.095245,
            -243.858292
        ],
        "rotation": 0.0
    },
    {
        "name": "Carlcam Isle",
        "points": [
            122.88,
            -251.318863,
            124.58667,
            -252.830475
        ],
        "rotation": 0.0
    },
    {
        "name": "Tamboia Island",
        "points": [
            137.862488,
            -2.70177054,
            139.466217,
            -4.21880674
        ],
        "rotation": 0.0
    },
    {
        "name": "Stratberg Cay",
        "points": [
            145.548828,
            -3.06297064,
            149.435349,
            -6.57382774
        ],
        "rotation": -10.17184
    },
    {
        "name": "Penby Cay",
        "points": [
            145.852325,
            -7.6574254,
            146.4158,
            -8.89995
        ],
        "rotation": 0.0
    },
    {
        "name": "Glassard Reef",
        "points": [
            150.519028,
            -13.451067,
            151.50148,
            -14.3323927
        ],
        "rotation": 0.0
    },
    {
        "name": "Elmminster Archipelago",
        "points": [
            143.5262,
            -11.0238047,
            146.5747,
            -14.3034945
        ],
        "rotation": 0.0
    },
    {
        "name": "Berve Reef",
        "points": [
            138.787231,
            -10.5036755,
            139.6252,
            -11.4283447
        ],
        "rotation": 0.0
    },
    {
        "name": "The Wondering Atoll",
        "points": [
            147.109222,
            -21.4407825,
            150.706787,
            -25.1394653
        ],
        "rotation": 32.00465
    },
    {
        "name": "Neeval Reef",
        "points": [
            141.503372,
            -19.9093075,
            143.7428,
            -22.1920872
        ],
        "rotation": 0.0
    },
    {
        "name": "Millertown Island",
        "points": [
            143.3094,
            -28.3902664,
            147.152573,
            -31.6844
        ],
        "rotation": 0.0
    },
    {
        "name": "The Yelling Isle",
        "points": [
            142.5799,
            -53.1179771,
            146.805923,
            -57.279
        ],
        "rotation": 0.0
    },
    {
        "name": "Sunderning Reef",
        "points": [
            139.166473,
            -62.8378563,
            141.604568,
            -65.17843
        ],
        "rotation": 0.0
    },
    {
        "name": "Ridgelinet Ait",
        "points": [
            148.788864,
            -58.3192368,
            150.9669,
            -60.8223572
        ],
        "rotation": 0.0
    },
    {
        "name": "The Thundering Haven",
        "points": [
            145.928162,
            -73.6304855,
            148.56131,
            -75.97106
        ],
        "rotation": 0.0
    },
    {
        "name": "Tecumlinet Skerry",
        "points": [
            141.1495,
            -76.62122,
            143.977692,
            -78.9943
        ],
        "rotation": 0.0
    },
    {
        "name": "Shipwreck Island",
        "points": [
            148.626328,
            -79.09182,
            150.836853,
            -81.65994
        ],
        "rotation": 0.0
    },
    {
        "name": "Woodgeo Enclave",
        "points": [
            142.709885,
            -88.68166,
            145.63559,
            -91.44484
        ],
        "rotation": 0.0
    },
    {
        "name": "The Severed Island",
        "points": [
            142.352264,
            -93.23277,
            145.8306,
            -96.25601
        ],
        "rotation": 0.0
    },
    {
        "name": "Lashval Island",
        "points": [
            147.878677,
            -90.53462,
            149.309036,
            -91.93245
        ],
        "rotation": 0.0
    },
    {
        "name": "Williers Cay",
        "points": [
            144.790436,
            -111.7298,
            148.398819,
            -115.4682
        ],
        "rotation": 0.0
    },
    {
        "name": "The Turtle Reef",
        "points": [
            146.7409,
            -105.033157,
            149.374054,
            -108.023895
        ],
        "rotation": 0.0
    },
    {
        "name": "Berestos Enclave",
        "points": [
            141.312042,
            -106.691063,
            143.912674,
            -109.2917
        ],
        "rotation": 0.0
    },
    {
        "name": "Weykasing Cay",
        "points": [
            140.791885,
            -122.847527,
            143.197449,
            -125.318146
        ],
        "rotation": 0.0
    },
    {
        "name": "Chamto Island",
        "points": [
            146.415741,
            -131.62468,
            148.593781,
            -133.705185
        ],
        "rotation": 0.0
    },
    {
        "name": "Berestos Enclave",
        "points": [
            143.91272,
            -125.64325,
            147.423569,
            -129.219131
        ],
        "rotation": 0.0
    },
    {
        "name": "Walltawa Enclave",
        "points": [
            146.188278,
            -146.805832,
            148.7564,
            -149.178925
        ],
        "rotation": 0.0
    },
    {
        "name": "Shrewdale Island",
        "points": [
            146.415787,
            -140.40181,
            148.756363,
            -142.872437
        ],
        "rotation": 0.0
    },
    {
        "name": "Langcaster Island",
        "points": [
            139.751617,
            -141.799667,
            143.164948,
            -146.0582
        ],
        "rotation": -12.03357
    },
    {
        "name": "Rimourath Island",
        "points": [
            140.044281,
            -157.435944,
            142.904968,
            -159.90654
        ],
        "rotation": 0.0
    },
    {
        "name": "Mulwall Island",
        "points": [
            147.358475,
            -164.3277,
            149.894089,
            -166.505737
        ],
        "rotation": 0.0
    },
    {
        "name": "Galden Skerry",
        "points": [
            144.497864,
            -161.304382,
            145.765671,
            -162.47467
        ],
        "rotation": 0.0
    },
    {
        "name": "Rockingfair Island",
        "points": [
            141.3445,
            -175.542908,
            144.1077,
            -178.241043
        ],
        "rotation": 0.0
    },
    {
        "name": "Amesbiens Island",
        "points": [
            146.773331,
            -180.549072,
            149.30896,
            -182.824646
        ],
        "rotation": 0.0
    },
    {
        "name": "The Heartless Atoll",
        "points": [
            149.2602,
            -192.512,
            150.528,
            -194.072388
        ],
        "rotation": 0.0
    },
    {
        "name": "Cottletry Cay",
        "points": [
            141.799622,
            -194.51123,
            145.066666,
            -198.168381
        ],
        "rotation": 0.0
    },
    {
        "name": "Berthierfell Key",
        "points": [
            149.1139,
            -198.704758,
            151.600769,
            -201.19162
        ],
        "rotation": 0.0
    },
    {
        "name": "Livernola Chain",
        "points": [
            146.87085,
            -209.724945,
            148.187424,
            -210.992767
        ],
        "rotation": 0.0
    },
    {
        "name": "Itubrook Haven",
        "points": [
            143.45752,
            -207.091812,
            146.188187,
            -209.5299
        ],
        "rotation": 0.0
    },
    {
        "name": "Farmingburn Holm",
        "points": [
            138.24,
            -211.919235,
            140.824387,
            -214.064758
        ],
        "rotation": 0.0
    },
    {
        "name": "Coroworth Island",
        "points": [
            148.041138,
            -217.3318,
            149.30896,
            -218.794662
        ],
        "rotation": 0.0
    },
    {
        "name": "Wacord Isle",
        "points": [
            141.653336,
            -226.011429,
            142.96991,
            -227.523041
        ],
        "rotation": 0.0
    },
    {
        "name": "Torchester Cay",
        "points": [
            144.091431,
            -228.547043,
            147.017136,
            -231.326477
        ],
        "rotation": 0.0
    },
    {
        "name": "Berthierforte Ait",
        "points": [
            144.335236,
            -231.180191,
            148.0899,
            -234.93486
        ],
        "rotation": 0.0
    },
    {
        "name": "Trayder Island",
        "points": [
            150.235428,
            -245.76,
            151.600769,
            -246.686478
        ],
        "rotation": 0.0
    },
    {
        "name": "Roseville Atoll",
        "points": [
            145.895615,
            -248.636948,
            149.406479,
            -252.58667
        ],
        "rotation": 0.0
    },
    {
        "name": "Rosby Isle",
        "points": [
            143.798859,
            -242.102859,
            147.699814,
            -246.003815
        ],
        "rotation": -45.18305
    },
    {
        "name": "Flemsonee Reef",
        "points": [
            139.21524,
            -240.737518,
            140.6781,
            -241.566483
        ],
        "rotation": 0.0
    },
    {
        "name": "Calcastle Island",
        "points": [
            140.092957,
            -246.101334,
            141.604568,
            -247.417908
        ],
        "rotation": 0.0
    },
    {
        "name": "Briscona Atoll",
        "points": [
            138.922668,
            -253.025528,
            140.141708,
            -254.04953
        ],
        "rotation": 0.0
    },
    {
        "name": "Windleche Atoll",
        "points": [
            166.4551,
            -12.930932,
            168.073257,
            -14.2601452
        ],
        "rotation": 0.0
    },
    {
        "name": "The Rolling Isle",
        "points": [
            156.182571,
            -5.678064,
            157.569565,
            -6.660526
        ],
        "rotation": 0.0
    },
    {
        "name": "The Iron Atoll",
        "points": [
            156.6883,
            -2.48505116,
            158.0464,
            -3.98764086
        ],
        "rotation": 0.0
    },
    {
        "name": "The Homeless Atoll",
        "points": [
            158.580887,
            -10.633707,
            161.2682,
            -13.17655
        ],
        "rotation": 29.88429
    },
    {
        "name": "Fordboro Cay",
        "points": [
            163.088745,
            -5.21571732,
            165.9639,
            -8.582094
        ],
        "rotation": 0.0
    },
    {
        "name": "Chanoque Isles",
        "points": [
            156.572662,
            -13.8267059,
            157.56958,
            -14.7513781
        ],
        "rotation": 0.0
    },
    {
        "name": "Templerath Ait",
        "points": [
            158.205276,
            -18.6089821,
            162.178482,
            -22.1198387
        ],
        "rotation": -30.222
    },
    {
        "name": "Sufrane Refuge",
        "points": [
            161.817261,
            -23.9113865,
            163.3632,
            -25.47177
        ],
        "rotation": 0.0
    },
    {
        "name": "Hampnan Ait",
        "points": [
            163.565414,
            -29.3149357,
            165.64595,
            -31.1209354
        ],
        "rotation": 0.0
    },
    {
        "name": "Englemore Archipelago",
        "points": [
            156.363266,
            -40.8949966,
            159.646545,
            -44.14579
        ],
        "rotation": 0.0
    },
    {
        "name": "Cudmore Cay",
        "points": [
            161.792,
            -46.1287727,
            164.035049,
            -48.3718224
        ],
        "rotation": 0.0
    },
    {
        "name": "Chacouche Reef",
        "points": [
            164.165115,
            -35.6287041,
            166.700745,
            -38.1318169
        ],
        "rotation": 0.0
    },
    {
        "name": "The Bronze Enclave",
        "points": [
            163.05986,
            -61.407505,
            165.075333,
            -63.0979233
        ],
        "rotation": 0.0
    },
    {
        "name": "Morinster Island",
        "points": [
            163.092316,
            -54.64586,
            166.6357,
            -58.28674
        ],
        "rotation": 0.0
    },
    {
        "name": "Goose Trap",
        "points": [
            157.663574,
            -52.89043,
            157.663574,
            -52.89043
        ],
        "rotation": 0.0
    },
    {
        "name": "Ardown Peninsula",
        "points": [
            157.500946,
            -56.8563881,
            159.256378,
            -58.25423
        ],
        "rotation": 0.0
    },
    {
        "name": "Rockingfair Island",
        "points": [
            163.352432,
            -78.2141,
            164.685242,
            -79.38439
        ],
        "rotation": 0.0
    },
    {
        "name": "Mulwall Island",
        "points": [
            164.3277,
            -74.3131561,
            167.676025,
            -77.75899
        ],
        "rotation": 0.0
    },
    {
        "name": "Amesbiens Atoll",
        "points": [
            157.370911,
            -71.5825,
            159.971558,
            -73.89056
        ],
        "rotation": 69.38905
    },
    {
        "name": "The Windy Cay",
        "points": [
            158.638733,
            -90.53462,
            162.117081,
            -93.5903549
        ],
        "rotation": 0.0
    },
    {
        "name": "Petrotawa Skerry",
        "points": [
            164.6202,
            -95.11824,
            167.350861,
            -97.78388
        ],
        "rotation": 0.0
    },
    {
        "name": "Stonelisle",
        "points": [
            166.245667,
            -110.39695,
            167.415955,
            -111.404716
        ],
        "rotation": 0.0
    },
    {
        "name": "Rimsonee Reef",
        "points": [
            158.573792,
            -107.308716,
            161.141937,
            -109.779335
        ],
        "rotation": 0.0
    },
    {
        "name": "Causaside Refuge",
        "points": [
            163.28746,
            -111.534752,
            166.180649,
            -114.460464
        ],
        "rotation": 0.0
    },
    {
        "name": "The Green Islet",
        "points": [
            157.9886,
            -124.733,
            164.392685,
            -131.7222
        ],
        "rotation": 55.15182
    },
    {
        "name": "Rimouwich Atoll",
        "points": [
            156.005585,
            -130.779434,
            158.5087,
            -133.60762
        ],
        "rotation": 0.0
    },
    {
        "name": "Halgrave Reef",
        "points": [
            163.774979,
            -122.229836,
            167.318359,
            -126.065788
        ],
        "rotation": 0.0
    },
    {
        "name": "Readborn Reef",
        "points": [
            162.734756,
            -164.8153,
            165.985565,
            -167.285934
        ],
        "rotation": 0.0
    },
    {
        "name": "Newinglodge Refuge",
        "points": [
            159.451431,
            -156.330719,
            163.937531,
            -160.784286
        ],
        "rotation": 48.76289
    },
    {
        "name": "Sanguine Island",
        "points": [
            164.002625,
            -178.468643,
            166.830811,
            -181.134308
        ],
        "rotation": 0.0
    },
    {
        "name": "Lavalsomin Reef",
        "points": [
            160.914337,
            -173.364914,
            162.149612,
            -174.632721
        ],
        "rotation": 0.0
    },
    {
        "name": "Heartless Island",
        "points": [
            156.4607,
            -178.371124,
            160.004074,
            -182.207077
        ],
        "rotation": 42.38985
    },
    {
        "name": "Vently Holm",
        "points": [
            157.208374,
            -198.50972,
            158.81752,
            -199.875046
        ],
        "rotation": 0.0
    },
    {
        "name": "Oxwater Island",
        "points": [
            160.1341,
            -193.974854,
            164.4739,
            -198.412186
        ],
        "rotation": -24.94145
    },
    {
        "name": "Gatinigan Island",
        "points": [
            166.521912,
            -192.950851,
            168.228577,
            -194.462479
        ],
        "rotation": 0.0
    },
    {
        "name": "Wakewe Cay",
        "points": [
            156.964569,
            -208.457138,
            161.060577,
            -212.845718
        ],
        "rotation": 0.0
    },
    {
        "name": "Forlinet Haven",
        "points": [
            165.6442,
            -216.941711,
            168.033524,
            -219.331055
        ],
        "rotation": 0.0
    },
    {
        "name": "Crescana Reef",
        "points": [
            164.035049,
            -216.259048,
            165.302856,
            -217.77066
        ],
        "rotation": 0.0
    },
    {
        "name": "Watermeny Enclave",
        "points": [
            162.718475,
            -231.8141,
            165.790482,
            -235.52
        ],
        "rotation": -42.19877
    },
    {
        "name": "Brisval Cay",
        "points": [
            165.254089,
            -234.105911,
            167.253326,
            -236.202667
        ],
        "rotation": 0.0
    },
    {
        "name": "Bigshall Peninsula",
        "points": [
            157.159622,
            -225.28,
            160.719238,
            -229.180954
        ],
        "rotation": 0.0
    },
    {
        "name": "Veverree Island",
        "points": [
            160.572952,
            -240.54248,
            161.938278,
            -241.566483
        ],
        "rotation": 0.0
    },
    {
        "name": "Vencroft Isle",
        "points": [
            157.403427,
            -251.465149,
            158.81752,
            -252.781708
        ],
        "rotation": 0.0
    },
    {
        "name": "Mulguay Atoll",
        "points": [
            162.035812,
            -241.322662,
            163.547424,
            -242.590469
        ],
        "rotation": 0.0
    },
    {
        "name": "Kearbron Haven",
        "points": [
            162.620956,
            -248.295624,
            166.180573,
            -252.196579
        ],
        "rotation": 0.0
    },
    {
        "name": "Franston Atoll",
        "points": [
            159.353912,
            -244.443436,
            162.328384,
            -247.027817
        ],
        "rotation": 0.0
    },
    {
        "name": "Canroy Island",
        "points": [
            158.72,
            -240.3962,
            159.939041,
            -241.468948
        ],
        "rotation": 0.0
    },
    {
        "name": "The Wasteful Holm",
        "points": [
            173.419,
            -13.3932724,
            174.488159,
            -14.346839
        ],
        "rotation": 0.0
    },
    {
        "name": "The Boundless Reef",
        "points": [
            174.647125,
            -2.600635,
            178.981522,
            -6.776099
        ],
        "rotation": 23.37491
    },
    {
        "name": "The Bleak Isle",
        "points": [
            179.212585,
            -10.9371109,
            182.82457,
            -14.30349
        ],
        "rotation": 0.0
    },
    {
        "name": "Susden Islet",
        "points": [
            178.4758,
            -7.93193531,
            179.963943,
            -9.304493
        ],
        "rotation": 0.0
    },
    {
        "name": "Golborg Haven",
        "points": [
            172.292053,
            -1.28587031,
            173.3901,
            -2.25388432
        ],
        "rotation": 0.0
    },
    {
        "name": "Bruderview Chain",
        "points": [
            184.673935,
            -3.55420113,
            185.540833,
            -4.49331951
        ],
        "rotation": 0.0
    },
    {
        "name": "The Vicious Holm",
        "points": [
            180.80191,
            -23.9836369,
            183.214722,
            -26.4542389
        ],
        "rotation": 0.0
    },
    {
        "name": "Stokeswell Isle",
        "points": [
            177.681168,
            -20.7617283,
            179.082626,
            -22.09094
        ],
        "rotation": 0.0
    },
    {
        "name": "Bexnola Key",
        "points": [
            175.253845,
            -26.9888153,
            178.533524,
            -30.4418831
        ],
        "rotation": 0.0
    },
    {
        "name": "Nordwell Ait",
        "points": [
            179.573929,
            -40.37487,
            182.97644,
            -44.0807724
        ],
        "rotation": 24.74675
    },
    {
        "name": "Ellisford Refuge",
        "points": [
            178.663589,
            -46.1829529,
            179.790527,
            -47.2015343
        ],
        "rotation": 0.0
    },
    {
        "name": "Darmack Island",
        "points": [
            175.434555,
            -39.94143,
            177.710129,
            -42.1302948
        ],
        "rotation": 0.0
    },
    {
        "name": "The Pearl Islet",
        "points": [
            183.6265,
            -63.8456,
            184.818451,
            -64.9508743
        ],
        "rotation": 0.0
    },
    {
        "name": "Plamont Archipelago",
        "points": [
            179.292114,
            -55.1334648,
            182.933014,
            -59.27281
        ],
        "rotation": 45.0
    },
    {
        "name": "Misty Island",
        "points": [
            176.604813,
            -60.81152,
            178.056854,
            -62.3285522
        ],
        "rotation": 0.0
    },
    {
        "name": "The Sharktooth Holm",
        "points": [
            180.289017,
            -73.2728958,
            183.9624,
            -76.5562057
        ],
        "rotation": 0.0
    },
    {
        "name": "The Rainy Cay",
        "points": [
            176.68071,
            -71.09487,
            178.046051,
            -72.557724
        ],
        "rotation": 0.0
    },
    {
        "name": "Grenhampton Holm",
        "points": [
            174.860245,
            -76.42617,
            176.193054,
            -77.66147
        ],
        "rotation": 0.0
    },
    {
        "name": "Falliers Island",
        "points": [
            179.8665,
            -79.64446,
            181.296829,
            -80.7172241
        ],
        "rotation": 0.0
    },
    {
        "name": "Rorior Atoll",
        "points": [
            181.621933,
            -93.10274,
            184.125031,
            -95.99596
        ],
        "rotation": 0.0
    },
    {
        "name": "Nangue Haven",
        "points": [
            175.185364,
            -89.55938,
            177.005783,
            -91.02224
        ],
        "rotation": 0.0
    },
    {
        "name": "Camto Archipelago",
        "points": [
            178.9887,
            -89.36433,
            181.556839,
            -92.02998
        ],
        "rotation": 0.0
    },
    {
        "name": "The Shimmering Island",
        "points": [
            177.103241,
            -108.934105,
            178.858673,
            -110.396965
        ],
        "rotation": 0.0
    },
    {
        "name": "Surtrie Island",
        "points": [
            173.494858,
            -113.322678,
            176.5181,
            -116.410942
        ],
        "rotation": 0.0
    },
    {
        "name": "Springland Enclave",
        "points": [
            173.462387,
            -106.463509,
            175.933,
            -108.836586
        ],
        "rotation": 0.0
    },
    {
        "name": "Baljour Refuge",
        "points": [
            180.3216,
            -109.454239,
            183.474884,
            -112.802574
        ],
        "rotation": 0.0
    },
    {
        "name": "Pinher Cay",
        "points": [
            179.346283,
            -129.966782,
            182.467041,
            -132.632416
        ],
        "rotation": 0.0
    },
    {
        "name": "Pilnan Island",
        "points": [
            173.722458,
            -130.681992,
            176.940735,
            -133.737732
        ],
        "rotation": 0.0
    },
    {
        "name": "Killingwaki Island",
        "points": [
            181.751923,
            -123.952713,
            184.905182,
            -127.008476
        ],
        "rotation": 0.0
    },
    {
        "name": "Arning Island",
        "points": [
            179.508911,
            -122.26236,
            181.751953,
            -124.570404
        ],
        "rotation": 0.0
    },
    {
        "name": "Trensdosa Island",
        "points": [
            177.818451,
            -145.343018,
            180.061508,
            -147.195984
        ],
        "rotation": 0.0
    },
    {
        "name": "Tordown Key",
        "points": [
            180.289063,
            -146.2858,
            182.857178,
            -149.048965
        ],
        "rotation": 0.0
    },
    {
        "name": "Sheet Island",
        "points": [
            173.624985,
            -142.417358,
            177.688461,
            -146.090744
        ],
        "rotation": 0.0
    },
    {
        "name": "Nantham Island",
        "points": [
            181.231842,
            -139.42662,
            182.759689,
            -141.182053
        ],
        "rotation": 0.0
    },
    {
        "name": "Cartvon Refuge",
        "points": [
            182.792221,
            -138.743912,
            184.222549,
            -140.239288
        ],
        "rotation": 0.0
    },
    {
        "name": "Tordown Island",
        "points": [
            174.275116,
            -155.648,
            176.55069,
            -157.793518
        ],
        "rotation": 0.0
    },
    {
        "name": "Renegade Haven",
        "points": [
            180.126556,
            -162.767319,
            182.402115,
            -165.140411
        ],
        "rotation": 0.0
    },
    {
        "name": "Minimeda Archipelago",
        "points": [
            176.290543,
            -158.606232,
            179.183746,
            -161.661957
        ],
        "rotation": 86.31572
    },
    {
        "name": "The Steep Island",
        "points": [
            176.48558,
            -173.787476,
            177.81842,
            -175.120285
        ],
        "rotation": 0.0
    },
    {
        "name": "Nicodeen Key",
        "points": [
            176.420578,
            -183.01976,
            177.883423,
            -184.3851
        ],
        "rotation": 0.0
    },
    {
        "name": "Monktois Island",
        "points": [
            180.971771,
            -180.841736,
            182.53215,
            -182.272079
        ],
        "rotation": 0.0
    },
    {
        "name": "Cornlants Haven",
        "points": [
            181.654434,
            -177.818451,
            184.190048,
            -180.159027
        ],
        "rotation": 0.0
    },
    {
        "name": "Wayline Isle",
        "points": [
            179.492569,
            -189.342484,
            181.199234,
            -190.902863
        ],
        "rotation": 0.0
    },
    {
        "name": "Ellisfair Island",
        "points": [
            174.226288,
            -201.386673,
            175.396576,
            -202.605713
        ],
        "rotation": 0.0
    },
    {
        "name": "Davelgus Reef",
        "points": [
            179.346283,
            -198.217148,
            181.540573,
            -200.655243
        ],
        "rotation": 0.0
    },
    {
        "name": "Carbotrie Reef",
        "points": [
            180.419052,
            -193.194672,
            183.832382,
            -196.803055
        ],
        "rotation": 0.0
    },
    {
        "name": "Worsonee Cay",
        "points": [
            180.565338,
            -210.21257,
            183.881149,
            -214.211044
        ],
        "rotation": 24.95519
    },
    {
        "name": "Saliscoln Skerry",
        "points": [
            178.66362,
            -216.600388,
            179.9802,
            -217.8682
        ],
        "rotation": 0.0
    },
    {
        "name": "Chantown Skerry",
        "points": [
            174.7139,
            -210.066284,
            177.054474,
            -212.309326
        ],
        "rotation": 0.0
    },
    {
        "name": "Vonstable Island",
        "points": [
            181.58934,
            -224.402283,
            185.100189,
            -228.303238
        ],
        "rotation": 0.0
    },
    {
        "name": "Stoughview Chain",
        "points": [
            179.443817,
            -230.302475,
            181.101715,
            -232.252945
        ],
        "rotation": 0.0
    },
    {
        "name": "Farmhazy Holm",
        "points": [
            174.860184,
            -233.569519,
            178.273529,
            -237.031616
        ],
        "rotation": 0.0
    },
    {
        "name": "Nanonseel Isle",
        "points": [
            174.421341,
            -241.956573,
            178.761139,
            -246.735245
        ],
        "rotation": 0.0
    },
    {
        "name": "Mansmouth Refuge",
        "points": [
            183.637329,
            -241.322662,
            184.905136,
            -242.444183
        ],
        "rotation": 0.0
    },
    {
        "name": "Magpie Island",
        "points": [
            180.516571,
            -249.6122,
            183.832382,
            -253.415619
        ],
        "rotation": 29.32433
    },
    {
        "name": "Irridows Cay",
        "points": [
            174.031235,
            -251.2701,
            175.347809,
            -252.245331
        ],
        "rotation": 0.0
    },
    {
        "name": "Coatirich Enclave",
        "points": [
            173.738663,
            -250.148575,
            174.957718,
            -251.2701
        ],
        "rotation": 0.0
    },
    {
        "name": "Brudermer Reef",
        "points": [
            181.540573,
            -247.320374,
            183.149719,
            -249.027054
        ],
        "rotation": 0.0
    },
    {
        "name": "Rosmond Atoll Graceheim Isle",
        "points": [
            197.359329,
            -4.92675829,
            200.639,
            -8.524303
        ],
        "rotation": 20.11025
    },
    {
        "name": "Gladtara Isle",
        "points": [
            190.149811,
            -13.4077244,
            191.002243,
            -14.202363
        ],
        "rotation": 0.0
    },
    {
        "name": "Framingcona Atoll",
        "points": [
            199.627579,
            -11.87623,
            200.349991,
            -13.0465155
        ],
        "rotation": 0.0
    },
    {
        "name": "Colibridge Archipelago",
        "points": [
            191.291092,
            -2.31167531,
            192.24469,
            -3.164106
        ],
        "rotation": 0.0
    },
    {
        "name": "Birmingdosa Ait",
        "points": [
            192.15799,
            -7.787457,
            194.556335,
            -10.1858206
        ],
        "rotation": 0.0
    },
    {
        "name": "The Mysterious Holm",
        "points": [
            200.7112,
            -26.0496922,
            202.156,
            -27.5667286
        ],
        "rotation": 0.0
    },
    {
        "name": "Snowy Isles",
        "points": [
            194.8309,
            -20.3138523,
            198.3273,
            -23.8825
        ],
        "rotation": 0.0
    },
    {
        "name": "Eroded Skerry",
        "points": [
            192.69252,
            -27.32111,
            195.437622,
            -29.9361916
        ],
        "rotation": 0.0
    },
    {
        "name": "Sunview Chain",
        "points": [
            191.775131,
            -39.0312042,
            193.400513,
            -40.6999474
        ],
        "rotation": 0.0
    },
    {
        "name": "Saufolk Island",
        "points": [
            197.9517,
            -44.9909935,
            199.230347,
            -46.26964
        ],
        "rotation": 0.0
    },
    {
        "name": "Brightbury Cay",
        "points": [
            196.239578,
            -40.6782761,
            197.561569,
            -41.9785919
        ],
        "rotation": 0.0
    },
    {
        "name": "Wasabridge Peninsula",
        "points": [
            193.4656,
            -56.6288338,
            195.134338,
            -57.84247
        ],
        "rotation": 0.0
    },
    {
        "name": "The Emerald Refuge",
        "points": [
            197.929962,
            -56.91057,
            201.09407,
            -60.03133
        ],
        "rotation": 0.0
    },
    {
        "name": "Portsbel Island",
        "points": [
            194.495026,
            -61.5050354,
            198.200928,
            -65.37349
        ],
        "rotation": 64.59483
    },
    {
        "name": "Onocastle Cay",
        "points": [
            194.33252,
            -89.52688,
            196.868149,
            -92.09501
        ],
        "rotation": 0.0
    },
    {
        "name": "Mangate Skerry",
        "points": [
            197.875854,
            -93.91545,
            201.159149,
            -97.26376
        ],
        "rotation": 0.0
    },
    {
        "name": "Bentrose Peninsula",
        "points": [
            191.796829,
            -96.4835739,
            193.714783,
            -98.3690262
        ],
        "rotation": 0.0
    },
    {
        "name": "Richpon Island",
        "points": [
            199.826279,
            -108.609039,
            202.361908,
            -111.24218
        ],
        "rotation": 0.0
    },
    {
        "name": "Neuver Island",
        "points": [
            189.1962,
            -110.104393,
            191.536758,
            -112.509987
        ],
        "rotation": 0.0
    },
    {
        "name": "Musrath Island",
        "points": [
            192.90213,
            -104.675575,
            196.575531,
            -108.316475
        ],
        "rotation": 0.0
    },
    {
        "name": "Huntterel Island",
        "points": [
            198.070892,
            -112.70504,
            200.671539,
            -115.143135
        ],
        "rotation": 0.0
    },
    {
        "name": "Hillnew Haven",
        "points": [
            193.64978,
            -146.805832,
            196.055359,
            -149.276459
        ],
        "rotation": 0.0
    },
    {
        "name": "Chansea Enclave",
        "points": [
            191.504257,
            -140.369232,
            195.177643,
            -143.652527
        ],
        "rotation": 31.29982
    },
    {
        "name": "Causastino Island",
        "points": [
            198.948624,
            -146.12326,
            201.451721,
            -148.626358
        ],
        "rotation": 38.87404
    },
    {
        "name": "Alice Island",
        "points": [
            198.818588,
            -140.044189,
            201.19165,
            -142.677338
        ],
        "rotation": 0.0
    },
    {
        "name": "Rosville Island",
        "points": [
            192.707123,
            -165.010361,
            194.690125,
            -166.70079
        ],
        "rotation": 0.0
    },
    {
        "name": "Gravelton Haven",
        "points": [
            192.804611,
            -156.785767,
            195.502777,
            -159.386414
        ],
        "rotation": 0.0
    },
    {
        "name": "Brospool Island",
        "points": [
            197.420746,
            -160.78421,
            200.9316,
            -164.0025
        ],
        "rotation": 0.0
    },
    {
        "name": "Votfait Island",
        "points": [
            198.233475,
            -178.2411,
            201.549286,
            -182.044525
        ],
        "rotation": -38.08371
    },
    {
        "name": "Stockland Island",
        "points": [
            196.575531,
            -177.038315,
            198.070892,
            -178.468643
        ],
        "rotation": 0.0
    },
    {
        "name": "Kamstone Key",
        "points": [
            193.682327,
            -175.477875,
            195.2102,
            -176.7457
        ],
        "rotation": 0.0
    },
    {
        "name": "Hereboro Holm",
        "points": [
            196.949341,
            -206.409149,
            199.631241,
            -208.847244
        ],
        "rotation": 0.0
    },
    {
        "name": "Golcola Enclave",
        "points": [
            191.82933,
            -214.113525,
            193.779816,
            -216.16153
        ],
        "rotation": 0.0
    },
    {
        "name": "Bonabourg Cay",
        "points": [
            194.657516,
            -217.380569,
            196.120377,
            -218.599625
        ],
        "rotation": 0.0
    },
    {
        "name": "Rimtrie Island",
        "points": [
            194.755051,
            -224.694855,
            197.77829,
            -228.693329
        ],
        "rotation": -49.13206
    },
    {
        "name": "Brosfil Island",
        "points": [
            194.901337,
            -231.228958,
            197.436951,
            -233.862091
        ],
        "rotation": 0.0
    },
    {
        "name": "The Thundering Key",
        "points": [
            197.632,
            -244.736,
            201.435425,
            -248.783234
        ],
        "rotation": 0.0
    },
    {
        "name": "The Terraced Island",
        "points": [
            191.6343,
            -241.615234,
            194.3162,
            -244.3459
        ],
        "rotation": 47.64494
    },
    {
        "name": "The Dense Skerry",
        "points": [
            199.387436,
            -252.34285,
            200.655243,
            -253.3181
        ],
        "rotation": 0.0
    },
    {
        "name": "Darde Enclave",
        "points": [
            189.976379,
            -246.101334,
            191.390472,
            -247.125336
        ],
        "rotation": 0.0
    },
    {
        "name": "Cliffington Reef",
        "points": [
            191.000381,
            -249.758469,
            194.657516,
            -253.80571
        ],
        "rotation": -25.66214
    },
    {
        "name": "Bexnach Ait",
        "points": [
            199.2899,
            -240.688766,
            200.704,
            -241.664
        ],
        "rotation": 0.0
    },
    {
        "name": "Waterrior Holm",
        "points": [
            218.294464,
            -12.6853142,
            219.927063,
            -14.2167988
        ],
        "rotation": 0.0
    },
    {
        "name": "The Grim Enclave",
        "points": [
            208.354248,
            -2.48505163,
            209.524536,
            -3.04852247
        ],
        "rotation": 0.0
    },
    {
        "name": "Susston Reef",
        "points": [
            209.943451,
            -9.607901,
            213.049728,
            -12.7142143
        ],
        "rotation": 0.0
    },
    {
        "name": "Grandronto Cay",
        "points": [
            213.931152,
            -4.62335062,
            217.225266,
            -8.249792
        ],
        "rotation": 66.49752
    },
    {
        "name": "Denmeda Cay",
        "points": [
            207.8341,
            -14.1012249,
            208.888779,
            -15.098135
        ],
        "rotation": 0.0
    },
    {
        "name": "Farnlin Refuge",
        "points": [
            213.057068,
            -39.11789,
            216.524582,
            -42.6937637
        ],
        "rotation": 36.39738
    },
    {
        "name": "Dolroy Cay",
        "points": [
            209.676208,
            -43.6256561,
            213.230423,
            -46.98481
        ],
        "rotation": 0.0
    },
    {
        "name": "Yarfil Island",
        "points": [
            214.790833,
            -63.9539566,
            215.9611,
            -64.92919
        ],
        "rotation": 0.0
    },
    {
        "name": "Emslow Peninsula",
        "points": [
            209.351089,
            -60.59481,
            210.564728,
            -61.74342
        ],
        "rotation": 0.0
    },
    {
        "name": "Cowanworth Island",
        "points": [
            214.162338,
            -56.86723,
            217.3481,
            -60.39976
        ],
        "rotation": 0.0
    },
    {
        "name": "The Whispering Island",
        "points": [
            216.210281,
            -73.9880753,
            219.038483,
            -76.78376
        ],
        "rotation": 0.0
    },
    {
        "name": "The Unfathomed Haven",
        "points": [
            210.001312,
            -71.615,
            212.244354,
            -74.05309
        ],
        "rotation": 0.0
    },
    {
        "name": "Eatoland Island",
        "points": [
            209.253571,
            -77.759,
            213.219574,
            -81.56243
        ],
        "rotation": 64.76999
    },
    {
        "name": "Stockmiota Skerry",
        "points": [
            209.3187,
            -90.01449,
            212.504456,
            -92.64763
        ],
        "rotation": 0.0
    },
    {
        "name": "Granaguay Peninsula",
        "points": [
            215.657684,
            -94.92319,
            218.290833,
            -97.6538544
        ],
        "rotation": 0.0
    },
    {
        "name": "Forborough Haven",
        "points": [
            208.018356,
            -96.1584854,
            211.561737,
            -99.76687
        ],
        "rotation": 0.0
    },
    {
        "name": "Walsley Archipelago",
        "points": [
            215.0726,
            -123.1401,
            217.673218,
            -125.220619
        ],
        "rotation": 0.0
    },
    {
        "name": "Longuay Island",
        "points": [
            216.145279,
            -130.356857,
            219.201,
            -133.022522
        ],
        "rotation": 0.0
    },
    {
        "name": "Beaupawa Reef",
        "points": [
            213.479675,
            -121.352165,
            215.690186,
            -123.497688
        ],
        "rotation": 0.0
    },
    {
        "name": "Alberval Island",
        "points": [
            208.180908,
            -127.886215,
            210.814056,
            -130.746933
        ],
        "rotation": 0.0
    },
    {
        "name": "Saucana Reef",
        "points": [
            212.992081,
            -162.799744,
            214.877548,
            -164.2951
        ],
        "rotation": 0.0
    },
    {
        "name": "Ridgesomin Island",
        "points": [
            211.951828,
            -155.387939,
            215.332642,
            -157.858536
        ],
        "rotation": 0.0
    },
    {
        "name": "Litchtois Island",
        "points": [
            210.846481,
            -158.963852,
            212.2118,
            -160.296661
        ],
        "rotation": 0.0
    },
    {
        "name": "Grandhead Island",
        "points": [
            214.909958,
            -165.7255,
            217.900711,
            -168.5537
        ],
        "rotation": 0.0
    },
    {
        "name": "Wadet Island",
        "points": [
            209.026123,
            -176.128,
            210.358932,
            -177.493332
        ],
        "rotation": 0.0
    },
    {
        "name": "Oxville Haven",
        "points": [
            213.3821,
            -181.654388,
            214.844955,
            -183.052231
        ],
        "rotation": 0.0
    },
    {
        "name": "Hasford Peninsula",
        "points": [
            213.999832,
            -175.315292,
            217.380646,
            -178.793655
        ],
        "rotation": 0.0
    },
    {
        "name": "Sudlin Island",
        "points": [
            211.334091,
            -193.974854,
            215.08876,
            -197.339432
        ],
        "rotation": 0.0
    },
    {
        "name": "Litchhead Cay",
        "points": [
            209.968765,
            -214.1623,
            213.6259,
            -217.819427
        ],
        "rotation": 0.0
    },
    {
        "name": "Kamenoque Reef",
        "points": [
            213.772186,
            -210.066284,
            217.575623,
            -214.016
        ],
        "rotation": 0.0
    },
    {
        "name": "Thurtonas Cay",
        "points": [
            214.016,
            -230.4,
            215.722672,
            -232.106674
        ],
        "rotation": 0.0
    },
    {
        "name": "Exgeo Peninsula",
        "points": [
            211.67543,
            -225.767624,
            213.089523,
            -227.230469
        ],
        "rotation": 0.0
    },
    {
        "name": "Asylum Enclave",
        "points": [
            208.74971,
            -230.643814,
            213.040756,
            -234.398483
        ],
        "rotation": 0.0
    },
    {
        "name": "Winming Island",
        "points": [
            216.356567,
            -252.976761,
            217.721909,
            -254.000763
        ],
        "rotation": 0.0
    },
    {
        "name": "Wadesard Island",
        "points": [
            215.332565,
            -249.0758,
            216.89296,
            -250.4899
        ],
        "rotation": 0.0
    },
    {
        "name": "Sandshaw Enclave",
        "points": [
            210.115051,
            -249.270859,
            212.650665,
            -251.85524
        ],
        "rotation": 0.0
    },
    {
        "name": "Durdes Archipelago",
        "points": [
            218.794662,
            -244.736,
            220.257523,
            -245.955048
        ],
        "rotation": 0.0
    },
    {
        "name": "Delisisle Isle",
        "points": [
            207.140564,
            -240.932571,
            208.5059,
            -242.200378
        ],
        "rotation": 0.0
    },
    {
        "name": "Barnlodge Archipelago",
        "points": [
            211.041519,
            -241.322662,
            214.6499,
            -244.833527
        ],
        "rotation": -34.44787
    },
    {
        "name": "Wallmouth Enclave",
        "points": [
            235.733139,
            -3.64089,
            236.6578,
            -4.66669559
        ],
        "rotation": 0.0
    },
    {
        "name": "The Pelican Archipelago",
        "points": [
            224.79599,
            -14.2312574,
            225.648438,
            -15.184824
        ],
        "rotation": 0.0
    },
    {
        "name": "The Forbidden Cay",
        "points": [
            228.451324,
            -10.3302994,
            229.693832,
            -11.616169
        ],
        "rotation": 0.0
    },
    {
        "name": "The Darkest Chain",
        "points": [
            227.627792,
            -2.32612324,
            231.066422,
            -5.793636
        ],
        "rotation": 23.12476
    },
    {
        "name": "Stelburns Atoll",
        "points": [
            224.232544,
            -5.923667,
            225.09938,
            -7.02171373
        ],
        "rotation": 0.0
    },
    {
        "name": "Lunenlet Atoll",
        "points": [
            230.531845,
            -10.3736429,
            234.403885,
            -14.7658253
        ],
        "rotation": 0.0
    },
    {
        "name": "The Mumbling Reef",
        "points": [
            230.7919,
            -26.4397926,
            234.042664,
            -30.1384754
        ],
        "rotation": 0.0
    },
    {
        "name": "The Lifeless Enclave",
        "points": [
            227.454422,
            -22.7699986,
            229.3471,
            -24.6626816
        ],
        "rotation": 0.0
    },
    {
        "name": "Gallanpawa Isle",
        "points": [
            232.727844,
            -21.3830013,
            234.259308,
            -22.8855915
        ],
        "rotation": 0.0
    },
    {
        "name": "",
        "points": [
            225.0362,
            -32.06095,
            225.0362,
            -32.06095
        ],
        "rotation": 0.0
    },
    {
        "name": "Oxbonear Island",
        "points": [
            231.239777,
            -37.7525558,
            234.533936,
            -41.3067551
        ],
        "rotation": 34.25628
    },
    {
        "name": "Lavaltara Skerry",
        "points": [
            227.945618,
            -41.6535072,
            230.567932,
            -44.449192
        ],
        "rotation": 0.0
    },
    {
        "name": "Nornear Chain",
        "points": [
            230.914688,
            -56.56381,
            233.4503,
            -59.1861267
        ],
        "rotation": 0.0
    },
    {
        "name": "Gamding Enclave",
        "points": [
            234.9674,
            -63.56386,
            236.332733,
            -64.97254
        ],
        "rotation": 0.0
    },
    {
        "name": "Durset Island",
        "points": [
            227.924011,
            -61.17994,
            230.4813,
            -63.3904877
        ],
        "rotation": 0.0
    },
    {
        "name": "The Sunny Cay",
        "points": [
            228.010666,
            -78.92928,
            230.741333,
            -81.4649048
        ],
        "rotation": 0.0
    },
    {
        "name": "The Seal Skerry",
        "points": [
            234.1222,
            -74.96332,
            235.52005,
            -76.1661148
        ],
        "rotation": 0.0
    },
    {
        "name": "Broaddon Island",
        "points": [
            227.393021,
            -71.90757,
            229.993637,
            -74.2481461
        ],
        "rotation": 32.52323
    },
    {
        "name": "Ventrial Island",
        "points": [
            228.335785,
            -97.03621,
            229.9937,
            -98.43405
        ],
        "rotation": 0.0
    },
    {
        "name": "Emnigan Island",
        "points": [
            231.424,
            -86.99125,
            234.7398,
            -90.56713
        ],
        "rotation": 0.0
    },
    {
        "name": "Deddosa Island",
        "points": [
            230.188736,
            -98.95418,
            231.554077,
            -100.254486
        ],
        "rotation": 0.0
    },
    {
        "name": "Bursby Island",
        "points": [
            228.010712,
            -89.88447,
            230.611328,
            -92.6151352
        ],
        "rotation": 0.0
    },
    {
        "name": "Votcester Refuge",
        "points": [
            230.351288,
            -104.448,
            233.342,
            -107.308716
        ],
        "rotation": 0.0
    },
    {
        "name": "Hingsend Haven",
        "points": [
            234.544815,
            -107.698807,
            237.145432,
            -110.234428
        ],
        "rotation": 0.0
    },
    {
        "name": "Giblan Holm",
        "points": [
            232.821884,
            -113.907822,
            236.430267,
            -117.516205
        ],
        "rotation": 0.0
    },
    {
        "name": "Creslin Refuge",
        "points": [
            225.345,
            -109.454239,
            228.140717,
            -113.192665
        ],
        "rotation": 0.0
    },
    {
        "name": "Hepmont Island",
        "points": [
            229.701126,
            -126.618492,
            233.114456,
            -130.486938
        ],
        "rotation": 0.0
    },
    {
        "name": "Digmeuse Refuge",
        "points": [
            233.049484,
            -131.364624,
            235.87767,
            -133.96524
        ],
        "rotation": 0.0
    },
    {
        "name": "Bellto Holm",
        "points": [
            226.12529,
            -123.140068,
            229.53862,
            -126.618408
        ],
        "rotation": 0.0
    },
    {
        "name": "Strafberg Island",
        "points": [
            230.156235,
            -148.886353,
            234.024673,
            -152.267181
        ],
        "rotation": 30.42749
    },
    {
        "name": "Racastle Island",
        "points": [
            224.9225,
            -143.652664,
            227.620651,
            -147.196014
        ],
        "rotation": 0.0
    },
    {
        "name": "Kerroheim Island",
        "points": [
            229.311081,
            -138.321259,
            232.106735,
            -140.986923
        ],
        "rotation": 0.0
    },
    {
        "name": "Esterrial Enclave",
        "points": [
            233.342056,
            -142.449783,
            235.292526,
            -143.7826
        ],
        "rotation": 0.0
    },
    {
        "name": "Belleline Island",
        "points": [
            234.642365,
            -144.6604,
            236.040222,
            -145.8957
        ],
        "rotation": 0.0
    },
    {
        "name": "Alberg Island",
        "points": [
            232.464233,
            -144.822937,
            234.089661,
            -146.025726
        ],
        "rotation": 0.0
    },
    {
        "name": "The Withered Island",
        "points": [
            234.382263,
            -165.823074,
            236.820358,
            -168.326172
        ],
        "rotation": 0.0
    },
    {
        "name": "The Gleaming Island",
        "points": [
            225.02002,
            -160.751831,
            228.985977,
            -164.62027
        ],
        "rotation": 63.22507
    },
    {
        "name": "Baswin Enclave",
        "points": [
            232.529312,
            -156.785767,
            235.064926,
            -159.2889
        ],
        "rotation": 0.0
    },
    {
        "name": "Livernia Island",
        "points": [
            231.196472,
            -174.697739,
            235.129959,
            -178.566162
        ],
        "rotation": 0.0
    },
    {
        "name": "Confolk Island",
        "points": [
            225.540054,
            -182.597076,
            227.945663,
            -185.1652
        ],
        "rotation": 0.0
    },
    {
        "name": "Carlenola Island",
        "points": [
            231.066422,
            -178.468643,
            232.7568,
            -180.061554
        ],
        "rotation": 0.0
    },
    {
        "name": "Killingtane Isle",
        "points": [
            226.694092,
            -191.0979,
            229.376,
            -193.682281
        ],
        "rotation": 0.0
    },
    {
        "name": "Boothlan Atol",
        "points": [
            233.179428,
            -193.682281,
            234.788574,
            -195.096375
        ],
        "rotation": 0.0
    },
    {
        "name": "Beavertou Archipelago",
        "points": [
            229.7661,
            -196.803055,
            233.179428,
            -199.436188
        ],
        "rotation": 0.0
    },
    {
        "name": "The Glassy Island",
        "points": [
            232.545517,
            -211.090286,
            236.007614,
            -215.04
        ],
        "rotation": 0.0
    },
    {
        "name": "Choral Island",
        "points": [
            228.010666,
            -214.6499,
            230.741333,
            -217.478088
        ],
        "rotation": 0.0
    },
    {
        "name": "Rowsonee Island",
        "points": [
            230.887619,
            -224.792374,
            234.642288,
            -228.888382
        ],
        "rotation": 33.65873
    },
    {
        "name": "Porttague Enclave",
        "points": [
            226.40152,
            -230.985138,
            230.156189,
            -234.93486
        ],
        "rotation": 0.0
    },
    {
        "name": "Vercola Island",
        "points": [
            234.496,
            -240.249908,
            235.763809,
            -241.078857
        ],
        "rotation": 0.0
    },
    {
        "name": "The Northern Reef",
        "points": [
            224.792374,
            -248.92952,
            225.962662,
            -249.66095
        ],
        "rotation": 0.0
    },
    {
        "name": "The Asylum",
        "points": [
            224.353531,
            -251.318863,
            225.718857,
            -252.34285
        ],
        "rotation": 0.0
    },
    {
        "name": "Covenris Refuge",
        "points": [
            230.448761,
            -249.027054,
            234.105911,
            -252.781708
        ],
        "rotation": 16.60698
    },
    {
        "name": "Chison Cay",
        "points": [
            231.911621,
            -244.29715,
            233.520767,
            -245.857529
        ],
        "rotation": 0.0
    },
    {
        "name": "Beaconcouche Island",
        "points": [
            226.304,
            -242.444183,
            229.32724,
            -245.613708
        ],
        "rotation": 24.96149
    },
    {
        "name": "Westburg Cay",
        "points": [
            252.8396,
            -13.5233068,
            253.749786,
            -14.4046354
        ],
        "rotation": 0.0
    },
    {
        "name": "Wakasevain Islet",
        "points": [
            251.481461,
            -1.76265335,
            253.056274,
            -3.22189832
        ],
        "rotation": 0.0
    },
    {
        "name": "Votvons Island",
        "points": [
            248.288361,
            -9.160014,
            251.481384,
            -12.1651926
        ],
        "rotation": 26.71823
    },
    {
        "name": "Vertos Island",
        "points": [
            244.748672,
            -3.85799074,
            248.3751,
            -7.52777529
        ],
        "rotation": 0.0
    },
    {
        "name": "Halistead Haven",
        "points": [
            243.029327,
            -13.4366083,
            244.358582,
            -14.9536457
        ],
        "rotation": 0.0
    },
    {
        "name": "Elmore Atoll",
        "points": [
            241.237823,
            -8.061969,
            242.19136,
            -9.04443
        ],
        "rotation": 0.0
    },
    {
        "name": "Ganaquet Isles",
        "points": [
            243.99736,
            -26.9454727,
            247.464859,
            -30.09513
        ],
        "rotation": 0.0
    },
    {
        "name": "Clifbour Skerry",
        "points": [
            249.241913,
            -21.2240639,
            252.492722,
            -24.6482353
        ],
        "rotation": 0.0
    },
    {
        "name": "Ropond Chain",
        "points": [
            243.7879,
            -39.5730057,
            245.261581,
            -41.0033569
        ],
        "rotation": 0.0
    },
    {
        "name": "Fairboia Island",
        "points": [
            244.893143,
            -43.7556839,
            247.038666,
            -45.81452
        ],
        "rotation": 0.0
    },
    {
        "name": "Bolmond Island",
        "points": [
            248.924057,
            -39.0745544,
            250.354446,
            -40.5699234
        ],
        "rotation": 0.0
    },
    {
        "name": "The Savage Island",
        "points": [
            247.0603,
            -62.3285561,
            248.534,
            -63.58553
        ],
        "rotation": 0.0
    },
    {
        "name": "Kerroview Refuge",
        "points": [
            249.2492,
            -57.2356529,
            251.828125,
            -59.72792
        ],
        "rotation": 0.0
    },
    {
        "name": "Horstawa Island",
        "points": [
            243.441086,
            -57.8641434,
            244.7631,
            -58.99108
        ],
        "rotation": 0.0
    },
    {
        "name": "Livernia Chain",
        "points": [
            245.337387,
            -74.21563,
            246.962814,
            -75.90604
        ],
        "rotation": 0.0
    },
    {
        "name": "Leowaki Skerry",
        "points": [
            242.964279,
            -79.2218552,
            245.369858,
            -81.855
        ],
        "rotation": 0.0
    },
    {
        "name": "Kearhampton Island",
        "points": [
            248.490662,
            -77.856514,
            249.856,
            -79.48192
        ],
        "rotation": 0.0
    },
    {
        "name": "Ponoto Island",
        "points": [
            250.928864,
            -93.3953247,
            252.326675,
            -94.69563
        ],
        "rotation": 0.0
    },
    {
        "name": "Montmeda Island",
        "points": [
            244.134689,
            -93.5903549,
            248.295685,
            -97.5563354
        ],
        "rotation": 0.0
    },
    {
        "name": "Malsea Atoll",
        "points": [
            246.670258,
            -89.16927,
            248.0356,
            -90.30706
        ],
        "rotation": 0.0
    },
    {
        "name": "Vonwin Island",
        "points": [
            246.2802,
            -108.771568,
            250.051147,
            -111.957336
        ],
        "rotation": 0.0
    },
    {
        "name": "Sutgue Reef",
        "points": [
            248.100571,
            -126.651,
            250.928757,
            -129.381668
        ],
        "rotation": 0.0
    },
    {
        "name": "Lansack Island",
        "points": [
            249.823578,
            -121.807274,
            252.261673,
            -124.310394
        ],
        "rotation": 0.0
    },
    {
        "name": "Esterrood Skerry",
        "points": [
            243.939651,
            -129.739258,
            246.83284,
            -132.534943
        ],
        "rotation": 0.0
    },
    {
        "name": "Trayrath Island",
        "points": [
            243.842041,
            -140.369263,
            246.897766,
            -143.132446
        ],
        "rotation": 0.0
    },
    {
        "name": "The Remote Island",
        "points": [
            250.116043,
            -140.921951,
            252.716721,
            -143.425049
        ],
        "rotation": 32.64844
    },
    {
        "name": "Kindercour Island",
        "points": [
            245.727478,
            -144.855408,
            250.961288,
            -148.853882
        ],
        "rotation": 0.0
    },
    {
        "name": "The Diamond Cay",
        "points": [
            243.679581,
            -161.954529,
            247.970627,
            -165.822983
        ],
        "rotation": 53.07374
    },
    {
        "name": "Rimoudosa Island",
        "points": [
            246.280212,
            -158.346237,
            248.100647,
            -160.199188
        ],
        "rotation": 0.0
    },
    {
        "name": "Penegeo Island",
        "points": [
            244.167145,
            -158.021164,
            245.565,
            -159.256454
        ],
        "rotation": 0.0
    },
    {
        "name": "Bonabour Reef",
        "points": [
            248.295624,
            -159.288925,
            250.051041,
            -160.8493
        ],
        "rotation": 0.0
    },
    {
        "name": "Pristine Atoll",
        "points": [
            244.102188,
            -176.030472,
            245.792572,
            -177.7859
        ],
        "rotation": 0.0
    },
    {
        "name": "Huntsevain Enclave",
        "points": [
            247.743073,
            -180.679153,
            249.1734,
            -182.174515
        ],
        "rotation": 0.0
    },
    {
        "name": "Appleronto Cay",
        "points": [
            249.595978,
            -175.802917,
            252.229126,
            -178.30603
        ],
        "rotation": 0.0
    },
    {
        "name": "Verlodge Ait",
        "points": [
            247.417908,
            -191.0979,
            249.514664,
            -193.1459
        ],
        "rotation": 0.0
    },
    {
        "name": "Grimvern Island",
        "points": [
            244.29715,
            -190.122665,
            245.662476,
            -191.488
        ],
        "rotation": 0.0
    },
    {
        "name": "Ellingstable Isle",
        "points": [
            242.444183,
            -198.99733,
            245.51619,
            -202.118088
        ],
        "rotation": 0.0
    },
    {
        "name": "Brimheller Island",
        "points": [
            250.928757,
            -193.438477,
            252.440384,
            -194.85257
        ],
        "rotation": 0.0
    },
    {
        "name": "Salterel Holm",
        "points": [
            245.51619,
            -214.4061,
            248.0518,
            -216.649139
        ],
        "rotation": 0.0
    },
    {
        "name": "Hilbourg Key",
        "points": [
            243.56572,
            -209.042282,
            247.076569,
            -212.6019
        ],
        "rotation": 0.0
    },
    {
        "name": "Glouming Chain",
        "points": [
            249.709717,
            -210.017517,
            251.611435,
            -211.919235
        ],
        "rotation": 0.0
    },
    {
        "name": "Innissomin Isle ",
        "points": [
            246.052567,
            -229.034668,
            249.807236,
            -232.594284
        ],
        "rotation": 0.0
    },
    {
        "name": "The Ray Isle",
        "points": [
            253.123047,
            -240.8838,
            254.244568,
            -241.859055
        ],
        "rotation": 0.0
    },
    {
        "name": "Strafter Enclave",
        "points": [
            241.225143,
            -253.07428,
            242.639236,
            -254.000763
        ],
        "rotation": 0.0
    },
    {
        "name": "Riverrich Enclave",
        "points": [
            242.883041,
            -242.200378,
            246.97905,
            -245.662476
        ],
        "rotation": 0.0
    },
    {
        "name": "Harmonious Key",
        "points": [
            252.879242,
            -253.464386,
            254.098282,
            -254.634674
        ],
        "rotation": 0.0
    },
    {
        "name": "Dandover Island",
        "points": [
            246.003815,
            -246.784,
            247.1741,
            -247.856766
        ],
        "rotation": 0.0
    },
    {
        "name": "Bigsack Isle",
        "points": [
            250.441147,
            -246.101334,
            252.147812,
            -247.369141
        ],
        "rotation": 0.0
    },
    {
        "name": "Berkdon Haven",
        "points": [
            246.588959,
            -250.002289,
            249.319626,
            -252.732956
        ],
        "rotation": 0.0
    },
    {
        "name": "Northwest Tropical Freeport Southern Island",
        "points": [
            6.91519833,
            -96.30056,
            10.02377,
            -99.4091339
        ],
        "rotation": -276.492859
    },
    {
        "name": "Northwest Tropical Freeport Eastern Island",
        "points": [
            11.7333336,
            -91.33714,
            14.8419046,
            -94.44572
        ],
        "rotation": -190.545883
    },
    {
        "name": "Northwest Tropical Freeport Northern Island",
        "points": [
            6.857143,
            -87.49715,
            9.965714,
            -90.60571
        ],
        "rotation": 252.841263
    },
    {
        "name": "Northwest Tropical Freeport Western Island",
        "points": [
            2.28571439,
            -92.1295242,
            5.39428568,
            -95.2381
        ],
        "rotation": -368.503418
    },
    {
        "name": "Southwest Tropical Freeport Northern Island",
        "points": [
            6.959567,
            -155.913879,
            10.0681391,
            -159.022461
        ],
        "rotation": -98.6441345
    },
    {
        "name": "Southwest Tropical Freeport Southern Island",
        "points": [
            6.594371,
            -165.021225,
            9.702943,
            -168.129791
        ],
        "rotation": -301.874237
    },
    {
        "name": "Southwest Tropical Freeport Western Island",
        "points": [
            2.11550021,
            -160.1475,
            5.2240715,
            -163.256073
        ],
        "rotation": -35.81946
    },
    {
        "name": "Southwest Tropical Freeport Eastern Island",
        "points": [
            11.3236742,
            -160.214874,
            14.4322453,
            -163.323441
        ],
        "rotation": -190.495361
    },
    {
        "name": "Southwest Tundra Freeport Northern Island",
        "points": [
            40.69397,
            -223.6,
            44.4242554,
            -227.330292
        ],
        "rotation": -286.7383
    },
    {
        "name": "Southwest Tundra Freeport Eastern Island",
        "points": [
            46.1213951,
            -228.416321,
            49.85168,
            -232.1466
        ],
        "rotation": -7.23492432
    },
    {
        "name": "Southwest Tundra Freeport Western Island",
        "points": [
            35.8537025,
            -228.3007,
            39.58399,
            -232.030991
        ],
        "rotation": -182.9953
    },
    {
        "name": "Southwest Tundra Freeport Southern Island",
        "points": [
            41.247612,
            -233.405685,
            44.9778976,
            -237.135971
        ],
        "rotation": -109.660362
    },
    {
        "name": "West Equatorial Freeport Northern Island",
        "points": [
            57.30779,
            -121.157631,
            61.0380745,
            -124.887917
        ],
        "rotation": -368.4471
    },
    {
        "name": "West Equatorial Freeport Eastern Island",
        "points": [
            63.18926,
            -126.124626,
            66.91955,
            -129.854919
        ],
        "rotation": -94.68374
    },
    {
        "name": "West Equatorial Freeport Western Island",
        "points": [
            52.9119835,
            -125.951294,
            56.64227,
            -129.68158
        ],
        "rotation": 76.08547
    },
    {
        "name": "West Equatorial Freeport Southern Island",
        "points": [
            58.5659142,
            -130.825043,
            62.2962,
            -134.555328
        ],
        "rotation": -187.700867
    },
    {
        "name": "Northwest Temperate Freeport Northern Island",
        "points": [
            75.5549,
            -54.3836327,
            78.0417557,
            -56.87049
        ],
        "rotation": -583.0924
    },
    {
        "name": "Northwest Temperate Freeport Southern Island",
        "points": [
            75.5042648,
            -63.9072723,
            77.99112,
            -66.39413
        ],
        "rotation": -28.4352169
    },
    {
        "name": "Northwest Temperate Freeport Western Island",
        "points": [
            70.9964447,
            -59.07205,
            73.4833,
            -61.5589066
        ],
        "rotation": -129.087479
    },
    {
        "name": "Northwest Temperate Freeport Eastern Island",
        "points": [
            80.08904,
            -59.43806,
            82.5759,
            -61.92492
        ],
        "rotation": -300.477844
    },
    {
        "name": "Southwest Temperate Freeport Northern Island",
        "points": [
            75.7479,
            -190.847778,
            78.23476,
            -193.334641
        ],
        "rotation": 127.630661
    },
    {
        "name": "Southwest Temperate Freeport Southern Island",
        "points": [
            75.8316956,
            -199.795319,
            78.31856,
            -202.282181
        ],
        "rotation": -55.1634445
    },
    {
        "name": "Southwest Temperate Freeport Western Island",
        "points": [
            71.0542755,
            -194.960114,
            73.54113,
            -197.446976
        ],
        "rotation": -114.530807
    },
    {
        "name": "Southwest Temperate Freeport Eastern Island",
        "points": [
            80.35875,
            -195.345352,
            82.8456039,
            -197.8322
        ],
        "rotation": -346.111877
    },
    {
        "name": "West Low Desert Freeport Northern Island",
        "points": [
            110.009048,
            -105.462029,
            112.495911,
            -107.948883
        ],
        "rotation": -79.6551361
    },
    {
        "name": "West Low Desert Freeport Western Island",
        "points": [
            104.612061,
            -109.23542,
            107.098915,
            -111.722275
        ],
        "rotation": 0.0
    },
    {
        "name": "West Low Desert Freeport Eastern Island",
        "points": [
            115.438408,
            -109.928925,
            117.92527,
            -112.415779
        ],
        "rotation": -168.617523
    },
    {
        "name": "West Low Desert Freeport Southern Island",
        "points": [
            109.967445,
            -113.897285,
            112.4543,
            -116.384148
        ],
        "rotation": 69.34675
    },
    {
        "name": "South High Desert Freeport Northern Island",
        "points": [
            126.80867,
            -206.307327,
            129.295532,
            -208.794189
        ],
        "rotation": -90.589035
    },
    {
        "name": "South High Desert Freeport Western Island",
        "points": [
            121.576424,
            -211.633057,
            124.063278,
            -214.119919
        ],
        "rotation": 0.0
    },
    {
        "name": "South High Desert Freeport Eastern Island",
        "points": [
            131.706863,
            -212.056961,
            134.193726,
            -214.543823
        ],
        "rotation": -175.236359
    },
    {
        "name": "South High Desert Freeport Southern Island",
        "points": [
            126.787292,
            -216.420227,
            129.274155,
            -218.907089
        ],
        "rotation": 88.2491455
    },
    {
        "name": "North High Desert Freeport Northern Island",
        "points": [
            143.93811,
            -36.4834633,
            146.424973,
            -38.97032
        ],
        "rotation": -460.690826
    },
    {
        "name": "North High Desert Freeport Southern Island",
        "points": [
            144.01651,
            -45.9532852,
            146.503357,
            -48.4401436
        ],
        "rotation": 80.36883
    },
    {
        "name": "North High Desert Freeport Western Island",
        "points": [
            138.504608,
            -41.27214,
            140.99147,
            -43.759
        ],
        "rotation": 0.0
    },
    {
        "name": "North High Desert Freeport Eastern Island",
        "points": [
            149.001053,
            -41.66705,
            151.487915,
            -44.1539078
        ],
        "rotation": -183.659622
    },
    {
        "name": "East Low Desert Freeport Northern Island",
        "points": [
            160.9682,
            -138.953629,
            163.455063,
            -141.440491
        ],
        "rotation": -85.19386
    },
    {
        "name": "East Low Desert Freeport Western Island",
        "points": [
            156.335815,
            -143.448242,
            158.822662,
            -145.935089
        ],
        "rotation": 0.0
    },
    {
        "name": "East Low Desert Freeport Eastern Island",
        "points": [
            165.852234,
            -143.506042,
            168.3391,
            -145.9929
        ],
        "rotation": -181.13443
    },
    {
        "name": "East Low Desert Freeport Southern Island",
        "points": [
            161.383011,
            -147.667023,
            163.869873,
            -150.15387
        ],
        "rotation": 78.97565
    },
    {
        "name": "Northeast Temperate Freeport Northern Island",
        "points": [
            195.7477,
            -71.09911,
            196.986252,
            -72.33766
        ],
        "rotation": -468.156647
    },
    {
        "name": "Northeast Temperate Freeport Eastern Island",
        "points": [
            200.592819,
            -76.16402,
            201.831375,
            -77.40257
        ],
        "rotation": -167.641724
    },
    {
        "name": "Northeast Temperate Freeport Western Island",
        "points": [
            190.596268,
            -76.018486,
            191.834824,
            -77.25704
        ],
        "rotation": -6.34719467
    },
    {
        "name": "Northeast Temperate Freeport Southern Island",
        "points": [
            195.883881,
            -80.83092,
            197.122437,
            -82.0694656
        ],
        "rotation": 70.3953857
    },
    {
        "name": "East Equatorial Freeport Western Island",
        "points": [
            189.6435,
            -125.53801,
            193.373779,
            -129.2683
        ],
        "rotation": 79.07787
    },
    {
        "name": "East Equatorial Freeport Northern Island",
        "points": [
            194.897034,
            -121.058258,
            198.627319,
            -124.788544
        ],
        "rotation": -367.530273
    },
    {
        "name": "East Equatorial Freeport Southern Island",
        "points": [
            194.74292,
            -131.191055,
            198.4732,
            -134.921341
        ],
        "rotation": 167.668976
    },
    {
        "name": "East Equatorial Freeport Eastern Island",
        "points": [
            199.269943,
            -126.124657,
            203.000229,
            -129.854935
        ],
        "rotation": -103.656029
    },
    {
        "name": "Southeast Temperate Freeport Northern Island",
        "points": [
            195.621231,
            -190.577148,
            196.859787,
            -191.8157
        ],
        "rotation": -91.60028
    },
    {
        "name": "Southeast Temperate Freeport Western Island",
        "points": [
            190.228912,
            -195.89241,
            191.467468,
            -197.130966
        ],
        "rotation": -339.530945
    },
    {
        "name": "Southeast Temperate Freeport Eastern Island",
        "points": [
            200.511536,
            -195.595947,
            201.750092,
            -196.8345
        ],
        "rotation": -170.233185
    },
    {
        "name": "Southeast Temperate Freeport Southern Island",
        "points": [
            195.8089,
            -200.696381,
            197.047455,
            -201.934937
        ],
        "rotation": -240.205872
    },
    {
        "name": "Northeast Tundra Freeport Northern Island",
        "points": [
            211.215317,
            -18.27929,
            214.9456,
            -22.0095749
        ],
        "rotation": 60.5452881
    },
    {
        "name": "Northeast Tundra Freeport Eastern Island",
        "points": [
            216.761581,
            -23.6403484,
            220.491867,
            -27.370636
        ],
        "rotation": -2.44591522
    },
    {
        "name": "Northeast Tundra Freeport Western Island",
        "points": [
            206.513153,
            -23.2550621,
            210.243439,
            -26.9853477
        ],
        "rotation": -197.157684
    },
    {
        "name": "Northeast Tundra Freeport Southern Island",
        "points": [
            212.1768,
            -28.7838287,
            215.907089,
            -32.5141144
        ],
        "rotation": -120.24836
    },
    {
        "name": "Northeast Tropical Freeport Northern Island",
        "points": [
            212.050644,
            -104.288063,
            215.147034,
            -107.384445
        ],
        "rotation": 1.5536499
    },
    {
        "name": "Northeast Tropical Freeport Southern Island",
        "points": [
            211.713516,
            -114.035591,
            214.809891,
            -117.131973
        ],
        "rotation": 185.569916
    },
    {
        "name": "Northeast Tropical Freeport Eastern Island",
        "points": [
            216.616257,
            -109.335159,
            219.712631,
            -112.431541
        ],
        "rotation": -100.750069
    },
    {
        "name": "Northeast Tropical Freeport Western Island",
        "points": [
            206.495117,
            -109.056595,
            209.591492,
            -112.152977
        ],
        "rotation": 100.764557
    },
    {
        "name": "Southeast Tropical Freeport Northern Island",
        "points": [
            211.7554,
            -138.943314,
            214.851776,
            -142.0397
        ],
        "rotation": -371.311737
    },
    {
        "name": "Southeast Tropical Freeport Eastern Island",
        "points": [
            215.7589,
            -143.54483,
            218.85527,
            -146.64122
        ],
        "rotation": -72.7355347
    },
    {
        "name": "Southeast Tropical Freeport Western Island",
        "points": [
            207.157639,
            -143.45166,
            210.254013,
            -146.548035
        ],
        "rotation": 95.10906
    },
    {
        "name": "Southeast Tropical Freeport Southern Island",
        "points": [
            211.915771,
            -148.668945,
            215.012161,
            -151.765335
        ],
        "rotation": -178.200562
    }
]
