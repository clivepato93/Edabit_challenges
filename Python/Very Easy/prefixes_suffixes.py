# https://edabit.com/challenge/uFBNaJwtKXBH64oMG
def is_prefix(word,prefix):
    prefix = prefix[:-1]
    if prefix in word:
        return True
    else:
        return False

def is_suffix(word,suffix):
    suffix = suffix[1:]
    if suffix in word:
        return True
    else:
        return False


print(is_prefix("automation", "auto-"), True)
print(is_prefix("automation", "auto-"), True)
print(is_prefix("superfluous", "super-"), True)
print(is_prefix("oration", "mega-"), False)
print(is_prefix("retrospect", "sub-"), False)

print(is_suffix("arachnophobia", "-phobia"), True)
