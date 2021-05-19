# https://edabit.com/challenge/eKJ8E6wnd9GMWxGaZ

def dolla_dolla_bills(m):
    a= "{:,.2f}".format(m)
    return "$"+a if m>0 else a[0]+"$"+a[1:]


print(dolla_dolla_bills(10), "$10.00")
print(dolla_dolla_bills(31.4159), "$31.42")
print(dolla_dolla_bills(-56.99), "-$56.99")
print(dolla_dolla_bills(-0.008), "-$0.01")
print(dolla_dolla_bills(0.05), "$0.05")
print(dolla_dolla_bills(1000000), "$1,000,000.00")
print(dolla_dolla_bills(-314159.2653), "-$314,159.27")
