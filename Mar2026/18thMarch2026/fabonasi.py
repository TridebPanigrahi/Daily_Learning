def fabonnasi(num):
    fist = 0
    second = 1
    third = 1
    for i in range(num-3):
        fist = second
        second = third
        third = second + fist
        print(third)

fabonnasi(6)