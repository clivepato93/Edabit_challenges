
# original solution doesn't work for test conditions spotted on 29/04/21
def clear_fog(txt):
    txt2="It's a clear day!"
    characters = 'fFgGoO'
    for i in txt:
        if i in characters:
            txt=txt.replace(i,'')
        else:
            return txt
    return txt2

# new solution
def clear_fog(txt):
    c="fFgGoO"
    f=""
    for i in txt:
        if i not in c:
            f+=i
    return f if f != txt else "It's a clear day!"


print(clear_fog("fogfogfffoooofftreesggfoogfog"), "trees")
print(clear_fog("foooffFGGGGofoogfosgfogfkygfogfogfoooggg"), "sky")
print(clear_fog("ffogfogoggofobirdsandthebeesfOGgoffog"), "birdsandthebees")
print(clear_fog("fogfoofgfogfgplgfogfanefogofgoffgo"), "plane")
print(clear_fog("fogofogoofgfffogthesgofogooagofogoourfoousfogfogfogfgofg"), "thesaurus")
print(clear_fog("fogfgofofsunfogfgoogfogofgff"), "sun")
print(clear_fog("city"), "It's a clear day!")
print(clear_fog("distance"), "It's a clear day!")
print(clear_fog("fogfogFFfoooofftogffreogffesGgfOogfog"), "trees")
print(clear_fog("fogFogFogffoObirdsanffodthebFfoeffoesGGGfOgFog"), "birdsandthebees")
print(clear_fog("fogfooGooggploffanoffefogoffoffgo"), "plane")
print(clear_fog("tfroege"), "tree", "The word 'fog' doesn't need to be intact")
