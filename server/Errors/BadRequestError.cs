namespace TaskManager.Errors
{
    public class BadRequestError
    {
        public BadRequestError(string message)
        {
            Error = message;
        }

        #region Properties
        public string Error { get; set; }
        #endregion
    }
}
