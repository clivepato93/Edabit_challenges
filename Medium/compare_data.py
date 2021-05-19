# https://edabit.com/challenge/46Raiu9C7caNsgjqH
def compare_data(*a):
    # if not a or len(a)==1:
    #     return True
    return all(type(a[i])==type(a[i+1]) for i in range(0,len(a)-1))


print(compare_data(), True, "It's no data, expected True")
print(compare_data('T','e','s','t'), True, "All is string, expected True")
print(compare_data([]), True, "It's emply list expected True")
print(compare_data(2,5,7,9,0,1,2,4,6), True, "It's multiple integers expected True")
print(compare_data(2,5,7,'9',0,1,2,4,6), False, "It's multiple integers  and string expected False")
print(compare_data(True,False), True, "It's bool, expected True")
print(compare_data(True,'False'), False, "It's bool and string, expected False")
print(compare_data((i for i in range(10)), (j**2 for j in range(8))), True, "It's 'generator', expected True")
