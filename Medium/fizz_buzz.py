# https://edabit.com/challenge/646cCaFig6AP89YRo
def fizz_buzz(maximum):
    fizz_buzz = []
    for number in range(1,maximum+1):
        if number % 3 == 0 and number % 5== 0:
            fizz_buzz.append("FizzBuzz")
        elif number % 3== 0:
            fizz_buzz.append("Fizz")
        elif number % 5== 0:
            fizz_buzz.append("Buzz")
        else:
            fizz_buzz.append(number)
    return fizz_buzz
print(fizz_buzz(10), [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz'])

# https://edabit.com/challenge/WXqH9qvvGkmx4dMvp
def fizz_buzz(number):
    stringy = ''
    if number % 3 == 0 and number % 5== 0:
        stringy+= "FizzBuzz"
    elif number % 3== 0:
        stringy+= ("Fizz")
    elif number % 5== 0:
        stringy+= ("Buzz")
    else:
        stringy+= str(number)
    return stringy

# Fizz', You gave Fizz and 3 was needed" should equal 'Fizz'
print(fizz_buzz(3), "Fizz", "You gave " + fizz_buzz(3) + " and Fizz was needed")
