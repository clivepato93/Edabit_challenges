def chosen_wine(wines):
    c=sorted(wines,key= lambda i:i['price'])
    return c[1]['name'] if len(c)>=2 and c else c[0]['name'] if len(c)==1 else None

print(chosen_wine([{"name": "Wine A", "price": 8.99}, {"name": "Wine 32", "price": 13.99}, {"name": "Wine 9", "price": 10.99}]), "Wine 9")
print(chosen_wine([{"name": "Wine A", "price": 8.99}, {"name": "Wine B", "price": 9.99}]), "Wine B")
print(chosen_wine([{"name": "Wine A", "price": 8.99}]), "Wine A")
print(chosen_wine([]), None)
print(chosen_wine([{"name": "Wine A", "price": 8.99}, {"name": "Wine 389", "price": 109.99}, {"name": "Wine 44", "price": 38.44}, {"name": "Wine 72", "price": 22.77}]), "Wine 72")
