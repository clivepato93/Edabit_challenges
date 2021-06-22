def weight_allowed(car, p, max_weight):
	pounds =2.205
	return car+sum(p)<max_weight*pounds

print(weight_allowed(3000, [150, 201, 75, 88, 195], 1700), True)

print(weight_allowed(3200, [220, 101, 115, 228, 15], 1700), False)


'''
Create a function that returns True if the combined weight of a car car and the weight
of the passengers p in the car is less than the maximum weight max_weight the car is allowed to carry.
Otherwise, return False. The weight of the car and the weight of the passengers are given in pounds.
The maximum weight is given in kilograms.
'''
