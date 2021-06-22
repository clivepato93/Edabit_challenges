def possible_path(lst):
    return all(type(lst[v-1])!=type(lst[v]) for i,v in enumerate(range(1,len(lst))))
# (isinstance(lst[-i],int) and isinstance(lst[i],str)) or (isinstance(lst[-i],str) and isinstance(lst[i],int))
print(possible_path([1, 'H', 2, 'H', 3, 'H', 4]), True)
# print(possible_path(['H', 3, 'H']), True)
# print(possible_path(['H']), True)
# print(possible_path([3]), True)
# print(possible_path([1, 2, 'H', 3]), False)
print(possible_path(['H', 1, 3]), False)
# print(possible_path([2, 4, 'H']), False)
print(possible_path([1, 'H', 1, 'H', 1, 'H']), True)
# print(possible_path([3, 'H', 2, 'H', 3, 'H', 1]), True)
# print(possible_path(['H', 2, 'H', 3, 4, 'H', 1, 'H', 2, 'H']), False)


# https://edabit.com/challenge/G2QnBrxvpq9FacFuo
