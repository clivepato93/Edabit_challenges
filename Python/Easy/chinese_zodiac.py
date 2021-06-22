# https://edabit.com/challenge/e8TFAMbTTaEr7JSgd
def chinese_zodiac(year):
    #here's the list of all the animals of the chinese new year there's a slight variation online like the goat can be referred to as a sheep
    chinese_years_list = ['Rat','Ox','Tiger','Rabbit','Dragon','Snake','Horse','Goat','Monkey','Rooster','Dog','Pig']
    # setting two variable to zero in order to be able to referece from the last later on
    chinese_year=0
    chinese=0
    # first conditional statement to check whether the year is before the year 2001 as the method to figure out chinese new year changes
    if year <=2000:
        # how to figure out the chinese year for the first conditional
        # you get the current year then take away 1900 next step is
        # to get the remainder from that number using % modulo then the next step is to add one to the value
        chinese_year=(year-1900)%12+1
        # this final step is to be able to do reference in the list since indexing starts from 0
        # we have to decrease the value by one in order to get the animal we want
        chinese += chinese_year-1
    # second conditional statement to check whether the year is greater than 2000 this goes from 2001
    else:
        # how to figure out the chinese year for the second conditional
        # you get the current year then take away 2000 next step is
        # to get the remainder from that number using % modulo then the next step is to add five to the value
        chinese_year=(year-2000)%12+5
        chinese += int(chinese_year-1)
        # this final step is to be able to do reference in the list since indexing starts from 0
        # we have to decrease the value by one in order to get the animal we want
        if chinese_year>12:
            # however the rule is in when the value is greater then 12 you have to take away 12 from that value
            chinese_year-=12
            chinese = chinese_year-1
            # this final step is to be able to do reference in the list since indexing starts from 0
            # we have to decrease the value by one in order to get the animal we want
        return chinese_years_list[chinese]
    # we finally return a animal using indexing
    return chinese_years_list[chinese]

# another way to do this without much code compared to the function above is to use a dictionary
def chinese_zodiac(year):
	d={4:'Rat',5:'Ox',6:'Tiger',7:'Rabbit',8:'Dragon',9:'Snake',10:'Horse',\
	11:'Goat',0:'Monkey',1:'Rooster',2:'Dog',3:'Pig'}
	return d[year%12]

print(chinese_zodiac(1925))
print(chinese_zodiac(2021))
print(chinese_zodiac(2020))
print(chinese_zodiac(1938))
print(chinese_zodiac(1951))
print(chinese_zodiac(1964))
print(chinese_zodiac(1977))
print(chinese_zodiac(1990))
print(chinese_zodiac(2003))
print(chinese_zodiac(2016))
print(chinese_zodiac(1969))
print(chinese_zodiac(1982))
print(chinese_zodiac(1995))
