def palindrome(str):
    for i in range(int(len(str)/2)):
        if (str[i] != str[len(str)-1-i]):
            return False
    return True

print(palindrome("madam"))