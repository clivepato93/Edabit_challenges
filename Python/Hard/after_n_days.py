# https://edabit.com/challenge/6sSWKcy8ttDTvkvsL

def after_n_days(days, n):
     d = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday',
            'Sunday']
     return[d[(d.index(l)+n)%7] for l in days]

# print(after_n_days(["Monday", "Tuesday", "Friday"], 1), ["Tuesday", "Wednesday", "Saturday"])
# print(after_n_days(["Sunday", "Sunday", "Sunday"], 1), ["Monday", "Monday", "Monday"])
# print(after_n_days(["Thursday", "Monday"], 4), ["Monday", "Friday"])
# print(after_n_days(["Sunday"], 7), ["Sunday"])
# print(after_n_days(["Monday","Friday","Wednesday"], 15), ["Tuesday", "Saturday", "Thursday"])
# print(after_n_days(["Sunday","Tuesday"], 5), ["Friday", "Sunday"])
# print(after_n_days(["Saturday","Wednesday","Wednesday"], 10), ["Tuesday", "Saturday","Saturday"])
print(after_n_days(["Monday"], 32))
