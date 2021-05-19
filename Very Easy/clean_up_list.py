# https://edabit.com/challenge/YA5sLYuTzQpWLF8xP
def clean_up_list(lst):
    return [[int(i)for i in lst if int(i)%2==0],[int(i)for i in lst if int(i)%2!=0]]

print(clean_up_list(['9', '4', '5', '8']), [[4, 8], [9, 5]])
