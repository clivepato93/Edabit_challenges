# https://edabit.com/challenge/WsGjnhMdjsvzyuk5q
def dashed(txt):
    u="AEIOU"
    l='aeiou'
    f=""
    for i in txt:
        if i in u or i in l:
            f+="-"+i+"-"
        else:
            f+=i
    return f



str_vector, res_vector = ["Edabit", "Carpe Diem", "Fight for your right to party!",
    "Finishing off someone's sentence is annoying, even if you have guessed correctly. Add to that rude, if they stutter.",
    "Fear the soldier who stammers, for he is very fast at pulling the trigger.",
    "Thank you, I said bravely, dropping the syllables cleanly, like marbles, and secretly full of the most pathetic pride imaginable."], \
  ["-E-d-a-b-i-t", "C-a-rp-e- D-i--e-m", "F-i-ght f-o-r y-o--u-r r-i-ght t-o- p-a-rty!",
   "F-i-n-i-sh-i-ng -o-ff s-o-m-e--o-n-e-'s s-e-nt-e-nc-e- -i-s -a-nn-o-y-i-ng, -e-v-e-n -i-f y-o--u- h-a-v-e- g-u--e-ss-e-d c-o-rr-e-ctly. -A-dd t-o- th-a-t r-u-d-e-, -i-f th-e-y st-u-tt-e-r.",
   "F-e--a-r th-e- s-o-ld-i--e-r wh-o- st-a-mm-e-rs, f-o-r h-e- -i-s v-e-ry f-a-st -a-t p-u-ll-i-ng th-e- tr-i-gg-e-r.",
   "Th-a-nk y-o--u-, -I- s-a--i-d br-a-v-e-ly, dr-o-pp-i-ng th-e- syll-a-bl-e-s cl-e--a-nly, l-i-k-e- m-a-rbl-e-s, -a-nd s-e-cr-e-tly f-u-ll -o-f th-e- m-o-st p-a-th-e-t-i-c pr-i-d-e- -i-m-a-g-i-n-a-bl-e-."]
for i, x in enumerate(str_vector): print(dashed(x), res_vector[i])
