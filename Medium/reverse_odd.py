# https://edabit.com/challenge/DjyqoxE3WYPe7qYCy
def reverse_odd(txt):
    txt=txt.split()
    return " ".join(word[::-1] if len(word)%2 else word for word in txt)


print(reverse_odd("One two three four"),'enO owt eerht four')
print(reverse_odd('Make sure uoy only esrever sdrow of ddo length'),'Make sure you only reverse words of odd length')
print(reverse_odd(''),'','Should work with empty string.')
print(reverse_odd('Bananas'),'sananaB','Should work with only one word.')
print(reverse_odd('Even even even even even even even even even'),'Even even even even even even even even even')
print(reverse_odd('Odd odd odd odd odd odd odd odd odd odd odd'),'ddO ddo ddo ddo ddo ddo ddo ddo ddo ddo ddo')
