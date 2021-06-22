# https://edabit.com/challenge/4bX7qAqELq9XJeB26
def to_camel_case(txt):
    if txt:
        f,s,t=txt.split("_") if "_" in txt else txt.split("-")
        return "{}{}{}".format(f,s.capitalize(),t.capitalize())
    return ""



print(to_camel_case("the_stealth_warrior"), "theStealthWarrior", "Did not return correct value")
print(to_camel_case("The-Stealth-Warrior"), "TheStealthWarrior", "Did not return correct value")
print(to_camel_case("A-B-C"), "ABC", "Did not return correct value.")
print(to_camel_case(''), '', "An empty string was provided but not returned.")
