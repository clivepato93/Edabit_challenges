# https://edabit.com/challenge/2wQPKcSipXmK4idwD
def find_it(items, name):
    return "{} is here!".format(name.title()) if name not in items.keys() else "{} is gone...".format(name.title())


print(find_it({}, "rambo"),"Rambo is here!")
print(find_it({}, "heman"),"Heman is here!")

print(find_it({
  "tv": 30,
  "stereo": 50,
}, "rocky"),"Rocky is here!")

print(find_it({
  "tv": 30,
  "stereo": 50,
}, "spiderman"),"Spiderman is here!")

print(find_it({
  "tv": 30,
  "stereo": 50,
	"julius": 100,
}, "julius"),"Julius is gone...")

print(find_it({
  "tv": 30,
  "stereo": 50,
	"batman": 200,
}, "batman"),"Batman is gone...")

# Author : Miguel Carvalho
