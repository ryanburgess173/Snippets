/*SolutionTwoSum s1 = new();
int[] array = new int[5] { 1, 6, 7, 9, 5 };
int[] array2 = new int[2] { 3, 3 };
int target = 13;
int target2 = 6;
int[] arrayResult = new int[2];
arrayResult = s1.TwoSum(array2, target2);
foreach(int i in arrayResult)
{
    Console.WriteLine(i);
}*/

SolutionAddTwoNumbers sA2N = new SolutionAddTwoNumbers();
ListNode lN1 = new ListNode(3);
ListNode lN2 = new ListNode(3, lN1);
ListNode lN3 = new ListNode(2, lN2); // represents 233
ListNode lN11 = new ListNode(2);
ListNode lN12 = new ListNode(1, lN11);
ListNode lN13 = new ListNode(1, lN12); // represents 112
sA2N.AddTwoNumbers(lN3, lN13);