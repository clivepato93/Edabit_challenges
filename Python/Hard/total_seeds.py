# https://edabit.com/challenge/vASK6xk6hbxJTyJQo
def total_seeds(watermelon):
    finalScore=0
    def countSections(firstRow,lastRow,firstValue,lastValue):
        total=0
        for r in range(firstRow,lastRow):
            for v in range(firstValue,lastValue):
                total+=(watermelon[r][v])
        return total
    def greaterThanFive(value):
        return value if value >5 else 0
    
    finalScore+=greaterThanFive(countSections(0,4,0,4))
    finalScore+=greaterThanFive(countSections(0,4,4,8))
    finalScore+=greaterThanFive(countSections(4,8,0,4))
    finalScore+=greaterThanFive(countSections(4,8,4,8))
    return finalScore

watermelon1=[
[1, 0, 0, 1, 1, 1, 0, 1], 
[1, 0, 1, 0, 1, 1, 0, 0], 
[1, 1, 1, 1, 0, 0, 0, 0], 
[0, 1, 0, 1, 1, 1, 1, 0], 
[0, 0, 0, 1, 0, 1, 0, 0], 
[1, 1, 1, 0, 0, 0, 1, 1], 
[1, 0, 1, 1, 0, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0]]
print(total_seeds(watermelon1), 25)

watermelon2=[
[0, 1, 0, 0, 0, 0, 1, 0], 
[0, 0, 1, 0, 1, 0, 0, 0], 
[0, 1, 1, 0, 1, 0, 0, 0], 
[0, 0, 0, 0, 0, 0, 0, 0], 
[1, 0, 0, 0, 0, 0, 1, 0], 
[0, 0, 1, 0, 1, 0, 1, 0], 
[0, 1, 0, 1, 1, 0, 0, 0], 
[0, 1, 0, 0, 0, 0, 0, 1]]
print(total_seeds(watermelon2), 0)
