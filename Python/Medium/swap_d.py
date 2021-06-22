
# https://edabit.com/challenge/cEzT2e8tLpwYnrstP

def swap_d(k, v, swapped):
    d=dict(zip(k,v))
    return d if not swapped else {d[k]:k for k,v in d.items()}


print(swap_d(["Paris", 3, 4.5], ["France", "is odd", "is half of 9"], True), {"France": "Paris", "is odd": 3, "is half of 9": 4.5})
print(swap_d(["Paris", "Berlin", "Washington"], ["France", "Germany", "USA"], True), {"France": "Paris", "Germany": "Berlin", "USA": "Washington"})
print(swap_d([(1, 2), (3, 4), (5, 6)], ["one_two", "three_four", "five_six"], True), {"one_two": (1, 2), "three_four": (3, 4), "five_six": (5, 6)})
print(swap_d([(1, 2), (3, 4), (5, 6)], ["one_two", "three_four", "five_six"], False), {(1, 2): "one_two", (3, 4): "three_four", (5, 6): "five_six"})
print(swap_d([], [], False), {})
print(swap_d([1, 2, 3], ["one", "two", "three"], False), {1: "one", 2: "two", 3: "three"})
print(swap_d([1, 2, 3], ["one", "two", "three"], True), {"one": 1, "two": 2, "three": 3})
