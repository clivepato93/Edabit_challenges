# https://edabit.com/challenge/CB3pKsWR3b7tvvxmN
# def is_palindrome(txt):
#     check = [s.lower() for s in txt if s.isalpha()]
#     print(check)
    # print(txt.replace(",","").replace("!","").replace("-"," ").lower())
    # return txt.replace(" ","").replace(",","").replace("!","").replace("-","").lower()==txt.replace(" ","").replace(",","").replace("!","").replace("-","").lower()[::-1]

# def is_palindrome(txt):
#     chars=",!- "
#     for c in chars:
#         txt=txt.replace(c,"")
#     return txt[::-1].lower()==txt.lower()

print(is_palindrome("A man, a plan, a cat, a ham, a yak, a yam, a hat, a canal-Panama!"), True)
print(is_palindrome("Neuquen"), True)
print(is_palindrome("Not a palindrome"), False)
