# https://edabit.com/challenge/88RHBqSA84yT3fdLM
def inator_inator(inv):
     if inv[-1] in 'aieou' or inv[-1] in 'AIEOU':
         return inv+'-inator {}000'.format(len(inv))
     else:
         return inv+'inator {}000'.format(len(inv))

print(inator_inator("EvilClone"), "EvilClone-inator 9000")
print((inator_inator("Shrink"), "Shrinkinator 6000"))
