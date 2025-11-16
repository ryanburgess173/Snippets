using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Amazon;
using Amazon.DynamoDBv2;
using Models;
namespace StoodyStoodyAPI.Controllers{
    
    [ApiController]
    [Route("[controller]")]
    public class CourseController{
        
        [HttpGet]
        [Route("GetAllCourses")]
        public ActionResult<List<Course>> GetAllCourses(){
            List<Course> AllCourses = new List<Course>(){new Course(1, "C952", "Computer Architecture", 3)};
            return AllCourses;
        }

        [HttpPost]
        [Route("AddNewCourse")]
        public ActionResult<string> AddNewCourse(string code, string courseName, int creditHours){
            return "Success.";
        }
    }
}