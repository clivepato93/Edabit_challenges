# https://edabit.com/challenge/nT4y8naTzHgknsW6h
def transform_upvotes(txt):
    votes=txt.replace("k","").split()
    votes=[eval(i) for i in votes]
    return [int(i*1000) if int(i)!=float(i) else i for i in votes]

print(transform_upvotes('20.3k 3.8k 7.7k 992'), [20300, 3800, 7700, 992])
print(transform_upvotes('5.5k 8.9k 32'), [5500, 8900, 32])
print(transform_upvotes('6.8k 13.5k'), [6800, 13500])


# print(20.3*1000)
