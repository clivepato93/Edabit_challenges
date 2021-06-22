# https://edabit.com/challenge/6DwrhEGSa6WDixA5u
def is_narcissistic(n):
    c=[int(i) for i in str(n)]
    a=len(str(n))
    b= sum(i**a for i in c)
    return b==n

print(is_narcissistic(6), True)
print(is_narcissistic(1741725), True)
print(is_narcissistic(66), False)
print(is_narcissistic(65239), False)
print(is_narcissistic(886243), False)
print(is_narcissistic(92727), True)
print(is_narcissistic(472335975), True)
print(is_narcissistic(42300981), False)
print(is_narcissistic(548834), True)
