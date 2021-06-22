def get_student_top_notes(students):
    c=[dic.get(k) for dic in students for k,v in dic.items() if k=="notes"]
    maxys=[]
    for lis in c:
        if len(lis)>0:
            maxys.append(max(lis))
        else:
            maxys.append(0)
    return maxys
# Originally created by @Bartosz Cytrowski
# https://edabit.com/challenge/jt8XTr75xxowgi6KM
print(get_student_top_notes([
  {
    "id": 1,
    "name": "Jacek",
    "notes": [5, 3, 4, 2, 5, 5]
  },
  {
    "id": 2,
    "name": "Ewa",
    "notes": [2, 3, 3, 3, 2, 5]
  },
  {
    "id": 3,
    "name": "Zygmunt",
    "notes": [2, 2, 4, 4, 3, 3]
  }
]), [5, 5, 4])
print(get_student_top_notes([{'id': 1, 'name': 'Rochelle', 'notes': [0, 0, 3, 3, 5]}, {'id': 2, 'name': 'Robert', 'notes': []}, {'id': 3, 'name': 'Hans', 'notes': [2, 4, 5]}, {'id': 4, 'name': 'Joel', 'notes': [2, 5]}, {'id': 5, 'name': 'Eric', 'notes': [3, 5]}, {'id': 6, 'name': 'Cary', 'notes': [1, 2, 0, 0]}, {'id': 7, 'name': 'Cary', 'notes': [3, 2, 1]}, {'id': 8, 'name': 'Dennis', 'notes': [0, 0, 4]}, {'id': 9, 'name': 'Lexi', 'notes': [0, 1, 2, 1, 5]}, {'id': 10, 'name': 'Alfie', 'notes': [0, 1, 3, 4, 3]}]), [5, 0, 5, 5, 5, 2, 3, 4, 5, 4])
