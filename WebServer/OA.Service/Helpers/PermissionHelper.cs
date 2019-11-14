using System;
using System.Collections.Generic;
using System.Text;
using OA.Core.Constants;

namespace OA.Service.Helpers
{
    public class PermissionHelper
    {
        public bool CheckRole(List<Guid> roleIds, string roleIdsText)
        {
            var result = false;
            foreach (var roleId in roleIds)
            {
                if(StringHelper.Contains(roleIdsText, roleId.ToString()))
                {
                    result = true;
                    break;
                }
            }
            return result;
        }
    }
    
}
