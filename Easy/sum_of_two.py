# https://edabit.com/challenge/ncLp4ZXvz4x4oEHYh
'''
Given two unique integer lists a and b, and an integer target value v,
create a function to determine whether there is a pair of numbers
that add up to the target value v, where one number comes from one
list a and the other comes from the second list b.

Return True if there is a pair that adds up to the target value and False otherwise.
'''
def sum_of_two(a, b, v):
    return any(b for number in a for value in b if number+value==v)

def sum_of_two(A, B, v):
    # print([a+b for a in A for b in B])
    return v in [a+b for a in A for b in B]

def sum_of_two(a, b, v):
    l=[]
    for number in a:
        for value in b:
            l.append(number+value)
    return v in l
    # print([a+b for a in A for b in B])
    # return v in [a+b for a in A for b in B]

print(sum_of_two([1,2,3], [10,20,30,40,50], 42), True)
print(sum_of_two([1,2,3], [10,20,30,40,50], 44), False)
print(sum_of_two([1,2,3], [10,20,30,40,50], 11), True)
print(sum_of_two([1,2,3], [10,20,30,40,50], 60), False)
print(sum_of_two([1,2,3], [10,20,30,40,50], 53), True)
print(sum_of_two([1,2,3], [10,20,30,40,50], 4), False)
