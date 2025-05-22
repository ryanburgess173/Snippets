/* this code is inefficient and needs algorithmic improvement */
int MaxSubArray(int[] nums)
{
    int highestCount = nums[0];
    List<int> highestSubArray = new List<int>();
    int count = 0;
    List<int> subarray = new List<int>();
    for (int i = 0; i < nums.Length; i++)
    {
        subarray = new List<int>();
        subarray.Add(nums[i]);
        count = nums[i];
        if (count >= highestCount)
        {
            highestCount = count;
            highestSubArray = new List<int>();    
            foreach(int item in subarray)
            {
                highestSubArray.Add(item);
            }
        }
        if (i + 1 < nums.Length)
        {
            for (int j = (i + 1); j < nums.Length; j++)
            {
                subarray.Add(nums[j]);
                count += nums[j];
                if (count > highestCount)
                {
                    highestCount = count;
                    highestSubArray = new List<int>();
                    foreach (int item in subarray)
                    {
                        highestSubArray.Add(item);
                    }
                }
            }
        }
    }
    return highestCount;
}

int[] nums = new int[24] { -2, 1, -3, 4, -1, 2, 1, -5, 4, 34, -33, 2, 23, 5, -50, -50, 50, -25, 57, -100, 67, -5, 50, -83 };
int result = MaxSubArray(nums);
Console.Write(result);