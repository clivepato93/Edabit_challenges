# https://edabit.com/challenge/GPodAAMFqz9sLWmAy
def one_odd_one_even(n):
    t =  [True if int(i)%2==0 else False for i in list(str(n))]
    print(t)
    return True if t.count(True)==1 else False
    # return True if  else False
print(one_odd_one_even(10), True)
print(one_odd_one_even(17), False)
