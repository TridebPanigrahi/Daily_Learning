def second_larhest(arr):
    first_lr = 0
    second_lr = 0
    for i in arr:
        if(i>first_lr):
            second_lr = first_lr
            first_lr = i
        elif(i>second_lr and i<first_lr):
            second_lr = i
    return second_lr

print(second_larhest([10, 5, 8, 20, 15]))