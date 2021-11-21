using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Nov18Test.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Devices",
                columns: table => new
                {
                    DeviceID = table.Column<Guid>(nullable: false),
                    DeviceName = table.Column<string>(nullable: true),
                    DevicesStatus = table.Column<int>(nullable: false),
                    DevicesCategory = table.Column<string>(nullable: true),
                    DeviceImageName = table.Column<string>(nullable: true),
                    CreatedAt = table.Column<DateTime>(nullable: false),
                    DeviceTemperature = table.Column<int>(nullable: false),
                    DeviceUsages = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Devices", x => x.DeviceID);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Devices");
        }
    }
}
