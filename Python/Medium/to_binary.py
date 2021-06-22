def to_binary(num):
	return str(bin(num))[2:]

print(to_binary(0xFF), "11111111")
print(to_binary(0xAA), "10101010")
print(to_binary(0xFA), "11111010")
