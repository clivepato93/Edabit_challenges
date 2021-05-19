# https://edabit.com/challenge/iK2F9DNAiTor2wFob
'''
Turn each character in a string s into its ASCII character code and join them together to create a number.

For example, for string "abc", the number is 979899. We will call this number "num1".

"abc" ➞ "a" = 97, "B" = 98, "C" = 99 ➞ 979899
Then replace any incidence of the number 7 with the number 1, and call this number "num2":

num1 = 979899

num2 = 919899
Return the difference between the sum of the digits in num1 and num2:

  (9 + 7 + 9 + 8 + 9 + 9)
- (9 + 1 + 9 + 8 + 9 + 9)
-------------------------
         ➞  6
'''
def calc(s):
    total_of_word="+".join(["+".join(str(ord(letter))) for letter in s])
    mod="+".join(["+".join(str(int(str(ord(letter)).replace("7","1")))) for letter in s])
    return eval(total_of_word)-eval(mod)

# print(calc('ABCDabcd'), 12)
# print(calc('cdefgh'), 0)
# print(calc('ifkhchlhfde'), 6)
# print(calc('aaaaaddddrijkl'), 36)
# print(calc('abcdefghijklmnopqrstuvwxyz'), 18)
# print(calc('AABBCC'), 12)
print(calc('ABCDEFGH'), 24)
# print(calc('anmatmudtr'), 18)
# print(calc('suwvete'), 6)
# print(calc('edabit'), 6)
# print(calc('EDABIT'), 6)
# print(calc('SLOWLLLY'), 36)
# print(calc('COMEnananan'), 42)
# print(calc('coupdetat'), 12)
# print(calc('arsenal'), 12)
# print(calc('byoaaasglrrsA'), 18)
# print(calc('byoglrrsA'), 0)
# print(calc('eyyyhenDDDUEN'), 6)
# print(calc('ABCDEFGHIJKLMNOPQRSTUVWXYZ'), 78)
# print(calc('zyxwvutsrqpon'), 6)
# print(calc('ZYXWVUTSR'), 6)
