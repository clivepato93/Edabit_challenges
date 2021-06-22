def error(n):
    d={'1':"Check the fan: e1",
    '2':"Emergency stop: e2",
    '3':"Pump Error: e3",
    '4':"c: e4",
    '5':"Temperature Sensor Error: e5"}
    return d.get(str(n),101)


print(error(-1000), 101)
print(error(1), "Check the fan: e1")
print(error(2), "Emergency stop: e2")
print(error(3), "Pump Error: e3")
print(error(4), "c: e4")
print(error(5), "Temperature Sensor Error: e5")


# https://edabit.com/challenge/GP8Tywnn2gucEfSMf
