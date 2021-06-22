# https://edabit.com/challenge/EoS5M5Smi8NPtzCWE

def secret(text):
    p = text.split("*")
    new_text="<"+p[0]+">"+"</"+p[0]+">"
    return new_text*int(p[-1])

print(secret("div*2"),"<div></div><div></div>")
print(secret("p*1"),"<p></p>")
print(secret("li*3"),"<li></li><li></li><li></li>")
print(secret("h1*4"),"<h1></h1><h1></h1><h1></h1><h1></h1>")
print(secret("ul*2"),"<ul></ul><ul></ul>")
