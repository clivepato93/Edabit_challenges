# https://edabit.com/challenge/gSGzRjyB3vC6bnMaZ

def odd_one_out(lst):
    lst=[len(i) for i in lst]
    checker=sorted(set(lst))
    if len(checker)!=2:
        return False
    return (lst.count(checker[0])==1 and lst.count(checker[1])==len(lst)-1) or (lst.count(checker[0])==len(lst)-1 and lst.count(checker[1])==1)
print(odd_one_out(["silly", "mom", "let", "the"]), True)
print(odd_one_out(["swanky", "rhino", "moment"]), True)
print(odd_one_out(["the", "them", "theme"]), False)
print(odd_one_out(["very", "to", "an", "some"]), False)
