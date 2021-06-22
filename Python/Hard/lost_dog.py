def lost_dog(*houses):
    d={}
    s=1
    for i,row in enumerate(houses,start=1):
        if 0 in row:
            d1={"Dog{}".format(s):'House ({}) and Room ({})'.format(i,row.index(0)+1)}
            s+=1
            d.update(d1)
    return d if d else 'Dog not found!'

print(lost_dog([1,1,1,1,1,0], [0,1,1,1,1,1], [1,0,1,1,1,1], [1,1,0,1,1,1]),
       {'Dog1': 'House (1) and Room (6)', 'Dog2': 'House (2) and Room (1)',
        'Dog3': 'House (3) and Room (2)', 'Dog4': 'House (4) and Room (3)'})
# print(lost_dog([1,1,0,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,0,1,1,1]), {'Dog1': 'House (1) and Room (3)', 'Dog2': 'House (4) and Room (3)'})
# print(lost_dog([1,1,0,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1]), {'Dog1': 'House (1) and Room (3)'})
# print(lost_dog([1,1,1,1,1,1], [0,1,1,1,1,1], [0,1,1,1,1,1], [1,1,1,1,1,1]),{'Dog1': 'House (2) and Room (1)', 'Dog2': 'House (3) and Room (1)'})
print(lost_dog([1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1]), 'Dog not found!')
# print(lost_dog([1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,1,1,1], [1,1,1,0,1,1]), {'Dog1': 'House (4) and Room (4)'})
