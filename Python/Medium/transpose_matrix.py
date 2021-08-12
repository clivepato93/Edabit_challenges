# https://edabit.com/challenge/kdhgEC2ECXAfoXWQP
def transpose_matrix(mtx):
    return ' '.join(v for i in list(zip(*mtx)) for v in i)


def transpose_matrix(mtx):
    f = []
    a = len(mtx[0])
    for i in range(a):
        for v in range(len(mtx)):
            f.append(mtx[v][i])
    return ' '.join(f)


def transpose_matrix(mtx):
    return " ".join(mtx[v][i] for i in range(len(mtx[0])) for v in range(len(mtx)))


print(transpose_matrix([
    ["Enter"],
    ["the"],
    ["Matrix."]
]), "Enter the Matrix.")

print(transpose_matrix([
    ["Unfortunately,", "be", "is.", "see"],
    ["no", "told", "You'll", "it"],
    ["one", "what", "have", "for"],
    ["can", "Matrix", "to", "yourself."]
]), "Unfortunately, no one can be told what Matrix is. You'll have to see it for yourself.")

print(transpose_matrix([
    ["Matrix", "that"],
    ["is", "system"],
    ["a", "is"],
    ["system", "our"],
    ["Neo,", "enemy."]
]), "Matrix is a system Neo, that system is our enemy.")

print(transpose_matrix([
    ["If", "killed", "you"],
    ["you", "in", "die"],
    ["are", "Matrix", "here?"]
]), "If you are killed in Matrix you die here?")

print(transpose_matrix([
    ["As", "human"],
    ["long", "race"],
    ["as", "will"],
    ["Matrix", "never"],
    ["exists,", "be"],
    ["the", "free."]
]), "As long as Matrix exists, the human race will never be free.")
