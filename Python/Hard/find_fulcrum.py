# https://edabit.com/challenge/pn7QpvW2fW9grvYYE

def find_fulcrum(lst):
    for i in range(0,len(lst)):
        if sum(lst[:i+1])==sum(lst[i:]):
            return lst[i]
    return -1

print(find_fulcrum([1, 2, 4, 9, 10, -10, -9, 3]), 4)
print(find_fulcrum([9, 1, 9]), 1)
print(find_fulcrum([7, -1, 0, -1, 1, 1, 2, 3]), 0)
print(find_fulcrum([8, 8, 8, 8]), -1)
print(find_fulcrum([9, 3, 4, 8, 1]), -1)
print(find_fulcrum([1, -1, 10, 5, -4, -1]), 10)
