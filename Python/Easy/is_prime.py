# https://edabit.com/challenge/JBkfqYW4iYwmgvwTf
def is_prime(num):
    # print([i for i in range(2,num+1)])
    count=0
    if num%1==0:
        count+=1
    if num%2==0:
        count+=1
    if num%3==0:
        count+=1
    if num%5==0:
        count+=1
    if num%7==0:
        count+=1
    if num%11==0:
        count+=1
    return False if num==1 else count<=2

def is_prime(num):
    if num<12:
        return num in [i for i in range(2,12) if i%i==0 and i%2==1]
    return num in [i for i in range(12,num+1) if i%2==1 and i%3!=0 and i%5!=0 and i%7!=0 and i%11!=0]

# print(is_prime(31), True)
# print(is_prime(18), False)
# print(is_prime(11), True)
# print(is_prime(12), False)
# print(is_prime(1), False)
# print(is_prime(3), True)
# print(is_prime(48), False)
# print(is_prime(10), False)
# print(is_prime(5), True)
print(is_prime(77), False)
# print(is_prime(7), True)
