# https://edabit.com/challenge/exeY2wDuEW4rFeYvL
def ordered_matrix(a, b):
    return [[b*i+l for l in range(1,b+1)] for i in range(a)]


print(ordered_matrix(1,2), [[1,2]])
print(ordered_matrix(3,3), [[1,2,3],[4,5,6],[7,8,9]])
print(ordered_matrix(5,5), [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]])
print(ordered_matrix(3,4), [[1,2,3,4],[5,6,7,8],[9,10,11,12]])
