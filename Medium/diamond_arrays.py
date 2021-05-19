# https://edabit.com/challenge/covbapJ32obi9PuSy
def diamond_arrays(x):
    f=[]
    for number in range(1,x+1):
        f.append(number*[number])
    for number in range(x-1,0,-1):
        f.append(number*[number])
    return f

def diamond_arrays(x):
    return [number*[number] for number in range(1,x+1)]+[number*[number] for number in range(x-1,0,-1)]

print(diamond_arrays(1), [[1]])
print(diamond_arrays(2), [[1], [2, 2], [1]])
print(diamond_arrays(3), [[1], [2, 2], [3, 3, 3], [2, 2], [1]])
print(diamond_arrays(5), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]])
print(diamond_arrays(7), [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [6, 6, 6, 6, 6, 6], [7, 7, 7, 7, 7, 7, 7], [6, 6, 6, 6, 6, 6], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]])
