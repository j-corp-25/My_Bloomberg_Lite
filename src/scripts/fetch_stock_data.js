import {createChart} from './create_graph';

class FetchStockData {
    constructor(ele) {
        this.ele = ele;
        // this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>";
        // this.handleClick = this.handleClick.bind(this);
        // this.ele.addEventListener("click", this.handleClick);
        this.getStockData();
        this.createChart();


    }



    async getStockData() {
        const url =
          "https://apistocks.p.rapidapi.com/daily?symbol=AAPL&dateStart=2019-06-29&dateEnd=2023-06-29";
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

    createChart() {
        // const dataset = this.data.organizedData;
        const dataset = organizedData;

        const margin = { top: 20, right: 20, bottom: 60, left: 40 };
        const width = 800 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;
        const x = d3.scaleTime().range([0, width]);
        const y = d3.scaleLinear().range([height, 0]);
        const svg = d3
          .select(".chart-main")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);

        // Calculate the minimum and maximum dates
        const minDate = d3.min(dataset, (d) => d.Date);
        const maxDate = d3.max(dataset, (d) => d.Date);

        x.domain([minDate, maxDate]);
        y.domain([0, d3.max(dataset, (d) => d.Close)]);
        svg
          .append("g")
          .attr("transform", `translate(0, ${height})`)
          .call(d3.axisBottom(x)
            .ticks(d3.timeMonth.every(1))
            .tickFormat(d3.timeFormat("%b %d, %Y")))
          .selectAll("text")
          .style("text-anchor", "end")
          .attr("dx", "-0.8em")
          .attr("dy", "0.15em")
          .attr("transform", "rotate(-65)");
        svg.append("g").call(d3.axisLeft(y));
        const line = d3
          .line()
          .x((d) => x(d.Date))
          .y((d) => y(d.Close));
        svg
          .append("path")
          .datum(dataset)
          .attr("fill", "none")
          .attr("stroke", "blue")
          .attr("stroke-width", 2)
          .attr("d", line);
      }




}


export default FetchStockData;
