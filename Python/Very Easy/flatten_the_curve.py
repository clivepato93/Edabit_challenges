# https://edabit.com/challenge/WsHSAEBQW6F7nsMjr
def flatten_the_curve(lst):
	try:
		avg=sum(lst)/len(lst)
	except:
		return []
	return [round(avg,1) for i in range(len(lst))]

print(flatten_the_curve([1, 2, 3, 4, 5]),  [3, 3, 3, 3, 3])
print(flatten_the_curve([0, 0, 0, 2, 7, 3]), [2, 2, 2, 2, 2, 2])
print(flatten_the_curve([4]), [4])
print(flatten_the_curve([]), [])
print(flatten_the_curve([7, 4, 2, 1]), [3.5, 3.5, 3.5, 3.5])
print(flatten_the_curve([-13, 0, -18]), [-10.3, -10.3, -10.3])
print(flatten_the_curve([24, 9, 18, -26, -4]), [4.2, 4.2, 4.2, 4.2, 4.2])
print(flatten_the_curve([-16, -4, -8, 28, 26]), [5.2, 5.2, 5.2, 5.2, 5.2])
print(flatten_the_curve([21, 2, 10]), [11.0, 11.0, 11.0])
print(flatten_the_curve([-19, 4, -21, -23, -25, 23, -4]), [-9.3, -9.3, -9.3, -9.3, -9.3, -9.3, -9.3])
print(flatten_the_curve([-19, 20]), [0.5, 0.5])
print(flatten_the_curve([1, -24, 19]), [-1.3, -1.3, -1.3])
print(flatten_the_curve([6, -8, -12, 12, 22, 26, -9, 8, 27, 13]), [8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5, 8.5])
print(flatten_the_curve([-7, -4]), [-5.5, -5.5])
print(flatten_the_curve([23, -13, -13, -15, 13]), [-1.0, -1.0, -1.0, -1.0, -1.0])
print(flatten_the_curve([22, -12, 0, -19, 2, 17, -11, 6]), [0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6, 0.6])
print(flatten_the_curve([-18, -1, 28, -29, -7, 12, -11]), [-3.7, -3.7, -3.7, -3.7, -3.7, -3.7, -3.7])
print(flatten_the_curve([-7, 13, 18]), [8.0, 8.0, 8.0])
print(flatten_the_curve([-19, 29, -15, 30, -17]), [1.6, 1.6, 1.6, 1.6, 1.6])
print(flatten_the_curve([26, -15, 4, -7, 30, 25, -16, -10, -15]), [2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4, 2.4])
print(flatten_the_curve([-24, 19, -25, -2, 12, 22, -3, 8, 29]), [4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0, 4.0])
print(flatten_the_curve([-10, 23, -4, -29, -3, -17, -17, 18]), [-4.9, -4.9, -4.9, -4.9, -4.9, -4.9, -4.9, -4.9])
print(flatten_the_curve([2, -13, -20, -25, 24, -18, -30, -4, 14, -21]), [-9.1, -9.1, -9.1, -9.1, -9.1, -9.1, -9.1, -9.1, -9.1, -9.1])
print(flatten_the_curve([-10, 26, 14, 1, 14, -8, 3, -19]), [2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6])
print(flatten_the_curve([8, -16, 28, 8, 16, 30, -4]), [10.0, 10.0, 10.0, 10.0, 10.0, 10.0, 10.0])
