# https://edabit.com/challenge/Qjn6B93kXLj2Kq5jB

def simplify_frac(f):
    c=[int(i) for i in f.split("/")]
    a=[i for i in range(2,c[1]+1) if not(c[0]%i) and not(c[1]%i)][-2:]
    # print(a)
    if not(a):
        return f
    elif len(a)==1:
        return "{}/{}".format(c[0]//a[-1],c[1]//a[-1])
    elif ((c[0]%a[-1]) and not(c[1]%a[-1])) or ( not(c[0]%a[-1]) and (c[1]%a[-1])):
        return "{}/{}".format(c[0]//a[0],c[1]//a[-1])

    else:
        return "{}/{}".format(c[0]//a[-1],c[1]//a[-1])

# print(simplify_frac("2/4"), "1/2")
# print(simplify_frac("15/25"), "3/5")
# print(simplify_frac("4/9"), "4/9")
print(simplify_frac("15/48"), "5/16")
# print(simplify_frac("8/41"), "8/41")
# print(simplify_frac("13/94"), "13/94")
# print(simplify_frac("9/95"), "9/95")
# print(simplify_frac("8/69"), "8/69")
# print(simplify_frac("4/31"), "4/31")
# print(simplify_frac("13/8"), "13/8")
# print(simplify_frac("7/86"), "7/86")
# print(simplify_frac("19/75"), "19/75")
print(simplify_frac("10/44"), "5/22")
# print(simplify_frac("1/93"), "1/93")
# print(simplify_frac("17/23"), "17/23")
print(simplify_frac("20/80"), "1/4")
# print(simplify_frac("12/13"), "12/13")
# print(simplify_frac("8/51"), "8/51")
# print(simplify_frac("8/29"), "8/29")
# print(simplify_frac("20/41"), "20/41")
# print(simplify_frac("2/75"), "2/75")
# print(simplify_frac("20/24"), "5/6")
# print(simplify_frac("13/22"), "13/22")
# print(simplify_frac("4/15"), "4/15")
# print(simplify_frac("9/29"), "9/29")
# print(simplify_frac("17/83"), "17/83")
# print(simplify_frac("19/65"), "19/65")
print(simplify_frac("6/58"), "3/29")
# print(simplify_frac("5/18"), "5/18")
print(simplify_frac("9/51"), "3/17")
# print(simplify_frac("19/93"), "19/93")
# print(simplify_frac("2/97"), "2/97")
# print(simplify_frac("4/63"), "4/63")
# print(simplify_frac("3/10"), "3/10")
# print(simplify_frac("11/39"), "11/39")
print(simplify_frac("2/28"), "1/14")
# print(simplify_frac("10/51"), "10/51")
# print(simplify_frac("12/76"), "3/19")
# print(simplify_frac("15/43"), "15/43")
print(simplify_frac("18/74"), "9/37")
# print(simplify_frac("7/48"), "7/48")
# print(simplify_frac("2/7"), "2/7")
# print(simplify_frac("20/73"), "20/73")
print(simplify_frac("6/24"), "1/4")
# print(simplify_frac("5/67"), "5/67")
print(simplify_frac("10/15"), "2/3")
print(simplify_frac("10/95"), "2/19")
# print(simplify_frac("19/100"), "19/100")
# print(simplify_frac("17/80"), "17/80")
# print(simplify_frac("1/54"), "1/54")
# print(simplify_frac("5/53"), "5/53")
# print(simplify_frac("1/50"), "1/50")
# print(simplify_frac("12/41"), "12/41")
