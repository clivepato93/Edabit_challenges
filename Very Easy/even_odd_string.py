# https://edabit.com/challenge/M3oq3s8T7Nz7piBvc
def even_odd_string(txt):
    # t=list(txt)
    b =[(count,value) for count,value in enumerate(list(txt))]
    e = ''.join([i[1] for i in b if b.index(i)%2==0])
    o = ''.join([i[1] for i in b if b.index(i)%2!=0])
    return e+" "+o
    # return "".join(i for i in t if t.index(i)%2==0)+" "+"".join(i for i in t if t.index(i)%2!=0)
    # return "".join(i for i in t[:] if t.index(i)%2==1)
# print(even_odd_string("mubasggggiiahir"), "mbsi uahr")
# print(even_odd_string("edabit"), "eai dbt")
print(even_odd_string("airforce"), "aroc ifre")
# print(even_odd_string("Wolfeschlegelsteinhausenbergerdorff"), "Wleclgltihuebredrf ofsheesenasnegrof")
# print(even_odd_string("METHIONYLTHREONYLTHREONYGLUTAMINYLARGINYL"), "MTINLHENLHENGUAIYAGNL EHOYTROYTROYLTMNLRIY")
# print(even_odd_string("PNEUMONOULTRAMICROSCOPICSILICOVOLCANOCONIOSIS"), "PEMNUTAIRSOISLCVLAOOISS NUOOLRMCOCPCIIOOCNCNOI")
# print(even_odd_string("PSEUDOPSEUDOHYPOPARATHYROIDISM"), "PEDPEDHPPRTYODS SUOSUOYOAAHRIIM")
# print(even_odd_string("FLOCCINAUCINIHILIPILIFICATION"), "FOCNUIIIIIIIAIN LCIACNHLPLFCTO")
# print(even_odd_string("SUBDERMATOGLYPHIC"),"SBEMTGYHC UDRAOLPI")
# #Mubashir

# print(5%2)
