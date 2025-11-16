namespace Models{
    public class Course{
        public int CourseID { get; set; }
        public string CourseCode {get;set;}
        public string CourseName {get;set;}
        public int CreditHours {get;set;}
        public bool Completed {get;set;}

        public Course(int id, string code, string name, int hours){
            this.CourseID = id;
            this.CourseCode = code;
            this.CourseName = name;
            this.CreditHours = hours;
            this.Completed = false;
        }
    }
}
