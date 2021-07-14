# https://edabit.com/challenge/NwjjtsruLzTxEgAkL
import re
def assignment(date):
	d=re.compile(r'\b^(\d{4})[/|,|.]{1}(\d{2})[/|,|.]{1}(\d{2})$\b')
	match=d.search(date)
	if match:
		return True
	return False

print(assignment("12/1/1"), False)
print(assignment("1234/12/01"), True)
print(assignment("2012/1/1"), False)
print(assignment("2012/01/07"), True)
print(assignment("dates2012/01/07appo"), False)
print(assignment("2018/09/12"), True)
print(assignment("ammo2011/01/07"), False)
