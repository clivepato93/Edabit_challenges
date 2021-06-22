# https://edabit.com/challenge/nfWirHJzNRBMAp9Df
def hamming_distance(txt1, txt2):
    return sum([1 if a!=b else 0 for a,b in list(zip(txt1,txt2))])


print(hamming_distance("abcde", "bcdef"), 5)
print(hamming_distance("abcde", "abcde"), 0)
print(hamming_distance("strong", "strung"), 1)
