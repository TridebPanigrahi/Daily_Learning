def count_frequency(arr):
    freq = {}
    for i in arr:
        freq[i] = freq.get(i, 0) + 1
    return freq
print(count_frequency([1,2,2,3,1,4,2]))