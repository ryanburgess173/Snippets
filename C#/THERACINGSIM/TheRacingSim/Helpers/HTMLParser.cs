
using HtmlAgilityPack;
using Microsoft.VisualBasic;

namespace TheRacingSim.Helpers;

public class HTMLParser{
    public HtmlWeb html { get; set; }
    public HtmlDocument doc {get;set;}
    public HTMLParser(string filename){
        try{
            this.html = new HtmlWeb();
            this.doc = html.Load("https://www.racing-reference.info/race-results/1949-01/W/");
        }catch(Exception e){
            Console.WriteLine(e.ToString());
        }
        this.html = new HtmlWeb();
        this.doc = new HtmlDocument();
    }
    public void ParseRaceResult(){
        try{
            var table = this.doc.DocumentNode.SelectNodes("//table[@class='tb race-results-tbl ']");
            if(table ==  null){
                throw new NullReferenceException();
            }
        }catch(Exception e){
            Console.WriteLine(e.ToString());
        }
    }
}