using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.ViewModels
{
    public class ExportReportViewModel
    {
        public long TransportationId { get; set; }
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
        public string DriverJson { get; set; }
        

    }
    public class TransportationIncludeDriverSalary : ExportReportViewModel
    {
        //Not be returned drom SP
        public bool IsDriverPrimary { get; set; }
        public long Salary { get; set; }
    }

    public class DriverInfo 
    {
        public long DriverId { get; set; }
        public string DriverName { get; set; }
        public string DriverType { get; set; }
        public long DriverTypeId { get; set; }
    }

    public class ExportDriverSalaryBySheet : DriverInfo
    {
        public int ColumnIndex { get; set; }
        public int RowIndex { get; set; }
        public long TotalMoney { get; set; }
        public bool IsCheck { get; set; }
    }

    public class ExportDriverSalaryViewModel : DriverInfo
    {
        public ExportDriverSalaryViewModel()
        {
            Transportations = new List<TransportationIncludeDriverSalary>();
        }
        public List<TransportationIncludeDriverSalary> Transportations { get; set; }
    }
}
