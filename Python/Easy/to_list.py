# https://edabit.com/challenge/L9nvCobbYyGgKpWi8
def to_list(dct):
    return [] if not dct else sorted([[k,v] for k,v in dct.items()])


print(to_list({ 'a': 1, 'b': 2 }), [["a", 1], ["b", 2]])
print(to_list({ 'foo': 33, 'bar': 45, 'baz': 67 }), [["bar", 45], ["baz", 67], ["foo", 33]])
print(to_list({ 'shrimp': 15, 'tots': 12 }), [["shrimp", 15], ["tots", 12]])
print(to_list({}), [])
