using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Nov18Test.Models
{
    public class Devices
    {
        [Key]
        public Guid DeviceID { get; set; }
        public string DeviceName { get; set; }
        public DevicesStatus DevicesStatus { get; set; }
        public string DevicesCategory { get; set; }
        public string DeviceImageName { get; set; }
        public DateTime CreatedAt { get; set; }
        public int DeviceTemperature { get; set; }
        public string DeviceUsages { get; set; }
    }

    public enum DevicesStatus
    {
        Available,
        NotAvailable,
        Online,
        Offline,
    }
}
