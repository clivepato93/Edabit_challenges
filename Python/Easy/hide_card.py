# https://edabit.com/challenge/iRCwdDBkNcHM5QeAm
'''
Write a function that takes a credit card number and only displays the last four characters.
The rest of the card number must be replaced by ************.
'''

def card_hide(card):
    return "".join(i.replace(i,"*") for i in card[:-4])+card[-4:]

def card_hide(card):
    a = len(card)
    b = str(card)
    w = b[-4]
    x = b[-3]
    y = b[-2]
    z = b[-1]
    c = "*"
    return (c*(a-4)+w+x+y+z)

print(card_hide("1234123456785678"), "************5678")
