using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Nov18Test.Controllers;
using Nov18Test.Data;
using Nov18Test.Models;
using Nov18Test.Repositories;
using System;
using System.Collections.Generic;
using Xunit;

namespace DevicesTest
{
    public class DevicesTest
    {
        #region private parameters


        private ApplicationContext dbcontext;
        private IConfiguration configuration;
        private IDevicesRepository devicesRepository;


        #endregion


        #region one time set up

        public DevicesTest()
        {
            configuration = new ConfigurationBuilder().AddJsonFile("appsettings.json").Build();

            IServiceCollection services = new ServiceCollection();

            var connection = configuration.GetConnectionString("DefaultConnection");

            services.AddDbContext<ApplicationContext>(options => options.UseSqlServer(connection));

            services.AddHttpContextAccessor();
            services.TryAddSingleton<IDevicesRepository, DevicesRepository>();

            IServiceProvider provider = services.BuildServiceProvider();

            dbcontext = provider.GetService<ApplicationContext>();
            devicesRepository = provider.GetService<IDevicesRepository>();
        }

        #endregion


        #region Repository test - get all devices

        [Fact]
        public void GetAllDevices_Repository_Test()
        {
            // Arrange
            var devices = new List<Devices>();

            // Act
            devices = devicesRepository.GetAllDevicesList();

            // Assert
            Assert.NotNull(devices);
        }

        #endregion


        #region Repository test - get device details


        [Theory]
        [InlineData("5ECC3BC8-BA42-4C2B-A7FB-383D7196529B")]
        [InlineData("085E3483-6FE1-4543-9FC6-3FD5700B7E34")]
        [InlineData("3D49576B-29C2-4DCA-9B75-5BB7EB894C1C")]
        public void GetDeviceDetails_Repository_Test(string deviceID)
        {
            // Arrange
            var devices = new Devices();

            // Act
            devices = devicesRepository.GetDevicesDetails(deviceID);

            // Assert
            Assert.NotNull(devices);
        }

        #endregion


        #region Controller test - get all devices

        [Fact]
        public void GetAllDevices_Controller_Test()
        {
            // Arrange
            var controller = new DevicesController(devicesRepository);

            // Act
            var devicesList = controller.GetAllDevices();

            // Assert
            Assert.NotNull(devicesList);
        }


        #endregion



        #region Controller test - get device details


        [Theory]
        [InlineData("5ECC3BC8-BA42-4C2B-A7FB-383D7196529B")]
        [InlineData("085E3483-6FE1-4543-9FC6-3FD5700B7E34")]
        [InlineData("3D49576B-29C2-4DCA-9B75-5BB7EB894C1C")]
        public void GetDeviceDetails_Controller_Test(string deviceID)
        {
            // Arrange
            var controller = new DevicesController(devicesRepository);

            // Act
            var device = controller.GetDeviceDetails(deviceID);

            // Assert
            Assert.NotNull(device);
        }


        #endregion
    }
}
