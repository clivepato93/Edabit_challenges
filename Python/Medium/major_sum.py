def major_sum(lst):
    n_sum=sum(i for i in lst if i<0)
    p_sum=sum(i for i in lst if i>0)
    o_count=sum(1 for i in lst if i==0)
    p_n_sum=abs(n_sum)
    if max(p_n_sum,p_sum,o_count)==p_n_sum:
        return n_sum
    elif max(p_n_sum,p_sum,o_count)==p_sum:
        return p_sum
    return o_count

print(major_sum([1, 2, 3, 4, 0, 0, -3, -2]), 10)
print(major_sum([-4, -8, -12, -3, 4, 7, 1, 3, 0, 0, 0, 0]), -27)
print(major_sum([0, 0, 0, 0, 0, 1, 2, -3]), 5)
print(major_sum([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 11)
print(major_sum([0]),  1)
print(major_sum([1]), 1)
print(major_sum([-1]), -1)
