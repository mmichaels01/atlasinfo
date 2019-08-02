using Atlas.Models.Map;
using Atlas.Models.Map.Constants;
using Atlas.Repos.Contexts;
using GeoAPI.Geometries;
using NetTopologySuite;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Atlas.Models.Data
{
    public static class MapInitializer
    {
        public static void Initialize(MapContext context)
        {
            context.Database.EnsureCreated();

            var gridCells = GetGridCells();
            var clusters = GetAllClusters();
            var servers = GetAllServers(gridCells);

            context.AddRange(gridCells);
            context.AddRange(clusters);
            context.AddRange(servers);
            context.SaveChanges();
        }

        private static IEnumerable<GridCell> GetGridCells()
        {
            var gridCells = new List<GridCell>();

            var geometryFactory = NtsGeometryServices.Instance.CreateGeometryFactory();

            for (var gridColumn = 0; gridColumn < 15; gridColumn++)
            {
                for (var gridRow = 0; gridRow < 15; gridRow++)
                {
                    // Latlng ranges -100 to 100
                    double xCenterLatLng = (gridColumn - 7) * Grids.GRID_WIDTH_LATLNG;
                    double yCenterLatLng = (7 - gridRow) * Grids.GRID_WIDTH_LATLNG;

                    // Unreal ranges 0 to 21 million
                    double xCenterUnreal = gridColumn + Grids.GRID_WIDTH_UNREAL;
                    double yCenterUnreal = gridRow + Grids.GRID_WIDTH_UNREAL;

                    var centerLatLng = new Coordinate(xCenterLatLng, yCenterLatLng);
                    var centerUnreal = new Coordinate(xCenterUnreal, yCenterUnreal);

                    // Latlng calculations
                    var bottomLeftLatlng = new Coordinate(xCenterLatLng - Grids.GRID_WIDTH_LATLNG_HALF, yCenterLatLng - Grids.GRID_WIDTH_LATLNG_HALF);
                    var bottomRightLatlng = new Coordinate(xCenterLatLng + Grids.GRID_WIDTH_LATLNG_HALF, yCenterLatLng - Grids.GRID_WIDTH_LATLNG_HALF);
                    var topRightLatlng = new Coordinate(xCenterLatLng + Grids.GRID_WIDTH_LATLNG_HALF, yCenterLatLng + Grids.GRID_WIDTH_LATLNG_HALF);
                    var topLeftLatlng = new Coordinate(xCenterLatLng - Grids.GRID_WIDTH_LATLNG_HALF, yCenterLatLng + Grids.GRID_WIDTH_LATLNG_HALF);

                    // Unreal calculations
                    var bottomLeftUnreal = new Coordinate(xCenterUnreal - Grids.GRID_WIDTH_UNREAL_HALF, yCenterUnreal - Grids.GRID_WIDTH_UNREAL_HALF);
                    var bottomRightUnreal = new Coordinate(xCenterUnreal + Grids.GRID_WIDTH_UNREAL_HALF, yCenterUnreal - Grids.GRID_WIDTH_UNREAL_HALF);
                    var topRightUnreal = new Coordinate(xCenterUnreal + Grids.GRID_WIDTH_UNREAL_HALF, yCenterUnreal + Grids.GRID_WIDTH_UNREAL_HALF);
                    var topLeftUnreal = new Coordinate(xCenterUnreal - Grids.GRID_WIDTH_UNREAL_HALF, yCenterUnreal + Grids.GRID_WIDTH_UNREAL_HALF);

                    gridCells.Add(new GridCell()
                    {
                        Row = gridRow,
                        Column = gridColumn,
                        Name = $"{Convert.ToChar(gridColumn + 65)}{gridRow + 1}",
                        CenterLatLng = geometryFactory.CreatePoint(centerLatLng),
                        CenterUnreal = geometryFactory.CreatePoint(centerUnreal),
                        BottomLeftPointLatLng = geometryFactory.CreatePoint(bottomLeftLatlng),
                        BottomRightPointLatLng = geometryFactory.CreatePoint(bottomRightLatlng),
                        TopRightPointLatLng = geometryFactory.CreatePoint(topRightLatlng),
                        TopLeftPointLatLng = geometryFactory.CreatePoint(topLeftLatlng),
                        BottomLeftPointUnreal = geometryFactory.CreatePoint(bottomLeftUnreal),
                        BottomRightPointUnreal = geometryFactory.CreatePoint(bottomRightUnreal),
                        TopRightPointUnreal = geometryFactory.CreatePoint(topRightUnreal),
                        TopLeftPointUnreal = geometryFactory.CreatePoint(topLeftUnreal),
                        // Geometry could be calculated, but processing > storage here
                        BorderLatLng = geometryFactory.CreatePolygon(new Coordinate[]{
                            bottomLeftLatlng,
                            bottomRightLatlng,
                            topRightLatlng,
                            topLeftLatlng,
                            bottomLeftLatlng
                        }),
                        BorderUnreal = geometryFactory.CreatePolygon(new Coordinate[]
                        {
                            bottomLeftUnreal,
                            bottomRightUnreal,
                            topRightUnreal,
                            topLeftUnreal,
                            bottomLeftUnreal
                        })
                    });
                }
            }

            return gridCells;
        }

        private static IEnumerable<Cluster> GetAllClusters()
        {
            return new Cluster[]
            {
                Clusters.NA_PVP,
                Clusters.NA_PVE,
                Clusters.EU_PVP,
                Clusters.EU_PVE
            };
        }

        private static IEnumerable<Server> GetAllServers(IEnumerable<GridCell> gridCells)
        {
            var naPvp = GetServersByJsonPath("napvp.json", Clusters.NA_PVP, gridCells);
            var euPvp = GetServersByJsonPath("eupvp.json", Clusters.EU_PVP, gridCells);
            var naPve = GetServersByJsonPath("napve.json", Clusters.NA_PVE, gridCells);
            var euPve = GetServersByJsonPath("eupve.json", Clusters.EU_PVE, gridCells);

            return naPvp.Concat(euPvp).Concat(naPve).Concat(euPve);
        }

        private static IEnumerable<Server> GetServersByJsonPath(string path, Cluster cluster, IEnumerable<GridCell> gridCells)
        {
            using (var sr = new StreamReader(path))
            {
                var serverJson = sr.ReadToEnd();
                var servers = JsonConvert.DeserializeObject<Server[]>(serverJson);
                return servers.Select(x =>
                {
                    var name = x.Name;
                    var column = Convert.ToInt32(name[0]) - 65;
                    var row = int.Parse(name.Substring(1)) - 1;
                    {
                        x.Cluster = cluster;
                        x.GridCell = gridCells.Single(y => y.Row == row && y.Column == column);
                        return x;
                    }
                });
            }
        }
    }
}
