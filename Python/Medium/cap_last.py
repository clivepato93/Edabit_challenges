# https://edabit.com/challenge/vAwDW47yngWh8iMwN
def cap_last(txt):
    # txt=txt.split()
    return " ".join(word[:-1]+word[-1].upper() for word in txt.split())


print(cap_last("hello"), "hellO")
print(cap_last("My Name Is Edabit"),"MY NamE IS EdabiT")
print(cap_last("HELp THe LASt LETTERs CAPITALISe"), "HELP THE LAST LETTERS CAPITALISE")
print(cap_last("hellooooo"), "hellooooO")
print(cap_last("hahA I aM alreadY capitaliseD"), "hahA I aM alreadY capitaliseD")
