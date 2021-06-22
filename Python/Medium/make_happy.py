# https://edabit.com/challenge/mCNwMqca9R3hBY6fY
# def make_happy(txt):
#     faces={":(":':)',
#            "8(":'8)',
#            "x(":"x)",
#            ";(":";)"}
#
#     for k,v in faces.items():
#         txt=txt.replace(k,v)
#     return txt

def make_happy(txt):
    return txt.replace(":(",':)').replace("8(",'8)').replace("x(",'x)').replace(";(",';)')
print(make_happy('My current mood: :('), 'My current mood: :)')
print(make_happy('I was hungry 8('), 'I was hungry 8)')
print(make_happy('print("x(")'), 'print("x)")')
print(make_happy("I'm thirsty ;("), "I'm thirsty ;)")
print(make_happy('(((:())))'), '(((:)))))')
print(make_happy('I am :( :( 8( :)'), 'I am :) :) 8) :)')
print(make_happy('l'), 'l')
