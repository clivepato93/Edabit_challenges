
// https://edabit.com/challenge/djyXcJZAuezrSXJ4j

function missingAngle(angle1, angle2) {
	return (angle1+angle2)>90?'acute':(angle1+angle2)<90?'obtuse':'right';
}