# https://edabit.com/challenge/Ff84aGq6e7gjKYh8H

def minutes_to_seconds(time):
	length =time.split(":")
	return False if len(length[-1])>2 or int(length[-1])>59 else sum([int(length[0])*60,int(length[-1])])
