import Example from "./scripts/example"
import FetchStockData from "./scripts/fetch_stock_data";

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("main")
    new Example(main)

    const button = document.getElementById("fetchStock");

    button.addEventListener("click", () => {
      new FetchStockData(main);
    });


})






// document.addEventListener('DOMContentLoaded', () => {
//   console.log("Hello world!!!")
//   console.log(getData)



// });
