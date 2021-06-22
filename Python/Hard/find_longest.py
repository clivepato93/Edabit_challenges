# https://edabit.com/challenge/Z6kRGLpYgSuFQJ7Rx


def find_longest(sentence):
    sentence=''.join([i for i in sentence.lower() if i.isalpha() or i==' '])
    return sentence



actual_param, expected_param = [
  "Hello darkness my old friend.", "Yourself is your soul's captain and fate's master.",
  "The pretty daughter's toy, a doll, is as pretty as her.",
  "A thing of beauty is a joy forever.", "Forgetfulness is by all means powerless!",
  "Strengths is the longest and most commonly used word that contains only a single vowel."
], [
  "darkness", "yourself", "daughter", "forever", "forgetfulness", "strengths"
]
for i, s in enumerate(actual_param): print(find_longest(s), expected_param[i])
