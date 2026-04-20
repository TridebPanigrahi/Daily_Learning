function longestSubarrayWithSumK(nums, k) {
    let map = new Map(); // prefixSum -> index
    let prefixSum = 0;

    let maxLength = 0;
    let start = -1, end = -1;

    for (let i = 0; i < nums.length; i++) {
        prefixSum += nums[i];

        // Case 1: from index 0
        if (prefixSum === k) {
            if (i + 1 > maxLength) {
                maxLength = i + 1;
                start = 0;
                end = i;
            }
        }

        // Case 2: subarray exists
        if (map.has(prefixSum - k)) {
            let prevIndex = map.get(prefixSum - k);
            let length = i - prevIndex;

            if (length > maxLength) {
                maxLength = length;
                start = prevIndex + 1;
                end = i;
            }
        }

        // store first occurrence
        if (!map.has(prefixSum)) {
            map.set(prefixSum, i);
        }
    }

    return start !== -1 ? nums.slice(start, end + 1) : [];
}

console.log(longestSubarrayWithSumK([1, -1, 5, -2, 3], 2))