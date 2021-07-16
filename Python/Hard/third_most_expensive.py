# https://edabit.com/challenge/BL47ShAQm5C4jR6iA

def third_most_expensive(dct):
    if len(dct)<3:
        return False
    return sorted([i for i in dct],key=lambda x:dct[x])[-3]


print(third_most_expensive({}), False)
print(third_most_expensive({"piano": 100}), False)
print(third_most_expensive({"piano": 100, "stereo": 200 }), False)
print(third_most_expensive({"piano": 100, "stereo": 200, "tv": 10 }), "tv")
print(third_most_expensive({"piano": 100, "stereo": 200, "tv": 10, "timmy": 500 }), "piano")
print(third_most_expensive({"computer": 1000, "piano": 500, "stereo": 200, "tv": 10, "timmy": 1 }), "stereo")
