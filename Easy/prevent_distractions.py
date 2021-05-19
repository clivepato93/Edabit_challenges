# https://edabit.com/challenge/Njeob2pNQYsCd69fN
def prevent_distractions(txt):
    l = ["anime", "meme", "vines","roasts","Danny DeVito"]
    for words in l:
        if words in txt:
            return "NO!"
    return "Safe watching!"

print(prevent_distractions("vines that butter my eggroll"), "NO!")
print(prevent_distractions("Hot pictures of Danny DeVito"), "NO!")
print(prevent_distractions("top 10 insert random yt celebrity roasts"), "NO!")
print(prevent_distractions("best anime food ever!"), "NO!")
print(prevent_distractions("How to Be a Productive Member of Society"), "Safe watching!")
