def V_DAC(value):
    return round(5/(1023.0/value),2) if value else 0

# https://edabit.com/challenge/AJGqpNL2yAyhbdpvB

print(V_DAC(1023), 5)
print(V_DAC(0), 0)
print(V_DAC(500), 2.44)
print(V_DAC(400), 1.96)
print(V_DAC(850), 4.15)
