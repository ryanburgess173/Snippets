using Microsoft.AspNetCore.Mvc;
using TheRacingSim.Helpers;

namespace TheRacingSim.Controllers;

[ApiController]
[Route("[controller]")]
public class GrabDataController : Controller{

    [HttpGet]
    [Route("ParseRaceResults")]
    public IActionResult ParseRaceResults(){
        try{
            HTMLParser parser = new HTMLParser("1949Race1.html");
            parser.ParseRaceResult();
            Console.WriteLine("Ok!");
            return Ok();
        }catch(Exception e){
            Console.WriteLine(e.ToString());
            return BadRequest(e.ToString());
        }
    }
}