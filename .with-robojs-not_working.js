const { app, globalShortcut, clipboard } = require('electron')
const { typeStringDelayed } = require("robotjs");

var arrayText
var currentStep = 0
var typing = false

const type = () => {
	if (!arrayText[currentStep]) return

	var currentText = String(arrayText[currentStep])
	
	if (currentText == "") {
		return
	}

	typing = true
	setTimeout(() => {
		typeStringDelayed(currentText, 2200)
		typing = false
		nextStep()
	}, 800)
}

const playStep = () => {
	if (!arrayText && typing) return
	type()
}

const prevStep = () => {
	if (currentStep == 0) return
		currentStep--
		console.log(`
rolling back to: 
${arrayText[currentStep]}
`)
}

const nextStep = () => {
	if (currentStep >= arrayText.length) return
		currentStep++
		console.log(`
nextStep: 
${arrayText[currentStep]}
`)
}

app.on('ready', () => {
	// prepare
	globalShortcut.register('Command+Control+Shift+h', () => {
		let text = clipboard.readText()
		// paste((err, text) => {
			arrayText = text
			.replace('\n', " ")
			.replace('\r', " ")
			.replace('\n\r', " ")
			.split(' ')
			.reduce((textArr, item) =>{
				if (item != "") {
					const removeSpecialChars = item.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
					textArr.push(removeSpecialChars)
				} 
				return textArr
			}, [])

			currentStep = 0

			console.log('ok, all set!')
		// })
	})

	//typing
	globalShortcut.register('Command+Control+Shift+j', () => {
		playStep()
	})

	// restart
	globalShortcut.register('Command+Control+Shift+;', () => {
		currentStep = 0

		console.log('everything new again!')
	})

	// prev step
	globalShortcut.register('Command+Control+Shift+k', () => {
		prevStep()
	})

	// next step
	globalShortcut.register('Command+Control+Shift+l', () => {
		nextStep()
	})
})