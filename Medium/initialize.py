# https://edabit.com/challenge/ANsubgd5zPGxov3u8

def initialize(names):
    c=[]
    for string in names:
        a=string.split()
        c.append("{}. {}.".format(a[0][0],a[1][0]))
    return c

# print(initialize(['Sherlock Holmes', 'John Watson', 'Irene Adler']), ['S. H.', 'J. W.', 'I. A.'])
# print(initialize(['Harry Potter', 'Ron Weasley']), ['H. P.', 'R. W.'])
# print(initialize(['Stephen Hawking']), ['S. H.'])
# print(initialize(['Atticus Finch']), ['A. F.'])
print(initialize(['Leonardo DiCaprio']), ['L. D.'])
