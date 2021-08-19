# https://edabit.com/challenge/APNhiaMCuRSwALN63
def almost_palindrome(txt):
    n_word = txt[::-1]
    return sum(n_word[i] != txt[i] for i in range(0, len(n_word)))== 2 


print(almost_palindrome("abcdcbg"), True)
print(almost_palindrome("abccia"), True)
print(almost_palindrome("abcdaaa"), False)
print(almost_palindrome("gggfgig"), True)
