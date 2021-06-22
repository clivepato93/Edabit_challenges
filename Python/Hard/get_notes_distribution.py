def get_notes_distribution(students):
    s=[v for i in students for v in i["notes"] if v in range(1,6)]
    d={i:0 for i in s}
    for n in s:
        if n in d:
            d[n]+=1
    return d

# https://edabit.com/challenge/MhtcQNMbkP82ZKJpm


print(get_notes_distribution([
{
	"name": "Steve",
	"notes": [5, 5, 3, -1, 6]
},
{
	"name": "John",
	"notes": [3, 2, 5, 0, -3]
}]),
{
  5: 3,
  3: 2,
  2: 1
})

print(get_notes_distribution([{'name': 'Joshua', 'notes': [2, -2, 4, 5, -3]}, {'name': 'Kevin', 'notes': [-3, 2, -1, 1, -3]}, {'name': 'Joshua', 'notes': [5, -1, -1, 4, 5]}, {'name': 'Jay', 'notes': [4, 4, 1, 3, -2]}, {'name': 'Marcus', 'notes': [4, 4, 3, -1, -2]}, {'name': 'Adam', 'notes': [3, 3, -1, 5, 3]}]), {2: 2, 4: 6, 5: 4, 1: 2, 3: 5})
print(get_notes_distribution([{'name': 'Joseph', 'notes': [2, -1, 2, 4, 4]}, {'name': 'Joshua', 'notes': [4, 1, -3, 0, 1]}, {'name': 'Jacob', 'notes': [3, 5, 0, 4, 2]}, {'name': 'Joel', 'notes': [2, 1, 5, 0, 1]}, {'name': 'Mark', 'notes': [2, 2, 4, 4, 5]}, {'name': 'Jacob', 'notes': [3, 5, -3, 0, 4]}, {'name': 'Jacob', 'notes': [3, 0, -2, 2, 0]}]), {2: 7, 4: 7, 1: 4, 3: 3, 5: 4})
# print(get_notes_distribution([{'name': 'Joseph', 'notes': [0, 2, 0, 3, 4]}, {'name': 'Marcus', 'notes': [2, 1, -2, -2, -3]}, {'name': 'Joseph', 'notes': [-2, -3, -1, 4, 1]}]), {2: 2, 3: 1, 4: 2, 1: 2})
# print(get_notes_distribution([{'name': 'Kevin', 'notes': [0, 3, -2, 0, 4]}, {'name': 'Jacob', 'notes': [0, -3, 2, 2, 3]}, {'name': 'Kevin', 'notes': [5, 3, -2, -3, 0]}, {'name': 'Sarah', 'notes': [3, 1, 3, 4, -2]}]), {3: 5, 4: 2, 2: 2, 5: 1, 1: 1})
# print(get_notes_distribution([{'name': 'Joshua', 'notes': [2, 1, 2, 0, 2]}]), {2: 3, 1: 1})
# print(get_notes_distribution([{'name': 'Kevin', 'notes': [5, 1, 0, -2, -1]}, {'name': 'Jay', 'notes': [-1, 1, 5, 0, 2]}, {'name': 'Mark', 'notes': [1, 5, 2, 3, -2]}, {'name': 'Kevin', 'notes': [1, 2, 2, -3, 2]}]), {5: 3, 1: 4, 2: 5, 3: 1})
# print(get_notes_distribution([{'name': 'Mark', 'notes': [5, -3, -3, -3, 0]}, {'name': 'Joseph', 'notes': [0, -2, -1, 5, -3]}]), {5: 2})
# print(get_notes_distribution([{'name': 'Marcus', 'notes': [-3, 0, 4, 1, 3]}, {'name': 'Joshua', 'notes': [0, -3, -1, 0, 1]}, {'name': 'Adam', 'notes': [-3, 4, 2, -3, -3]}]), {4: 2, 1: 2, 3: 1, 2: 1})
# print(get_notes_distribution([{'name': 'Adam', 'notes': [3, -1, -3, 1, -2]}, {'name': 'Adam', 'notes': [5, 2, 5, 2, 3]}, {'name': 'Joel', 'notes': [0, 4, -2, 3, -1]}, {'name': 'Joseph', 'notes': [-1, 5, -2, 0, -2]}]), {3: 3, 1: 1, 5: 3, 2: 2, 4: 1})
# print(get_notes_distribution([{'name': 'Marcus', 'notes': [-3, -2, 2, 2, 2]}, {'name': 'Joel', 'notes': [-3, 1, 4, 3, 4]}, {'name': 'Kevin', 'notes': [0, -1, 4, 1, -3]}, {'name': 'Adam', 'notes': [-1, 1, 2, 2, 2]}, {'name': 'Adam', 'notes': [4, 0, -1, -2, -1]}]), {2: 6, 1: 3, 4: 4, 3: 1})
# print(get_notes_distribution([{'name': 'Jacob', 'notes': [0, -1, 2, -3, 4]}, {'name': 'Adam', 'notes': [-2, 5, 1, 1, 2]}, {'name': 'Kevin', 'notes': [-3, 0, 2, -3, -2]}, {'name': 'Adam', 'notes': [5, -1, 3, 5, 1]}, {'name': 'Joel', 'notes': [1, -3, -2, 2, -3]}, {'name': 'Kevin', 'notes': [2, -3, 4, 3, 0]}]), {2: 5, 4: 2, 5: 3, 1: 4, 3: 2})
# print(get_notes_distribution([{'name': 'Kevin', 'notes': [-1, -1, -2, -3, 0]}, {'name': 'Marcus', 'notes': [-1, -1, 3, 5, 1]}, {'name': 'Sarah', 'notes': [3, 0, 4, -1, -3]}, {'name': 'Jay', 'notes': [-3, -2, 0, 0, 0]}, {'name': 'Joel', 'notes': [3, 4, -3, 1, 0]}, {'name': 'Jacob', 'notes': [3, 5, 1, 4, 4]}, {'name': 'Joseph', 'notes': [2, 0, -1, -2, -3]}]), {3: 4, 5: 2, 1: 3, 4: 4, 2: 1})
# print(get_notes_distribution([{'name': 'Joseph', 'notes': [1, 2, 3, 3, -3]}, {'name': 'Joel', 'notes': [0, 5, 5, 5, 2]}, {'name': 'Joshua', 'notes': [5, 4, 2, 0, 3]}]), {1: 1, 2: 3, 3: 3, 5: 4, 4: 1})
# print(get_notes_distribution([{'name': 'Adam', 'notes': [3, 5, 5, 4, 4]}, {'name': 'Sarah', 'notes': [4, 0, -1, 0, 5]}, {'name': 'Jacob', 'notes': [-3, -1, 0, -1, -2]}, {'name': 'Joshua', 'notes': [-3, 5, 5, -1, 3]}]), {3: 2, 5: 5, 4: 3})
# print(get_notes_distribution([{'name': 'Joshua', 'notes': [-3, -2, 2, 4, 5]}]), {2: 1, 4: 1, 5: 1})
