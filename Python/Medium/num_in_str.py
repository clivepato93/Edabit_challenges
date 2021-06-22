# https://edabit.com/challenge/XYYdtkhGPXXJ3QQNB

def num_in_str(lst):
    return sorted(set([i for i in lst for l in i if l in "0123456789"]),key=lst.index)

print(num_in_str(['abc', 'abc10']), ['abc10'])
print(num_in_str(['abc', 'ab10c',  'a10bc', 'bcd']),['ab10c', 'a10bc'])
print(num_in_str(['1', 'a' , ' ' ,'b']), ['1'])
print(num_in_str(['rct', 'ABC', 'Test', 'xYz']), [])
print(num_in_str(['this IS','10xYZ', 'xy2K77', 'Z1K2W0', 'xYz']), ['10xYZ', 'xy2K77', 'Z1K2W0'])
print(num_in_str(['-/>', '10bc', 'abc ']), ['10bc'])
