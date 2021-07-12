# https://edabit.com/challenge/7AA54JmzruLMwG6do

def is_icecream_sandwich(txt):
    if len(set(txt))!=2:
        return False
    n=1 if len(txt)%2!=0 else 0
    return txt[:(len(txt)//2)+n]==txt[(len(txt)//2):][::-1]




print(is_icecream_sandwich(""), False, "too short")
print(is_icecream_sandwich("AABBBAA"), True)
print(is_icecream_sandwich("3&&3"), True)
print(is_icecream_sandwich("yyyyymmmmmmmmyyyyy"), True)
print(is_icecream_sandwich("hhhhhhhhmhhhhhhhh"), True)
print(is_icecream_sandwich("CDC"), True)
print(is_icecream_sandwich("BBBBB"), False, "only filling")
print(is_icecream_sandwich("AAACCCAA"), False, "ends are unbalanced")
print(is_icecream_sandwich("AACDCAA"), False, "can only have one type of filling")
print(is_icecream_sandwich("AAABB"), False, "only one end")
print(is_icecream_sandwich("AA"), False, "too short")
print(is_icecream_sandwich("A"), False, "too short")
