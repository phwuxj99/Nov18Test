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

        [Route("SearchRelatedByID")]
        [HttpGet]
        public IEnumerable<Devices> SearchRelatedByID(string id)
        {
            var NameList = devicesRepository.GetAllDevicesList().ToArray();
            var details = NameList.SingleOrDefault(x => x.DeviceID.ToString().ToLower() == id.ToLower());
            var related = NameList.Where(x => x.DevicesCategory == details.DevicesCategory && x.DeviceID != details.DeviceID).Take(3);                          

            return  related;
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
