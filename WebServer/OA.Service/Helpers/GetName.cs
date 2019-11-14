using System;
using System.Collections.Generic;
using System.Text;
namespace OA.Service.Helpers
{
    public static class GetName
    {
        public static List<string> GetPropertiesName(Type type)
        {
            var result = new List<string>();
            var propertyInfos = type.GetProperties();
            foreach (var item in propertyInfos)
            {
                result.Add(item.Name);
            }
            return result;
        }

        public static string GetControllerName(string controllerName)
        {
            if (!string.IsNullOrEmpty(controllerName) && controllerName.Length > 10)
            {
                return controllerName.Substring(0, controllerName.Length - 10).ToLower();
            }
            else return string.Empty;
        }
    }
}
