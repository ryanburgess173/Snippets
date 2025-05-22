using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using TheRacingSim.Helpers;
using TheRacingSim.Models;

[ApiController]
public class SeasonDataController{

    public DBHelper Db { get; set; }

    public SeasonDataController(DBHelper dBHelper){
        this.Db = dBHelper;
    }

    [HttpGet]
    [Route("ViewScheduleForSingleSeason")]
    public async Task<SeasonData> ViewScheduleForSingleSeason(int year){
        SeasonData seasonData = new SeasonData();
        MySqlCommand sql = this.Db.CreateDBCommand("CALL ")

        return seasonData;
    }
}