# https://edabit.com/challenge/dsAPLuCpkKCBELk24

def get_products(lst):
    f=[]
    a=0
    n=1
    while len(f)!=len(lst):
        z=lst.pop(a)
        # print(z)
        for num in lst:
            n*=num
        f.append(n)
        lst.append(z)
        # print(lst)
        n=1
        # a+=1
    return f

print(get_products([1, 2, 6, 5, 9]), [540, 270, 90, 108, 60])
# print(get_products([1, 7, 3, 4]), [84, 12, 28, 21])
# print(get_products([1, 2, 3, 0, 5]), [0, 0, 0, 30, 0])
