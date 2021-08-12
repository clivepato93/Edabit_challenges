# https://edabit.com/challenge/kEww9Hjds5Zkgjyfj
# not complete yet
def replace_next_largest(lst):
    og_lst = lst[:]
    for i in range(0, len(lst)):
        # if lst[i]==max(lst):
        if lst[i] == max(lst):
            lst[i] = -1
        else:

        print(lst)
    # return(lst)

# def replace_next_largest(lst):
#     og_lst = lst[:]
#     for i in range(0, len(lst)):
#         # if lst[i]==max(lst):
#         if lst[i] == max(lst):
#             lst[i] = -1
#         else:
#             o = 0
#             x = False
#             while x == False:
#                 if og_lst[o] > lst[i]:
#                     lst[i] = og_lst.pop(o)
#                     x = True
#                     print(og_lst)
#                 o += 1
#         print(lst)
#     # return(lst)


# print(replace_next_largest([5, 7, 3, 2, 8]), [7, 8, 5, 3, -1])
print(replace_next_largest([4, 1, 6, -7, -8, 2]), [6, 2, -1, 1, -7, 4])
# print(replace_next_largest([2, 3, 4, 5]), [3, 4, 5, -1])
# print(replace_next_largest([1, 0, -1, 8, -72]), [8, 1, 0, -1, -1])
