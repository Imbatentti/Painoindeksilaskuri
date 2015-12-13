function countBMI() {
	var weight = document.bmiForm.weight.value
	var height = document.bmiForm.height.value
		if(weight > 0 && height > 0){	
			var finalBMI = weight/(height/100*height/100)
			document.bmiForm.bmi.value = (finalBMI).toFixed(2)
				
				if(finalBMI < 18.5){
					document.bmiForm.verdict.value = "Olet alipainoinen."
					document.bmiForm.face.src = "img/sadface.jpg"
				}
				else if(finalBMI > 18.5 && finalBMI < 25){
					document.bmiForm.verdict.value = "Olet normaalipainoinen."
					document.bmiForm.face.src = "img/happyface.jpg"
					
				}
				else if(finalBMI > 25){
					document.bmiForm.verdict.value = "Olet ylipainoinen."
					document.bmiForm.face.src = "img/sadface.jpg"
				}
		}
		else{
			alert("Anna vastauksesi positiivisilla numeroarvoilla")
		}
}
