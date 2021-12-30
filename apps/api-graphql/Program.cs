using GraphQL;
using GraphQL.Server;
using GraphQL.SystemTextJson;
using Monorepo.Api.GraphQL.GraphQL.Schema;


var builder = WebApplication.CreateBuilder(args);


builder.Services.AddRouting();
builder.Services.AddScoped<IDocumentExecuter, DocumentExecuter>();
builder.Services.AddScoped<IDocumentWriter, DocumentWriter>();
builder.Services.AddGraphQL().AddSystemTextJson();
builder.Services.AddSingleton<Schema>();


if (builder.Environment.IsDevelopment())
{
    builder.Services.AddCors(
        options =>
            options.AddPolicy(
                "AllowWebApp",
                builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
            )
    );
}


var app = builder.Build();


if (app.Environment.IsDevelopment())
{
    app.UseCors("AllowWebApp");
    app.UseDeveloperExceptionPage();
}
else
{
    app.UseExceptionHandler("/Error");

    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}


app.UseHttpsRedirection();
app.UseGraphQL<Schema>();


app.Run();
