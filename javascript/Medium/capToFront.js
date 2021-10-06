// https://edabit.com/challenge/8n9RyHThC3dNEPCng

function capToFront(s) {
	const uC = s.split('').filter(letter => letter ===letter.toUpperCase())
    const lC = s.split('').filter(letter => letter !==letter.toUpperCase())
    return uC.join('')+lC.join('')
}

console.log(capToFront("hApPy"), "APhpy")
console.log(capToFront("moveMENT"), "MENTmove")
console.log(capToFront("aPPlE"), "PPEal")
console.log(capToFront("shOrtCAKE"), "OCAKEshrt")