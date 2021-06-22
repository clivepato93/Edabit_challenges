# https://edabit.com/challenge/WLKF79mxKnhjtrFRB
def is_good_match(lst):
	return "bad match" if len(lst)%2==1 else [sum(lst[number:number+2]) for number in range(0,len(lst),2)]

# def is_good_match(lst):
# 	counter=0
# 	totals =[]
# 	if len(lst)%2==1:
# 		return "bad match"
# 	while counter<len(lst):
# 		totals.append(sum(lst[counter:counter+2]))
# 		counter+=2
# 	return totals

print(is_good_match([1, 2, 4, 7]), [3, 11])
print(is_good_match([1, 2, 4]), "bad match")
print(is_good_match([5, 7, 9, -1, 4, 2]), [12, 8, 6])
print(is_good_match([1, 2, 3, 4, 5, 6]), [3, 7, 11])
print(is_good_match([3, 6, 7, 9, -1]), "bad match")
print(is_good_match([5, 7, 9, -1, 4, 2, 9]), "bad match")
print(is_good_match([1, -1, 1, -1, 1, -1]), [0,0,0])
