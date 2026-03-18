def missing_num(arr):
    if(arr[0]!= 1): return 1
    for i in range(len(arr)):
        nextEle = arr[i+1]
        if(nextEle - 1 != arr[i]):
            return nextEle - 1
        
print(missing_num([1,2,4,5]))