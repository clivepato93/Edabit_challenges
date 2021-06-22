def sock_pairs(socks):
    c=sorted(list(set(socks)))
    total_socks=0
    for sock in c:
        if socks.count(sock)>=2:
            total_socks+=socks.count(sock)//2
    return total_socks


print(sock_pairs("AA"), 1)
print(sock_pairs("ABABC"), 2)
print(sock_pairs("CABBACCC"), 4)
print(sock_pairs("AACDE"), 1)
print(sock_pairs("ACDBE"), 0)
print(sock_pairs(""), 0)
print(sock_pairs("ABABAB"), 2)
print(sock_pairs("AAAAA"), 2)
print(sock_pairs("AAACCBB"), 3)
