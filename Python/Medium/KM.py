# https://edabit.com/challenge/vC7vwZdPAYqkcFH7J

def KM(t):
    t.update({"Mouse":str(round((float(t["Total"][:-1])-float(t["Difference"][:-1]))/2,2))+"$"})
    return t


print(KM({"Total": "1.90$", "Difference": "0.90$", "Mouse": "?"}), {"Total": "1.90$", "Difference":"0.90$", "Mouse": "0.5$"})
print(KM({"Total": "1.30$", "Difference": "0.80$", "Mouse": "?"}), {"Total": "1.30$", "Difference":"0.80$", "Mouse": "0.25$"})
print(KM({"Total": "3.90$", "Difference": "0.20$", "Mouse": "?"}), {"Total": "3.90$", "Difference":"0.20$", "Mouse": "1.85$"})
print(KM({"Total": "0.801$", "Difference": "0.40$", "Mouse": "?"}), {"Total": "0.801$", "Difference":"0.40$", "Mouse": "0.2$"})
print(KM({"Total": "10.00$", "Difference": "0.40$", "Mouse": "?"}), {"Total": "10.00$", "Difference":"0.40$", "Mouse": "4.8$"})
print(KM({"Total": "20.00$", "Difference": "1.40$", "Mouse": "?"}), {'Total': '20.00$', 'Difference': '1.40$', 'Mouse': '9.3$'})
