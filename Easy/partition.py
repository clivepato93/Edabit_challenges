# https://edabit.com/challenge/o3AfiJgKNinPCFZ7k
def partition(txt, n):
    f = []
    for number in range(0,len(txt),n):
        f.append(txt[number:number+n])
    return f



print(partition("them", 2), ["th", "em"])
# print(partition("thematic", 4), ["them", "atic"])
# print(partition("movement", 2), ["mo", "ve", "me", "nt"])
print(partition("python", 2), ["py", "th", "on"])
print(partition("c++", 2), ["c+", "+"])
