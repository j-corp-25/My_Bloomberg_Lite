async function fetchStockNews() {
    const url = 'https://real-time-finance-data.p.rapidapi.com/stock-news?symbol=AAPL&language=en';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'be2c5cf9d2mshdd2979e94314598p19c3dbjsnee3000224bd0',
        'X-RapidAPI-Host': 'real-time-finance-data.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if(!response.ok) {
        throw new Error("HTTP status " + response.status);
      }
      const result = await response.json(); // assuming the API returns JSON data
      return result; // or you could process the result here depending on your needs
    } catch (error) {
      console.error(error);
    }
  }

  fetchStockNews().then(data => {
    console.log(data); // Print the data fetched
  });
