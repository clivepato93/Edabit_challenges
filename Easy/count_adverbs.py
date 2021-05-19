# https://edabit.com/challenge/bukvPQFPos5Hc3zyv
def count_adverbs(sentence):
    return sum(1 for word in sentence.replace(",","").replace(".","").split() if word.endswith("ly"))


print(count_adverbs("She ran hurriedly towards the stadium."), 1)
print(count_adverbs("She ate the lasagna heartily and noisily."), 2)
print(count_adverbs("He hates potatoes."), 0)
print(count_adverbs("He was happily, crazily, foolishly over the moon."), 3)
print(count_adverbs("She writes poetry beautifully."), 1)
print(count_adverbs("There are many fat geese in the park."), 0)
print(count_adverbs("The horse acted aggressively and stubbornly."), 2)
print(count_adverbs("She forgot where to buy the lysol."), 0, '-ly should not be counted if it is not at the end.')
print(count_adverbs("Ilya ran to the store."), 0, '-ly should not be counted if it is not at the end.')
