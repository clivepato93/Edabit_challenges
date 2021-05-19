# https://edabit.com/challenge/ZrAnDiPTbmrJMHWHD
def is_central(txt):
    if not(len(txt)%2):
        return False
    return txt[::-1][len(txt)/2]!=" "

print(is_central('  #  '), True)
print(is_central(' 2    '), False)
print(is_central('@'), True)
print(is_central(' 1'), False)
print(is_central('7 '), False)
print(is_central('  l '), False)
print(is_central(' a  '), False)
print(is_central('    G    '), True)
print(is_central('   G     '), False)
print(is_central('        %        '), True)
