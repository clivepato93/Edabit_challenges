def is_shape_possible(n, angles):
    if n<3:
        return False
    elif not all(i<=180 for i in angles):
        return False
    return (n-2)*180==sum(angles)


# https://edabit.com/challenge/K4aKGbfmzgyNNYEcM

print(is_shape_possible(4, [90, 90, 90, 90]), True)
print(is_shape_possible(3, [20, 20, 140]), True)
print(is_shape_possible(1, [21]), False,'Remember not to allow shapes with under 3 sides')
print(is_shape_possible(5, [100, 100, 100, 200, 40]), False)
print(is_shape_possible(7, [830, 20, 20, 10, 10, 5, 5]), False, 'Angles cannot be larger than 180')
print(is_shape_possible(4, [90, 90, 90, 89]), False)
print(is_shape_possible(2, [21, 78]), False)
print(is_shape_possible(8, [135, 135, 135, 135, 135, 135, 135, 135]), True)
print(is_shape_possible(5, [500, 10, 10, 10, 10]), False)
print(is_shape_possible(10, [21, 12, 333, 2, 2532, 52, 2, 2, 1, 8]), False)
print(is_shape_possible(5, [108, 108, 108, 108, 108]), True)
