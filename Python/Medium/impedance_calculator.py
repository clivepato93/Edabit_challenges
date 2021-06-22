
# https://edabit.com/challenge/u69RtTqe6jJTEyu8r
import math
def impedance_calculator(Dd, Dc, er):
    return int(139*(math.log(Dd/Dc,10))/math.sqrt(er))


print(impedance_calculator(5.3, 1.2, 2.2), 60.0)
print(impedance_calculator(4.58, 1.33, 2.2), 50.0)
print(impedance_calculator(20.7, 2, 4), 70.0)
print(impedance_calculator(40, 2.05, 2.2), 120.0)
print(impedance_calculator(25.6, 4, 2.2), 75.0)
