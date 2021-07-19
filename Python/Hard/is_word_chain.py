# https://edabit.com/challenge/SmM8CSnsTTEF3mhX3

def is_word_chain(words):
    for i in range(0,len(words)-1):
        if len(words[i])!=len(words[i+1]) or sum(a!=b for a,b in list(zip(words[i],words[i+1])))>1:
            return False
    return True

print(is_word_chain(['meal', 'seal', 'seat', 'beat', 'beet']), True)
# print(is_word_chain(['red', 'bed', 'bet', 'bat', 'sat']), True)
# print(is_word_chain(['heady', 'ready', 'beady', 'beads', 'meads', 'meats', 'seats', 'feats']), True)
# print(is_word_chain(['score', 'scare', 'stare', 'spare', 'spire']), True)
# print(is_word_chain(['more', 'mire', 'dire', 'dare', 'date']), True)
# print(is_word_chain(['read', 'red', 'led', 'lad', 'lady']), False)
# print(is_word_chain(['red', 'bat', 'cat', 'sat']), False)
# print(is_word_chain(['candy', 'candies', 'fat', 'rat']), False)