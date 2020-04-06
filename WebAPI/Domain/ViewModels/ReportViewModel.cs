using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.ViewModels
{
    public class ExportReportViewModel
    {
        public string TransportDate { get; set; }
        public string CarNumber { get; set; }
        public string CompanyName { get; set; }
        public double CompanyDistance { get; set; }
        public string DistanceDescription { get; set; }
        public string CapacityType { get; set; }
        public decimal Money { get; set; }
        public string Report { get; set; }
        public string Note { get; set; }
        public string DriverPrimary { get; set; }
        public string DriverSecondary { get; set; }
        public string DriverThird { get; set; }
    }
}
