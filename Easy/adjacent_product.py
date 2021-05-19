# https://edabit.com/challenge/DJa7PoKDhTTmwnxJg
def adjacent_product(lst):
    # print([(a,b) for a,b in zip(lst,lst[1:])])
    return max((a*b) for a,b in zip(lst,lst[1:]))

# def adjacent_product(lst):
    # print( [(lst[i],v) for i,v in enumerate(lst[1:])])
    # return [lst[i]*v for i,v in enumerate(lst[1:])]

print(adjacent_product([3, 6, -2, -5, 7, 3]), 21)
print(adjacent_product([5, 6, -4, 2, 3, 2, -23]) , 30)
print(adjacent_product([0, -1, 1, 24, 1, -4, 8, 10]), 80)
print(adjacent_product([1, 0, 1, 0, 1000]), 0)
print(adjacent_product([-23, 4, -3, 8, -12]), -12)
print(adjacent_product([-1, -2]), 2)
