# https://edabit.com/challenge/CvChvza6kwweMjNRr
def split_code(item):
    for i in item:
        if not i.isdigit():
            c=item.index(i)+1
    return [item[:c],int(item[c:])]


print(split_code("TEWA8392"), ["TEWA", 8392])
print(split_code("MMU778"), ["MMU", 778])
print(split_code("SRPE5532"), ["SRPE", 5532])
print(split_code("SKU8977"), ["SKU", 8977])
print(split_code("MCI5589"), ["MCI", 5589])
print(split_code("WIEB3921"), ["WIEB", 3921])
