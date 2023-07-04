async function fetchData() {
    const rapidApiKey = process.env.RAPIDAPI_KEY;
    const url = 'https://twelve-data1.p.rapidapi.com/time_series?&start_date=2000-01-01&end_date=2023-06-30&symbol=aapl&interval=15min&format=json';
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
		'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
	}
};

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}
export default fetchData;
