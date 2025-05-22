namespace MoreAdvancedTopicsCSharp{
    class Program
    {
        static void Main(string[] args)
        {
            Thread mainThread = Thread.CurrentThread;
            mainThread.Name = "Main Thread";

            Thread thread1 = new Thread(() => CountDown("Count Down Timer"));
            Thread thread2 = new Thread(() => CountUp("Count Up Timer"));

            thread1.Start();
            thread2.Start();

            Console.WriteLine(mainThread.Name + " is Complete!");
            Console.ReadKey();
        }
        public static void CountDown(String timerName)
        {
            for(int i=10; i>=0; i--)
            {
                Console.WriteLine(timerName+": " + i + " seconds");
                Thread.Sleep(1000);
            }
            Console.WriteLine(timerName+" is complete!");
        }
        public static void CountUp(String timerName)
        {
            for(int i=0; i<=10; i++)
            {
                Console.WriteLine(timerName+": " + i + " seconds");
                Thread.Sleep(1000);
            }
            Console.WriteLine(timerName+" is complete!");
        }
    }
}