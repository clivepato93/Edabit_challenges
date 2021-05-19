
# https://edabit.com/challenge/fvHLv9f5t6xoTWwXT
def grab_number_sum(s):
    n=[]
    f=""
    for i in range(0,len(s)+1):
        if i==len(s):
            n.append(f)
        elif s[i].isdigit():
            f+=s[i]
        else:
            n.append(f)
            f=""

    return sum(int(i) for i in n if i.isdigit())


print(grab_number_sum("aeiou5abc10"), 15)
print(grab_number_sum("75shugeb15hvyff15"), 105)
print(grab_number_sum("900uwu50uwuuwuuwu25uwu25"), 1000)
print(grab_number_sum("one1two2twenty20"), 23)
print(grab_number_sum("1s1s11"), 13)
print(grab_number_sum("75"), 75)
print(grab_number_sum("aeiou250abc10"), 260)
