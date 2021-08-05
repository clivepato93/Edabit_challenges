def longest_common_ending(txt1, txt2):
    for i in range(0,len(txt1)):
        if txt2.endswith(txt1[i:]):
            return txt1[i:]
    return ""


print(longest_common_ending("pitiful", "beautiful"), "tiful")
print(longest_common_ending("truck", "trick"), "ck")
print(longest_common_ending("vote", "asymptote"), "ote")
print(longest_common_ending("multiplication", "ration"), "ation")
print(longest_common_ending("potent", "tent"), "tent")
print(longest_common_ending("skyscraper", "carnivore"), "")