# https://edabit.com/challenge/xYRNzJB7kAXXEQSdF
def wiggle_string(s):
    return [" "*i+s for i in range(0,len(s)+1,1)]+[" "*i+s for i in range(len(s)-1,-1,-1)]
# +[" "*i+s for i in range(len(s)-1,-1,-1)]


print(wiggle_string("hello"), [
	"hello",
	" hello",
	"  hello",
	"   hello",
	"    hello",
	"     hello",
	"    hello",
	"   hello",
	"  hello",
	" hello",
	"hello"
])

# print(wiggle_string("EDABIT"), [
# 	"EDABIT",
# 	" EDABIT",
# 	"  EDABIT",
# 	"   EDABIT",
# 	"    EDABIT",
# 	"     EDABIT",
# 	"      EDABIT",
# 	"     EDABIT",
# 	"    EDABIT",
# 	"   EDABIT",
# 	"  EDABIT",
# 	" EDABIT",
# 	"EDABIT"
# ])
#
# print(wiggle_string("Wiggle Time"), [
# 	"Wiggle Time",
# 	" Wiggle Time",
# 	"  Wiggle Time",
# 	"   Wiggle Time",
# 	"    Wiggle Time",
# 	"     Wiggle Time",
# 	"      Wiggle Time",
# 	"       Wiggle Time",
# 	"        Wiggle Time",
# 	"         Wiggle Time",
# 	"          Wiggle Time",
# 	"           Wiggle Time",
# 	"          Wiggle Time",
# 	"         Wiggle Time",
# 	"        Wiggle Time",
# 	"       Wiggle Time",
# 	"      Wiggle Time",
# 	"     Wiggle Time",
# 	"    Wiggle Time",
# 	"   Wiggle Time",
# 	"  Wiggle Time",
# 	" Wiggle Time",
# 	"Wiggle Time"
# ])
#
# print(wiggle_string("the dog"), ["the dog", " the dog", "  the dog", "   the dog", "    the dog", "     the dog", "      the dog", "       the dog", "      the dog", "     the dog", "    the dog", "   the dog", "  the dog", " the dog", "the dog"])
# print(wiggle_string("wiggle wiggle wiggle"), ["wiggle wiggle wiggle", " wiggle wiggle wiggle", "  wiggle wiggle wiggle", "   wiggle wiggle wiggle", "    wiggle wiggle wiggle", "     wiggle wiggle wiggle", "      wiggle wiggle wiggle", "       wiggle wiggle wiggle", "        wiggle wiggle wiggle", "         wiggle wiggle wiggle", "          wiggle wiggle wiggle", "           wiggle wiggle wiggle", "            wiggle wiggle wiggle", "             wiggle wiggle wiggle", "              wiggle wiggle wiggle", "               wiggle wiggle wiggle", "                wiggle wiggle wiggle", "                 wiggle wiggle wiggle", "                  wiggle wiggle wiggle", "                   wiggle wiggle wiggle", "                    wiggle wiggle wiggle", "                   wiggle wiggle wiggle", "                  wiggle wiggle wiggle", "                 wiggle wiggle wiggle", "                wiggle wiggle wiggle", "               wiggle wiggle wiggle", "              wiggle wiggle wiggle", "             wiggle wiggle wiggle", "            wiggle wiggle wiggle", "           wiggle wiggle wiggle", "          wiggle wiggle wiggle", "         wiggle wiggle wiggle", "        wiggle wiggle wiggle", "       wiggle wiggle wiggle", "      wiggle wiggle wiggle", "     wiggle wiggle wiggle", "    wiggle wiggle wiggle", "   wiggle wiggle wiggle", "  wiggle wiggle wiggle", " wiggle wiggle wiggle", "wiggle wiggle wiggle"])
# print(wiggle_string("Hello World!"), ["Hello World!", " Hello World!", "  Hello World!", "   Hello World!", "    Hello World!", "     Hello World!", "      Hello World!", "       Hello World!", "        Hello World!", "         Hello World!", "          Hello World!", "           Hello World!", "            Hello World!", "           Hello World!", "          Hello World!", "         Hello World!", "        Hello World!", "       Hello World!", "      Hello World!", "     Hello World!", "    Hello World!", "   Hello World!", "  Hello World!", " Hello World!", "Hello World!"])
# print(wiggle_string("Edabit is fun!"), ["Edabit is fun!", " Edabit is fun!", "  Edabit is fun!", "   Edabit is fun!", "    Edabit is fun!", "     Edabit is fun!", "      Edabit is fun!", "       Edabit is fun!", "        Edabit is fun!", "         Edabit is fun!", "          Edabit is fun!", "           Edabit is fun!", "            Edabit is fun!", "             Edabit is fun!", "              Edabit is fun!", "             Edabit is fun!", "            Edabit is fun!", "           Edabit is fun!", "          Edabit is fun!", "         Edabit is fun!", "        Edabit is fun!", "       Edabit is fun!", "      Edabit is fun!", "     Edabit is fun!", "    Edabit is fun!", "   Edabit is fun!", "  Edabit is fun!", " Edabit is fun!", "Edabit is fun!"])
# print(wiggle_string("123456789"), ["123456789", " 123456789", "  123456789", "   123456789", "    123456789", "     123456789", "      123456789", "       123456789", "        123456789", "         123456789", "        123456789", "       123456789", "      123456789", "     123456789", "    123456789", "   123456789", "  123456789", " 123456789", "123456789"])
# print(wiggle_string("qwertyuiop"), ["qwertyuiop", " qwertyuiop", "  qwertyuiop", "   qwertyuiop", "    qwertyuiop", "     qwertyuiop", "      qwertyuiop", "       qwertyuiop", "        qwertyuiop", "         qwertyuiop", "          qwertyuiop", "         qwertyuiop", "        qwertyuiop", "       qwertyuiop", "      qwertyuiop", "     qwertyuiop", "    qwertyuiop", "   qwertyuiop", "  qwertyuiop", " qwertyuiop", "qwertyuiop"])
# print(wiggle_string("python javascript"), ["python javascript", " python javascript", "  python javascript", "   python javascript", "    python javascript", "     python javascript", "      python javascript", "       python javascript", "        python javascript", "         python javascript", "          python javascript", "           python javascript", "            python javascript", "             python javascript", "              python javascript", "               python javascript", "                python javascript", "                 python javascript", "                python javascript", "               python javascript", "              python javascript", "             python javascript", "            python javascript", "           python javascript", "          python javascript", "         python javascript", "        python javascript", "       python javascript", "      python javascript", "     python javascript", "    python javascript", "   python javascript", "  python javascript", " python javascript", "python javascript"])
