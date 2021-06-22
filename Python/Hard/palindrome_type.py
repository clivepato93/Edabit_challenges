# https://edabit.com/challenge/QuxCNBLcGJReCawjz

def palindrome_type(n):
    a=bin(n)[2:]
    c=str(n)
    return "Decimal and binary." if c==c[::-1] and a==a[::-1] else "Binary only." if c!=c[::-1] and a==a[::-1] else "Decimal only." if c==c[::-1] and a!=a[::-1] else "Neither!"
print(palindrome_type(313), "Decimal and binary.")
print(palindrome_type(1934391), "Decimal and binary.")
print(palindrome_type(1934391), "Decimal and binary.")
print(palindrome_type(9994521), "Binary only.")
print(palindrome_type(5841485), "Decimal and binary.")
print(palindrome_type(8337738), "Neither!")
print(palindrome_type(7447), "Decimal and binary.")
print(palindrome_type(18985), "Binary only.")
print(palindrome_type(7), "Decimal and binary.")
print(palindrome_type(1306031), "Decimal only.")
print(palindrome_type(1), "Decimal and binary.")
print(palindrome_type(1903127), "Binary only.")
print(palindrome_type(4), "Decimal only.")
print(palindrome_type(48084), "Decimal only.")
