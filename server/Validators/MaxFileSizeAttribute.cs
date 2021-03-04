using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations;
using TaskManager.File;

namespace TaskManager.Validators
{
    public class MaxFileSizeAttribute : ValidationAttribute
    {
        public MaxFileSizeAttribute(int maxFileSize)
        {
            _maxFileSize = maxFileSize;
        }

        #region Fields
        private readonly long _maxFileSize;
        #endregion

        #region Protected Methods
        protected override ValidationResult IsValid(
            object value,
            ValidationContext validationContext)
        {
            if (value is IFormFile file)
            {
                if (file.Length > _maxFileSize) return new ValidationResult(GetErrorMessage(validationContext.DisplayName));
            }

            return ValidationResult.Success;
        }
        #endregion

        #region Private Methods
        private string GetErrorMessage(string fieldName)
        {
            return $"{fieldName} {InvalidFileMessages.ERR_FILE_SIZE}";
        }
        #endregion
    }
}
