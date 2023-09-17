async function fetchData (){
    const url = 'https://us-weather-by-zip-code.p.rapidapi.com/getweatherzipcode?zip=08019';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f8576f3ad6mshf60ae29680456c0p181885jsnc526bec44ec2',
		'X-RapidAPI-Host': 'us-weather-by-zip-code.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
}