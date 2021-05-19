# https://edabit.com/challenge/dsAPLuCpkKCBELk24

def get_products(lst):
    n=[]
    o=1
    for i in range(0,len(lst)):
        n=lst.pop(i)
    return lst

print(get_products([1, 2, 6, 5, 9]), [540, 270, 90, 108, 60])
print(get_products([1, 7, 3, 4]), [84, 12, 28, 21])
print(get_products([1, 2, 3, 0, 5]), [0, 0, 0, 30, 0])
