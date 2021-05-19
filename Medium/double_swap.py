# https://edabit.com/challenge/mHRyhyazjCoze5jSL
def double_swap(txt, c1, c2):
    f=""
    for letter in txt:
        if letter ==c1:
            f+=c2
        elif letter ==c2:
            f+=c1
        else:
            f+=letter
    return f

print(double_swap("aabbccc", "a", "b"), "bbaaccc")
print(double_swap("random w#rds writt&n h&r&", "#", "&"), "random w&rds writt#n h#r#")
print(double_swap("128 895 556 788 999", "8", "9"), "129 985 556 799 888")
print(double_swap("mamma mia", "m", "a"), "amaam aim")
print(double_swap("**##**", "*", "#"), "##**##")
print(double_swap("123456789", "4", "5"), "123546789")
print(double_swap("445566&&", "4", "&"), "&&556644")
print(double_swap("!?@,.", ",", "."), "!?@.,")
print(double_swap("Q_Q T_T =.= >.<", "Q", "T"), "T_T Q_Q =.= >.<")
print(double_swap("(Q_Q) (T_T) (=.=) (>.<)", ")", "("), ")Q_Q( )T_T( )=.=( )>.<(")
print(double_swap("<>", ">", "<"), "><")
print(double_swap("001101", "1", "0"), "110010")
print(double_swap("!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~", "a", "b"), "!\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`bacdefghijklmnopqrstuvwxyz{|}~")
