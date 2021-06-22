def return_end_of_number(num):
    d={1:"-ST",
       2:"-ND",
       3:"-RD"}
    if int(str(num)[-2:])>10 and int(str(num)[-2:])<14:
        return str(num)+"-TH"
    return str(num)+d.get(num%10,"-TH")




print(return_end_of_number(334), "334-TH")
print(return_end_of_number(12341), "12341-ST")
print(return_end_of_number(1), "1-ST")
print(return_end_of_number(3222), "3222-ND")
print(return_end_of_number(563), "563-RD")
print(return_end_of_number(412), "412-TH")
print(return_end_of_number(711), "711-TH")
print(return_end_of_number(213), "213-TH")
