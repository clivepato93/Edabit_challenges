# https://edabit.com/challenge/pDmDP9KhXmBTcScT6

def get_name(address):
    return "".join(i for i in address[:address.index("@")] if i.isalpha())


print(get_name("yourname@example.com"), "yourname", "Example 1")
print(get_name("john64@gmail.com"), "john", "Example 2")
print(get_name("pamela78_Cole@hotmail.com"), "pamelaCole", "Example 3")
print(get_name("Chickenlololol29@yahoo.com"), "Chickenlololol", "Example 4")
print(get_name("a872894972Bigbear@whateverdomain.xyz"), "aBigbear")
print(get_name("python$#$\"_guy@overtherainbow.net"), "pythonguy")
print(get_name("Mr.President2050@USofA.gov"), "MrPresident")
print(get_name("z50@python.com"), "z")
print(get_name("student@exampleschooldistrict.net"), "student")
print(get_name("sars-CoV-2@pandemic.org"), "sarsCoV")
print(get_name("t1h2e3q4u5i6c7k8b9r0o1w2n3f4o5x6j7u8m9p0e123456789doverthelazydog@ro.bot"), "thequickbrownfoxjumpedoverthelazydog")
print(get_name("][:;><?/(*^%$E@br.uh"), "E")
print(get_name("uhOh-theThirteenthTest@unluc.ky"), "uhOhtheThirteenthTest")
print(get_name("e@ifdirmvsidso.jeksdjjcoa"), "e")
print(get_name("a@b.c"), "a")
