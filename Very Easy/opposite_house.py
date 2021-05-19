# https://edabit.com/challenge/mXozEFbyHeqmL6FZE
def opposite_house(house, n):
    v= house
    f=[]
    if house<=n:
        for i in range(house,n+1):
            v+=2
            f.append(v)
    else:
        for i in range(n,house-1):
            v-=2
            f.append(v)
    return f[-1]-1

print(2*2)
print(2*3)


print((310027696726*2),(310027696726*2-23633656673)+1)
# print(opposite_house(2, 3), 5)
# print(opposite_house(3, 3), 4)
# print(opposite_house(23633656673, 310027696726), 596421736780)
print(opposite_house(1, 3), 6)
print(opposite_house(3, 3), 4)
# print(opposite_house(2, 3), 5)
# print(opposite_house(3, 5), 8)
# print(opposite_house(7, 11), 16)
# print(opposite_house(10, 22), 35)
# print(opposite_house(20, 10), 1)

# def opposite_house(house, n):
#     v= house
#     if house<=n:
#         for i in range(house,n+1):
#             v+=2
#             yield v
#     else:
#         for i in range(n,house-1):
#             v-=2
#             yield v


# c =max(opposite_house(20, 10))
# c-=1
# d=c-1
# print(d)
# print(opposite_house(2, 3), 5)
# print(opposite_house(3, 3), 4)
# print(opposite_house(23633656673, 310027696726), 596421736780)
# print(opposite_house(1, 3), 6)
# print(opposite_house(3, 3), 4)
# print(opposite_house(2, 3), 5)
# print(opposite_house(3, 5), 8)
# print(opposite_house(7, 11), 16)
# print(opposite_house(10, 22), 35)
# print(opposite_house(20, 10), 1)

# def opposite_house(house, n):
#     v = house
#     if house<=n:
#         while house<n:
#             v+=2
#             house+=1
#     else:
#         while house>n:
#             v-=2
#             house-=1
#     return v+1

# def opposite_house(house, n):
#         road=[]
#         v= house
#         if house<=n:
#             for i in range(house,n+1):
#                 v+=2
#                 road.append(v)
#         else:
#             for i in range(n,house-1):
#                 v-=2
#                 road.append(v)
#         return max(road)-1 if house<=n else min(road)-1


# print(opposite_house(1, 3), 6)
# print(opposite_house(2, 3), 5)
# print(opposite_house(3, 3), 4)
# print(opposite_house(23633656673, 310027696726), 596421736780)
# print(opposite_house(1, 3), 6)
# print(opposite_house(3, 3), 4)
# print(opposite_house(2, 3), 5)
# print(opposite_house(3, 5), 8)
# print(opposite_house(7, 11), 16)
# print(opposite_house(10, 22), 35)
# print(opposite_house(20, 10), 1)

# g = (x+2 for x in range(1,4))
# print(list(g))[-1]+1
