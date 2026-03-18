def count_vowel(str):
    vowel = ['a','e','i','o','u']
    newStr = str.lower()
    count =0
    for i in newStr:
        if(i in vowel):
            count+=1
    return count

print(count_vowel("interview"))
