# https://edabit.com/challenge/bGHnhQr5bjH8kd8rG
def rotatebyOne(arr):
    last_element = arr[-1]
    arr.insert(0, last_element)
    arr.pop()
    return arr

def rotatebyOne(arr):
    return [arr[-1]]+arr[0:-1]

print(rotatebyOne([1,2,3,4,5]), [5, 1, 2, 3, 4])
print(rotatebyOne([6,5,8,9,7]), [7, 6, 5, 8, 9])
print(rotatebyOne([20,15,26,8,4]), [4, 20, 15, 26, 8])
print(rotatebyOne([7,8,6,4,5]), [5, 7, 8, 6, 4])
print(rotatebyOne([5,9,45,1,2]), [2, 5, 9, 45, 1])
