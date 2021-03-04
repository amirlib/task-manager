using Microsoft.AspNetCore.Http;
using System;
using System.IO;
using System.Threading.Tasks;

namespace TaskManager.Extensions
{
    public static class IFormFileExtension
    {
        #region Public Methods
        public static async Task<string> ToBase64StringAsync(this IFormFile image)
        {
            if (image is null || image.Length == 0) return null;

            using (var ms = new MemoryStream())
            {
                await image.CopyToAsync(ms);

                return Convert.ToBase64String(ms.ToArray());
            }
        }
        #endregion
    }
}
