# https://edabit.com/challenge/Hg2gFcJDg7Rz5bd5m

dict1 = {'a': 5, 'b': 13, 'c': 7}
dict2 = {'b': 5, 'c': 8, 'd': 91, 'e': 99}
dict3 = {'a': 1, 'b': 34}
dict4 = {'c': 9, 'd': 8}



def intersection(h1, h2):
	return [{x:h1[x] for x in h1 if x in h2},{x:h2[x] for x in h2 if x in h1}]


print(intersection(dict1, dict2), [{'b': 13, 'c': 7}, {'b': 5, 'c': 8}])
print(intersection(dict1, dict4), [{'c': 7}, {'c': 9}])
print(intersection(dict1, dict3), [{'a': 5, 'b': 13}, {'a': 1, 'b': 34}])
print(intersection(dict3, dict4), [{}, {}])
