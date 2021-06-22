# https://edabit.com/challenge/W8imhL66osEpK2ANs
def time(dct, people, walls):
    return (dct['minutes']*(walls*dct['people']))/(dct['walls']*people)

rate1 = {
	'people': 4,
	 'walls': 9,
	 'minutes': 63
}
rate2 = {
  'people': 10,
  'walls': 10,
  'minutes': 22
}

print(time(rate1, 7, 4), 16)
print(time(rate2, 10, 10), 22)
