def get_middle(word):
	return word[len(word)//2-1:len(word)//2+1] if len(word)%2==0 else word[len(word)//2]

print(get_middle("test"), "es")
print(get_middle("testing"), "t")
