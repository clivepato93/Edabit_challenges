# https://edabit.com/challenge/2yHQwkecEHZBfHcmN
def progress_days(runs):
    progress=[i for i,number in enumerate(range(1,len(runs)),start=1) if runs[number]>runs[number-1]]
    return len(progress)


print(progress_days([3, 4, 1, 2]), 2)
print(progress_days([10, 11, 12, 9, 10]), 3)
print(progress_days([6, 5, 4, 3, 2, 9]), 1)
print(progress_days([9, 9]), 0)
print(progress_days([12, 11, 10, 12, 11, 13]), 2)
