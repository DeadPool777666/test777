function one(numone, numtwo) {
	let i = Math.max(numone, numtwo)
	while (i >= 1) {
	 if ((numone % i == 0) && (numtwo % i == 0)) {
		 console.log(i)
	 }  
	 i--
	}
   }
   console.log(one(100, 75))
