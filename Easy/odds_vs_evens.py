# https://edabit.com/challenge/uWpS5xMjzZFAkiQzL

# def odds_vs_evens(num):
#     odd = 0
#     even = 0
#     c = list(str(num))
#     for number in c:
#         if int(number)%2==0:
#             even+=int(number)
#         else:
#             odd+=int(number)
#     # print(even,odd)
#     if even == odd:
#         return "equal"
#     elif even > odd:
#         return "even"
#     else:
#         return  "odd"
#
# def odds_vs_evens(num):
#     return "equal" if sum(int(i) for i in str(num) if int(i)%2==0) == sum(int(i) for i in str(num) if int(i)%2==1) else "even" if sum(int(i) for i in str(num) if int(i)%2==0) > sum(int(i) for i in str(num) if int(i)%2==1) else "odd"
#
# print(odds_vs_evens(44547), 'equal')
# print(odds_vs_evens(412420), 'even')
# print(odds_vs_evens(128797), 'odd')
# print(odds_vs_evens(838768), 'even')
#
