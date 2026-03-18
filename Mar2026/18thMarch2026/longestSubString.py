def longest_sub_string(s):
    left =0
    maxlength =1
    newSet = set()
    for right in range(len(s)):
        while s[right] in newSet :
            newSet.remove(s[left])
            left+=1
        
        newSet.add(s[right])

        if(right -left + 1 > maxlength):
            maxlength = right - left + 1

    return maxlength

print(longest_sub_string("abcabcbb"))