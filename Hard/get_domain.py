import socket

def get_domain(ip_address):
    return socket.gethostbyaddr(ip_address)[0]


print(get_domain("8.8.8.8"), "dns.google")
print(get_domain("8.8.4.4"), "dns.google")
