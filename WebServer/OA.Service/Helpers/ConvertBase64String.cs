using OA.Core.Models;
using System;
using System.IO;
using System.Threading.Tasks;
namespace OA.Service.Helpers
{
    public static class ConvertBase64String
    {
        public static string Base64ToImage(string base64String, string uploadPath)
        {
            if (!string.IsNullOrEmpty(base64String) && base64String.IndexOf(',') >= 0)
            {
                base64String = base64String.Split(',')[1];
            }
            var base64array = Convert.FromBase64String(base64String);
            string rootPath = uploadPath; //"wwwroot/Upload/Images";
            var yyyy = DateTime.UtcNow.ToString("yyyy");
            var mm = DateTime.UtcNow.ToString("MM");
            var dd = DateTime.UtcNow.ToString("dd");
            var fullPath = rootPath + "/" + yyyy + "/" + mm + "/" + dd;
            bool exists = Directory.Exists(fullPath);
            if (!exists) Directory.CreateDirectory(fullPath);
            //
            var fileName = Guid.NewGuid() + ".png";
            var filePath = Path.Combine($"{fullPath}/{fileName}");
            File.WriteAllBytes(filePath, base64array);
            return filePath.Replace("wwwroot", "");
        }
        public static async Task Base64ToFile(UploadFileModel model, string uploadPath)
        {
            if (model.PartNumber == 1)
            {
                model.Base64 = model.Base64.Split(',')[1];
            }
            var rootPath = uploadPath + "tmp"; //"wwwroot/Upload/Images";
            var yyyy = DateTime.UtcNow.ToString("yyyy");
            var mm = DateTime.UtcNow.ToString("MM");
            //var dd = DateTime.UtcNow.ToString("dd");
            var fullPath = rootPath + "/" + yyyy + "/" + mm;
            var exists = Directory.Exists(fullPath);
            if (!exists) Directory.CreateDirectory(fullPath);
            var fileName = $"{model.SessionId}_{model.PartNumber}.txt";
            var filePath = Path.Combine($"{fullPath}/{fileName}");
            await File.WriteAllTextAsync(filePath, model.Base64);
        }
        public static async Task SaveBase64ToFile (string base64, string filePath)
        {
            var bytes = Convert.FromBase64String(base64);
            await File.WriteAllBytesAsync(filePath, bytes);
        }
    }
}
