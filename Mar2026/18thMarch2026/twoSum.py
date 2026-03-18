def two_sum(arr, target):
    hash = {}
    for i , num in enumerate(arr):
        print("i", i)
        diff = target - num
        print("hash", hash)
        if(diff in hash):
            return [hash[diff], i]
        hash[num] = i
print(two_sum([2,7,11,15], 9))