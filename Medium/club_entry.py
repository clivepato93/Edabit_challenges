# https://edabit.com/challenge/tK44PSWFuFzthwNJj
def club_entry(word):
    l='abcdefghijklmnopqrstuvwxyz'

    c=str([word[i] for i in range(1,len(word)) if word[i-1]==word[i]]).strip("['']")
    return (l.index(c)+1)*4

print(club_entry("lettuce"), 80)
print(club_entry("hill"), 48)
print(club_entry("apple"), 64)
print(club_entry("addiction"), 16)
print(club_entry("bee"), 20)
print(club_entry("zz"), 104)
print(club_entry("mubashirr"), 72)
