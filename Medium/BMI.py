
# https://edabit.com/challenge/JgYPQrYdivmqN4KKX
def BMI(weight, height):
    w=float(weight.split()[0])/2.205 if 'p' in weight else float(weight.split()[0])
    h=float(height.split()[0])/39.37 if 'i' in height else float(height.split()[0])
    b=round(w/h**2,1)
    return "{} {}".format(b,"Underweight" if b<18.5 else "Normal weight" if b>=18.5 and b<25 else "Overweight" if b>=25 and b<30 else "Obesity")


print(BMI("53.3 kilos","1.7 meters"), "18.4 Underweight")
print(BMI("76.8 kilos","1.6 meters"), "30.0 Obesity")
print(BMI("53.5 kilos","1.7 meters"), "18.5 Normal weight")
print(BMI("155 pounds","73 inches"), "20.4 Normal weight")
print(BMI("175 pounds","70 inches"), "25.1 Overweight")
