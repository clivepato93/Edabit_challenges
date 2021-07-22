

def best_words(lst):
    dicta={"a":1, "b":3, "c":3, "d":2,
    "e":1, "f":4, "g":2, "h":4, "i":1,
    "j":8, "k":5, "l":2, "m":3, "n":1,
    "o":1,"p":3,"q":10,"r":1,"s":1,
    "t":1,"u":1,"v":4,"w":4,"x":8,
    "y":4,"z":10}
    m=sum(dicta.get(n) for n in max(lst,key= lambda i:sum(dicta.get(l) for l in i)))
    
    return [word for word in lst if sum(dicta.get(l) for l in word)==m]

print(best_words(['got','test','oh','sat','rents']),['oh','rents'])
