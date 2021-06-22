# https://edabit.com/challenge/qkBR9guzewqTztLPM
def str_match_by2char(a, b):
    c=min(a,b,key=len)
    d=b if c!=b else a
    return sum(c[i:i+2]==d[i:i+2] for i in range(0,len(c)-1))


print(str_match_by2char('jjcAAzz', 'jjBAAz'), 3, "Some matches")
print(str_match_by2char('ABcd', 'ABcD'), 2, "case matters")
print(str_match_by2char('ABc', 'Ajc'), 0, "No matches")
print(str_match_by2char('edabit', 'ed'), 1, "B in A")
print(str_match_by2char('ed', 'edabit'), 1, "A in B")
print(str_match_by2char('e', 'edabit'), 0, "1 char is not a match")
print(str_match_by2char('', 'edabit'), 0, "Empty string check")
print(str_match_by2char('AABBccDD', 'ABBBjjD'), 1, "Random string")
print(str_match_by2char('AAjjAAjj', 'iAjjAi'), 3, "Random string")
print(str_match_by2char('iAjjAi', 'AAjjAAjj'), 3, "Random string")
