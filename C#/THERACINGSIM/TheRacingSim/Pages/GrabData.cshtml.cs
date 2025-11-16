
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace TheRacingSim.Pages;
public class GrabDataModel : PageModel{
    public List<string> Series { get; set; }
    public List<int> Years { get; set; }

    public GrabDataModel(){
        this.Years = new List<int>();
        for(var i = 1949; i<=DateTime.Now.Year; i++){
            Years.Add(i);
        }
        this.Series = new List<string>();
    }
}