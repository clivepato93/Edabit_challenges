# https://edabit.com/challenge/XfSvKco6KZFRfgQyj
def find_a_seat(n, lst):
    c=n/len(lst)
    a=[i for i,v in enumerate(lst) if v/float(c)<=0.5]
    return a[0] if a else -1

print(find_a_seat(20, [3, 5, 4, 2]), 3)
print(find_a_seat(1000, [50, 20, 80, 90, 100, 60, 30, 50, 80, 60]), 0)
print(find_a_seat(200, [35, 23, 40, 21, 38]), -1)
print(find_a_seat(200, [35, 23, 18, 10, 40]), 2)
print(find_a_seat(21, [6, 3, 7]), 1)
print(find_a_seat(11037, [1839, 0, 0]), 0)
