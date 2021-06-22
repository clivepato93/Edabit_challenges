from math import sqrt
def get_distance(a, b):
    return round(sqrt((a["x"]-b['x'])**2.0+(b["y"]-a['y'])**2.0),3)

print(get_distance({"x": -2, "y": 1}, {"x": 4, "y": 3}), 6.325, "Example #1")


# https://edabit.com/challenge/9b4h6mK9CBMLwyGiY
