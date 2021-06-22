# https://edabit.com/challenge/2t6NvMe27HtSmqC4F
# from operator import xor
def boolean_and(lst):
    return all(lst[i-1] and lst[i] for i in range(1,len(lst)))

def boolean_or(lst):
    return any(lst[i-1] or lst[i] for i in range(1,len(lst)))
#
def boolean_xor(lst):
    while len(lst)!=1:
        if lst[0]!=lst[1]:
            # lst[1]==False
            lst=lst[1:]
            lst[0]=True
        else:
            lst=lst[1:]
            lst[0]=False
        # print(lst)
    return lst[0]
# XOR tests
print(boolean_xor([True, True, False, True]), True)
print(boolean_xor([True, True, False, False]), False)
print(boolean_xor([True, False, False, False]), True)
print(boolean_xor([True, False, True, False]), False)
print(boolean_xor([True, True, True, True]), False)
print(boolean_xor([False, False, False, False]), False)
print(boolean_xor([False, False, False, True]), True)
print(boolean_xor([True, False, False, True]), False)

# AND tests
# print(boolean_and([True, True, False, True]), False)
# print(boolean_and([True, True, True, True]), True)
# print(boolean_and([False, True, True, True]), False)
# print(boolean_and([False, False, False, False]), False)
# print(boolean_and([False, False, True, True]), False)

# OR tests
# print(boolean_or([True, True, False, False]), True)
# print(boolean_or([True, False, False, False]), True)
# print(boolean_or([False, False, False, True, False]), True)
# print(boolean_or([False, True, False, True, False, True]), True)
# print(boolean_or([False, False, False, False, False]), False)
