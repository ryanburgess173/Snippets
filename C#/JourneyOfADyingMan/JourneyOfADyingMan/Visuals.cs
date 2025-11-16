using System;
using System.Diagnostics;

namespace JourneyOfADyingMan
{
    public class Visuals
    {
        public Visuals(){
        }

        public void IntroScreen1(){
            Console.WriteLine("==========================================================================================");
            Console.WriteLine("| Produced By                                                                            |");
            Console.WriteLine("==========================================================================================\n");
            Console.WriteLine(" JJJJJJJJJJJJJJJJJJJJJJJJ BBBBBBBBBBBBB");
            Console.WriteLine(" JJJJJJJJJJJJJJJJJJJJJJJJ BBBBBBBBBBBBBBB");
            Console.WriteLine("          JJJJJ           BBB          BBB");
            Console.WriteLine("          JJJJJ           BBB           BBB");
            Console.WriteLine("          JJJJJ           BBB          BBB");
            Console.WriteLine("          JJJJJ           BBBBBBBBBBBBBBB                 Studios :)");
            Console.WriteLine("          JJJJJ           BBB          BBB");
            Console.WriteLine("          JJJJJ           BBB           BBB");
            Console.WriteLine("          JJJJJ           BBB           BBB");
            Console.WriteLine(" JJJJ     JJJJJ           BBB          BBB");
            Console.WriteLine(" JJJJJJJJJJJJJ            BBBBBBBBBBBBBBB");
            Console.WriteLine(" JJJJJJJJJJJJ             BBBBBBBBBBBBBB\n");
            Console.WriteLine("==========================================================================================");
            Thread.Sleep(2000);
        }

        public void ClearScreen(){
            for(int i=0; i<60; i++){
                Console.WriteLine(" ");
            }
        }
    }
}
