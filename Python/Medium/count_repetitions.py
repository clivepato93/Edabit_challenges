# https://edabit.com/challenge/gDtHS9cAy8Fs2X7pH
def count_repetitions(lst):
    s={}
    for i in set(lst):
        s[i]=lst.count(i)
    return s


print(count_repetitions(["cat", "dog", "cat", "cow", "cow", "cow"]), { "cow": 3, "cat": 2, "dog": 1 })
print(count_repetitions([1, 5, 5, 5, 12, 12, 0, 0, 0, 0, 0, 0]), { 0: 6, 5: 3, 12: 2, 1: 1 })
print(count_repetitions(["Infinity", "null", "Infinity", "null", "null"]), { "null": 3, "Infinity": 2})
print(count_repetitions(["a", "b", "c", "a", "b", "a"]), {"a": 3,"b": 2,"c": 1})
