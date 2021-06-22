# https://edabit.com/challenge/8MiJwz7fdaWRiRDYc
'''
A number n is apocalyptic if 2^n contains a string of 3 consecutive 6s
(666 being the presumptive "number of the beast").

Create a function that takes a number n as input.
If the number is apocalyptic, find the index of 666 in 2^n, and return
"Repent! X days until the Apocalypse!" (X being the index). If not, return "Crisis averted.
Resume sinning.".


'''

#
# def apocalyptic(n):
#     stringy =str(2**n)
#     finder = stringy.find("666")
#     if finder != -1:
#         return "Repent! {} days until the Apocalypse!".format(finder)
#     else:
#         return  "Crisis averted. Resume sinning."
#
#
# print(apocalyptic(157))
# print(apocalyptic(175))
# print(apocalyptic(220))
# print(apocalyptic(333))
# print(apocalyptic(499))
# print(apocalyptic(666))
# print(apocalyptic(1003))
