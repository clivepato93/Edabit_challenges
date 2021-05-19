# https://edabit.com/challenge/2FR33kRmz87xRMZuq
def histogram(lst, char):
    return "\n".join(char*number for number in lst)

print(histogram([2,4,5,6], "o"), 'oo\noooo\nooooo\noooooo')
print(histogram([4,2], "*"), '****\n**')
print(histogram([20,1,12], "H"), 'HHHHHHHHHHHHHHHHHHHH\nH\nHHHHHHHHHHHH')
print(histogram([2,1,2,4,5,2,3], "#"), '##\n#\n##\n####\n#####\n##\n###')
