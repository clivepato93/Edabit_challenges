# https://edabit.com/challenge/TjozEDjS7u5udR942

def sort_authors(lst):
    return sorted(lst,key=lambda x:(x.split()[-1][0].lower(),lst.index))


print(sort_authors(["J. K. Rowling", "W. S.", "Lewis Carroll", "M. M."]), ["Lewis Carroll", "M. M.", "J. K. Rowling", "W. S."])
print(sort_authors(["J. L.", "J. B. Priestley", "L. C.", "Suzanne Collins"]), ["L. C.", "Suzanne Collins", "J. L.", "J. B. Priestley"])
print(sort_authors(["J. L.", "J. B. Priestley", "L. C.", "suzanne collins", "W. S."]), ["L. C.", "suzanne collins", "J. L.", "J. B. Priestley", "W. S."])
print(sort_authors(["J. K. Rowling", "w. s.", "lewis carroll", "M. M."]), ["lewis carroll", "M. M.", "J. K. Rowling", "w. s."])
print(sort_authors(["J. L.", "J. B. priestley", "L. C.", "Suzanne Collins"]), ["L. C.", "Suzanne Collins", "J. L.", "J. B. priestley"])
