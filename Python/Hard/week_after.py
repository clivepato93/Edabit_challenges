# https://edabit.com/challenge/S4uZaKhcDa7pJ33nu
import calendar
def week_after(d):
    c=[int(i) for i in d.split('/')]
    x=calendar.monthrange(c[2],c[1])[1]
    if (c[0]+7)>x:
        c[0]=(c[0]+7)-x
        c[1]+=1
    else:
        c[0]+=7
    if c[1]>12:
        c[1]=1
        c[2]+=1

    # return c
    return '/'.join(str(i).zfill(2) for i in c)
print(week_after("26/12/1853"), "02/01/1854")
# print(week_after("12/03/2020"), "19/03/2020")
# print(week_after("21/12/1989"), "28/12/1989")
# print(week_after("01/01/2000"), "08/01/2000")
print(week_after("24/09/1924"), "01/10/1924")
# print(week_after("01/03/2080"), "08/03/2080")
# print(week_after("28/04/1906"), "05/05/1906")
# print(week_after("15/06/2023"), "22/06/2023")
# print(week_after("11/08/1950"), "18/08/1950")
# print(week_after("15/11/2103"), "22/11/2103")
# print(week_after("23/11/1852"), "30/11/1852")
# print(week_after("08/01/1928"), "15/01/1928")
# print(week_after("14/11/2118"), "21/11/2118")
# print(week_after("11/10/2096"), "18/10/2096")
# print(week_after("02/12/1816"), "09/12/1816")
# print(week_after("10/10/1937"), "17/10/1937")
# print(week_after("28/11/1959"), "05/12/1959")
# print(week_after("27/05/2133"), "03/06/2133")
# print(week_after("28/04/1932"), "05/05/1932")
# print(week_after("23/02/2050"), "02/03/2050")
# print(week_after("23/05/2146"), "30/05/2146")
# print(week_after("24/07/2167"), "31/07/2167")
