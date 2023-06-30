// import Example from "./scripts/example"
import FetchStockData from "./scripts/fetch_stock_data";
import CreateVisualsChart from "./scripts/create_graph";

// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main")
//     new Example(main)

//     const button = document.getElementById("fetchStock");

//     button.addEventListener("click", () => {
//       new FetchStockData(main);
//     });

//     button.addEventListener("click", async () => {
//       const fetchStockData = new FetchStockData(main);
//       const { dates, closingPrices, organizedData } = await fetchStockData.getStockData();
//       new CreateVisualsChart(main, organizedData);
//     });
//   });
document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  const button = document.getElementById("fetchStock");

  button.addEventListener("click", async () => {
    const fetchStockData = new FetchStockData(main);
    const stockData = await fetchStockData.getStockData();
    new CreateVisualsChart(main, stockData);
  });
});





// document.addEventListener('DOMContentLoaded', () => {
//   console.log("Hello world!!!")
//   console.log(getData)



// });
