def years_in_one_house(age, moves):
    return round(age/(moves+1))
# https://edabit.com/challenge/vBEm4jimnvxaFhdgs

print(years_in_one_house(30, 1), 15)
print(years_in_one_house(15, 2), 5)
print(years_in_one_house(80, 0), 80)
print(years_in_one_house(23, 2), 8)
print(years_in_one_house(31, 2), 10)
print(years_in_one_house(1, 0), 1)
