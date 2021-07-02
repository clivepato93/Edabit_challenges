# https://edabit.com/challenge/vuSXW3iEnEQNZXjAP

def create_square(l):
    if l>1:
        c="#"*(l)+''.join(["\n#"+" "*(l-2)+"#" for i in range (2,l)])
        return c+('\n'+"#"*(l))
    return "#"*(l)+''.join(["\n#"+" "*(l-2)+"#" for i in range (2,l)])
    # pass

print(create_square(-1), "")
print(create_square(0), "")
print(create_square(1), "#")
print(create_square(2), "##\n##")
print(create_square(3), "###\n# #\n###")
print(create_square(4), "####\n#  #\n#  #\n####")
print(create_square(10), "##########\n#        #\n#        #\n#        #\n#        #\n#        #\n#        #\n#        #\n#        #\n##########");
print(create_square(20), "####################\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n#                  #\n####################");
print(create_square(12), "############\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n#          #\n############");
print(create_square(50), "##################################################\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n#                                                #\n##################################################");
print(create_square(30), "##############################\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n#                            #\n##############################");
print(create_square(21), "#####################\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#                   #\n#####################");
print(create_square(33), "#################################\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#                               #\n#################################");
print(create_square(80), "################################################################################\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n#                                                                              #\n################################################################################")

# print(int(10*0.5)+1)
# Author: 0osh4d0wo0
