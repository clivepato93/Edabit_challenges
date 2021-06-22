def parse_code(txt):
    t=[i for i in txt.split("0") if i]
    return {'first_name':t[0],
            'last_name':t[1],
            'id':t[2]}


print(parse_code('John000Doe000123'), {'first_name': 'John', 'last_name': 'Doe', 'id': '123'})
print(parse_code('Michael0Smith004331'), {'first_name': 'Michael', 'last_name': 'Smith', 'id': '4331'})
print(parse_code('Thomas0000Lee0000045553'), {'first_name': 'Thomas', 'last_name': 'Lee', 'id': '45553'})
print(parse_code('a0b01'), {'first_name': 'a', 'last_name': 'b', 'id': '1'})
