# https://edabit.com/challenge/P8YXBzJNysQAi8ePr

def repdrome(num):
    num = ''.join(str(i) for i in num)
    if len(set(num)) == 1:
        return True


def metadrome(num):
    return all(num[i-1] < num[i] for i in range(1, len(num)))


def katadrome(num):
    return all(num[i-1] > num[i] for i in range(1, len(num)))


def nialpdrome(num):
    for i in range(1, len(num)):
        if num[i-1] > num[i]:
            continue
        elif num[i-1] == num[i] and num[i-2] > num[i-1]:
            return True
    # return any(num[i-1] >= num[i] for i in range(1, len(num)))


def plaindrome(num):
    for i in range(1, len(num)):
        if num[i-1] < num[i]:
            continue
        elif num[i-1] == num[i] and num[i-2] < num[i-1]:
            return True


def digitaldrome(n):
    n = list(map(int, str(n)))
    print(n)

    if repdrome(n):
        return "Repdrome"

    elif metadrome(n):
        return "Metadrome"
    elif plaindrome(n):
        return "Plaindrome"
    elif katadrome(n):
        return "Katadrome"
    elif nialpdrome(n):
        return "Nialpdrome"

    else:
        return "Nondrome"


print(digitaldrome(1), "Repdrome")


# print(digitaldrome(1357), "Metadrome", "Example #1")
# print(digitaldrome(12344), "Plaindrome", "Example #2")
# print(digitaldrome(7531), "Katadrome", "Example #3")
print(digitaldrome(9874441), "Nialpdrome", "Example #4")
# print(digitaldrome(666), "Repdrome", "Example #5")
# print(digitaldrome(269), "Metadrome")
