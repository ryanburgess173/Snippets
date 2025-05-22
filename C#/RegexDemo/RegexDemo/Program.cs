/*
 * ^ - starts with
 * $ - ends with
 * [] - range
 * () - group
 * . - single character once
 * + - one or more characters in a row
 * ? - optional preceding character match
 * \ - escape character
 * \n - newline
 * \d - Digit
 * \D - Non-Digit
 * \s - white space
 * \S - non-white space
 * \w - alphanumeric/underscore character (word chars)
 * \W - non-word characters
 * {x,y} - Repeat low (x) to high (y) (no "y" means at least x, no ",y" means
 * (x|y) - Alternative - x or y
 * [^x] - Anything but x (where x is whatever character you want)
 */

using System.Text.RegularExpressions;

string pattern = "Tim";
//string toSearch = "Tim Corey";

Console.WriteLine("Tim Corey: "+Regex.IsMatch("Tim Corey", pattern, RegexOptions.IgnoreCase));
Console.WriteLine("Timothy Burgess: "+Regex.IsMatch("Timothy Burgess", pattern, RegexOptions.IgnoreCase));
Console.WriteLine("Sometimes: " + Regex.IsMatch("Sometimes", pattern, RegexOptions.IgnoreCase));
Console.WriteLine("tim Corey: " + Regex.IsMatch("tim Corey", pattern, RegexOptions.IgnoreCase));