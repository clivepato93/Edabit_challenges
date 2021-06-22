# https://edabit.com/challenge/wZzZ9NtugwsnQEQeM
def golf_score(course, result):
    gt={'double-bogey':2,
                'bogey':1,
                'birdie':-1,
                'eagle':-2,
                'par':0}
    checker=[gt[i]for i in result]
    return sum(a+b for a,b in list(zip(course,checker)))

print(golf_score([4, 4, 4, 4, 5, 3, 3, 4, 3, 5, 4, 4, 3, 4, 5, 4, 4, 5],
    ['double-bogey', 'par', 'par', 'double-bogey', 'eagle', 'par', 'bogey', 'birdie', 'birdie', 'bogey', 'par', 'birdie', 'par', 'par', 'par', 'par', 'bogey', 'par']),
      74)
print(golf_score([5, 4, 4, 4, 4, 4, 5, 4, 3, 3, 4, 5, 3, 4, 4, 3, 5, 4], ['par', 'bogey', 'birdie', 'bogey', 'par', 'birdie', 'par', 'bogey', 'eagle', 'par', 'par', 'birdie', 'par', 'eagle', 'double-bogey', 'birdie', 'par', 'birdie']), 68)
