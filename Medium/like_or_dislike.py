def like_or_dislike(lst):
    f="Nothing"
    if not(lst):
        return f
    else:
        for i in lst:
            if f!=i:
                f=i
            else:
                f="Nothing"
    return f

print(like_or_dislike(['Dislike']), 'Dislike')
print(like_or_dislike(['Like', 'Like']), 'Nothing')
print(like_or_dislike(['Dislike', 'Dislike']), 'Nothing')
print(like_or_dislike(['Like', 'Like', 'Like']), 'Like')
print(like_or_dislike(['Like', 'Dislike']), 'Dislike')
print(like_or_dislike(['Dislike', 'Like']), 'Like')
print(like_or_dislike(['Like', 'Dislike', 'Dislike']), 'Nothing')
print(like_or_dislike(['Dislike', 'Like', 'Dislike']), 'Dislike')
print(like_or_dislike([]), 'Nothing')
