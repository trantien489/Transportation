










select T.TransportDate, C.CarNumber, T.CompanyIds, CP.Type, T.Money, T.Report from Transportation T 
		join Car C on T.CarId = C.Id
		join Capacity CP on C.CapacityId = CP.Id
		where T.Status = 1
		order by T.DocumentNumber asc;