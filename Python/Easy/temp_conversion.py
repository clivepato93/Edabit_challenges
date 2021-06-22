# https://edabit.com/challenge/ZCaMMqDuJBi6NZgYF
def temp_conversion(celsius):
	return [round(celsius*9/5+32,2),round(celsius+273.15,2)] if round(celsius+273.15,2) > 0 else 'Invalid'

print(temp_conversion(0), [32 , 273.15])
print(temp_conversion(100), [212 , 373.15])
print(temp_conversion(42.8), [109.04 , 315.95])
print(temp_conversion(300.4), [572.72 , 573.55])
print(temp_conversion(-10.7), [12.74 , 262.45])
print(temp_conversion(-273.13), [-459.63 , 0.02])
print(temp_conversion(-273.16), "Invalid", "Wow, is it realy that cold?")
