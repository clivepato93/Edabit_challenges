def scale_tip(lst):
    left= lst[:lst.index('I')]
    right= lst[lst.index('I')+1:]
    return "balanced" if sum(left)==sum(right) else 'left' if sum(left)>sum(right) else 'right'
print(scale_tip([0, 0, 0, "I", 1, 1, 1]), "right", "0 < 3 so it will tip right")
