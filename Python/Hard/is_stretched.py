# https://edabit.com/challenge/4Pe4nySfRnWPCjEwr

def is_stretched(s1, s2):
    x=len(s1)//len(s2)
    n=0
    for i in range(0,len(s1),x):
        try:
            if s2[n] not in set(s1[i:i+x]):
                return False
        except IndexError:
            return False
        n+=1    
    return True 

# print(is_stretched("pppaaannndddaaa", "panda"), True)
# print(is_stretched("hheelllloo", "hello"), True)
# print(is_stretched("magnet", "magnet"), True)
# print(is_stretched("sssshhiipp", "ship"), False)
print(is_stretched("magneto", "magnet"), False)

print(is_stretched("maggnet", "magnet"), False)