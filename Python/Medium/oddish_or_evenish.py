# https://edabit.com/challenge/H3t4MkT9wGdL9P6Y3
def oddish_or_evenish(num):
    total=sum(int(i) for i in list(str(num)))
    return "Oddish" if total%2 else "Evenish"

print(oddish_or_evenish(43), "Oddish")
print(oddish_or_evenish(373), "Oddish")
print(oddish_or_evenish(55551), "Oddish")
print(oddish_or_evenish(694), "Oddish")
print(oddish_or_evenish(4433), "Evenish")
print(oddish_or_evenish(11), "Evenish")
print(oddish_or_evenish(211112), "Evenish")
