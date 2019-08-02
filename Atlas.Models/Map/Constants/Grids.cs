using System;
using System.Collections.Generic;
using System.Text;

namespace Atlas.Models.Map
{
    public static class Grids
    {
        public const double GRID_WIDTH_LATLNG = 200 / 15; // Assumes 15x15 cell square grid with right with -100 and 100 range on lat/lng
        public const double GRID_WIDTH_UNREAL = 1400000; // Unreal units
        public const double GRID_WIDTH_LATLNG_HALF = GRID_WIDTH_LATLNG / 2;
        public const double GRID_WIDTH_UNREAL_HALF = GRID_WIDTH_UNREAL / 2;
        public const double GRID_WIDTH_LATLNG_QUARTER = GRID_WIDTH_LATLNG_HALF / 2;
        public const double GRID_WIDTH_UNREAL_QUARTER = GRID_WIDTH_UNREAL_HALF / 2;
    }
}
