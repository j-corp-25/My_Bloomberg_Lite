import fetchData from './scripts/fetchData';
import {generateNewChart} from './scripts/createChart';

document.addEventListener("DOMContentLoaded", function () {
    let currentTicker = '';
    const tickerElement = document.getElementById('chart-container-ticker');
    const SNP500 = [
        "MMM",
        "ROKU",
        "GOOGL",
        "META",
        "KO",
        "GE"
    ]
    // Selects all the buttons under id=date-intervals
    const intervalButtons = document.querySelectorAll('#date-intervals button');

    async function updateDataForTicker(ticker, interval = '1month') {
        currentTicker = ticker;
        tickerElement.textContent = currentTicker.toUpperCase();
        try {
            const data = await fetchData(ticker, interval);
            generateNewChart(data);
        } catch (error) {
            console.error(`Failed to get data for ticker ${ticker}:`, error)
        }

    }
    // Picks a random ticker from the list above
    function randomTicker() {
        return SNP500[(Math.floor(Math.random() * SNP500.length))];
    }

    intervalButtons.forEach(button => { // Adds an event listener to each button and also gets their value when they are clicked
        button.addEventListener('click', function () {
            const interval = this.getAttribute('value');
            updateDataForTicker(currentTicker, interval);
        });
    });
    // Creates chart based on the ticker that generates randomly which is when the page loads
    updateDataForTicker(randomTicker(),);

    // Instead of cliick this adds a submit listener to the ticker form when searching for stock
    document.querySelector('.ticker-form').addEventListener('submit', function (e) { // Prevents from the form actualy being submitted
        e.preventDefault();
        const ticker = document.querySelector('#ticker-input').value;
        updateDataForTicker(ticker, '1month');
    });
    function openTab(evt, tabName) {
        var i,
            tabcontent,
            tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        tablinks = document.getElementsByClassName("tablinks");

        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        evt.currentTarget.className += " active";
    }
    document.getElementById("defaultOpen").click();

    var tabButtons = document.getElementsByClassName('tablinks');
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].addEventListener('click', function (event) {
            openTab(event, event.target.innerHTML);
        });

    }


});
