def is_harshad(num):
    return num%sum(int(i) for i in str(num))==0 if num else False 


print(is_harshad(0), False)
print(is_harshad(15), False)
print(is_harshad(990), True)
print(is_harshad(461), False)
print(is_harshad(297), False)
print(is_harshad(345), False)
print(is_harshad(529), False)
print(is_harshad(839), False)
print(is_harshad(281), False)
print(is_harshad(252), True)
print(is_harshad(123), False)
print(is_harshad(840), True)
print(is_harshad(789), False)
print(is_harshad(43), False)
print(is_harshad(907), False)
print(is_harshad(441), True)
print(is_harshad(729), False)
print(is_harshad(801), True)
print(is_harshad(923), False)
print(is_harshad(569), False)
print(is_harshad(828), True)
print(is_harshad(658), False)
print(is_harshad(838), False)
print(is_harshad(711), True)
print(is_harshad(216), True)
print(is_harshad(525), False)
print(is_harshad(768), False)
print(is_harshad(234), True)
print(is_harshad(353), False)
print(is_harshad(713), False)
