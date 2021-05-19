def count_palindromes(num1, num2):
    return sum([1 if str(i)==str(i)[::-1] else 0 for i in range(num1,num2+1)])


print(count_palindromes(1, 10), 9)
