# https://edabit.com/challenge/p88k8yHRPTMPt4bBo
# original solution 
def count_vowels(txt):
	f = 'aeiou'
	a =txt.count(f[0])
	b =txt.count(f[1])
	c=txt.count(f[2])
	d=txt.count(f[3])
	e=txt.count(f[4])
	return a+b+c+d+e

# better solution
def count_vowels(txt):
	return sum(1 for letter in txt if letter in "aeiou")

print(count_vowels("Celebration"), 5)
