# https://edabit.com/challenge/EyH8JgtSdsmc5Jgqz
def get_equivalent(note):
    return {"C#":"Db",
            "Db":"C#",
            "D#":"Eb",
            "F#":"Gb",
            "Eb":"D#",
            "Gb":"F#",
            "G#":"Ab",
            "Ab":"G#",
            "A#":"Bb",
            "Bb":"A#"}.get(note)


print(get_equivalent("C#"), "Db")
print(get_equivalent("Db"), "C#")
print(get_equivalent("D#"), "Eb")
print(get_equivalent("Eb"), "D#")
print(get_equivalent("F#"), "Gb")
print(get_equivalent("Gb"), "F#")
print(get_equivalent("G#"), "Ab", "Remember that the note after G is A")
print(get_equivalent("Ab"), "G#", "Remember that the note before A is G")
print(get_equivalent("A#"), "Bb")
print(get_equivalent("Bb"), "A#")
