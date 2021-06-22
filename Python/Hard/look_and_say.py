
# https://edabit.com/challenge/6hnrKRh7fZfMC5CKY

def look_and_say(n):
    n=str(n)
    if len(n)%2:
        return "invalid"
    n=[n[i:i+2] for i in range(0,len(n),2)]
    return int("".join([int(a)*b for a,b in n]))


print(look_and_say(95), 555555555)
print(look_and_say(1213141516171819), 23456789)
print(look_and_say(231), 'invalid')
print(look_and_say(3132), 111222)
print(look_and_say(313317), 1113337)
print(look_and_say(786497), 8888888444444777777777)
print(look_and_say(591173), 9999913333333)
print(look_and_say(404094), 444444444)
print(look_and_say(473536), 7777555666)
print(look_and_say(880440), 888888880000)
print(look_and_say(724767), 22222227777777777)
print(look_and_say(830926), 3333333366)
