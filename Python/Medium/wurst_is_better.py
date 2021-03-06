
# https://edabit.com/challenge/928sxbEt8gyZ5uBBt
def wurst_is_better(txt):
    s={"sausage":"Wurst",
       "salami":"Wurst",
       "naem":"Wurst",
       "moronga":"Wurst",
       "kielbasa":"Wurst"}
    a=[s.get(i.lower(),i) for i in txt.split()]
    return ' '.join(a)

print(wurst_is_better("Sausage fests are like salami fests"), "Wurst fests are like Wurst fests")
print(wurst_is_better("Add the kielbasa and the reserved potatoes and stir through"), "Add the Wurst and the reserved potatoes and stir through")
print(wurst_is_better("Salami sandwiches, salami and cheese, salami on crackers - I couldn't get enough of the salty, spicy sausage"), "Wurst sandwiches, Wurst and cheese, Wurst on crackers - I couldn't get enough of the salty, spicy Wurst")
print(wurst_is_better("sich die Wurst vom Brot nehmen lassen"), "sich die Wurst vom Brot nehmen lassen")
print(wurst_is_better("Bratwurst and Rostbratwurst is a sausage made from finely minced pork and beef and usually grilled and served with sweet German mustard and a piece of bread or hard roll. It can be sliced and made into Currywurst by slathering it in a catchup-curry sauce."), "Bratwurst and Rostbratwurst is a Wurst made from finely minced pork and beef and usually grilled and served with sweet German mustard and a piece of bread or hard roll. It can be sliced and made into Currywurst by slathering it in a catchup-curry sauce.")
print(wurst_is_better("Naem is a common way of preserving pork meat in several Southeast Asian countries, including Thailand, Laos, Cambodia and Vietnam"), "Wurst is a common way of preserving pork meat in several Southeast Asian countries, including Thailand, Laos, Cambodia and Vietnam")
print(wurst_is_better("The chipper group over at Orangatang recently dropped another wheel sensation; the Moronga"), "The chipper group over at Orangatang recently dropped another wheel sensation; the Wurst")
