# https://edabit.com/challenge/tgEWKRQD8hu5dD3pX

def mood_today(mood='neutral'):
	sent = "Today, I am feeling {}".format(mood)
	return sent

print(mood_today("happy"), "Today, I am feeling happy")
print(mood_today("sad"), "Today, I am feeling sad")
print(mood_today("very happy"), "Today, I am feeling very happy")
print(mood_today("rather empty inside"), "Today, I am feeling rather empty inside")
print(mood_today("confused"), "Today, I am feeling confused")
print(mood_today(), "Today, I am feeling neutral")
