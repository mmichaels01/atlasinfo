using Atlas.Models.Map;
using Microsoft.EntityFrameworkCore;

namespace Atlas.Repos.Contexts
{
    public class MapContext : DbContext
    {
        public const string CONNECTION_STRING_KEY = "MapDb";
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // Table names (Also specified via data annotation)
            modelBuilder.Entity<Cluster>().ToTable("Cluster");
            modelBuilder.Entity<Server>().ToTable("Server");
            modelBuilder.Entity<GridCell>().ToTable("GridCell");

            // Indexes
            modelBuilder.Entity<Cluster>().HasIndex(i => i.MachineName);
            modelBuilder.Entity<Server>().HasIndex(i => i.Address);
            modelBuilder.Entity<Server>().HasIndex(i => i.Name);
            modelBuilder.Entity<GridCell>().HasIndex(i => i.Name);

            // Keys
            modelBuilder.Entity<Cluster>().HasKey(c => new { c.Id });
            modelBuilder.Entity<Server>().HasKey(c => new { c.Id });
            modelBuilder.Entity<GridCell>().HasKey(c => new { c.Row, c.Column });

            // Relationships
            modelBuilder.Entity<Cluster>().HasMany(e => e.Servers);
            modelBuilder.Entity<GridCell>().HasMany(e => e.Servers);
            modelBuilder.Entity<Server>().HasOne(e => e.Cluster).WithMany(c => c.Servers);
            modelBuilder.Entity<Server>().HasOne(e => e.GridCell).WithMany(c => c.Servers);
        }
        public MapContext(DbContextOptions<MapContext> options) : base(options) { }
        public DbSet<GridCell> GridCell { get; set; }
        public DbSet<Server> Server { get; set; }
        public DbSet<Cluster> Cluster { get; set; }
    }
}
