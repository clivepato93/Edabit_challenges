# https://edabit.com/challenge/ZAYqnMhmqT5K3JWu8
def calculate_fuel(n):
    if n <= 10:
        return 100
    return n*10

print(calculate_fuel(15), 150)
print(calculate_fuel(23), 230)
print(calculate_fuel(10), 100)
print(calculate_fuel(3), 100)
print(calculate_fuel(23.5), 235)
print(calculate_fuel(3.14), 100)
print(calculate_fuel(9.99999), 100)
print(calculate_fuel(822315322), 8223153220)
print(calculate_fuel(12345.6789), 123456.789)
print(calculate_fuel(31.41), 314.1)
