namespace Generics;

class Program
{
    static void Main(string[] args)
    {
        var number = new Nullable<int>();
        System.Console.WriteLine("Has value ?" + number.HasValue);
        System.Console.WriteLine("Value: "+number.GetValueOrDefault());
    }
}
