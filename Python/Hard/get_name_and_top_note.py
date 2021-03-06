# https://edabit.com/challenge/NjpPt2b88s3SBuenX

def get_name_and_top_note(students):
    lst=[]
    for d in students:
        x=d
        x['top_note']=max(x['notes']+[0])
        del x['notes']
        lst.append(x)
    return lst
    

print(get_name_and_top_note([{ 'name': "John", 'notes': [2, 4, 5]}, { 'name': "Mich", 'notes': [1, 3, 5]}]),
[{ 'name': "John", 'top_note': 5 }, {'name': 'Mich', 'top_note': 5}])
print(get_name_and_top_note([{ 'name': "Paul", 'notes': []}, {'name': 'Victoria', 'notes': [3, 4, 2, 1]}]),
[{ 'name': "Paul", 'top_note': 0 }, {'name': 'Victoria', 'top_note': 4}])
print(get_name_and_top_note([{ 'name': "Victor", 'notes': [1, 3, 2]}]), [{ 'name': "Victor", 'top_note': 3}])
print(get_name_and_top_note([{ 'name': "Brandy", 'notes': [2, 4, 1]}]), [{ 'name': "Brandy", 'top_note': 4 }])
print(get_name_and_top_note([{ 'name': "Vicky", 'notes': [3, 2]}, { 'name': "Sanders", 'notes': [1, 1, 1]}]), 
[{ 'name': "Vicky", 'top_note': 3 }, {'name': 'Sanders', 'top_note': 1}])
print(get_name_and_top_note([{ 'name': "Marcus", 'notes': [1, 0, 1]}]), [{ 'name': "Marcus", 'top_note': 1 }])
print(get_name_and_top_note([{ 'name': "Solo", 'notes': []}]), [{ 'name': "Solo", 'top_note': 0 }])