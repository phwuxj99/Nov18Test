using Nov18Test.Data;
using Nov18Test.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nov18Test.Repositories
{

    public class DevicesRepository : IDevicesRepository
    {
        private readonly ApplicationContext dbcontext;
        public DevicesRepository(ApplicationContext dbcontext)
        {
            this.dbcontext = dbcontext;
        }

        public List<Devices> GetAllDevicesList()
        {
            var result = dbcontext.Devices.ToList();

            return result;
        }


        public Devices GetDevicesDetails(string devicesID)
        {
            var result = dbcontext.Devices.SingleOrDefault(x=>x.DeviceID.ToString().ToLower()==devicesID.ToLower());

            return result;
        }
    }
}
