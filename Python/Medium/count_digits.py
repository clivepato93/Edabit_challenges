# https://edabit.com/challenge/gdzS7pXsPexY8j4A3

def count_digits(lst, t):
    if t=="odd":
        return [sum(int(i)%2 for i in str(n)) for n in lst]
    return [sum(int(i)%2==0 for i in str(n)) for n in lst]

def count_digits(lst, t):
    return [sum(int(i)%2 for i in str(n)) if t=="odd" else sum(int(i)%2==0 for i in str(n)) for n in lst]

print(count_digits([22, 53, 99, 61, 777, 8], "odd"), [0, 2, 2, 1, 3, 0])
print(count_digits([54, 113, 89, 10], "odd"), [1, 3, 1, 1])
print(count_digits([17, 19, 21], "odd"), [2, 2, 1])
print(count_digits([1, 2, 3, 4], "odd"), [1, 0, 1, 0])
print(count_digits([22, 53, 99, 61, 777, 8], "even"), [2, 0, 0, 1, 0, 1])
print(count_digits([54, 113, 89, 10], "even"), [1, 0, 1, 1])
print(count_digits([5, 8, 9, 12], "even"), [0, 1, 0, 1])
print(count_digits([1, 2, 3], "even"), [0, 1, 0])
