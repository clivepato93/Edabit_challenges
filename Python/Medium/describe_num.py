# https://edabit.com/challenge/3JX75W5Xvun63RH9H
def describe_num(n):
    w=['brilliant',"exciting",
       "fantastic","virtuous",
       "heart-warming","tear-jerking",
       "beautiful","exhilarating",
       "emotional","inspiring"]
    if n%2:
        w.remove("exciting")
    if n%3:
        w.remove("fantastic")
    if n%4:
        w.remove("virtuous")
    if n%5:
        w.remove("heart-warming")
    if n%6:
        w.remove("tear-jerking")
    if n%7:
        w.remove("beautiful")
    if n%8:
        w.remove("exhilarating")
    if n%9:
        w.remove("emotional")
    if n%10:
        w.remove("inspiring")
    return "The most "+" ".join(w)+" number is {}!".format(n)
print(describe_num(13), 'The most brilliant number is 13!')
print(describe_num(4), 'The most brilliant exciting virtuous number is 4!')
print(describe_num(21), 'The most brilliant fantastic beautiful number is 21!')
print(describe_num(60), 'The most brilliant exciting fantastic virtuous heart-warming tear-jerking inspiring number is 60!')
print(describe_num(56), "The most brilliant exciting virtuous beautiful exhilarating number is 56!")
print(describe_num(47), "The most brilliant number is 47!")
