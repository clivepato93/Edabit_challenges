def rotate_max_number(num):
    return int("".join(sorted(str(num),reverse=True)))

print(rotate_max_number(1546), 6541)
print(rotate_max_number(123), 321)
print(rotate_max_number(1546), 6541)
print(rotate_max_number("001"), 100)
print(rotate_max_number(999), 999)
print(rotate_max_number("12345"), 54321)
print(rotate_max_number("00009"), 90000)
