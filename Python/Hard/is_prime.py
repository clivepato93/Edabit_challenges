# https://edabit.com/challenge/kKFuf9hfo2qnu7pBe
primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]

def is_prime(primes, num, left=0, right=None):
    end=len(primes)
    x=(left+end)//2
    for i in range(1,len(primes)//2):
        if primes[x]==num:
            return "yes"
        elif primes[x]<num:
            left=x
        else:
            end=x
        x=(left+end)//2
    if primes[x]!=num:
        return "no"

print(is_prime(primes, 3), "yes")
print(is_prime(primes, 4),  "no")
# print(is_prime(primes, 67), "yes")
# print(is_prime(primes, 36), "no")
# print(bool(None)==True)

# Credit to KhanAcademy for this challenge.
