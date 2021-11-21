using Microsoft.EntityFrameworkCore.Migrations;

namespace Nov18Test.Migrations
{
    public partial class addDataToTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("  insert dbo.Devices([DeviceID],[DeviceName],[DevicesStatus],[DevicesCategory],[DeviceImageName],[CreatedAt],[DeviceTemperature],[DeviceUsages]) values(NEWID(), 'Device 1', 0,'mobile', 'image2.png', GETDATE(), 35, 'usages.png')");
            migrationBuilder.Sql("  insert dbo.Devices([DeviceID],[DeviceName],[DevicesStatus],[DevicesCategory],[DeviceImageName],[CreatedAt],[DeviceTemperature],[DeviceUsages]) values(NEWID(), 'Device 2', 1,'mobile', 'image2.png', GETDATE(), 25, 'usages.png')");
            migrationBuilder.Sql("  insert dbo.Devices([DeviceID],[DeviceName],[DevicesStatus],[DevicesCategory],[DeviceImageName],[CreatedAt],[DeviceTemperature],[DeviceUsages]) values(NEWID(), 'Device 3', 3, 'mobile','image2.png', GETDATE(), 15, 'usages.png')");
            migrationBuilder.Sql("  insert dbo.Devices([DeviceID],[DeviceName],[DevicesStatus],[DevicesCategory],[DeviceImageName],[CreatedAt],[DeviceTemperature],[DeviceUsages]) values(NEWID(), 'Device 4', 0, 'mobile','image2.png', GETDATE(), 55, 'usages.png')");
            migrationBuilder.Sql("  insert dbo.Devices([DeviceID],[DeviceName],[DevicesStatus],[DevicesCategory],[DeviceImageName],[CreatedAt],[DeviceTemperature],[DeviceUsages]) values(NEWID(), 'Device 5', 1, 'mobile','image2.png', GETDATE(), 25, 'usages.png')");
            migrationBuilder.Sql("  insert dbo.Devices([DeviceID],[DeviceName],[DevicesStatus],[DevicesCategory],[DeviceImageName],[CreatedAt],[DeviceTemperature],[DeviceUsages]) values(NEWID(), 'Device 6', 2, 'phone','image2.png', GETDATE(), 15, 'usages.png')");
            migrationBuilder.Sql("  insert dbo.Devices([DeviceID],[DeviceName],[DevicesStatus],[DevicesCategory],[DeviceImageName],[CreatedAt],[DeviceTemperature],[DeviceUsages]) values(NEWID(), 'Device 7', 3, 'phone','image2.png', GETDATE(), 55, 'usages.png')");

        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("TRUNCATE TABLE [dbo.Devices]", true);
        }
    }
}
