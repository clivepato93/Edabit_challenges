# https://edabit.com/challenge/co4nwXSvnCjGEu8vp
def format_date(date):
	dates = date.split("/")[::-1]
	return "".join(dates)


print(format_date("11/12/2019"),"20191211")
print(format_date("12/31/2019"), "20193112")
print(format_date("01/15/2019"), "20191501")
