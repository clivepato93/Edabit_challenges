# https://edabit.com/challenge/wYcTcJSQJzca39apZ

def truncate(txt, length):
    if length>=len(txt):
        return txt
    while txt[length]!=" ":
        length-=1
    return txt[:length] if length>0 else ""


# "Clean cut".
print(truncate("Lorem ipsum dolor sit amet.", 11), "Lorem ipsum")

# Dirty cut; you have to discard the last word.
print(truncate("Lorem ipsum dolor sit amet.", 16), "Lorem ipsum", "You have to discard the last word.")

# If length is greater than the strings length.
print(truncate("Lorem ipsum", 20), "Lorem ipsum", "If length is greater than the strings length.")

# Some extra tests.
print(truncate("Lorem ipsum", 4), "")
print(truncate("Lorem ipsum", 0), "")
print(truncate("", 30), "")
