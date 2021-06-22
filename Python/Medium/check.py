# https://edabit.com/challenge/fyyJRDHcTe9REs4Ni
# dict_a = {'sky':'blue', 'road':'broken', 'sun': 'star', 'tree':'tall', 'car':'noisy', 'study':'hard', 'price': 500}
# dict_b = {'sun': 'star', 'book': 'bad', 'sky': 'temple', 'people': 12, 'price': 500, 'car':'auto', 'study':'hard'}
#
# def check(d1, d2, k):
#     a=d1.get(k)
#     b=d2.get(k)
#     if a==b:
#         return True
#     if not(a) or not(b):
#         return "One's empty"
#     if a!=b:
#         return "Not the same"
#
# print(check(dict_a, dict_b, 'sky'), "Not the same")
# print(check(dict_a, dict_b, 'sun'), True)
# print(check(dict_a, dict_b, 'tree'), "One's empty")
# print(check(dict_a, dict_b, 'road'), "One's empty")
# print(check(dict_a, dict_b, 'car'), "Not the same")
# print(check(dict_a, dict_b, 'book'), "One's empty")
# print(check(dict_a, dict_b, 'study'), True)
# print(check(dict_a, dict_b, 'people'), "One's empty")
# print(check(dict_a, dict_b, 'price'), True)

# https://edabit.com/challenge/hZi6AhWEzGASB7tWR
def check(lst):
    a=sorted(lst,reverse=True)
    b=sorted(lst)
    if any(b[i-1]==b[i]for i in range(1,len(b))):
        return "neither"
    if lst == a:
        return "decreasing"
    elif b==lst:
        return "increasing"


print(check([1, 2, 3]), "increasing")
print(check([3, 2, 1]), "decreasing")
print(check([1, 2, 1]), "neither")
print(check([1, 1, 2]), "neither")
print(check([1, 3, 5, 7, 9, 10]), "increasing")
print(check([5, 6, 5, 7, 9, 10]), "neither")
print(check([5, 7]), "increasing")
print(check([9, 7, 1]), "decreasing")
