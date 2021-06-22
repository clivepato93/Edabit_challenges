# https://edabit.com/challenge/hYiCzkLBBQSeF8fKF
#
# def count(deck):
#     sum = 0
#     for card in deck:
#         if card in [2,3,4,5,6]:
#             sum +=1
#         elif card in [10,'J','Q','K','A']:
#             sum -=1
#     return sum
#
# def count(deck):
# 	return sum([1 if str(i) in '23456' else -1 if str(i) in 'AKQJ10' else 0 for i in deck])
#
# print(count([5, 9, 10, 3, 'J', 'A', 4, 8, 5]), 1, 'Example 1')

# https://edabit.com/challenge/sLq6GDa4NzDWRD9hY
def count(n):
    c=0
    n=abs(n)
    if n==0:
        return 1
    while n>0:
        n//=10
        c+=1
    return c

print(count(4444))
print(count(-92563))
