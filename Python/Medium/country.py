# https://edabit.com/challenge/smLmHK89zNoeaDSZp
class Country:

	def __init__(self, name, population, area):
		self.name = name
		self.population = population
		self.area = area
		self.is_big = [False,True][population>250000000 or area > 3000000]

	def compare_pd(self, other):
		c1=self.population/self.area
		c2=other.population/other.area
		return "{} has a {} population density than {}".format(self.name,["smaller","larger"][c1>c2],other.name)


australia = Country('Australia', 23545500, 7692024)
andorra = Country('Andorra', 76098, 468)
brazil = Country('Brazil', 202794000, 8515767)
china = Country('China', 1393000000, 9597000)
madagascar = Country('Madagascar', 26260000, 587000)
print(madagascar.is_big)
