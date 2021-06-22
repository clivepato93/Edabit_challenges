import random
# https://edabit.com/challenge/MKyeDtmX9GsKh2n9q
cards=[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
suit=["d","c","h","s"]
def gen_deck():
    a=[(r,s) for r in cards for s in suit]
    random.shuffle(a)
    return a

print(gen_deck())


'''
Hi is anyone getting the following error when submitting their code

500
Internal error:
{ Error: (HTTP code 500) server error - mkdir /var/lib/docker/overlay2/f756896c474665e742081e8faa32fff126f3429caa411caa0856e47c3841aaab-init: no space left on device
at /app/bundle/programs/server/npm/node_modules/docker-modem/lib/modem.js:257:17
at getCause (/app/bundle/programs/server/npm/node_modules/docker-modem/lib/modem.js:287:7)
at Modem.buildPayload (/app/bundle/programs/server/npm/node_modules/docker-modem/lib/modem.js:256:5)
at IncomingMessage. (/app/bundle/programs/server/npm/node_modules/docker-modem/lib/modem.js:232:14)
at emitNone (events.js:111:20)
at IncomingMessage.emit (events.js:208:7)
at endReadableNT (_stream_readable.js:1064:12)
at _combinedTickCallback (internal/process/next_tick.js:139:11)
at process._tickDomainCallback (internal/process/next_tick.js:219:9)
reason: 'server error',
statusCode: 500,
json:
{ message: 'mkdir /var/lib/docker/overlay2/f756896c474665e742081e8faa32fff126f3429caa411caa0856e47c3841aaab-init: no space left on device' } }

i've sent an message using contact us but if anyone knows the people who are in charge of this website please forward this error on thank you
'''
