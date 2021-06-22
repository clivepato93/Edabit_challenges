
# https://edabit.com/challenge/tPNqhkqeQaCZGcBLo

def determine_who_cursed_the_most(d):
    m=0
    s=0
    for i in d:
        m+=d[i]["me"]
        s+=d[i]["spouse"]
    return "DRAW!" if m==s else "ME!" if m>s else "SPOUSE!"




expected_param = ["DRAW!", "ME!", "SPOUSE!", "ME!", "SPOUSE!",  "SPOUSE!"]
actual_param = [
  {"round1": {"me": 10, "spouse": 5},
   "round2": {"me": 5, "spouse": 10},
   "round3": {"me": 10, "spouse": 10}},
  {"round1": {"me": 40, "spouse": 5},
   "round2": {"me": 9, "spouse": 10},
   "round3": {"me": 9, "spouse": 10}},
  {"round1": {"me": 10, "spouse": 5},
   "round2": {"me": 9, "spouse": 44},
   "round3": {"me": 10, "spouse": 55}},
    {"round1": {"me": 13, "spouse": 15},
     "round2": {"me": 11, "spouse": 9},
     "round3": {"me": 7, "spouse": 6}},
    {"round1": {"me": 4, "spouse": 15},
     "round2": {"me": 16, "spouse": 4},
     "round3": {"me": 6, "spouse": 13}},
    {"round1": {"me": 5, "spouse": 6},
     "round2": {"me": 4, "spouse": 6},
     "round3": {"me": 4, "spouse": 6}}
]
for i, c in enumerate(actual_param):
  print(determine_who_cursed_the_most(c), expected_param[i])
