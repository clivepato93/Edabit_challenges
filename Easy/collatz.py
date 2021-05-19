# https://edabit.com/challenge/X8fNb5EouWxrMMjZL
# def collatz(num):
#     counter=0
#     while num!=1:
#         if num%2:
#             num=num*3+1
#             counter+=1
#         else:
#             num=num/2
#             counter+=1
#     return counter

def collatz(num):
    counter=0
    while num!=1:
        if num%2==0:
            num=num/2
            counter+=1
        else:
            num=num*3+1
            counter+=1
    return counter

# print(collatz(2), 1)
print(collatz(3), 7)
print(collatz(10), 6)
print(collatz(6), 8)
print(collatz(345), 125)
print(collatz(72), 22)
