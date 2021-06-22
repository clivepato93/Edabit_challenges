# https://edabit.com/challenge/nugyAtjRNQPTHLJNR
def pages_in_book(t):
    c=0
    o=1
    while c<t:
        c+=o
        o+=1
    return c==t

print(pages_in_book(5), False)
print(pages_in_book(4005), True)
print(pages_in_book(9453), True)
print(pages_in_book(9474), False)
print(pages_in_book(125250), True)
print(pages_in_book(920046), True)
