# https://edabit.com/challenge/2C23JH5cC4pfnCKvi

def check_flush(table, hand):
    string=' '.join(table+hand)
    return any(string.count(l)>=5 for l in ["H","D","S","C"])

print(check_flush(['A_S', 'J_H', '7_D', '8_D', '10_D'], ['J_D', '3_D']), True)
print(check_flush(['10_S', '7_S', '9_H', '4_S', '3_S'], ['K_S', 'Q_S']), True)
print(check_flush(['3_S', '10_H', '10_D', '10_C', '10_S'], ['3_S', '4_D']), False)
print(check_flush(['8_H', '10_H', '10_D', 'J_H', '10_S'], ['5_D', 'Q_H']), False)
