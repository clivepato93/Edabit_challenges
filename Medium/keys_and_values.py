# https://edabit.com/challenge/9HWMgvjF7p3zhWBdk
def keys_and_values(d):
    s=sorted(d.items())
    return [[k for k,v in s],[v for k,v in s]]


print(keys_and_values({'a': 1, 'b': 2, 'c': 3}), [["a", "b", "c"], [1, 2, 3]])
print(keys_and_values({'a': "Apple", 'b': "Microsoft", 'c': "Google"}), [["a", "b", "c"], ["Apple", "Microsoft", "Google"]])
print(keys_and_values({'key1': True, 'key2': False, 'key3': True}), [["key1", "key2", "key3"], [True, False, True]])
print(keys_and_values({'key1': "cat", 'key2': "dog", 'key3': "fox"}), [["key1", "key2", "key3"], ["cat", "dog", "fox"]])
