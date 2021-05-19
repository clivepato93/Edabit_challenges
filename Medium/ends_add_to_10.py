# https://edabit.com/challenge/en35WbjkDF9ej59FW
def ends_add_to_10(nums):
    nums=[abs(i) for i in nums]
    nums=[str(i)[0]+str(i)[-1] for i in nums]
    try:
        return sum(1 for a,b in nums if int(a)+int(b)>=10)
    except:
        return 0

print(ends_add_to_10([19, 46, 2098]), 3)
print(ends_add_to_10([33, 44, -55]), 1)
print(ends_add_to_10([]), 0)
print(ends_add_to_10([-91, 55, -33]), 2)
print(ends_add_to_10([100, -10, 1, 3, 2, 5, 2]), 1) # I think 5 should count.
print(ends_add_to_10([19, 28, 37, 46, 55, 64, 73, 82, 91]), 9)
print(ends_add_to_10([-19, -28, -37, -46, -55, -64, -73, -82, -91]), 9)
