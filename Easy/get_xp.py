# from collections import OrderedDict
# https://edabit.com/challenge/yvwdxFcxkT5hiTgfr
def get_xp(d):
    diff={'Very Easy':5,
          'Easy':10,
          'Medium':20,
          'Hard':40,
          'Very Hard':80}
    return str(sum([d['Very Easy']*diff['Very Easy'],d['Easy']*diff['Easy'],d['Medium']*diff['Medium'],d['Hard']*diff['Hard'],d['Very Hard']*diff['Very Hard']]))+"XP"

def get_xp(d):
    diff={'Very Easy':5,
          'Easy':10,
          'Medium':20,
          'Hard':40,
          'Very Hard':80}
    points = sorted(diff.items())
    done = sorted(d.items())
    return str(sum([points[number][1]*done[number][1] for number in range(len(points))]))+"XP"

print(get_xp({
	'Very Easy' : 89,
	'Easy' : 77,
	'Medium' : 30,
	'Hard' : 4,
	'Very Hard' : 1
}), '2055XP')
