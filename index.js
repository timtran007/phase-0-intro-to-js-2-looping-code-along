function writeCards(name, event){
    let thankYouNote = [];
    for(let i = 0; i < name.length; i++){
        thankYouNote[i] = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
    }
    return thankYouNote;
}


function countDown(number){
	let x = number;
	while (x >= 0){
		console.log(number--);
		x--;
	}
}