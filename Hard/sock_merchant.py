# https://edabit.com/challenge/oq2FxAx5bJZgPLk9r

def sock_merchant(lst):
    s=set(lst)
    return sum(lst.count(i)/2 for i in s)

print(sock_merchant([10, 20, 20, 10, 10, 30, 50, 10, 20]), 3)
print(sock_merchant([50, 20, 30, 90, 30, 20, 50, 20, 90]), 4)
print(sock_merchant([90, 20, 30, 40, 40, 20, 30, 20, 90]), 4)
print(sock_merchant([10, 40, 40, 40, 40, 20, 10, 10, 10]), 4)
print(sock_merchant([50, 40, 30, 10, 60, 60, 90, 80, 10]), 2)
print(sock_merchant([50, 40, 30, 100, 60, 65, 90, 80, 10]), 0)
