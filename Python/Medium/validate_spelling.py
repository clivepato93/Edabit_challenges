# https://edabit.com/challenge/djDJHv3nwWsRM9mtu
def validate_spelling(txt):
    txt=txt.replace(".","").split()
    last_word="".join(i for i in txt[-1] if i.isalpha()).lower()
    a="".join(txt[:-1]).lower()
    return last_word==a


print(validate_spelling("C. Y. T. O. P. L. A. S. M. Cytoplasm?"), True)
print(validate_spelling("P. H. A. R. A. O. H. Pharaoh!"), True)
print(validate_spelling("H. A. N. K. E. R. C. H. E. I. F. Handkerchief."), False)
print(validate_spelling("M. E. C. O. M. M. E. N. N. Recommend."), False)
