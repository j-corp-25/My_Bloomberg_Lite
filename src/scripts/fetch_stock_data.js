

class fetch_stock_data {
    constructor(ele) {
        this.ele = ele;
        // this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>";
        // this.handleClick = this.handleClick.bind(this);

        this.ele.addEventListener("click", this.handleClick);

        this.getStockData();

    }

    async getData() {
        const url =
          "https://apistocks.p.rapidapi.com/daily?symbol=AAPL&dateStart=2023-06-01&dateEnd=2023-06-29";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": "be2c5cf9d2mshdd2979e94314598p19c3dbjsnee3000224bd0",
            "X-RapidAPI-Host": "apistocks.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();


          const ticker = this.getTicker(result);


          const closingPrices = this.getClosingPrices(result);


          const dates = this.getDates(result);

          console.log("Ticker:", ticker);
          console.log("Closing Prices:", closingPrices);
          console.log("Dates:", dates);
        } catch (error) {
          console.error(error);
        }
      }

      getTicker(response) {
        return response.Metadata.Symbol;
      }

      getClosingPrices(response) {
        return response.Results.map((result) => result.Close);
      }

      getDates(response) {
        return response.Results.map((result) => result.Date);
      }

      organize_data()


}


export default fetch_stock_data;
