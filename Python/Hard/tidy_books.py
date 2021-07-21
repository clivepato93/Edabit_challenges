# https://edabit.com/challenge/SKS6J8AHck7gq3Jbj

def tidy_books(lst):
    return [r[0].strip().split(" - ") for r in lst]



print(tidy_books([
	["     The Catcher in the Rye - J. D. Salinger    "], 
	["    Brave New World - Aldous Huxley   "], 
	["    Of Mice and Men - John Steinbeck    "]]), 
	[["The Catcher in the Rye", "J. D. Salinger"], 
	["Brave New World", "Aldous Huxley"], 
	["Of Mice and Men", "John Steinbeck"]
])

print(tidy_books([
	["     The Grapes of Wrath - John Steinbeck    "], 
	["    Great Expectations - Charles Dickens   "], 
	["    The Scarlet Letter - Nathaniel Hawthorne    "]]), 
	[["The Grapes of Wrath", "John Steinbeck"], 
	["Great Expectations", "Charles Dickens"], 
	["The Scarlet Letter", "Nathaniel Hawthorne"]
])