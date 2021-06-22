# https://edabit.com/challenge/gfo2RDnW7atsvQqnY
def count_smileys(lst):
    d={":)":1,
       ":-D":1,
       ";-D":1,
       ':D':1,
       ':-)':1,
       ';~D':1,
       ";D":1,
       ';~)':1}
    c=0
    for s in lst:
        c+= d.get(s,0)
    return c


print(count_smileys([":)", ";(", ";}", ":-D"]), 2)
print(count_smileys([";D", ":-(", ":-)", ";~)"]), 3)
print(count_smileys([";]", ":[", ";*", ":$", ";-D"]), 1)
print(count_smileys([";(", ":>", ":}", ":]"]), 0)
print(count_smileys([":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)", ":)",]), 13)
print(count_smileys([':)',':(',':D',':O',':;']), 2)
print(count_smileys([':-)',';~D',':-D',':_D']), 3)
print(count_smileys([':---)','))',';~~D',';D']), 1)
print(count_smileys([';~)',':)',':-)',':--)']), 3)
print(count_smileys([':o)',':--D',';-~)']), 0)
print(count_smileys([]), 0, "An empty list should return 0")
