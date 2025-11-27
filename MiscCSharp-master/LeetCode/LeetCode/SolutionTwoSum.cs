public class SolutionTwoSum
{
    /*
     * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
        You may assume that each input would have exactly one solution, and you may not use the same element twice.
        You can return the answer in any order.
     */
    public SolutionTwoSum() { }
    public int[] TwoSum(int[] nums, int target)
    {
        int[] returnArray = new int[2];
        for(int i=0; i<nums.Length; i++)
        {
            for(int j=0; j<nums.Length; j++)
            {
                if (nums[i] + nums[j] == target)
                {
                    if (i != j)
                    {
                        returnArray[0] = i;
                        returnArray[1] = j;
                        return returnArray;
                    }
                }
            }
        }
        return returnArray;
    }
}