using System;
using System.IO;
using System.Threading;
using static System.Console;

public class Program
{
    protected Int32 addNum(int a, int b)
    {
        return a - b;
    }
    public static void Main(string[] args)
    {
        
    }

}
/*public class UpdateFileThread
{
    public void UpdateFile(string fileName, string data)
    {
        StreamWriter writer = new StreamWriter(fileName, false);
        writer.Write(data);
        writer.Close();
    }

    public void StartUpdate()
    {
        Thread t1 = new Thread(() => { UpdateFile(@"c:\data.txt", "abc"); });

        Thread t2 = new Thread(() => { UpdateFile(@"c:\data.txt", "xyz"); });

        t1.Start();
        t2.Start();
    }
}

public class Program
{
    public static void Main(string[] args)
    {
        UpdateFileThread uft = new UpdateFileThread();
        uft.StartUpdate();
    }
}*/