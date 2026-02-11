/**
 * Given an unsorted integer array, find the smallest missing positive integer.
 * For example, given [1,2,0] return 3, and [3,4,-1,1] return 2.
 *
 * Your algorithm should run in O(n) time and uses constant space.
 */
function findSmallestMissingPositive(nums) {
    const n = nums.length;

    // Step 1: Place numbers in their correct positions
    for (let i = 0; i < n; i++) {
        while (
            nums[i] > 0 &&
            nums[i] <= n &&
            nums[nums[i] - 1] !== nums[i]
        ) {
            const correctIndex = nums[i] - 1;
            [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
        }
    }


    console.log(nums);
    // Step 2: Find the first missing positive
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            console.log(i + 1);
            return i + 1;
        }
    }
    console.log(n + 1);
    return n + 1;
}

findSmallestMissingPositive([1,2,3,4]); 