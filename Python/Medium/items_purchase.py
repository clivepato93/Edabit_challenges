# https://edabit.com/challenge/9ZAk3EEoQ9YPGGYhA
def items_purchase(s, w):
    w=int(w[1:])
    for k,v in s.items():
        s[k]=int(s[k][1:].replace(",",""))
    a=sorted([k for k in s if s[k]<=w])
    if a:
        return a
    return "Nothing"

print(items_purchase({"Water": "$1", "Bread": "$3", "TV": "$1,000","Fertilizer": "$20"}, "$300"), ["Bread", "Fertilizer", "Water"])
print(items_purchase({"Apple": "$4", "Honey": "$3", "Fan": "$14", "Bananas": "$4", "Pan": "$100", "Spoon": "$2"}, "$100"), ["Apple", "Bananas", "Fan", "Honey", "Pan", "Spoon"])
print(items_purchase({"Phone": "$999", "Speakers": "$300", "Laptop": "$5,000", "PC": "$1200"}, "$1"), "Nothing")
