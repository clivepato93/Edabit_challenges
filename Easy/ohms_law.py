# https://edabit.com/challenge/vaufKtjX3gKoq9PeS
# def ohms_law(v, r, i):
# 	oms =[v,r,i]
# 	return "Invalid" if oms.count(None)!= 1 else round(float(oms[0])/oms[1],2) if oms[2]==None else round(float(oms[0])/oms[2],2) if oms[1]==None else round(float(oms[2])*oms[1],2)

# def ohms_law(v, r, i):
#     stats =[v,r,i]
#     if stats.count(None)!=1:
#         return "Invalid"
#     elif stats[2]==None:
#         return round(stats[0]/float(stats[1]),2)
#     elif stats[1]==None:
#         return stats[0]/stats[2]
#     else:
#         return stats[1]*stats[2]

#
print(ohms_law(12, 220, None), 0.05)
print(ohms_law(230, None, 2), 115)
print(ohms_law(None, 220, 0.02), 4.4)
print(ohms_law(None, None, 10), "Invalid")
# print(ohms_law(500, 50, 10), "Invalid")
# Author: Andreas Skauen Bertelsen

# print(float(12/float(220)))
