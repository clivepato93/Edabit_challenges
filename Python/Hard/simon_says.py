def simon_says(lst):
    d={'add':"+","subtract":"-","multiply":"*"}
    n=0
    for sentence in lst:
        if "Simon" not in sentence:
            continue
        else:
            sentence=[word for word in sentence.split() if word!='by']
            c=d[sentence[-2]]
            x=sentence[-1]
            n=(eval(eval("str(n)+eval('c')+x")))
    return n



print(simon_says([
	"Simon says add 4",
	"Simon says add 6",
	"Then add 5"
]), 10)