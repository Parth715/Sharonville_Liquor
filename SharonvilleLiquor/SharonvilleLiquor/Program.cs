using Microsoft.EntityFrameworkCore;
using SharonvilleLiquor;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
var conn = "LiquorDBContext";
builder.Services.AddDbContext<LiquorDBContext>(X => { X.UseSqlServer(builder.Configuration.GetConnectionString(conn));});
builder.Services.AddCors();

var app = builder.Build();

// Configure the HTTP request pipeline.

app.UseCors(x => x.AllowAnyHeader().AllowAnyMethod().AllowAnyOrigin());
app.UseRouting();

app.UseAuthorization();

app.MapControllers();

app.Run();
