# https://edabit.com/challenge/93o8dzshnn2fDHdpX
def lst_ele_sum(nums):
    final=[]
    c=nums[:]
    for num in range(0,len(nums)):
        final.append(sum(nums)-nums[num])
    return final
# print(lst_ele_sum([1, 2]), [2, 1])
print(lst_ele_sum([1, 2, 3]),  [5, 4, 3])
# print(lst_ele_sum([1, 2, 3, 4, 5]), [14, 13, 12, 11, 10])
print(lst_ele_sum([10, 20, 30, 40, 50, 60]),  [200, 190, 180, 170, 160, 150])
