# https://edabit.com/challenge/TBCujkw9D8hrEgFc4
def validate_email(txt):
    if not(txt):
        return False
    return True if txt[0]!="@" and "@" in txt and txt[-4]=="." else False

print(validate_email('@edabit.com'), False)
print(validate_email('@edabit'), False)
print(validate_email('matt@edabit.com'), True)
print(validate_email(''), False, "Don't forget about empty strings!")
print(validate_email('hello.gmail@com'), False)
print(validate_email('bill.gates@microsoft.com'), True)
print(validate_email('hello@email'), False)
print(validate_email('%^%$#%^%'), False)
print(validate_email('www.email.com'), False)
print(validate_email('email'), False)
