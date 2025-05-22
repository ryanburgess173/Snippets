using Microsoft.VisualStudio.TestTools.UnitTesting;
using TheRacingSim.Helpers;

namespace TheRacingSim.Tests.Helpers;

[TestClass]
public class DBHelperTests{

     [TestMethod]
     public void InstantiateDBHelper(){
        Console.WriteLine("DBHelpersTests.InstantiateDBHelper()");
        DBHelper dbHelper = new DBHelper();
        Assert.IsNotNull(dbHelper.ConnectionString);
        Assert.IsNotNull(dbHelper.Connection);
     }
}