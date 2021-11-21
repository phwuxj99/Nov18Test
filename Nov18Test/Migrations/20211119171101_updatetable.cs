using Microsoft.EntityFrameworkCore.Migrations;

namespace Nov18Test.Migrations
{
    public partial class updatetable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("  update[dbo].[Devices] set DeviceImageName = 'mobile.png' where DeviceName = 'Device 1'");
            migrationBuilder.Sql("  update[dbo].[Devices] set DeviceImageName = 'ipad.png' where DeviceName = 'Device 2'");
            migrationBuilder.Sql("  update[dbo].[Devices] set DeviceImageName = 'desktop.png' where DeviceName = 'Device 3'");
            migrationBuilder.Sql("  update[dbo].[Devices] set DeviceImageName = 'mobile.png' where DeviceName = 'Device 4'");
            migrationBuilder.Sql("  update[dbo].[Devices] set DeviceImageName = 'ipad.png' where DeviceName = 'Device 5'");
            migrationBuilder.Sql("  update[dbo].[Devices] set DeviceImageName = 'desktop.png' where DeviceName = 'Device 6'");
            migrationBuilder.Sql("  update[dbo].[Devices] set DeviceImageName = 'mobile.png' where DeviceName = 'Device 7'");  
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
