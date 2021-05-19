def top_note(student):
    # student.update({"top_notes":max(student["notes"])})
    c=student.popitem()
    student.update({"top_note":max(c[1])})
    return student

print(top_note({"name": "Jacek", "notes":[5, 4, 3]}), {"name": "Jacek", "top_note":5})
print(top_note({"name": "Ewa", "notes":[3,3,3]}), {"name": "Ewa", "top_note":3})
print(top_note({"name": "Zygmund", "notes":[1,2,3]}), {"name": "Zygmund", "top_note":3})
print(top_note({"name": "Alex", "notes":[1,4,6]}), {"name": "Alex", "top_note":6})
