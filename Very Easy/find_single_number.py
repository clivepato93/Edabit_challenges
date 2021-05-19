def find_single_number(numbers):
    if numbers:
        for i in numbers:
            if numbers.count(i)==1:
                return i

def find_single_number(numbers):
    for x in set(numbers):
        if numbers.count(x) == 1:
            return x
    return None

print(find_single_number([2, 2, 2, 3, 4, 4, 4]))
