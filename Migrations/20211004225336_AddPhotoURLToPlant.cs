using Microsoft.EntityFrameworkCore.Migrations;

namespace PlantsandRecordsCollection.Migrations
{
    public partial class AddPhotoURLToPlant : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PhotoURL",
                table: "Plants",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PhotoURL",
                table: "Plants");
        }
    }
}
