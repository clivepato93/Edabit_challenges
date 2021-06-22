# https://edabit.com/challenge/L3FeQq5NZgtFrkMsB
def space_weights(planet_a, weight, planet_b):
	planet = {'Mercury':3.7,
	'Venus':8.87,
	'Earth':9.81,
	'Mars':3.711,
	'Jupiter':24.79,
	'Saturn':10.44,
	'Uranus':8.69,
	'Neptune':11.15
	}
	return round(((weight/planet[planet_a])*planet[planet_b]),2)

print(space_weights("Earth", 1, "Mars"), 0.38, "Example #1")
print(space_weights("Earth", 1, "Jupiter"), 2.53, "Example #2")
print(space_weights("Earth", 1, "Neptune"), 1.14, "Example #3")
print(space_weights("Jupiter", 100, "Mercury"), 14.93)
print(space_weights("Venus", 75, "Jupiter"), 209.61)
print(space_weights("Uranus", 10, "Saturn"), 12.01)
print(space_weights("Mars", 120, "Mercury"), 119.64)
print(space_weights("Neptune", 1421, "Earth"), 1250.23)
print(space_weights("Jupiter", 33, "Mercury"), 4.93)
print(space_weights("Saturn", 555, "Venus"), 471.54)
print(space_weights("Jupiter", 3.141592, "Earth"), 1.24)
