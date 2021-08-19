# https://edabit.com/challenge/iuenzEsAejQ4ZPqzJ
# def mystery_func(num):
#     n = 2
#     x = 0
#     while num > n:
#         if (n*2) < num:
#             n *= 2
#             x += 1
#     n //= 2
#     return int(''.join(str(digit) for digit in [2 for i in range(x)])+str(num-n))


# print(mystery_func(9), 2221)
# print(mystery_func(15), 2227)
# print(mystery_func(17), 22221)
# print(mystery_func(19), 22223)
# print(mystery_func(24), 22228)
# print(mystery_func(35), 222223)

# https://edabit.com/challenge/EcKeYPWNGWgPZhsxk

def mystery_func(num):
    s = ''.join(sorted(list(map(str, str(num)))))
    return num-int(s)


print(mystery_func(832), 594)
print(mystery_func(51), 36)
