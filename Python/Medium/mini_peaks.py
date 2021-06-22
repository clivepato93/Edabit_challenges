# https://edabit.com/challenge/2gFkEsAqNZrs4yecks
def mini_peaks(lst):
    return [lst[i] for i in range(1,len(lst)-1) if lst[i]>lst[i+1] and lst[i]>lst[i-1]]

print(mini_peaks([4, 5, 2, 1, 4, 9, 7, 2]), [5, 9])
print(mini_peaks([1, 2, 1, 1, 3, 2, 5, 4, 4]), [2, 3, 5])
print(mini_peaks([1, 2, 3, 4, 5, 6]), [])
print(mini_peaks([6, 4, 3]), [])
print(mini_peaks([1, 1, 1, 1, 2, 1, 1, 1]), [2])
print(mini_peaks([1, 9, 1, 8, 2, 7, 6]), [9, 8, 7])
print(mini_peaks([7, 8, 7, 8, 7, 8, 5, 1, 2, 0]), [8, 8, 8, 2])
