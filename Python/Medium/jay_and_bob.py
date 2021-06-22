# https://edabit.com/challenge/q4bBcq5NET4CH5Rcb
'''Jay and Silent Bob have been given a fraction of an ounce but they only understand grams.
 Convert a fraction passed as a string to grams with up to two decimal places. An ounce weighs 28 grams.

'''
def jay_and_bob(txt):
    d={"half":"14 grams",
       "quarter":"7 grams",
       "eighth":"3.5 grams",
       "sixteenth":"1.75 grams"}

    return d.get(txt)

print(jay_and_bob("half"), "14 grams")
print(jay_and_bob("quarter"), "7 grams")
print(jay_and_bob("eighth"), "3.5 grams")
print(jay_and_bob("sixteenth"), "1.75 grams")
