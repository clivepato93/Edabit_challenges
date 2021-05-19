def millions_rounding(lst):
    for row in lst:
        if isinstance(row[1],int):
            row[1]= round(row[1],-6)
    return lst

def millions_rounding(lst):
	return [[city, round(pop, -6)] for city, pop in lst]

print(millions_rounding([
['Tokyo', 37435191],
['Delhi', 29399141],
['Shanghai', 26317104]
]
))
