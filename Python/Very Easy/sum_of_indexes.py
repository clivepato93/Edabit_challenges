# https://edabit.com/challenge/YKgzPFZKt9XHXQHAu

def sum_found_indexes(lst, n):
    # total = 0
    return sum([i for i,number in enumerate(lst) if number == n])

def sum_found_indexes(lst, n):
    total = 0
    for index in range(len(lst)):
        value = lst[index]
        if value == n:
            total += index
    return total

def sum_found_indexes(lst, n):
    total = 0
    for index in range(len(lst)):
        if lst[index] == n:
            total += index
    return total

print(sum_found_indexes([0, 3, 3, 0, 0, 3], 3), 8)
