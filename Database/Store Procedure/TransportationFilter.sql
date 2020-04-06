create procedure TransportationFilter
@FromDate Date, @ToDate Date
as
begin
	declare @TransTemp table (Id bigint, TransportDate varchar(10),CarNumber varchar(15), DocumentNumber nvarchar(max),
			Companies nvarchar(max),Report nvarchar(max), MoneyCurrency varchar(max), Note nvarchar(max), DriverPrimaryName nvarchar(100), Status int);

	declare pointer cursor for			
		select T.Id, T.TransportDate, C.CarNumber, T.DocumentNumber, T.CompanyIds, T.Report, T.Money, T.Note ,D.Name, T.Status 
		from Transportation T  WITH(NOLOCK)
		join Car C WITH(NOLOCK) on T.CarId = C.Id
		left join Driver D WITH(NOLOCK) on T.DriverPrimaryId = D.Id
		where T.Status != 2 and @FromDate <= T.TransportDate and T.TransportDate <= @ToDate
		order by T.DocumentNumber asc;
	open pointer
	declare 
		@Id bigint, @TransportDate date, @CarNumber varchar(15), @DocumentNumber nvarchar(max), @CompanyIds varchar(max),
		@Report nvarchar(max), @Money money, @Note nvarchar(max), @Name nvarchar(100), @Status int
	fetch next from pointer into @Id, @TransportDate, @CarNumber, @DocumentNumber, @CompanyIds, @Report, @Money, @Note, @Name, @Status;
	while @@FETCH_STATUS=0
	begin
		
		declare @Companies nvarchar(max)= '';
		set @CompanyIds = REPLACE(REPLACE(@CompanyIds, ']', ''), '[', '');

		declare CompanyPointer cursor for select Element from func_split(@CompanyIds, ',');
		open CompanyPointer
		declare @CompanyId bigint
		fetch next from CompanyPointer into @CompanyId;
		while @@FETCH_STATUS=0
		begin
			select @Companies += (code + '|' + name)+ '   ' from Company WITH(NOLOCK) where Id = @CompanyId;
			fetch next from CompanyPointer into @CompanyId;
		end
		close CompanyPointer
		deallocate CompanyPointer


		insert into @TransTemp values(@Id, CONVERT(VARCHAR(10), @TransportDate, 103), @CarNumber, @DocumentNumber, @Companies, @Report, format(@Money, 'N0'), @Note, @Name, @Status);
		fetch next from pointer into @Id, @TransportDate, @CarNumber, @DocumentNumber, @CompanyIds, @Report, @Money, @Note, @Name, @Status;	
	end
	Close pointer
	Deallocate pointer

	select * from @TransTemp;
end