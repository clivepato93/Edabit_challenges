def to_snake_case(txt):
    return ''.join(i if i.islower() else "_"+i.lower() for i in (txt))

def to_camel_case(txt):
    s=''
    for i in range(len(txt)):
        if txt[i]=="_":
            s+=txt[i+1].upper()
        elif txt[i-1]=="_":
            continue
        else:
            s+=txt[i]
    return s


# camelCase to snake_case tests
# print(to_snake_case("edabit"), "edabit")
# print(to_snake_case("helloEdabit"), "hello_edabit")
# print(to_snake_case("isModalOpen"), "is_modal_open")
# print(to_snake_case("getBackgroundColor"), "get_background_color")
# print(to_snake_case("isLoading"), "is_loading")
# print(to_snake_case("x"), "x")

# snake_case to camelCase tests
# print(to_camel_case("edabit"), "edabit")
print(to_camel_case("hello_edabit"), "helloEdabit")
# print(to_camel_case("is_modal_open"), "isModalOpen")
# print(to_camel_case("get_background_color"), "getBackgroundColor")
# print(to_camel_case("is_loading"), "isLoading")
# print(to_camel_case("x"), "x")
