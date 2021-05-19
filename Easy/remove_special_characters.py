def remove_special_characters(txt):
    return "".join(i for i in list(txt) if i.isalnum() or (i==" " or i=="-" or i=="_"))


print(remove_special_characters("The quick brown fox!"), "The quick brown fox")
print(remove_special_characters("%fd76$fd(-)6GvKlO."), "fd76fd-6GvKlO")
print(remove_special_characters("D0n$c sed 0di0 du1"), "D0nc sed 0di0 du1")
print(remove_special_characters("cat_pic.jpeg"), "cat_picjpeg")
print(remove_special_characters("519-555-8093"), "519-555-8093")
print(remove_special_characters("h-d+=rf[]_{}<>.,`~!@#$%^&*(|)"), "h-drf_")
print(remove_special_characters("Etiam#!!!!!,,, [`po%rta ~sem!] {male*su-ada} (ma*gna) mo^llis... eui$smod???"), "Etiam porta sem malesu-ada magna mollis euismod")
