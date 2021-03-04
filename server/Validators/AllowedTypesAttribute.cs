using Microsoft.AspNetCore.Http;
using System;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using TaskManager.File;

namespace TaskManager.Validators
{
    public class AllowedTypesAttribute : ValidationAttribute
    {
        public AllowedTypesAttribute(string[] types)
        {
            _types = types;
        }

        #region Fields
        private readonly string[] _types;
        #endregion

        #region Protected Methods
        protected override ValidationResult IsValid(
            object value,
            ValidationContext validationContext)
        {
            if (value is IFormFile file)
            {
                if (!_types.Contains(file.ContentType))
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
            return $"{fieldName} {InvalidFileMessages.ERR_FILE_TYPE}";
        }
        #endregion
    }
}
