# https://edabit.com/challenge/rMwssAueJjn9FmjZC
def number_pairs(txt):
    txt=txt[txt.index(" ")+1:]
    # n=[txt.count(str(i))//2 for i in list(set(map(int,txt))) if txt.count(str(i))>=2]
    # return txt.split()[1:]
    # return sum(n)
    lst=[txt.split().count(str(i))//2 for i in list(set(map(int,txt.split()))) if txt.split().count(str(i))>1]
    return sum(lst)
print(number_pairs("7 1 2 1 2 1 3 2"),2)
print(number_pairs("9 10 20 20 10 10 30 50 10 20"),3)
print(number_pairs('4 2 3 4 1'),0)
print(number_pairs( "13 10 20 20 10 10 30 50 10 20 50 50 30 20"),6)
print(number_pairs("10 1 2 5 6 5 2 1 7 8 1"),3)
print(number_pairs("16 2 3 5 11 1 11 5 7 9 13 17 3 8 7 2 1"),6)
print(number_pairs("6 1 2 2 4 3 4"),2)
