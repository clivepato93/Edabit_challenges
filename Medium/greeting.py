GUEST_LIST = {
	"Randy": "Germany",
	"Karla": "France",
	"Wendy": "Japan",
	"Norman": "England",
	"Sam": "Argentina"
}

def greeting(name):
	return "Hi! I'm {}, and I'm from {}.".format(name,GUEST_LIST[name]) if name in GUEST_LIST else "Hi! I'm a guest."


print(greeting("Randy"), "Hi! I'm Randy, and I'm from Germany.")
print(greeting("Sam"), "Hi! I'm Sam, and I'm from Argentina.")
print(greeting("Monti"), "Hi! I'm a guest.")
print(greeting("Trudy"), "Hi! I'm a guest.")
print(greeting("Wendy"), "Hi! I'm Wendy, and I'm from Japan.")

# https://edabit.com/challenge/vAS4Hp4wzSEnQs3tZ
