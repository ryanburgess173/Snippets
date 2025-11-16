using System.ComponentModel.DataAnnotations;

namespace PracticeApplication.Models
{
    public enum TestStatus
    {
        [Display(Name = "Not Run")]
        NotRun,
        Passing,
        Failed,
        Ignored
    }
}