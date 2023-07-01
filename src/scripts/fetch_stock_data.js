import CreateVisualsChart from "./create_graph";

class FetchStockData {
    constructor(ele) {
        this.ele = ele;
        // this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>";
        // this.handleClick = this.handleClick.bind(this);
        // this.ele.addEventListener("click", this.handleClick);
        this.getStockData();
    }



    async getStockData(ticker) {
        const url =
          `https://apistocks.p.rapidapi.com/daily?symbol=${ticker}&dateStart=2019-06-29&dateEnd=2023-06-29`;
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

          const organizedData = await this.organizedData(dates, closingPrices);

          console.log("Ticker:", ticker);
          console.log("Closing Prices:", closingPrices);
          console.log("Dates:", dates);
          console.log("Organized Data:", organizedData);

          return {organizedData};

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
     async organizedData(dates, closingPrices) {
        return dates.map((date, priceindex) => {
            return {
                Date: new Date((date)),
                Close: closingPrices[priceindex],
            };
        });
    }





}


export default FetchStockData;
