

def edit_words(lst):
    def magic(word):
        x=len(word)//2
        if word:
            word=word[::-1].upper()
            x=x+1 if len(word)%2==1 else x
            return word[:x]+"-"+word[x:]
        return "-"
    
    return [magic(i) for i in lst]

print(round(5+0.5))

print(edit_words(["javascript"]), ["TPIRC-SAVAJ"])
print(edit_words(["hello", "", "world"]), ["OLL-EH", "-", "DLR-OW"])
# print(edit_words(["null", "undefined"]), ["LL-UN", "DENIF-EDNU"])
# print(edit_words(["wood", "", "block"]), ["DO-OW", "-", "KCO-LB"])
# print(edit_words(["new york city"]), ["YTIC KR-OY WEN"])
# print(edit_words(["html", "css"]), ["LM-TH", "SS-C"])
# print(edit_words(["react", "vue", "angular"]), ["TCA-ER", "EU-V", "RALU-GNA"])
# print(edit_words(["11111", "999", "3333"]), ["111-11", "99-9", "33-33"])
# print(edit_words([""]), ["-"])
