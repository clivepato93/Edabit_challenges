# https://edabit.com/challenge/FJk4mJwRk2TYZhkeQ
def accum(txt):
    c=[letter+(letter*txt.index(letter)) for letter in txt]
    return "-".join([word.capitalize() for word in c])

print(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")


print(accum("abcd"), "A-Bb-Ccc-Dddd")
# print(accum("RqaEzty"), "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy")
# print(accum("cwAt"), "C-Ww-Aaa-Tttt")
# print(accum("VgyCdnQa"), "V-Gg-Yyy-Cccc-Ddddd-Nnnnnn-Qqqqqqq-Aaaaaaaa")
# print(accum("nRBSdNOsMl"), "N-Rr-Bbb-Ssss-Ddddd-Nnnnnn-Ooooooo-Ssssssss-Mmmmmmmmm-Llllllllll")
# print(accum("nuE"), "N-Uu-Eee")
# print(accum("RlDrhZuQaqsoHEfziByObtMxkFCJVe"), "R-Ll-Ddd-Rrrr-Hhhhh-Zzzzzz-Uuuuuuu-Qqqqqqqq-Aaaaaaaaa-Qqqqqqqqqq-Sssssssssss-Oooooooooooo-Hhhhhhhhhhhhh-Eeeeeeeeeeeeee-Fffffffffffffff-Zzzzzzzzzzzzzzzz-Iiiiiiiiiiiiiiiii-Bbbbbbbbbbbbbbbbbb-Yyyyyyyyyyyyyyyyyyy-Oooooooooooooooooooo-Bbbbbbbbbbbbbbbbbbbbb-Tttttttttttttttttttttt-Mmmmmmmmmmmmmmmmmmmmmmm-Xxxxxxxxxxxxxxxxxxxxxxxx-Kkkkkkkkkkkkkkkkkkkkkkkkk-Ffffffffffffffffffffffffff-Ccccccccccccccccccccccccccc-Jjjjjjjjjjjjjjjjjjjjjjjjjjjj-Vvvvvvvvvvvvvvvvvvvvvvvvvvvvv-Eeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
# print(accum("EXpzPFx"), "E-Xx-Ppp-Zzzz-Ppppp-Ffffff-Xxxxxxx")
# print(accum("NU"), "N-Uu")
# print(accum("g"), "G")
