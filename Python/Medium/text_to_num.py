# https://edabit.com/challenge/nh3daaT8LHbv8mKXA

def text_to_num(phone):
    c = phone.maketrans("ABCDEFGHIJKLMNOPQRSTUVWYZ", "2223334445556667777888999")
    return phone.translate(c)

print("123-647-3937", text_to_num("123-647-EYES"))
# print("(325)444-8378", text_to_num("(325)444-TEST"))
# print("653-879-8447", text_to_num("653-TRY-THIS"))
# print("435-224-7613", text_to_num("435-224-7613"))
# print("(333)668-3245", text_to_num("(33D)ONT-FAIL"))
# print("(025)445-6741", text_to_num("(025)445-6741"))
