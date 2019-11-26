using Domain.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.Constants
{
    public static class ResponseResultHelper
    {
        public static void MakeException(ResponseResult result, Exception ex)
        {
            result.Success = false;
            result.Message = Utilities.MakeExceptionMessage(ex);
            result.ErrorNumber = (int)Enums.Common.Exception;
        }

        public static void MakeFailure(ResponseResult result, string message = null, int? errorNumber = null)
        {
            result.Success = false;
            result.Message = message;
            if (errorNumber.HasValue)
            {
                result.ErrorNumber = errorNumber.Value;
            }
        }

        public static void MakeSuccess(ResponseResult result, string message = null)
        {
            result.Success = true;
            result.Message = message;
        }

    }
}
