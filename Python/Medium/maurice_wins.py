def maurice_wins(m_snails, s_snails):
    s_snails=[max(s_snails),min(s_snails),s_snails[1]]
    total =[True if a>b else False for a,b in zip(m_snails,s_snails)]
    return total.count(True)>=2


print(maurice_wins([3, 5, 10], [4, 7, 11]), True)
print(maurice_wins([6, 8, 9], [7, 12, 14]), False)
print(maurice_wins([1, 8, 20], [2, 9, 100]), True)
print(maurice_wins([1, 2, 3], [2, 3, 4]), False)
print(maurice_wins([2, 4, 10], [3, 9, 11]), True)
print(maurice_wins([3, 8, 13], [5, 11, 15]), True)
