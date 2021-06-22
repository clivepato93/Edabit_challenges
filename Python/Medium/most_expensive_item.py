def most_expensive_item(products):
    return max(products,key = lambda k:products[k])

print(most_expensive_item({
  "tv": 30,
  "skate": 20,
  "stereo": 50,
}), "stereo")

print(most_expensive_item({
  "skate": 20,
}), "skate")

print(most_expensive_item({
  "tv": 30,
  "skate": 20,
}), "tv")

# Author : Miguel Carvalho
