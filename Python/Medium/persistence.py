

# https://edabit.com/challenge/AeWbFdxSwAf5nhQpG
def persistence(num):
    c=0
    while len(str(num))!=1:
        num=eval("*".join(i for i in str(num)))
        c+=1
    return c



print(persistence(0), 0)
print(persistence(10), 1)
print(persistence(25), 2)
print(persistence(39), 3)
print(persistence(77), 4)
print(persistence(679), 5)
print(persistence(6788), 6)
print(persistence(68889), 7)
print(persistence(2677889), 8)
print(persistence(26888999), 9)
print(persistence(3778888999), 10)
print(persistence(277777788888899), 11)
