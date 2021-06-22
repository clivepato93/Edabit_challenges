def wash_hands(N, nM):
    c=divmod(N*21*nM*30,60)
    return 	"{} minutes and {} seconds".format(c[0],c[1])

# https://edabit.com/challenge/7RPtGySfZLkEHB8ac

print(wash_hands(8, 7),	"588 minutes and 0 seconds")
print(wash_hands(20, 10), "2100 minutes and 0 seconds")
print(wash_hands(7, 9),	"661 minutes and 30 seconds")
print(wash_hands(0, 2),	"0 minutes and 0 seconds")
print(wash_hands(13, 3), "409 minutes and 30 seconds")
print(wash_hands(1, 1), "10 minutes and 30 seconds")
print(wash_hands(7, 0), "0 minutes and 0 seconds")
