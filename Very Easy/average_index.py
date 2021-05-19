# https://edabit.com/challenge/X4i7hHGhKYbGkcHx6
# my solution
# in order to get the numeric value of the letter you have to use the ord function
# list comprehension in order to iterate through the list of letters
# then in order to get the index value you have to subtract the 96 from the ord ValueError
# in order to get the total easiest way to do so is using the sum function
# next step is to get a decimal number when doing division in order get a decimal you have to use
# the float function (int/float= decimal number)
# in order to get a small rounded result you use the 2nd arguement in the round function

def average_index(letters):
    a=(sum([ord(letter)-96 for letter in letters]))
    return round(a/float(len(letters)),2)
#
# def average_index(l):
# 	a = [chr(i) for i in range(ord('a'),ord('z')+1)]
# 	return round(sum([a.index(i)+1 for i in l if i in a])/len(l), 2)

print(average_index(["a", "b", "c", "i"]))
print(average_index(['o','m','g']),11.67)
