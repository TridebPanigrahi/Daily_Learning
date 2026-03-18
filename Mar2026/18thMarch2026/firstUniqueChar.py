from collections import defaultdict

def first_unique_char(s):
    freq = defaultdict(int)
    result = ""
    for i in s:
        freq[i] +=1
    
    for i in s:
        if(freq[i] == 1): 
            result = i
    if(result):
        return result
    else: return -1

print(first_unique_char("aabbcddee"))
    