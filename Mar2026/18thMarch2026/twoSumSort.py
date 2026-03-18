def two_sum(arr, target):
    hashData = {}
    for i, num in enumerate(arr):
        diff = target - num
        if(diff in hashData):
            return [hashData[diff] + 1, i+1]
        hashData[num] = i

print(two_sum([2,7,11,15], 9))