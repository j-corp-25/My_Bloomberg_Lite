async function fetchNews() {
    const url = 'https://real-time-finance-data.p.rapidapi.com/stock-news?symbol=AAPL%3ANASDAQ&language=en';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': "be2c5cf9d2mshdd2979e94314598p19c3dbjsnee3000224bd0",
            'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result.data.news;
    } catch (error) {
        console.error(error);
    }
}

export default fetchNews;
