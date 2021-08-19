# https://edabit.com/challenge/KdcCd2Xi96bMa4F8A
# not complete
def anna_likes(boy):
    boy=boy.lower()
    vowels = 'aeiou'
    for i in range(0,len(boy)-1):
        if boy[i] in vowels and boy[i+1] in vowels:
            return True
        elif boy[i] in vowels and boy[i+2] in vowels:
            return True
    return False
    # return sum(ord(i) in vowels for i in boy)>=2 and len(boy)>=4
	

print(anna_likes("Adam"), True) ## Test 55 
print(anna_likes("Willie"), True) ## Test 84 

print(anna_likes("Sean"), True) ## Test 71 
print(anna_likes("Carl"), False) ## Test 65 
print(anna_likes("Kyle"), False) ## Test 60 

