using Microsoft.AspNetCore.Mvc;
using Nov18Test.Models;
using Nov18Test.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nov18Test.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class DevicesController : ControllerBase
    {
        #region private parameters


        private IDevicesRepository devicesRepository;


        #endregion


        #region public properties 

        /// <summary>
        /// constructor
        /// </summary>
        /// <param name="devicesRepository">repository object</param>
        public DevicesController(IDevicesRepository devicesRepository)
        {
            this.devicesRepository = devicesRepository;
        }

        [Route("GetAllDevices")]
        [HttpGet]
        public IEnumerable<Devices> GetAllDevices()
        {
            var devicesList = devicesRepository.GetAllDevicesList().ToArray();

            return devicesList;
        }

        [Route("SearchByName")]
        [HttpGet]
        public IEnumerable<Devices> SearchByName(string name)
        {
            var NameList = devicesRepository.GetAllDevicesList().Where(x=>x.DeviceName.Contains(name)).ToArray();

            return NameList;
        }


        [Route("GetDeviceDetails")]
        [HttpGet]
        public Devices GetDeviceDetails(string deviceID)
        {
            var deviceDetails = devicesRepository.GetDevicesDetails(deviceID);

            return deviceDetails;
        }


        #endregion
    }
}
