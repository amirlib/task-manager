using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel.DataAnnotations;
using System.IO;
using System.Linq;
using TaskManager.File;

namespace TaskManager.Validators
{
    public class AllowedExtensionsAttribute : ValidationAttribute
    {
        public AllowedExtensionsAttribute(string[] extensions)
        {
            _extensions = extensions;
        }

        #region Fields
        private readonly string[] _extensions;
        #endregion

        #region Protected Methods
        protected override ValidationResult IsValid(
            object value,
            ValidationContext validationContext)
        {
            if (value is IFormFile file)
            {
                var extension = Path.GetExtension(file.FileName);

                if (!_extensions.Contains(extension.ToLower()))
                {
                    return new ValidationResult(GetErrorMessage(validationContext.DisplayName));
                }
            }

            return ValidationResult.Success;
        }
        #endregion

        #region Private Methods
        private string GetErrorMessage(string fieldName)
        {
            return $"{fieldName} {InvalidFileMessages.ERR_FILE_EXT}";
        }
        #endregion
    }
}
