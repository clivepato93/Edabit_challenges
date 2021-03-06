# https://edabit.com/challenge/GwCAximybWF6ANdLY

def pie_chart(data):
    c=sum(data.values())
    return {i:round((data[i]/float(c))*360,1) for i in data}


print(pie_chart({"a": 8, "b": 21, "c": 12, "d": 5, "e": 4}), {"a": 57.6, "b": 151.2, "c": 86.4, "d": 36, "e": 28.8}, "Example #1, Image")
print(pie_chart({"a": 30, "b": 15, "c": 55}), {"a": 108, "b": 54, "c": 198}, "Example #2")
print(pie_chart({"a": 1, "b": 2}), {"a": 120, "b": 240}, "Example #3")
print(pie_chart({"a": 10, "b": 33, "c": 2, "d": 48, "e": 9}), {"a": 35.3, "b": 116.5, "c": 7.1, "d": 169.4, "e": 31.8})
print(pie_chart({"a": 10000, "b": 10000, "c": 10000, "d": 10000}), {"a": 90, "b": 90, "c": 90, "d": 90})
print(pie_chart({"a": 1, "b": 10, "c": 100, "d": 1000, "e": 666}), {"a": 0.2, "b": 2, "c": 20.3, "d": 202.6, "e": 134.9})
print(pie_chart({"a": 110, "b": 462, "c": 0}), {"a": 69.2, "b": 290.8, "c": 0})
