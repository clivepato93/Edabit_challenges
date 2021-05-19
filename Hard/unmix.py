# https://edabit.com/challenge/kDKNRcmZfRFKxSkjz


def unmix(txt):
    a=txt[::2]
    b=txt[1::2]

    return ''.join(i+n for i,n in list(zip(b,a)))+txt[-1] if len(txt)%2 else ''.join(i+n for i,n in list(zip(b,a)))


print(unmix('123456'), '214365')
print(unmix('hTsii  s aimex dpus rtni.g'),'This is a mixed up string.')
print(unmix('badce'),'abcde')
print(unmix(' Imaf eeilgna l tilt eidzz!y'),'I am feeling a little dizzy!')
print(unmix(''), '', 'Should work with empty strings as well.')
