# https://edabit.com/challenge/kS8tfJD2ggohQbWx7

def last_name_lensort(names):
    return sorted(names,key=lambda x:(len(x.split()[1]),x.split()[1]))


print(last_name_lensort(["Jennifer Figueroa","Heather Mcgee","Amanda Schwartz","Nicole Yoder","Melissa Hoffman"]), ['Heather Mcgee', 'Nicole Yoder', 'Melissa Hoffman', 'Jennifer Figueroa', 'Amanda Schwartz'])
print(last_name_lensort(["Hitagi Senjougahara","Edward Elric","Light Yagami","Rintaro Okabe","Kurisu Makise"]), ["Edward Elric","Rintaro Okabe","Kurisu Makise","Light Yagami","Hitagi Senjougahara"])
