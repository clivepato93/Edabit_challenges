# https://edabit.com/challenge/onGPLPhXkLr3KCJpF
def lonely_integer(lst):
    return sum(set(lst))

def lonely_integer(lst):
	return [i for i  in lst if -i not in lst or  i not in lst][0]

print(lonely_integer([1,-1,2,-2,3]), 3)
print(lonely_integer([-3,1,2,3,-1,-4,-2]), -4)
print(lonely_integer([1,-1,2,-2,3,3]), 3)
print(lonely_integer([-110,110,-38,-38,-62,62,-38,-38,-38]), -38)
print(lonely_integer([-9,-105,-9,-9,-9,-9,105]), -9)
