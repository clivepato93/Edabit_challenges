# https://edabit.com/challenge/AWYR47h7vCCwDmoXF

def is_goal_scored(goal):
    i=0
    g= goal[:2]
    for row in g:
        for string in row:
            try:
                i=string.index("0")
            except:
                i=i
    return i



print(is_goal_scored([
	["  #     #  "],
	["  #  0  #  "],
	["  #     #  "],
	["  #######  "],
	["     #     "],
	["     #     "],
	["     #     "]
]), True)

print(is_goal_scored([
	["  #     #  "],
	["  #     #  "],
	["  #   0 #  "],
	["  #######  "],
	["     #     "],
	["     #     "],
	["     #     "]
]), True)
#
# print(is_goal_scored([
# 	["  #0    #  "],
# 	["  #     #  "],
# 	["  #     #  "],
# 	["  #######  "],
# 	["     #     "],
# 	["     #     "],
# 	["     #     "]
# ]), True)
#
print(is_goal_scored([
	["  #     #  "],
	["  #     #  "],
	["  #     # 0"],
	["  #######  "],
	["     #     "],
	["     #     "],
	["     #     "]
]), False)

# print(is_goal_scored([
# 	["  #     #  "],
# 	["  #     #  "],
# 	["  #     #  "],
# 	["  #######  "],
# 	["     #    0"],
# 	["     #     "],
# 	["     #     "]
# ]), False)
#
# print(is_goal_scored([
# 	["  #     #  "],
# 	["  #     #  "],
# 	["  #     # "],
# 	["  #######  "],
# 	["     #     "],
# 	[" 0   #     "],
# 	["     #     "]
# ]), False)
#
# print(is_goal_scored([
# 	["0 #     #  "],
# 	["  #     #  "],
# 	["  #     #  "],
# 	["  #######  "],
# 	["     #     "],
# 	["     #     "],
# 	["     #     "]
# ]), False)
#
# print(is_goal_scored([
# 	["  #     #  "],
# 	["  #     #  "],
# 	["  #     #  "],
# 	["  ####### 0"],
# 	["     #     "],
# 	["     #     "],
# 	["     #     "]
# ]), False)
#
print(is_goal_scored([
	["  #     #  "],
	["  #     #  "],
	["  #     #  "],
	["  ###0###  "],
	["     #     "],
	["     #     "],
	["     #     "]
]), False)
#
# print(is_goal_scored([
# 	["  #     #  "],
# 	["  #     #  "],
# 	["  #     #  "],
# 	["  #######  "],
# 	["     0     "],
# 	["     #     "],
# 	["     #     "]
# ]), False)
