# https://edabit.com/challenge/z5zpTucxpMLL72FCx
def grab_city(txt):
    words = txt.split("[")
    return words[-1][:-1]

print(grab_city("[Last Day!] Beer Festival [Munich]"), "Munich")
print(grab_city("Cheese Factory Tour [Portland]"), "Portland")
print(grab_city("[Duration: 7 hours] Tour of the Maritimes [Charlottetown]"), "Charlottetown")
print(grab_city("[5 Stars] Traditional Gondola Experience [Venice]"), "Venice")
print(grab_city("[Last Minute Deal][$1039] Machu Picchu 3 Day Trip [Machu Picchu]"), "Machu Picchu")
print(grab_city("[50% Off!][Group Tours Included] 5-Day Trip to Onsen [Kyoto]"), "Kyoto")
