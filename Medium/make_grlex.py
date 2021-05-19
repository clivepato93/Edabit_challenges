# https://edabit.com/challenge/qLMZ2hEvrhRSSSnQw
def make_grlex(lst):
	return sorted(lst, key= lambda i:(len(i),i))

print(make_grlex(["small", "big"]), ["big", "small"], "order first by size")
print(make_grlex(["big", "cat", "ran", "for", "the", "fat", "rat"]), ["big", "cat", "fat", "for", "ran", "rat", "the"], "If same size, order alphabetically.")
print(make_grlex(["this", "is", "a", "small", "test"]), ["a", "is", "test", "this", "small"])
print(make_grlex(["let", "us", "try", "some", "long", "test", "to", "see", "if", "this", "works", "as", "it", "should"]), ["as", "if", "it", "to", "us", "let", "see", "try", "long", "some", "test", "this", "works", "should"])
