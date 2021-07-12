# https://edabit.com/challenge/JPdKrztrcL7DpooDr
#
# def collatz(n):
#     s=0
#     lst=[n]
#     while n!=1:
#         if n%2==0:
#             n//=2
#         else:
#             n*=3
#             n+=1
#         s+=1
#         lst.append(n)
#     return [s,max(lst)]
#
# print(collatz(1), [0, 1])
# print(collatz(3), [7, 16])
# print(collatz(9), [19, 52])
# print(collatz(27), [111, 9232])
# print(collatz(81), [22, 244])

# https://edabit.com/challenge/fJaZYmdovhzHa7ri3
# def max_collatz(num):
# 	s=0
#     lst=[n]
#     while n!=1:
#         if n%2==0:
#             n//=2
#         else:
#             n*=3
#             n+=1
#         s+=1
#         lst.append(n)
#     return max(lst)
# print(collatz(1), [0, 1])
# print(collatz(3), [7, 16])
# print(collatz(9), [19, 52])
# print(collatz(27), [111, 9232])
# print(collatz(81), [22, 244])


# https://edabit.com/challenge/6JNHBeGxY8dhTaPhs

def collatz(a, b):
    c,d=0,0
    while a!=1:
        if a%2==0:
            a/=2
        else:
            a*=3
            a+=1
        c+=1
    while b!=1:
        if b%2==0:
            b/=2
        else:
            b*=3
            b+=1
        d+=1
    return 'a' if c<d else 'b'

print(collatz(10, 15), "a")
print(collatz(13, 16), "b")
print(collatz(53782, 72534), "b")
print(collatz(72221, 11198), "b")
print(collatz(1723817263, 837249873748), "a")
print(collatz(556238, 667822), "b")
print(collatz(4, 3), "a")
print(collatz(64287364823648762384623847823648, 767623964723864823648725736487262), "a")
print(collatz(46287364872837482, 1267650600228229401496703205376), "b")
