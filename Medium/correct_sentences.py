# https://edabit.com/challenge/Nh8xqtHAzoiaEyKrv
def correct_sentences(s):
    s=s.split()
    s[0]=s[0].capitalize()
    for i in range(len(s)-1):
        if s[i+1][0].isupper():
            s[i]=s[i]+"."
    return " ".join(s)+"."

print(correct_sentences("  mubashir loves  edabit  Matt  loves  edabit  "), "Mubashir loves edabit. Matt loves edabit.")
print(correct_sentences("  he is an engineer He sleeps a lot"), "He is an engineer. He sleeps a lot.")
print(correct_sentences(" his english is not good Help him     Thank you"), "His english is not good. Help him. Thank you.")
print(correct_sentences(" he is ready to join   airforce  Waiting for the  final approval"), "He is ready to join airforce. Waiting for the final approval.")
