# https://edabit.com/challenge/juHLpxMYzfcREeMDo

# def col_with_max_sum(nums, n):
#     nums = [nums[i:i+n] for i in range(0, len(nums), n)]
#     print(nums)
# c_total = []
# a = 0
# v = 0
# for x in range(len(nums[0])):
#     for n in range(len(nums)):
#         if a == len(nums[0]):
#             c_total.append(v)
#             a = 0
#             v = 0
#         v += (nums[n][x])
#         a += 1
#         # print(a, v)
# c_total.append(v)
# return c_total.index(max(c_total))+1

def col_with_max_sum(nums, n):
    p = len(nums)//n
    nums = [nums[i:i+n] for i in range(0, len(nums), n)]
    t = []
    o = []
    for x in range(len(nums[0])):
        for n in range(len(nums)):
            if len(o) == p:
                t.append(sum(o))
                o = []
            o.append(nums[n][x])
    t.append(sum(o))
    return t.index(max(t))+1

    # for i in range(0, len(nums)//n):
    #     print(nums[i::n])
    # return nums.index(max(nums)) if nums.index(max(nums)) > 0 else nums.index(max(nums))+1
# print(col_with_max_sum([14, 9, 19, 6, 13, 13, 3, 2, 12], 3), 3)
# print(col_with_max_sum([1, 13, 15, 5, 16, 1, 4, 9, 20], 3), 2)
print(col_with_max_sum([15, 4, 6, 10, 6, 4], 2), 1)
print(col_with_max_sum([5, 7, 2, 12, 20, 7, 1, 12, 8, 7, 12, 8], 3), 2)
print(col_with_max_sum([7, 9, 13, 16, 17, 1,
                        10, 6, 3, 19, 6, 10, 8, 18, 20, 4], 8), 7)
