# https://edabit.com/challenge/PSg77AZJGACk4a7gt
# [::-1]
def meme_sum(a, b):
    c=max(str(a),str(b),key=len)
    a=str(a).zfill(len(c))
    b=str(b).zfill(len(c))
    # print(a,b)
    n=""
    for i in range(0,len(a)):
        n+=str(int(a[i])+int(b[i]))
    return int(n)
print(meme_sum(2, 11), 13)
# print(meme_sum(0, 1), 1)
# print(meme_sum(0, 0), 0)
print(meme_sum(16, 18), 214)
# print(meme_sum(26, 39), 515)
# print(meme_sum(122, 81), 1103)
# print(meme_sum(1222, 30277), 31499)
# print(meme_sum(38810, 1383), 391193)
# print(meme_sum(1236, 30977), 31111013)
# print(meme_sum(49999, 49999), 818181818)

# Mubashir
