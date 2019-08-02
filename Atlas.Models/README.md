`dotnet ef migrations add Initial --project .\Atlas.Data\Atlas.Models.csproj --startup-project .\Atlas.Web\Atlas.Web.csproj`

`dotnet ef migrations database update --project .\Atlas.Data\Atlas.Data.csproj --startup-project .\Atlas.Web\Atlas.Web.csproj`