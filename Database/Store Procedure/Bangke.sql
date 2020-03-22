create procedure Bangke
@Date Date
as
begin
	declare @BangkeTemp table (TransportDate varchar(20), CarNumber varchar(20), CompanyName nvarchar(max), CompanyDistance float, 
	DistanceDescription varchar(15), CapacityType varchar(20), Money money, Report nvarchar(200), 
	DriverPrimary nvarchar(100), DriverSecondary nvarchar(100), DriverThird nvarchar(100) );

	declare pointer cursor for			
		select T.TransportDate, C.CarNumber, T.CompanyIds, CP.Type, T.Money, T.Report, D1.Name, D2.Name, D3.Name from Transportation T 
		join Car C on T.CarId = C.Id
		join Capacity CP on C.CapacityId = CP.Id
		left join Driver D1 on T.DriverPrimaryId = D1.Id
	    left join Driver D2 on T.DriverSecondaryId = D2.Id
	    left join Driver D3 on T.DriverThirdId = D3.Id
		where T.Status = 1 and Month(T.TransportDate) = Month(@Date) and Year(T.TransportDate) =  Year(@Date) 
		order by T.DocumentNumber asc;
	open pointer
	declare 
		@TransportDate date, @CarNumber varchar(15),@CompanyIds varchar(max), @CapacityType varchar(20),  @Money money, @Report nvarchar(200), @DriverPrimary nvarchar(100), @DriverSecondary nvarchar(100), @DriverThird nvarchar(100);
		fetch next from pointer into @TransportDate, @CarNumber, @CompanyIds, @CapacityType, @Money, @Report, @DriverPrimary, @DriverSecondary,@DriverThird;
	while @@FETCH_STATUS=0
	begin
		declare @CompanyId bigint, @CompanyName nvarchar(max), @CompanyDistance float, @DistanceDescription varchar(15);
		select top 1 @CompanyId=Element from func_split(REPLACE(REPLACE(@CompanyIds, ']', ''), '[', ''), ',') order by ElementID desc;
		select @CompanyName=Name, @CompanyDistance=Distance from Company where Id=@CompanyId;

		select @DistanceDescription=Description from Distance where (select top 1 Element from func_split(Description, '-') ) <= @CompanyDistance and @CompanyDistance <= (select top 1 Element from func_split(Description, '-') order by ElementID desc) and Status = 1


		
		insert into @BangkeTemp values(CONVERT(VARCHAR(10), @TransportDate, 103), @CarNumber, @CompanyName, @CompanyDistance, @DistanceDescription, @CapacityType, @Money, @Report, @DriverPrimary, @DriverSecondary,@DriverThird);
		
		fetch next from pointer into @TransportDate, @CarNumber, @CompanyIds, @CapacityType, @Money, @Report, @DriverPrimary, @DriverSecondary,@DriverThird;
	end
	Close pointer
	Deallocate pointer

	select * from @BangkeTemp;
end














		