# https://edabit.com/challenge/kpKKFZcvHX3C68zyN

def swap_cards(n1, n2):
    n1=list(map(int,str(n1)))
    n2=list(map(int,str(n2)))

    small=n1.index(min(n1))
    n1[small],n2[0]=n2[small],n1[small]
    n1,n2=int(''.join(str(i) for i in n1)),int(''.join(str(i) for i in n2))
    return n1>n2

    # if num1>num2:
    #     return True
    # else:
    #     small%=1
    #         temp=n1
    #         temp2=n2
    # return False



print(swap_cards(12, 28), True)
print(swap_cards(67, 53), False)
print(swap_cards(77, 54), False)
print(swap_cards(45, 23), False)
print(swap_cards(74, 81), True)
print(swap_cards(75, 35), True)
print(swap_cards(21, 25), True)
print(swap_cards(22, 34), True)
print(swap_cards(24, 12), False)
print(swap_cards(52, 46), True)
