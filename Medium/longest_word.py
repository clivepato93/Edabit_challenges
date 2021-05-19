# https://edabit.com/challenge/Aw2QK8vHY7Xk8Keto
def longest_word(s):
    s=s.split()
    return max(s,key=len)

def longest_word(s):
    s=s.split()
    longest_word=s[0]
    for word in s:
        if len(word)>len(longest_word):
            longest_word=word
    return longest_word


str_vector, res_vector = [
  "Hello darkness my old friend.", "Hello there mate.", "Margaret's toy is a pretty doll.",
  "A thing of beauty is a joy forever.", "Forgetfulness is by all means powerless!",
  "The word 'strengths' is the longest and most commonly used word with a single vowel."
], [
  "darkness", "Hello", "Margaret's", "forever.", "Forgetfulness", "'strengths'"
]
for i, s in enumerate(str_vector): print(longest_word(s), res_vector[i])
