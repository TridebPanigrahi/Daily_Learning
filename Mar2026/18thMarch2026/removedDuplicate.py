def remove_duplicate(arr):
    newArr =[]
    for i in arr:
        if(i not in newArr):
            newArr.append(i)
    return newArr

print(remove_duplicate([1,2,2,3,4,4,5]))