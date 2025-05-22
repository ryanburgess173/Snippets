using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorPizzeria.Models;

namespace RazorPizzeria.Pages{
    public class PizzaModel : PageModel{
        public List<PizzasModel> fakePizzaDB = new List<PizzasModel>(){
            new PizzasModel(){
                ImageTitle="Margherita.jpg", 
                PizzaName="Margherita", 
                BasePrice=2, 
                TomatoSauce=true, 
                Cheese=true, 
                FinalPrice=4
            },
            new PizzasModel(){
                ImageTitle="Bolognese.jpg", 
                PizzaName="Bolognese", 
                BasePrice=3, 
                TomatoSauce=true, 
                Cheese=true, 
                Beef=true,
                FinalPrice=5
            },
            new PizzasModel(){
                ImageTitle="Mushroom.jpg", 
                PizzaName="Mushroom", 
                BasePrice=2, 
                TomatoSauce=true, 
                Cheese=true,
                Mushroom=true,
                FinalPrice=4
            },
            new PizzasModel(){
                ImageTitle="Hawaiian.jpg", 
                PizzaName="Hawaiian", 
                BasePrice=(float)1.75,
                TomatoSauce=true, 
                Cheese=true, 
                FinalPrice=(float)3.75
            },
        };
        public void OnGet(){

        }
    }
}