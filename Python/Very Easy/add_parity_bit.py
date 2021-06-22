def add_parity_bit(b):
    if b.count("1") % 2 !=0:b+="1"
    elif b.count("1") % 2 ==0:b+="0"
    return b

def add_parity_bit(b):
  return b+"1" if b.count('1') %2 else b+'0'

print(add_parity_bit("0010110"), "00101101")
print(add_parity_bit("1100000"), "11000000")
print(add_parity_bit("1111111"), "11111111")
print(add_parity_bit("1010011"))
