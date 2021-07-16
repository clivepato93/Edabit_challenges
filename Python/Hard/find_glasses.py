# https://edabit.com/challenge/RfTvjipaoKBgEZvdZ
import re
def find_glasses(lst):
    glasses=re.compile(r'O{1}-+O{1}')
    for d in lst:
        match=glasses.search(d)
        if match:
            return lst.index(d)
    return 'Nothing Found'


print(find_glasses(['phone', 'O-O', 'coins', 'keys']), 1)
print(find_glasses(['OO', 'wallet', 'O##O', 'O----O']), 3)
print(find_glasses(['O_O', 'O-O', 'OwO']), 1)
print(find_glasses(['O--#--O', 'dustO---Odust', 'more dust']), 1)
print(find_glasses(['floor', 'the floor again', 'pockets', 'bed', 'cabinet', 'the top of my head O-O']), 5)
print(find_glasses(['OOOO----~OOO', '-------', 'OOOOOOO', 'OO-OO-OO-O']), 3)

print("#")
# def range_in_list(lst,s=0,e=5):
#     return sum(lst[s:e+1])
#
# print(range_in_list([1,2,3,4],0,2)) #  6
# print(range_in_list([1,2,3,4],0,3)) # 10
# print(range_in_list([1,2,3,4],1)) #  9
# print(range_in_list([1,2,3,4])) # 10
# print(range_in_list([1,2,3,4],0,100)) # 10
# print(range_in_list([],0,1)) # 0
#
# import string
# def is_odd_string(s):
#     l=string.ascii_lowercase
#     return sum(l.index(i)+1 for i in s)%2==1
#     # return l
# print(is_odd_string('a')) # True
# print(is_odd_string('aaaa') )# False
# print(is_odd_string('amazing')) # True
# print(is_odd_string('veryfun')) # True
# print(is_odd_string('veryfunny') )# False

def same_frequency(n1,n2):
    def convert_to_list(num):
        return list(map(int,str(num)))
    check=set(list(map(int,str(n1))))
    n1=convert_to_list(n1)
    n2=convert_to_list(n2)
    # return convert_to_list(n1)
    # return check
    # return all(convert_to_list(n1).count(i)==convert_to_list(n2).count(i) for i in check)
    for i in check:
        if n1.count(i)!=n2.count(i):
            return False
    return True

print(same_frequency(551122,221515)) # True
print(same_frequency(321142,3212215) )# False
print(same_frequency(1212, 2211)) # True
