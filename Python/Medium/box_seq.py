# https://edabit.com/challenge/baBNZFCozmjNhbp9Q
def box_seq(s):
    n=0
    for i in range(1,s+1):
        if i%2:n+=3
        else:n-=1
    return n


print(box_seq(5), 7)
print(box_seq(0), 0)
print(box_seq(6), 6)
print(box_seq(99), 101)
print(box_seq(2), 2)
print(box_seq(1), 3)
