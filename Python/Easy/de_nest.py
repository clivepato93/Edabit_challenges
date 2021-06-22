# https://edabit.com/challenge/gJSkZgCahFmCmQj3C
def de_nest(lst):
    return eval(str(lst).strip("[]"))


print(de_nest([[[[[[[[[[[[3]]]]]]]]]]]]), 3)
print(de_nest([[[[[[[True]]]]]]]), True)
print(de_nest([[[[[[[[[[[[[[[[['edabit']]]]]]]]]]]]]]]]]), 'edabit')
print(de_nest([1]), 1)
print(de_nest([[[[[[[4.3]]]]]]]), 4.3)
print(de_nest([[[[[False]]]]]), False)
print(de_nest([['sixty']]), 'sixty')
