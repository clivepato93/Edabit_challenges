# https://edabit.com/challenge/4BRGyox5xi8Kp7AAE
def chess_board(pole):
    letters="abcdefgh"
    if int(pole[1])%2 and letters.index(pole[0])%2==0:
        return "black"
    elif int(pole[1])%2 and letters.index(pole[0])%2:
        return "white"
    if int(pole[1])%2 and letters.index(pole[0])%2==0:
        return "black"
    elif int(pole[1])%2==0 and letters.index(pole[0])%2==0:
        return "white"
    else:
        return "black"


# print(chess_board('a1'), 'black')
# print(chess_board('e5'), 'black')
# print(chess_board('d1'), 'white')
# print(chess_board('c7'), 'black')
# print(chess_board('h5'), 'white')
print(chess_board('g2'), 'white')
# print(chess_board('b3'), 'white')
print(chess_board('f6'), 'black')
# print(chess_board('g5'), 'black')
