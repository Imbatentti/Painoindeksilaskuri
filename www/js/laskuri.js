function laskePI() {
	var paino = document.piForm.paino.value
	var pituus = document.piForm.pituus.value
		if(paino > 0 && pituus > 0){	
			var lopPainoindeksi = paino/(pituus/100*pituus/100)
			document.piForm.painoindeksi.value = lopPainoindeksi
				
				if(lopPainoindeksi < 18.5){
					document.piForm.luokitus.value = "Olet alipainoinen."
					document.piForm.face.src = "img/sadface.jpg"
				}
				else if(lopPainoindeksi > 18.5 && lopPainoindeksi < 25){
					document.piForm.luokitus.value = "Olet normaalipainoinen."
					document.piForm.face.src = "img/happyface.jpg"
					
				}
				else if(lopPainoindeksi > 25){
					document.piForm.luokitus.value = "Olet ylipainoinen."
					document.piForm.face.src = "img/sadface.jpg"
				}
		}
		else{
			alert("Anna vastauksesi positiivisilla numeroarvoilla")
		}
}
