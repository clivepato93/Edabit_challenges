# https://edabit.com/challenge/fnLXJnqoDFTJNZk5r
def sort_contacts(names, sort):
    a=False if sort=="ASC" else True
    return sorted(names,key= lambda i:i.split()[1],reverse=a) if names else []

print(sort_contacts(['John Locke', 'Thomas Aquinas', 'David Hume', 'Rene Descartes'], 'ASC'), ['Thomas Aquinas', 'Rene Descartes', 'David Hume', 'John Locke'])
print(sort_contacts(['Paul Erdos', 'Leonhard Euler', 'Carl Gauss'], 'DESC'), ['Carl Gauss', 'Leonhard Euler', 'Paul Erdos'])
print(sort_contacts(['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt'], 'DESC'), ['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt'])
print(sort_contacts(['Al Gore', 'Barack Obama'], 'ASC'), ['Al Gore', 'Barack Obama'])
print(sort_contacts(['Albert Einstein'], 'ASC'), ['Albert Einstein'])
print(sort_contacts([], 'DESC'), [])
print(sort_contacts(None, 'DESC'), [])
