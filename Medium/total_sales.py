# https://edabit.com/challenge/kPKNb4c3QjCf5tHRM
table1 = [
 ['A', 'B', 'C'],
 [ 2 ,  7 ,  1 ],
 [ 3 ,  6 ,  6 ],
 [ 4 ,  5 ,  5 ]]

table2 = [
 ['W', 'X', 'Y', 'Z'],
 [ 3 ,  5 ,  7 ,  1 ],
 [ 4 ,  5 ,  2 ,  3 ]]

table3 = [
 ['R', 'T', 'V', 'W', 'C'],
 [ 2 ,  3 ,  7 ,  7 ,  4 ],
 [ 8 ,  5 ,  2 ,  9 ,  0 ],
 [ 2 ,  5 ,  8 ,  7 ,  4 ],
 [ 5 ,  3 ,  7 ,  2 ,  3 ]]


def total_sales(sales_table, product):
    # c=0
    try:
        c=sales_table[0][:].index(product)
    except:
        return "Product not found"
    return sum(row[c] for row in sales_table[1:])


print(total_sales(table1,'A'), 9)
print(total_sales(table1,'B'), 18)
print(total_sales(table1,'C'), 12)
print(total_sales(table1,'D'), 'Product not found')

print(total_sales(table2,'A'), 'Product not found')
print(total_sales(table2,'W'), 7)
print(total_sales(table2,'Y'), 9)
print(total_sales(table2,'Z'), 4)

print(total_sales(table3,'A'), 'Product not found')
print(total_sales(table3,'T'), 16)
print(total_sales(table3,'Y'), 'Product not found')
print(total_sales(table3,'W'), 25)
