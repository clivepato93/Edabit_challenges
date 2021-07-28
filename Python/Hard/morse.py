# https://edabit.com/challenge/tbEwDviZBadDSeGSz

def morse(txt):
    d = {"A":".-","B":"-...","C":"-.-.","D":"-..","E":".",
	"F":"..-.","G":"--.","H":"....","I":"..","J":".---",
	"K":"-.-","L":".-..","M":"--","N":"-.","O":"---",
	"P":".--.","Q":"--.-","R":".-.","S":"...","T":"-",
	"U":"..-","V":"...-","W":".--","X":"-..-","Y":"-.--","Z":"--..",
 	" ":"....."}
    d1={v:k for k,v in d.items()}
    txt=txt.upper().split() if not txt[0].isalpha() else txt.upper()
    return ''.join(d1.get(i," ")for i in txt) if type(txt)==list else ' '.join(d.get(i," ")for i in txt)
    # return txt

print(morse("Barack Obama"), "-... .- .-. .- -.-. -.- ..... --- -... .- -- .-")
print(morse("Bill Clinton"), "-... .. .-.. .-.. ..... -.-. .-.. .. -. - --- -.")
print(morse("George Washington"), "--. . --- .-. --. . ..... .-- .- ... .... .. -. --. - --- -.")
print(morse("Benjamin Franklin"), "-... . -. .--- .- -- .. -. ..... ..-. .-. .- -. -.- .-.. .. -.")
print(morse("..-. .-. .. . -.. .-. .. -.-. .... ..... ... -.-. .... .. .-.. .-.. . .-."), "FRIEDRICH SCHILLER")
print(morse(".--- --- .... .- -. -. ..... .-- --- .-.. ..-. --. .- -. --. ..... ...- --- -. ..... --. --- . - .... ."), "JOHANN WOLFGANG VON GOETHE")
print(morse(".--. . - . .-. ..... .... .- -. -.. -.- ."), "PETER HANDKE")