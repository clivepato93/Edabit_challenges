# https://edabit.com/challenge/AWYR47h7vCCwDmoXF

def is_goal_scored(goal):
    # for i in range(0,3):
    #     for r in goal[i]:
    for i in goal[0:3]:
        for s in i:
            if "0" in s[3:8]:
                return True
    return False
            # if "0" in s:
            #     return True if s.index("0")>3 or s.index("0")<8 else False
    # return False


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
