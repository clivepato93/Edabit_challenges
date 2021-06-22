# https://edabit.com/challenge/iG5vcwd282T4t7h6r
def str_to_dict(lst):
    lst=[i.split("=")for i in lst]
    return dict(lst)


print(str_to_dict(["name=bob","balance=500","salary=10000","friends=0"]), {"name": "bob", "balance": "500", "salary": "10000", "friends": "0"})
print(str_to_dict(["bob=human", "lola=dog", "mittens=cat", "todd=frog"]),{"bob": "human", "lola": "dog", "mittens": "cat", "todd": "frog"} )
print(str_to_dict(["greeting=Hello There!", "dismissal=Goodbye!","thanks=Thank you!"]), {"greeting": "Hello There!", "dismissal": "Goodbye!", "thanks": "Thank you!"} )
print(str_to_dict(["dog=bark", "cat=meow", "cow=moo"]),{"dog": "bark", "cat": "meow", "cow": "moo"} )
print(str_to_dict(["1=one","2=two","3=three","4=four"]), {"1": "one", "2": "two", "3": "three", "4": "four"})
