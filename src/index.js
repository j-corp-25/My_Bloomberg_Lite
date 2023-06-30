
import Example from "./scripts/example"
import FetchStockData from "./scripts/fetch_stock_data";
import CreateVisualsChart from "./scripts/create_graph";

document.addEventListener("DOMContentLoaded", () => {
  const main = document.getElementById("main");
  const button = document.getElementById("fetchStock");

  // Define a flag to track if the data has been fetched
  let dataFetched = false;

  button.addEventListener("click", async () => {
    // Check if data has already been fetched
    if (!dataFetched) {
      const fetchStockData = new FetchStockData(main);
      const stockData = await fetchStockData.getStockData();
      new CreateVisualsChart(main, stockData);
      dataFetched = true; // Set the flag to true after fetching data
    }
  });
});
// document.addEventListener("DOMContentLoaded", () => {
//     const main = document.getElementById("main")
//     new Example(main)

//     const button = document.getElementById("fetchStock");

//     button.addEventListener("click", () => {
//       new FetchStockData(main);
//     });


// })


//     button.addEventListener("click", async () => {
  //       const fetchStockData = new FetchStockData(main);
  //       const { dates, closingPrices, organizedData } = await fetchStockData.getStockData();
  //       new CreateVisualsChart(main, organizedData);
  //     });
//   //   });
// document.addEventListener("DOMContentLoaded", () => {
//   //     const main = document.getElementById("main");
//   const button = document.getElementById("fetchStock");

//   button.addEventListener("click", async () => {
//     const fetchStockData = new FetchStockData(main);
//     const { organizedData } = await fetchStockData.getStockData();
//     new CreateVisualsChart(main).createChart(organizedData);
//   });

//   })
//   // button.addEventListener("click", async () => {
//   //   const fetchStockData = new FetchStockData(main);
//   //   const stockData = await fetchStockData.getStockData();
//   //   new CreateVisualsChart(main, stockData);
//   // });
// });
// document.addEventListener("DOMContentLoaded", async () => {
//   const main = document.getElementById("main");
//   const button = document.getElementById("fetchStock");

//   button.addEventListener("click", async () => {
//     const fetchStockData = new FetchStockData(main);
//     const { organizedData } = await fetchStockData.getStockData();
//     const chart = new CreateVisualsChart(main, organizedData);
//     chart.createChart();
//   });
// });



// document.addEventListener('DOMContentLoaded', () => {
//   console.log("Hello world!!!")
//   console.log(getData)



// });
