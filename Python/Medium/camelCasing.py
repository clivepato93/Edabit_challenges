# https://edabit.com/challenge/djLTSAc6h4bt6ehWu

def camelCasing(txt):
    a=''.join([v.replace("_"," ") if v=="_" else v for i,v in enumerate(txt) ])
    f,*r=a.split()
    return "{}{}".format(f.lower(),"".join(i.capitalize() for i in r))
    # return f,r "".join([i.capitalize() for i in a])

print(camelCasing("Hello World"), "helloWorld")
print(camelCasing("snake_case"), "snakeCase")
print(camelCasing("low high_HIGH"), "lowHighHigh")
print(camelCasing("unEcEsSARilY_loNG_vArIablE_NaME"), "unecessarilyLongVariableName")
print(camelCasing("camel casing"), "camelCasing")
