def organize(txt):
    if txt:
        o=["name","age","occupation"]
        txt=[w if w[0]!=" " else w[1:] for w in txt.split(",")]
        txt[1]=int(txt[1])
        return dict(zip(o,txt))
    return {}

print(organize("Jameel Saeb, 15, CEO of facebook"),
{'name':'Jameel Saeb','age':15,'occupation':'CEO of facebook'})

print(organize("John Mayer, 41, Singer"),
{'name':"John Mayer", 'age':41,'occupation':"Singer"})
