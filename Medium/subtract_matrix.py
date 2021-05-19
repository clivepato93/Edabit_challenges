# https://edabit.com/challenge/DC2s6hM8yE7RvBr3S

def subtract_matrix(lst1, lst2):
    l=list(zip(lst1,lst2))
    n=[]
    c=[]
    for a,b in l:
        for i in range(len(a)):
            c.append(float(a[i])-float(b[i]))
        n.append(c)
        c=[]
    return n



print(subtract_matrix([[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,9]]), [[0,0,0],[0,0,0],[0,0,0]])
print(subtract_matrix([[1,2,3],[4,5,6],[7,8,9]],[[1,2,3],[4,5,6],[7,8,10]]), [[0,0,0],[0,0,0],[0,0,-1]])
print(subtract_matrix([[1,2],[4,5]],[[1,2],[4,5]]), [[0,0],[0,0]])
print(subtract_matrix([[1,2],[4,-5]],[[2,2],[4,-5]]), [[-1,0],[0,0]])
print(subtract_matrix([[21]],[[63]]), [[-42]])
print(subtract_matrix([[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0]]), [[0,0,0],[0,0,0],[0,0,0]])
print(subtract_matrix([[0,0,0],[0,0,0],[0,0,0]],[[0,0,0],[0,0,0],[0,0,0.678]]), [[0,0,0],[0,0,0],[0,0,-0.678]])
print(subtract_matrix([["2",0,0],[0,0,0],[0,0,0]],[["3",0,0],[0,0,0],[0,0,0.678]]), [[-1,0,0],[0,0,0],[0,0,-0.678]])

# Author: Mariusz Najwer
