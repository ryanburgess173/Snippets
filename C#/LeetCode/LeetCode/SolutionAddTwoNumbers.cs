/*
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order, and each of their nodes contains a single digit. 
 * Add the two numbers and return the sum as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 */
public class SolutionAddTwoNumbers
{
    public SolutionAddTwoNumbers() { }
    public String StringHolder = "";
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2)
    {
        GrabStringOfValue(l1);
        String l1String = this.StringHolder;
        this.StringHolder = "";
        GrabStringOfValue(l2);
        String l2String = this.StringHolder;

        // temporary:
        return new ListNode();
    }
    public void GrabStringOfValue(ListNode lN)
    {
        this.StringHolder += lN.val.ToString();
        if (lN.next != null)
        {
            GrabStringOfValue(lN.next);
        }
    }
    public ListNode ConvertFromStringToListNode(String input)
    {
        for(int i=0; i<input.Length; i++)
        {

        }
    }
    public ListNode GenerateListNode(int input)
    {
        return new ListNode(input);
    }
}