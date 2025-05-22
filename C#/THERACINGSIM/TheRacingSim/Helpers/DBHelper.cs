using TheRacingSim.Models;
using System.Text.Json;
using MySql.Data;
using MySql.Data.MySqlClient;

namespace TheRacingSim.Helpers;

public class DBHelper : IDBHelper{
    private string ConnectionString { get; set; }
    private MySqlConnection Connection { get; set;}
    private MySqlCommand Command { get; set; }

    public DBHelper(){
        this.GrabConnectionString();
        this.EstablishConnection();
    }
    public void GrabConnectionString(){
        try{
            string jsonData = File.ReadAllText("/Users/johnathanburgess/Configuration/MachineConfig.json");
            if(jsonData != null){
                ConfigurationModel config = JsonSerializer.Deserialize<ConfigurationModel>(jsonData);
                if(config != null){
                    this.ConnectionString = config.RacingSimDBConnectionString;
                }
            }
        }catch(Exception e){
            Console.WriteLine(e.ToString());
        }
    }

    public void EstablishConnection(){
        try{
            this.Connection = new MySqlConnection(this.ConnectionString);
        }catch(Exception e){
            Console.WriteLine(e.ToString());
        }
    }

    public void CreateDBCommand(string commandString){
        try{
            this.Command = this.Connection.CreateCommand();
            this.Command.CommandText = commandString;
        }catch(Exception e){
            Console.WriteLine(e.ToString());
        }
    }
}