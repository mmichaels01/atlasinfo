using GeoAPI.Geometries;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Atlas.Models.Map
{
    public class GridCell
    {
        public int Row { get; set; }
        public int Column { get; set; }
        public string Name { get; set; }
        [Column(TypeName = "geometry")]
        public IPoint CenterLatLng { get; set; }
        [Column(TypeName = "geometry")]
        public IPoint BottomLeftPointLatLng { get; set; }
        [Column(TypeName = "geometry")]
        public IPoint BottomRightPointLatLng { get; set; }
        [Column(TypeName = "geometry")]
        public IPoint TopLeftPointLatLng { get; set; }
        [Column(TypeName = "geometry")]
        public IPoint TopRightPointLatLng { get; set; }
        [Column(TypeName = "geometry")]
        public IGeometry BorderLatLng { get; set; }
        [Column(TypeName = "geometry")]
        public IPoint CenterUnreal { get; set; }
        [Column(TypeName = "geometry")]
        public IPoint BottomLeftPointUnreal { get; set; }
        [Column(TypeName = "geometry")]
        public IPoint BottomRightPointUnreal { get; set; }
        [Column(TypeName = "geometry")]
        public IPoint TopLeftPointUnreal { get; set; }
        [Column(TypeName = "geometry")]
        public IPoint TopRightPointUnreal { get; set; }
        [Column(TypeName = "geometry")]
        public IGeometry BorderUnreal { get; set; }
        public ICollection<Server> Servers { get; set; }
    }
}
