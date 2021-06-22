# https://edabit.com/challenge/TDrfRh63jMCmqzGjv
def is_anti_list(lst1, lst2):
    return len(set(lst1+lst2))==2 and all(a!=b for a,b in list(zip(lst1,lst2)))

print(is_anti_list(["1", "0", "0", "1"], ["0", "1", "1", "0"]), True)
print(is_anti_list(["apples", "bananas", "bananas"], ["bananas", "apples", "apples"]), True)
print(is_anti_list([3.14, True, 3.14], [3.14, False, 3.14]), False)
print(is_anti_list([6.28, True, 6.28], [True, False, True]), False)
print(is_anti_list([int, str], [str, int]), True)
print(is_anti_list([3.14, True, 3.14], [3.14, True, 3.14]), False)
print(is_anti_list(['a', 'b', 'b', 'a'], ['b', 'b', 'a', 'a']), False)
print(is_anti_list(['1', '2', '2', '2'], ['2', '2', '2', '1']), False)
print(is_anti_list([121, float, float, float, 121, float], [float, 121, 121, 121, float, 121]), True)
