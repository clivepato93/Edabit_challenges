def bill_count(money, bills):
    total_notes=0
    for bill in reversed(bills):
        if money==0:
            return total_notes
        else:
            notes=money//bill
            total_notes+=notes
            money -= notes*bill
        # print(total_notes,money)
    return total_notes


# print(bill_count(100, [1, 10, 20]), 5)
print(bill_count(1050, [1, 10, 20, 100]), 13)
# print(bill_count(3, [1, 10]), 3)