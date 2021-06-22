import datetime

def first_tuesday_of_the_month(year, month):
    # day=1
    # d=datetime.datetime(year,month,day)
    # print(d.strftime("%A"))
    # if d.strftime("%A")=="Tuesday":
    #     return '{}-{}-{}'.format(year,str(month).zfill(2),str(month).zfill(2))
    days=[((year,month,1+i),datetime.datetime(year,month,1+i).strftime("%A")) for i in range(0,7)]
    for p in days:
        if "Tuesday" in p:
            # return p[0]
            return '{}-{}-{}'.format(p[0][0],str(p[0][1]).zfill(2),str(p[0][2]).zfill(2))

def first_tuesday_of_the_month(year, month):
    # day=1
    # d=datetime.datetime(year,month,day)
    for day in range(1,8):
        d=datetime.datetime(year,month,day)
        print(d.strftime("%A"))
        if d.strftime("%A")=="Tuesday":
            return '{}-{}-{}'.format(year,str(month).zfill(2),str(day).zfill(2))


print(first_tuesday_of_the_month(1997, 1), '1997-01-07')
print(first_tuesday_of_the_month(2021, 2), '2021-02-02')
print(first_tuesday_of_the_month(2020, 9), '2020-09-01')

# Author: Pustur
