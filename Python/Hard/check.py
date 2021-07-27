# https://edabit.com/challenge/KEsQGp7LsP3KwmqJ7
import collections
def check(lst):

    x=[sorted(lst),sorted(lst,reverse=True)]
    for i in range(1,len(lst)):
        lst1=collections.deque(lst)
        lst2=collections.deque(lst)
        lst1.rotate(i)
        lst2.rotate(-i)
        c,d=list(lst1),list(lst2)
        if c in x or d in x:
            return "YES"

    return "NO"


# print(check([3, 4, 5, 1, 2]), "YES")
print(check([1, 2, 3]), "NO")
# print(check([7, 9, 11, 12, 5]), "YES")
# print(check([13, 22, 34, 1, 11]), "YES")
print(check([5, 3, 4, 1]), "NO")
print(check([100, 120, 130, 50, 120, 111]), "NO")