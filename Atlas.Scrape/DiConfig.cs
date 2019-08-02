using Atlas.Repos.Contexts;
using Atlas.Models.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Atlas.Models;
using Atlas.Repos.Repositories;

namespace Atlas.Scrape
{
    public static class DiConfig
    {
        public static ServiceProvider GetServiceProvider(string basePath)
        {
            return GetServiceCollection(basePath).BuildServiceProvider();
        }
        public static IServiceCollection GetServiceCollection(string basePath)
        {
            var services = new ServiceCollection();
            var config = GetConfig(basePath);
            services.AddSingleton(config);
            services.AddLogging(configure => configure.AddConsole());

            services.AppendRepositories(config);

            return services;
        }

        public static void AppendRepositories(this IServiceCollection services, IConfiguration config)
        {
            services.AddEntityFrameworkSqlServer()
                .AddDbContext<MapContext>(options =>
                    options.UseSqlServer(config.GetConnectionString("MapDb"),
                    b => b.MigrationsAssembly("Atlas.Repos").UseNetTopologySuite()
                ));

            services.AddTransient<IAtlasScraper, AtlasScraper>();

            var clusterDataConfiguration = new ClusterSnapshotRepositoryConfiguration();
            config.Bind(Constants.ClusterDataString, clusterDataConfiguration);

            services.AddSingleton(clusterDataConfiguration);
            services.AddSingleton<ClusterSnapshotRepository, ClusterSnapshotRepository>();
        }

        public static IConfiguration GetConfig(string basePath)
        {
            return new ConfigurationBuilder()
               .SetBasePath(basePath)
               .AddJsonFile("local.settings.json", optional: true, reloadOnChange: false)
               .AddEnvironmentVariables().Build();
        }
        public static MapContext GetDbContext(IConfiguration config)
        {
            var builder = new DbContextOptionsBuilder<MapContext>();
            builder.UseSqlServer(config.GetConnectionString(MapContext.CONNECTION_STRING_KEY), b => b.UseNetTopologySuite());
            return new MapContext(builder.Options);
        }
    }
}
