def boxes(w):
    b=[]
    c=0
    p=[]
    print(len(w))
    for i in range(1,len(w)):
        s=w[c:i]
        if sum(s)<10:
            i+=1
        elif sum(s)>10 :
            s=w[c:i-1]
            b.append(s)
            c=i-1
            i+=1
        # elif sum(s)==10:
        #     b.append(s)
        #     c=i
        #     i+=1
        print(s,c,i)





    return b

print(boxes([1, 5, 3, 1, 2, 3, 2, 6, 3, 1, 3, 8, 1]), 5)
# print(boxes([8, 3, 2, 1, 1, 2, 1, 3, 2, 1]), 3)
#
# print(boxes( [7, 1, 2, 6, 1, 2, 3, 5, 9, 2, 1, 2, 5]), 5)
# print(boxes([2, 7, 1, 3, 3, 4, 7, 4, 1, 8, 2]), 5)
# print(boxes([1, 3, 3, 3, 2, 1, 1, 9, 7, 10, 8, 6, 1, 2, 9]), 8)
# print(boxes([4, 1, 2, 3, 5, 5, 1, 9]), 3)
# print(boxes([3, 1, 2, 7, 2, 6, 1]), 3)
# print(boxes([4, 6, 1, 9, 6, 1, 1, 9, 2, 9]), 6)
