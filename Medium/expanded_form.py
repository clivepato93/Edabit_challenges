# https://edabit.com/challenge/SQo9Jx5ih2iHG8JAn
def expanded_form(num):
    string_num=[v+'0'*i if v!='0' else v for i,v in enumerate(str(num)[::-1])][::-1]
    return ' + '.join(n for n in string_num if n[0]!="0")

print(expanded_form(12), '10 + 2')
print(expanded_form(42), '40 + 2')
print(expanded_form(70304), '70000 + 300 + 4')
