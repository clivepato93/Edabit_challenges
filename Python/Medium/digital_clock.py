# https://edabit.com/challenge/LgvppFDZoMpBKf8JW

def digital_clock(seconds):
    s=[]
    while seconds!=0:
        s.append(str(seconds//3600).zfill(2))
        s[0]=[int(s[0]),int(s[0])%24][int(s[0])>=24]
        s[0]=str(s[0]).zfill(2)
        seconds-=(seconds//3600)*3600
        s.append(str(seconds//60).zfill(2))
        seconds-=(seconds//60)*60
        s.append(str(seconds).zfill(2))
        seconds-=seconds

    return ":".join(s)


arr_vector, res_vector = [
  [5025, 61201, 87000, 40271, 86399, 4666, 178056],
  ["01:23:45", "17:00:01", "00:10:00", "11:11:11", "23:59:59", "01:17:46", "01:27:36"]
]
for i, s in enumerate(arr_vector): print(digital_clock(s), res_vector[i])
