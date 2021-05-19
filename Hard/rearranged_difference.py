# https://edabit.com/challenge/jwzAdBnJnBxCe4AXP

def rearranged_difference(num):
    min=int("".join(sorted([str(int(i)) for i in str(num)])))
    max=int("".join(sorted([str(int(i)) for i in str(num)],reverse=True)))
    return max-min


print(rearranged_difference(9092564), 9719721)
print(rearranged_difference(1308821), 8719722)
print(rearranged_difference(8386568), 5319765)
print(rearranged_difference(7794084), 9429651)
print(rearranged_difference(6366093), 9329661)
print(rearranged_difference(7863060), 8729622)
print(rearranged_difference(3368327), 6429654)
print(rearranged_difference(7218787), 7599933)
