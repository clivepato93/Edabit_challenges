def to_number_list(lst):
    return [float(i) if float(i)!=int(i) else int(i) for i in [float(i) for i in lst]]


print(to_number_list(["1", "2"]), [1, 2])
print(to_number_list(["3", "4"]), [3, 4])
print(to_number_list(["9.4", "4.2"]), [9.4, 4.2])
# Test.assert_equals(o_number_list(["3.4", "8.6"]), [3.4, 8.6])
print(to_number_list(["8.3", "9.7", "8.0"]), [8.3, 9.7, 8])
