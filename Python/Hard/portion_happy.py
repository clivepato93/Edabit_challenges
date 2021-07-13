# https://edabit.com/challenge/NbZ2cMeEfH3KpQRku

def portion_happy(numbers):
    n=0
    for i in range(1,len(numbers)-1):
        if numbers[i]==numbers[i+1] or numbers[i]==numbers[i-1]:
            n+=1
    if numbers[0]==numbers[1]:
        n+=1
    if numbers[-1]==numbers[-2]:
        n+=1

    return n/float(len(numbers))

print(portion_happy([0, 1, 0, 1, 0]), 0)
print(portion_happy([0, 1, 1, 0]), 0.5)
print(portion_happy([0, 0, 0, 1, 1]), 1)
print(portion_happy([1, 0, 0, 1, 1]), 0.8)
print(portion_happy([1, 1, 1, 1, 1]), 1)
print(portion_happy([1, 1, 0, 0, 1, 1]), 1)
print(portion_happy([1, 1, 0, 0, 0, 1, 1]), 1)
print(portion_happy([1, 0, 0, 0, 1]), 0.6)
print(portion_happy([1, 0, 1, 0, 0, 0]), 0.5)
print(portion_happy([1, 1]), 1)
print(portion_happy([1, 0]), 0)
