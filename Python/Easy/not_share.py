# https://edabit.com/challenge/JQHEYvFJPv4eSAjox
# original code
# def not_share(lst1, lst2):
# 	for i in lst1:
# 		for j in lst2:
# 			ifi == j:
# 				return False
# 	return True

def not_share(lst1, lst2):
	for i in lst1:
		for j in lst2:
			if i == j:
				return False
	return True

def not_share(lst1, lst2):
    print(set(lst1)& set(lst2))
    return not set(lst1) & set(lst2)


print(not_share([1, 2, 3], [4, 5, 6]), True)
print(not_share([1, 2, 3], [3, 4, 5]), False)
print(not_share([3, 3, 3], [4, 5, 6]), True)
print(not_share([3, 3, 3], [1, 2, 3]), False)
print(not_share([1, 2, 3, 4, 5, 6], [7]), True)
print(not_share([1, 2, 3, 4, 5, 6], [6]), False)
print(not_share([1], [2, 3, 4, 5, 6, 7]), True)
print(not_share([1], [1, 2, 3, 4, 5, 6]), False)
