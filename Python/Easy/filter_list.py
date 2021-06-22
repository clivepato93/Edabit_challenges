# https://edabit.com/challenge/nunJurLEibCyn8fzn
def filter_list(lst):
    finalL=[]
    for i in lst:
        if type(i)==int:
            finalL.append(i)
    return finalL


print(filter_list([1, 2, "a", "b"]), [1, 2])
print(filter_list([1, "a", "b", 0, 15]), [1, 0, 15])
print(filter_list([1, 2, "aasf", "1", "123", 123]), [1, 2, 123])
print(filter_list(["jsyt", 4, "yt", "6"]), [4])
print(filter_list(["r", 5, "y", "e", 8, 9]), [5, 8, 9])
print(filter_list(["a", "e", "i", "o", "u"]), [])
print(filter_list([4, "z", "f", 5]), [4, 5])
print(filter_list(["abc", 123]), [123])
print(filter_list(["$%^", 567, "&&&"]), [567])
print(filter_list(["w", "r", "u", 43, "s", "a", 76, "d", 88]), [43, 76, 88])
