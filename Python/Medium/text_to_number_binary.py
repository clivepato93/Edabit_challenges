# https://edabit.com/challenge/i98e9Czup3kbfoHm3

def text_to_number_binary(txt):
    txt = txt.lower().split()
    c=[]
    for i in txt:
        if i=="zero":
            c+='0'
        elif i=="one":
            c+="1"
    while len(c)%8!=0:
        c.pop(-1)
    return "".join(c)

print(text_to_number_binary('one one one one zero zero zero zero'), "11110000")
print(text_to_number_binary('one Zero zero one zero zero one one one one one zero oNe one one zero one zerO'), "1001001111101110")
print(text_to_number_binary('one zero one'), "")
print(text_to_number_binary('one zero zero one zero ten one one one one two'), "10010111")
print(text_to_number_binary('One zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero one one one zero one one zero zero zero zero one zero'), "1001011101100001011101100001011101100001011101100001011101100001")
print(text_to_number_binary('TWO one zero one one zero one zero'), "")
print(text_to_number_binary('TWO one zero one one zero one zero one'), "10110101")
