def lonely_integer(lst):
    return {abs(number) for number in lst}
print(lonely_integer([1,-1,2,-2,3]), 3)

# not figured out yet
