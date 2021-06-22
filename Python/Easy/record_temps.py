# https://edabit.com/challenge/rix73vi9mFYWWqPoA
def record_temps(records, currentWeek):
    min_stats=[min(n) for n in list(zip([i[0] for i in currentWeek],[i[0] for i in records]))]
    max_stats=[max(n) for n in list(zip([i[1] for i in currentWeek],[i[1] for i in records]))]
    # min_currentWeek =[i[0] for i in currentWeek]
    return list([a,b] for a,b in zip(min_stats,max_stats))

print(record_temps([[34, 82], [24, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]],
        		[[44, 72], [19, 70], [40, 69], [39, 68], [33, 64], [36, 70], [38, 69]])
				);
print([[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]])
