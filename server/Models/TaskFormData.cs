using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel.DataAnnotations;
using System.Threading.Tasks;
using TaskManager.Extensions;
using TaskManager.Validators;

namespace TaskManager.Models
{
    public class TaskFormData
    {
        #region Properties
        [Required]
        public string Description { get; set; }

        public string Id { get; set; }

        [AllowedTypes(new string[] { "image/jpeg", "image/pjpeg", "image/png" })]
        [AllowedExtensions(new string[] { ".jpg", ".jpeg", ".png" })]
        [MaxFileSize(1 * 1024 * 1024)]
        public IFormFile Image { get; set; }
        #endregion

        #region Public Methods
        public async Task<TaskItem> ToTaskItemAsync()
        {
            var id = Guid.NewGuid().ToString();

            return await ToTaskItemAsync(id);
        }

        public async Task<TaskItem> ToTaskItemAsync(string id)
        {
            var image = await Image.ToBase64StringAsync();

            return new TaskItem
            {
                Description = Description,
                Id = id,
                Image = image
            };
        }
        #endregion
    }
}
