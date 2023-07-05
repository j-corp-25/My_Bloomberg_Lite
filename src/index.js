import fetchData from './scripts/fetchData';
import { generateNewChart } from './scripts/createChart';

document.addEventListener("DOMContentLoaded", function() {
    let currentTicker = '';
    const tickerElement = document.getElementById('chart-container-ticker');
    const randomSNP500 = ["MMM","ROKU","GOOGL","META","KO","GE"]
    //Selects all the buttons under id=date-intervals
    const intervalButtons = document.querySelectorAll('#date-intervals button');

    async function updateDataForTicker(ticker,interval = '1month') {
        currentTicker = ticker;
        tickerElement.textContent = currentTicker.toUpperCase();
        try {
            const data = await fetchData(ticker,interval);
            generateNewChart(data);
        }catch (error) {
            console.error(`Failed to get data for ticker ${ticker}:`, error)
        }

    }

});
