import FetchStockData from "./fetch_stock_data";

class CreateVisuals {
    constructor(ele) {
        this.ele = ele;
        // this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>";
        // this.handleClick = this.handleClick.bind(this);

        // this.ele.addEventListener("click", this.handleClick);

        this.createChart();

    }

}


    createChart(); {
        const margin = {top: 20, right: 20, bottom:40, left:20 };
        const width = 1600 - margin.left - margin.right;
        const height = 800 - margin.top - margin.bottom;
        const x = d3.scaletime()
            .range([0, width]);
        const y = d3.scale.linear()
            .range([height, 0]);
        const svg = d3.select(".chart-main")
            .append("svg").attr("width", width + margin.left + margin.right)
                          .attr("height", height + margin.top + margin.bottom)
            .append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    }




{
    // Declare the chart dimensions and margins.

    // Declare the x (horizontal position) scale.
    const x = d3.scaleUtc()
        .domain([new Date("2023-01-01"), new Date("2024-01-01")])
        .range([marginLeft, width - marginRight]);

    // Declare the y (vertical position) scale.
    const y = d3.scaleLinear()
        .domain([0, 100])
        .range([height - marginBottom, marginTop]);

    // Create the SVG container.
    const svg = d3.create("svg")
        .attr("width", width)
        .attr("height", height);

    // Add the x-axis.
    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(x));

    // Add the y-axis.
    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(y));

    // Return the SVG element.
    return svg.node();
  }


export default create
