import fetchData from './scripts/fetchData';
import createChart from './scripts/fetchData';

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    fetchData();
    createChart()
});

console.log("Hello World");
