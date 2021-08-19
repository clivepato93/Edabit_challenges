# https://edabit.com/challenge/2fZETLANpgp6uhTjG

def star_rating(lst):
    avg = round(sum(lst[i]*(i+1) for i in range(0, len(lst)))/sum(lst), 2)
    savg = str(avg) if len(str(avg)) == 4 else str(avg)+'0'
    return "[{}] {}".format(savg, "*"*int(round(avg)))


print(star_rating([55, 67, 98, 115, 61]), "[3.15] ***")
print(star_rating([75, 79, 50, 55, 25]), "[2.56] ***")
print(star_rating([0, 2, 0, 1, 23]), "[4.73] *****")
print(star_rating([16, 17, 23, 40, 45]), "[3.57] ****")
print(star_rating([175, 790, 550, 1550, 1245]), "[3.67] ****")
print(star_rating([0, 0, 0, 0, 5]), "[5.00] *****")
print(star_rating([6713, 7809, 5350, 5005, 6250]), "[2.88] ***")
print(star_rating([80, 79, 82, 155, 325]), "[3.79] ****")
