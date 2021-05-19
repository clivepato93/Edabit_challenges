# https://edabit.com/challenge/HXkpnCxJgxkFwaReT
def count_datatypes(*args):
    i=0
    s=0
    b=0
    l=0
    t=0
    d=0
    f=[]
    for x in range(0,len(args)):
        if type(args[x])==int:
            i+=1
        elif type(args[x])==str:
            s+=1
        elif type(args[x])==bool:
            b+=1
        elif type(args[x])==list:
            l+=1
        elif type(args[x])==tuple:
            t+=1
        elif type(args[x])==dict:
            d+=1
    f.append(i)
    f.append(s)
    f.append(b)
    f.append(l)
    f.append(t)
    f.append(d)
    return f



print(count_datatypes(1, 45, "Hi", False), [2, 1, 1, 0, 0, 0])
print(count_datatypes([10, 20], ("t", "Ok"), 2, 3, 1), [3, 0, 0, 1, 1, 0])
print(count_datatypes("Hello", "Bye", True, True, False, {"1": "One", "2": "Two"}, [1, 3], {"Brayan": 18}, 25, 23), [2, 2, 3, 1, 0, 2])
print(count_datatypes(), [0, 0, 0, 0, 0, 0])
print(count_datatypes(4, 21, ("ES", "EN"), ("a", "b"), False, [1, 2, 3], [4, 5, 6]), [2, 0, 1, 2, 2, 0])
print(count_datatypes("Nice", "Bad", 1, 999, 0, False, {"Hi": "Bye"}), [3, 2, 1, 0, 0, 1])
