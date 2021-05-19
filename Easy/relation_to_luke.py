# https://edabit.com/challenge/8pDH2SRutPoaQghgc

def relation_to_luke(name):
    relations = {
    'Darth Vader':'Luke, I am your father.',
    'Leia':'Luke, I am your sister.',
    'Han':'Luke, I am your brother in law.',
    }
    return relations.get(name,'Luke, I am your droid.')

print(relation_to_luke("Darth Vader"), "Luke, I am your father.")
print(relation_to_luke("Leia"), "Luke, I am your sister.")
print(relation_to_luke("Han"), "Luke, I am your brother in law.")
print(relation_to_luke("R2D2"), "Luke, I am your droid.")

# Author : Jeroen Ndh
