
# https://edabit.com/challenge/hzs9hZXpgYdGM3iwB

def alternating_caps(txt):
    a=""
    n=True
    for i in txt:
        if i==" ":
            n=not(n)
        if n:
            a+=i.upper()
            n=not(n)
        else:
            a+=i.lower()
            n=not(n)
    return a

def alternating_caps(txt):
    a,b="",0
    for i in txt:
        if i==" ":
            a+=i
            continue
        if b%2==0:
            a+=i.upper()
            b+=1
        else:
            a+=i.lower()
            b+=1
    return a

print(alternating_caps("alternating caps"), "AlTeRnAtInG cApS")
print(alternating_caps("What is your name?"), "WhAt Is YoUr NaMe?")
print(alternating_caps("Lorem ipsum dolor sit amet consectetur adipisicing elit."),"LoReM iPsUm DoLoR sIt AmEt CoNsEcTeTuR aDiPiSiCiNg ElIt.")
print(alternating_caps("OMG this website is awesome!"), "OmG tHiS wEbSiTe Is AwEsOmE!")
print(alternating_caps("The quick brown fox jumps over the lazy dog"), "ThE qUiCk BrOwN fOx JuMpS oVeR tHe LaZy DoG")
