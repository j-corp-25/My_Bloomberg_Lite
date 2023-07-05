import fetchData from './scripts/fetchData';
import { generateNewChart } from './scripts/createChart';

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    fetchData();
    generateNewChart();
});

console.log("Hello World");
