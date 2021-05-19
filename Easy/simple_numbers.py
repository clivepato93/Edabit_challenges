# https://edabit.com/challenge/FqFGnnffKRo8LKQKP
def simple_numbers(a, b):
    numbers=[]
    for i in range(a,b+1):
        string=str(i)
        if sum(int(v)**int(i+1) for i,v in enumerate(string))==i:
            numbers.append(i)
    return numbers

# print(simple_numbers(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
# print(simple_numbers(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
# print(simple_numbers(10, 89),  [89])
# print(simple_numbers(10, 100),  [89])
# print(simple_numbers(90, 100), [])
# print(simple_numbers(90, 150), [135])
# print(simple_numbers(50, 150), [89, 135])
# print(simple_numbers(10, 150), [89, 135])
# print(simple_numbers(89, 135), [89, 135])
print(simple_numbers(100, 32253), [135, 175, 518, 598, 1306, 1676, 2427])
#Mubashir
