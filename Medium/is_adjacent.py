matrix = [[0,1,0,0],[1,0,1,1],[0,1,0,1],[0,1,1,0]]

def is_adjacent(matrix, node1, node2):
    return bool(matrix[node1][node2])

print(is_adjacent(matrix, 0, 1), True)
print(is_adjacent(matrix, 0, 2), False)
print(is_adjacent(matrix, 2, 1), True)
print(is_adjacent(matrix, 0, 3), True)
print(is_adjacent(matrix, 1, 4), False)
print(is_adjacent(matrix, 3, 2), True)
