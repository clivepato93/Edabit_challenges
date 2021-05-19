# https://edabit.com/challenge/Fe6wvtjcNFwuANuLu

def ping_pong(lst, win):
    if win:
        return ["Ping!" if i%2==0 else "Pong!" for i in range(0,len(lst)*2)]
    return ["Ping!" if i%2==0 else "Pong!" for i in range(0,len(lst)*2-1)]

print(ping_pong(["Ping!", "Ping!", "Ping!"], True), ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"])
print(ping_pong(["Ping!", "Ping!"], False), ["Ping!", "Pong!", "Ping!"])
print(ping_pong(["Ping!"], True) , ["Ping!", "Pong!"])
