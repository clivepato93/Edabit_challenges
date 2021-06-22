# https://edabit.com/challenge/FPpoW245mW2reusF6
def even_last(lst):
    return sum(i*lst[-1] for i in lst[::2])
print(even_last([2, 3, 4, 5]), 30)
print(even_last([]), 0)
print(even_last([2, 2, 2, 2]), 8)
print(even_last([1, 3, 3, 1, 10]), 140)
print(even_last([-11, 3, 3, 1, 10]), 20)
#Mubashir
