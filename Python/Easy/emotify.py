'''Create a function that changes specific words into emoticons.
 Given a sentence as a string, replace the words smile, grin, sad and mad with their corresponding emoticons.
'''
# https://edabit.com/challenge/X5K95S2nEmTrsJCPD

def emotify(txt):
	a={"Make me smile":"Make me :D",
	"Make me grin":"Make me :)",
	"Make me sad":"Make me :(",
	"Make me mad":"Make me :P"}
	return a[txt]
