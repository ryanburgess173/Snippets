/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        int lplace = 1;
        int total = 0;
        int l1Total = SumListNode(l1, total, lplace);
        lplace = 1;
        total = 0;
        int l2Total = SumListNode(l2, total, lplace);
        Console.WriteLine(l1Total);
        Console.WriteLine(l2Total);

        return l1;
    }

    public int SumListNode(ListNode l, int total, int lplace){
        total = total + (l.val*lplace);
        if(l.next == null){
            return total;
        }else{
            lplace = lplace * 10;
            SumListNode(l.next, total, lplace);
        }
    }
}