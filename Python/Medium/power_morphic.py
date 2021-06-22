# https://edabit.com/challenge/RqhLJk82ySnmxxJBi

def power_morphic(num):
    c=[1 if str(num**i).endswith(str(num)) else 0 for i in range(2,11)]
    if sum(c)==9:
        return "Polymorphic"
    elif sum(c)==4:
        return "Quadrimorphic"
    elif sum(c)==2:
        return "Dimorphic"
    elif sum(c)==1:
        return "Enamorphic"
    return "Amorphic"

print(power_morphic(0), "Polymorphic")
print(power_morphic(1), "Polymorphic")
print(power_morphic(4), "Quadrimorphic")
print(power_morphic(7), "Dimorphic")
print(power_morphic(10), "Amorphic")
print(power_morphic(68), "Dimorphic")
print(power_morphic(121), "Amorphic")
print(power_morphic(501), "Quadrimorphic")
print(power_morphic(625), "Polymorphic")
print(power_morphic(3376), "Enamorphic")
print(power_morphic(2030), "Amorphic")
print(power_morphic(3751), "Quadrimorphic")
print(power_morphic(9376), "Polymorphic")
print(power_morphic(9999), "Quadrimorphic")
