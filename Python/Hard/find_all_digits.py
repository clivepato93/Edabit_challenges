# https://edabit.com/challenge/rPnq2ugsM7zsWr3Pf


def find_all_digits(nums):
    lst=[]
    for n in nums:
        num=[int(i) for i in str(n)]
        for i in num:
            if i not in lst:
                lst.append(i)
        if list(range(0,10)) == sorted(lst):
            return n
    return "Missing digits!"

print(find_all_digits([3129, 7689, 7449, 4389, 5855, 9670, 9245, 1291, 7367, 1810]), 9670)
print(find_all_digits([2758, 3737, 3349, 5118, 7004, 6106, 8868, 6687, 2510, 8911]), 6106)
print(find_all_digits([5343, 6743, 2922, 2423, 7050, 5116, 3992, 2707, 2435, 5251]), "Missing digits!")
print(find_all_digits([4169, 4511, 1498, 6945, 7959, 2666, 7872, 3217, 5408, 8662]), 5408)
print(find_all_digits([4823, 1049, 9555, 9466, 2191, 9316, 1105, 4489, 8318, 7081]), 7081)
print(find_all_digits([9827, 4405, 6317, 6086, 8091, 7800, 8365, 2544, 3402, 7248]), 6317)
print(find_all_digits([2227, 7262, 9322, 8967, 4807, 8708, 3317, 6543, 9522, 7106]), 6543)
