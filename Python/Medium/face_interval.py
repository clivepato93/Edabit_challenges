# https://edabit.com/challenge/n4KPv4eaLmkYeD6gq
def face_interval(num):
    return ":/" if not isinstance(num,list) else ":)" if any(max(num)-min(num)==i for i in num) else ":("


print(face_interval([1, 2, 5, 8, 3, 9]), ":)")
print(face_interval([5, 2, 6, 3, 11]), ":(")
print(face_interval([20, 50, 13, 60, 79, 72, 99]), ":(")
print(face_interval([11, 42, 83, 28, 47, 94]), ":)")
print(face_interval("bruh"), ":/")
