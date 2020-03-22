namespace Infrastructure.EF.Entities
{
    public partial class PriceAdjustment : BaseEntity
    {
        public long CompanyId { get; set; }
        public long CapacityId { get; set; }
        public decimal UpPrice { get; set; }
        public decimal DownPrice { get; set; }

        public virtual Capacity Capacity { get; set; }
        public virtual Company Company { get; set; }
    }
}
