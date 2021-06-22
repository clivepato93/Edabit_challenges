# https://edabit.com/challenge/bPHcgMpkf9WvbwbAo
def format_phone_number(lst):
    start = "".join(str(i) for i in lst[:3])
    middle = "".join(str(i) for i in lst[3:6])
    end = "".join(str(i) for i in lst[6:])
    return "({}) {}-{}".format(start,middle,end)

print(format_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
