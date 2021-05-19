# https://edabit.com/challenge/y8pj5GjGNarmYQ48d

def calculate_years(human_years):
    cat=0
    dog=0
    if human_years==1:
        cat+=15
        dog+=15
    elif human_years==2:
        cat+=24
        dog+=24
    else:
        cat+=24
        dog+=24
        for number in range(2,human_years):
            cat+=4
            dog+=5
    return [human_years,cat,dog]



print(calculate_years(1), [1,15,15])
print(calculate_years(2), [2,24,24])
print(calculate_years(10), [10,56,64])
print(calculate_years(20), [20,96,114])
print(calculate_years(65), [65,276,339])
print(calculate_years(43), [43,188,229])
print(calculate_years(100), [100,416,514])
#Mubashir
    # elif human_years ==2:
    #     cat+=24
	# 	dog+=24
	# return [human_years,cat,dog]
