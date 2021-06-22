# https://edabit.com/challenge/hwTRPKBat82XmcJWk
def progress_bar(bar, progress):
    new_bar= bar*(progress/10)
    statement = "Progress"
    space=" "
    if progress==100:
        statement="Completed"
        return "|{}| {}!".format(new_bar,statement)
    return "|{}{}| {}: {}%".format(new_bar,space*(10-len(new_bar)),statement,progress)


print(progress_bar("=", 10), "|=         | Progress: 10%")
print(progress_bar("#", 90), "|######### | Progress: 90%")
print(progress_bar("*", 100), "|**********| Completed!")
print(progress_bar("#", 50), "|#####     | Progress: 50%")
print(progress_bar("*", 60), "|******    | Progress: 60%")
print(progress_bar("#", 100), "|##########| Completed!")
print(progress_bar("*", 60), "|******    | Progress: 60%")
print(progress_bar("=", 30), "|===       | Progress: 30%")
print(progress_bar(">", 70), "|>>>>>>>   | Progress: 70%")
print(progress_bar("=", 40), "|====      | Progress: 40%")
print(progress_bar(">", 20), "|>>        | Progress: 20%")
print(progress_bar("*", 0), "|          | Progress: 0%")
print(progress_bar("=", 60), "|======    | Progress: 60%")
print(progress_bar(">", 90), "|>>>>>>>>> | Progress: 90%")
print(progress_bar("*", 80), "|********  | Progress: 80%")
print(progress_bar("#", 20), "|##        | Progress: 20%")
print(progress_bar("*", 30), "|***       | Progress: 30%")
print(progress_bar("=", 70), "|=======   | Progress: 70%")
print(progress_bar("=", 0), "|          | Progress: 0%")
print(progress_bar(">", 100), "|>>>>>>>>>>| Completed!")
