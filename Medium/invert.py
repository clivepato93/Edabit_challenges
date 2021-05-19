# https://edabit.com/challenge/Axim3Ld5zu9RFLZKr
def invert(dct):
    keys = [(v,k) for k,v in dct.items()]
    return dict(keys)

def invert(dct):
    return {v:k for k,v in dct.items()}

print(invert({"a": 1, "b": 2, "c": 3}), {1: "a", 2: "b", 3: "c"})
print(invert({"z": "q", "w": "f"}), {"q": "z", "f": "w"})
print(invert({"zebra": "koala", "horse": "camel"}), {"koala": "zebra", "camel": "horse"})


# https://edabit.com/challenge/jyqcRv6giw8an8KB2

def invert(s):
    return "".join(i.lower() if i.isupper() else i.upper() for i in s[::-1])

str_vector, res_vector = [
  "dLROW YM sI HsEt", "This string is CASE and INDEX reversed", "ReVeRsIbLe", "rAmIfIcAtIoN", "IntellectualS",
  "DESREVER xedni DNA esac SI GNIRTS SIHt", "ElBiSrEvEr", "nOiTaCiFiMaR", "sLAUTCELLETNi",
  "CoNSaGuiNiTY", "step on NO PETS", "dExtErIty cOmplEx"
], [
  "TeSh iS my worlD", "DESREVER xedni DNA esac SI GNIRTS SIHt", "ElBiSrEvEr", "nOiTaCiFiMaR", "sLAUTCELLETNi",
  "This string is CASE and INDEX reversed", "ReVeRsIbLe", "rAmIfIcAtIoN", "IntellectualS",
  "ytInIUgAsnOc", "step on NO PETS", "XeLPMoC YTiReTXeD"
]
for i, n in enumerate(str_vector): print(invert(n), res_vector[i])
