# https://edabit.com/challenge/2iETeoJq2dyEmH87R

def count_digits(n, d):
    counter = 0
    squares = [str(i*i) for i in range(0,n+1)]
    print(squares)
    for number in squares:
        if str(d) in number:
            counter+=number.count(str(d))
    return counter

print(count_digits(25, 2), 9)
