# https://edabit.com/challenge/2hsyXkzDRewGSPpPE
def to_binary(num):
	return str(bin(num))[2:]

print(to_binary(0xFF), "11111111")
print(to_binary(0xAA), "10101010")
print(to_binary(0xFA), "11111010")


# https://edabit.com/challenge/2hsyXkzDRewGSPpPE
# def binary(decimal):
#     final = []
#     if decimal == 1:
#         final.append(1)
#     elif decimal == 0:
#         final.append(0)
#     else:
#         while decimal >0:
#             if decimal % 2 ==0:
#                 final.append(0)
#                 decimal/=2
#                 # decimal-=1
#             else:
#                 final.append(1)
#
#                 decimal/=2
#                 # decimal-=1
#     return "".join(str(digit) for digit in reversed(final))
        # final.append(decimal)
    # else:
    #     while decimal > 0:
    # return final

# print(binary(100), "1100100")
# print(binary(1), "1")
# print(binary(0), "0")
# print(binary(69), "1000101")
# print(binary(1023), "1111111111")
# print(binary(511), "111111111")
# print(binary(666), "1010011010")
# print(binary(123), "1111011")
