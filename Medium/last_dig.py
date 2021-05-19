def last_dig(a, b, c):
    a_b=a*b
    return a_b%10== c%10


print(last_dig(1, 1, 1), True)
print(last_dig(12, 15, 10), True)
print(last_dig(15228, 9209, 72162), True)
print(last_dig(15, 1, 1), False)
print(last_dig(123, 15, 10), False)
print(last_dig(5213, 99219, 6165), False)
print(last_dig(1523, 513, 512), False)
print(last_dig(-15, 1, 1), False, "Should work with negative numbers.")
print(last_dig(123, -15, 10), False, "Should work with negative numbers.")
print(last_dig(-12, 15, -10), True, "Should work with negative numbers.")
print(last_dig(15228, -9209, -72162), True, "Should work with negative numbers.")
