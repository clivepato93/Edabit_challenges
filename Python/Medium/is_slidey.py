def is_slidey(n):
    n=[int(i) for i in str(n)]
    return all(n[i-1]+1==n[i] or n[i-1]-1==n[i] for i in range(1,len(n)))

print(is_slidey(123454321), True)
print(is_slidey(54345), True)
print(is_slidey(987654321), True)
print(is_slidey(1123), False)
print(is_slidey(1357), False)
print(is_slidey(1), True)
print(is_slidey(0), True)
print(is_slidey(13578987), False)
print(is_slidey(232323232), True)
print(is_slidey(2323232322), False)
print(is_slidey(2343456567878), True)
print(is_slidey(999999999999), False)
print(is_slidey(223322332233), False)
print(is_slidey(7766554433), False)
print(is_slidey(32), True)
print(is_slidey(21), True)
print(is_slidey(33), False)
