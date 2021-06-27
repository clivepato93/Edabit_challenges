# https://edabit.com/challenge/guYAC7xacyWEaTq7X
def is_autobiographical(n):
    n=str(n)
    a=list(map(int,str(n)))
    for i in range(len(n)):
        if n.count(str(i))!=a[i]:
            return False
    return True

print(is_autobiographical(6210001000), True)
print(is_autobiographical(12345), False)
print(is_autobiographical(1210), True)
print(is_autobiographical(638), False)
print(is_autobiographical(0), False)

print(is_autobiographical(10 ** 10), False)
print(is_autobiographical(2020), True)
print(is_autobiographical(3211000), True)
print(is_autobiographical(3434343), False)
print(is_autobiographical(2100), False)
