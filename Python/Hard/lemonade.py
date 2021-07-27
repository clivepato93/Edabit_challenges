# https://edabit.com/challenge/voxWDZ9NSv8CXifec

def lemonade(bills):
    change=bills.count(5)
    return change>=len([i for i in bills if i!=5])
print(lemonade([5, 5, 5, 10, 20]), True)
print(lemonade([5, 5, 10]), True)
print(lemonade([10, 10]), False)
print(lemonade([5, 5, 10, 10, 20]), False)
print(lemonade([5, 5, 5, 5, 10, 5, 10, 10, 10, 20]), True)
print(lemonade([5, 10, 5, 5, 5, 20, 5, 10, 5, 5, 10, 20]), True)
print(lemonade([5, 10, 5, 5, 5, 20, 5, 10, 20, 5, 10, 20, 10]), False)