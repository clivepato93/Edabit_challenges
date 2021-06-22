
# https://edabit.com/challenge/GAbxxcsKoLGKtwjRB
def sum_primes(lst):
    a=0
    for i in lst:
        if i>1 and len([x for x in range(1,i+1) if i%x==0])==2:
            a+=i
    return a if a else None

print(sum_primes([1,2,3,4,5,6,7,8,9,10]), 17)
print(sum_primes([2,3,4,11,20,50,71]), 87)
print(sum_primes([19,21,24,27,30,37]), 56)
print(sum_primes([69,79,87,97,101]), 277)
print(sum_primes([53,59,28,50,45,33,61]), 173)
print(sum_primes([]), None)
print(sum_primes([11,11,11,11,11,22,22,22]), 55)
print(sum_primes([67,24,58,28,71,73,99]), 211)
