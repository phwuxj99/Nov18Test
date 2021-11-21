using Nov18Test.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Nov18Test.Repositories
{
    public interface IDevicesRepository
    {
        List<Devices> GetAllDevicesList();
        Devices GetDevicesDetails(string devicesID);
    }
}
