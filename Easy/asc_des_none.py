# https://edabit.com/challenge/NM8JbG5K2ajKjkqpj
def asc_des_none(lst, s):
	return sorted(lst) if s=="Asc" else sorted(lst,reverse=True) if s=="Des" else lst


print(asc_des_none([4, 3, 2, 1], "Asc"), [1, 2, 3, 4])
print(asc_des_none([7, 8, 11, 66], "Des"), [66, 11, 8, 7])
print(asc_des_none([1, 2, 3, 4], "None"),[1, 2, 3, 4])
print(asc_des_none([1, 0, 1, 0], "Asc"), [0, 0, 1, 1])
print(asc_des_none([1, 2, 2, 2, 2, 2, 2], "Des"), [2, 2, 2, 2, 2, 2, 1])
print(asc_des_none([9, 7, 43, 11, 16, 111, 19], "Asc"), [7, 9, 11, 16, 19, 43, 111])
