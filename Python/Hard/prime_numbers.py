# https://edabit.com/challenge/oTzuXDWL26gnY5a5P
# print(int(11*0.5)+1)
def prime_numbers(num):
    c=0
    n=2
    if num>1:
        while num>n:
            if len([i for i in range(1,int(n*0.5)+1) if n%i==0])<2:
                # print(n)
                c+=1
            n+=1
    return c
print(prime_numbers(10), 4)
print(prime_numbers(20), 8)
# print(prime_numbers(30), 10)
# print(prime_numbers(100), 25)
# print(prime_numbers(200), 46)
# print(prime_numbers(1000), 168)
# print(prime_numbers(-5), 0)
# print(prime_numbers(66), 18)
# print(prime_numbers(133), 32)
# print(prime_numbers(99), 25)
