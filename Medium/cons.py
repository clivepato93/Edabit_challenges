# https://edabit.com/challenge/oKjqFFzaybbs8csiE
def cons(lst):
    return sum(lst)== sum(i for i in range(min(lst),max(lst)+1,1))
print(cons([5, 1, 4, 3, 2]), True)
print(cons([55, 59, 58, 56, 57]), True)
print(cons([-3, -2, -1, 1, 0]), True)
print(cons([5, 1, 4, 3, 2, 8]), False)
print(cons([5, 6, 7, 8, 9, 9]), False)
print(cons([5, 3]), False)
