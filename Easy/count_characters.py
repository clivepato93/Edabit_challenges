def count_characters(lst):
    i = 0
    for sublist in lst:
        for character in sublist:
            i+=1
    return i


print(count_characters([
'###',
'###',
'###'
]), 9)
