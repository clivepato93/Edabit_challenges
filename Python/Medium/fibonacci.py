# https://edabit.com/challenge/8Ko5tPg8Ch5SRCAhA
def fibonacci(num):
    if num <=1:
        return 1
    f= [i for i in range(num+2)]
    for i in range(2,len(f)):
        f[i]=f[i-1]+f[i-2]
    f=f[1:]
    return f[num]
print(fibonacci(10))
# print(fibonacci(3), 3)
print(fibonacci(7), 21)
# print(fibonacci(12), 233)
# print(fibonacci(0), 1)
# print(fibonacci(1), 1)
