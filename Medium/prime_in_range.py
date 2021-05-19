# https://edabit.com/challenge/yFEMocjdiRjPhoDqv
def prime_in_range(n1, n2):
    f=[]
    for i in range(n1,n2+1):
        if i==0 or i==1:
            continue
        elif i==2:
            f.append(i)
        elif i<12 and i%2:
            f.append(i)
        elif (i>2 and i%2) and (i>3 and i%3) and (i>5 and i%5) and (i>7 and i%7) and (i>11 and i%11):
            f.append(i)
    return any(f)
	# return any(i%2 or (i%i==0 and i%1==0)for i in range(n1,n2+1) if i==0 or i==1 continue)


num_vector, res_vector = [[10, 12], [62, 66], [441, 445], [0, 2], [20, 22], [4444, 5555], [114, 120]], \
                        [True, False, True, True, False, True, False]
for i, x in enumerate(num_vector): print(prime_in_range(*x), res_vector[i])
