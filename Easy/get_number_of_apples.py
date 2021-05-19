# https://edabit.com/challenge/kxrhqiE5so3AMXWS7
def get_number_of_apples(n, p):
    p=int(p[:-1])/float(100)
    return int(n-(n*p)) if int(n-(n*p)) else "The children didn't get any apples"

print(get_number_of_apples(10, "90%"), 1)
print(get_number_of_apples(25, "10%"), 22)
print(get_number_of_apples(0, "10%"), "The children didn't get any apples")
print(get_number_of_apples(40, "30%"), 28)
print(get_number_of_apples(10, "44%"), 5)
print(get_number_of_apples(12, "100%"), "The children didn't get any apples")
print(get_number_of_apples(40, "100%"), "The children didn't get any apples")
