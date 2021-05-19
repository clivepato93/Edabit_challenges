# https://edabit.com/challenge/76ibd8jZxvhAwDskb
def tallest_skyscraper(lst):
    return sum(1 for row in lst if 1 in row)


print(tallest_skyscraper([
	[0, 0, 0, 0],
	[0, 1, 0, 0],
	[0, 1, 1, 0],
	[1, 1, 1, 1]
]), 3)

print(tallest_skyscraper([
	[0, 1, 0, 0],
	[0, 1, 0, 0],
	[0, 1, 1, 0],
	[1, 1, 1, 1]
]), 4)
