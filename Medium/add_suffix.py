# https://edabit.com/challenge/nn7JKRBfq8iDcX8ZB



def add_suffix(suffix):
    return lambda x:x+suffix

add_ly = add_suffix("ly")
add_less = add_suffix("less")
add_ing = add_suffix("ing")

print(add_ly("hopeless"), "hopelessly")
print(add_ly("total"), "totally")

print(add_less("fear"), "fearless")
print(add_less("ruth"), "ruthless")

print(add_ing("cheer"), "cheering")
print(add_ing("book"), "booking")
