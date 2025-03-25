function scorecalc() {
	let result = document.getElementById('score').value

	if (result <= 0) {
		window.alert('!! Type in a valid value.')

	} else if (result <= 65) {
		window.alert('Your result, ' + Math.round(result) + ', is failing.')

	} else if (result >= 66 && result <= 79) {
		window.alert('Your result, ' + Math.round(result) + ', is below average.')

	} else if (result >= 80 && result <= 84) {
		window.alert('Your result, ' + Math.round(result) + ', is average.')

	} else if (result >= 101) {
		window.alert('!! Type in a valid value.')

	} else {
		window.alert('Your result, ' + Math.round(result) + ', is above average.')
	}
}