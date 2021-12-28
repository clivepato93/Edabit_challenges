// https://edabit.com/challenge/KPENunE3uhBcmSQ7C


function asciiCapitalize(str) {
	return [...str].map(el=> el.charCodeAt()%2==0? el.toUpperCase():el.toLowerCase()).join('');
}