import FetchStockData from "./fetch_stock_data"

class CreateVisualsChart {
  constructor(ele,data) {
    this.ele = ele;
    this.data = data;

   this.createChart(this.data);
    // this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>";
    // this.handleClick = this.handleClick.bind(this);

    // this.ele.addEventListener("click", this.handleClick);
  }
  createChart(data) {
        const dataset = data.organizedData;
        const margin = { top: 50, right: 20, bottom: 60, left: 50 };
        const width = 800 - margin.left - margin.right;
        const height = 400 - margin.top - margin.bottom;
        const x = d3.scaleTime().range([0, width]);
        const y = d3.scaleLinear().range([height, 0]);
        const svg = d3
          .select("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", `translate(${margin.left},${margin.top})`);
        x.domain(d3.extent(dataset, (d) => d.Date));
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

  // createChart() {
  //   const dataset = this.data.organizedData

  //   const margin = { top: 20, right: 20, bottom: 40, left: 20 };
  //   const width = 1000 - margin.left - margin.right;
  //   const height = 650 - margin.top - margin.bottom;
  //   const x = d3.scaleTime().range([0, width]);
  //   const y = d3.scaleLinear().range([height, 0]);
  //   const svg = d3
  //   .select(".chart-main")
  //   .append("svg")
  //   .attr("width", width + margin.left + margin.right)
  //   .attr("height", height + margin.top + margin.bottom)
  //   .append("g")
  //   .attr("transform", `translate(${margin.left},${margin.top})`);

  //   x.domain(d3.extent(dataset, (d) => d.Date));
  //   y.domain([0, d3.max(dataset, (d) => d.Close)]);

  //   svg
  //   .append("g")
  //   .attr("transform", `translate(0,${height})`)
  //   .call(
  //     d3.axisBottom(x).ticks(d3.timeMonth.every(1)).tickFormat(d3.timeFormat("%b %d, %Y"))
  //   );

  //   svg.append("g").call(d3.axisLeft(y));

  //   const line = d3
  //   .line()
  //   .x((d) => x(d.Date))
  //   .y((d) => y(d.Close));

  //   svg
  //   .append("path")
  //   .datum(dataset)
  //   .attr("fill", "none")
  //   .attr("stroke", "blue")
  //   .attr("stroke-width", 2)
  //   .attr("d", line);
  //  }

}


export default CreateVisualsChart;
      // createChart() {
        //     const dataset = this.data.organizedData
        //     const margin = {top: 20, right: 20, bottom:40, left:20 };
    //     const width = 1600 - margin.left - margin.right;
    //     const height = 800 - margin.top - margin.bottom;
    //     const x = d3.scaleTime()
    //         .range([0, width]);
    //     const y = d3.scale.Linear()
    //         .range([height, 0]);
    //     const svg = d3.select(".chart-main")
    //         .append("svg").attr("width", width + margin.left + margin.right)
    //                       .attr("height", height + margin.top + margin.bottom)
    //         .append("g").attr("transform", `translate(${margin.left},${margin.top})`);
    //     x.domain(d3.extent(dataset,d => d.date));
    //     y.domain([0, d3.max(dataset, d => d.value)]);
    //     svg.append("g")
    //             .attr("transform", `translate(0,${height})`)
    //             .call(d3.axisBottom(x)
    //                 .ticks(d3.timeMonth.every(1))
    //                 .tickFormat(d3.timeMonth.format("MMM D, YYYY")));
    //     svg.append("g")
    //         .call(d3.axisLeft(y));
    //     const line = d3.line()
    //         .x(d => x(d.date))
    //         .y(d => y(d.value));
    //     svg.append("path")
    //         .datum(dataset)
    //         .attr("fill","none ")
    //         .attr("stroke","none")
    //         .attr("stroke-width", 2)
    //         .attr("stroke-opacity",6)
    //         .attr("stroke-linecap", "round")
    //         .attr("stroke-linejoin", "round")
    //         .attr("d", line);
    // }
    // createChart() {
    //     const dataset = this.data.organizedData
    //     const margin = { top: 20, right: 20, bottom: 40, left: 20 };
    //     const width = 1600 - margin.left - margin.right;
    //     const height = 800 - margin.top - margin.bottom;
    //     const x = d3.scaleTime().range([0, width]);
    //     const y = d3.scaleLinear().range([height, 0]);
    //     const svg = d3
    //         .select(".chart-main")
    //         .append("svg")
    //         .attr("width", width + margin.left + margin.right)
    //         .attr("height", height + margin.top + margin.bottom)
    //         .append("g")
    //         .attr("transform", `translate(${margin.left},${margin.top})`);
    //     x.domain(d3.extent(dataset, (d) => d.date));
    //     y.domain([0, d3.max(dataset, (d) => d.value)]);
    //     svg
    //         .append("g")
    //         .attr("transform", `translate(0,${height})`)
    //         .call(
    //             d3.axisBottom(x)
    //                 .ticks(d3.timeMonth.every(1))
    //                 .tickFormat(d3.timeFormat("%b %d, %Y"))
    //         );
    //     svg.append("g").call(d3.axisLeft(y));
    //     const line = d3
    //         .line()
    //         .x((d) => x(d.date))
    //         .y((d) => y(d.value));
    //     svg
    //         .append("path")
    //         .datum(dataset)
    //         .attr("fill", "none")
    //         .attr("stroke", "none")
    //         .attr("stroke-width", 2)
    //         .attr("stroke-opacity", 6)
    //         .attr("stroke-linecap", "round")
    //         .attr("stroke-linejoin", "round")
    //         .attr("d", line);
    // }

    // createChart() {
    //     const dataset = this.data.organizedData // Make sure the dataset is accessible within the scope
    //     const margin = { top: 20, right: 20, bottom: 40, left: 20 };
    //     const width = 1600 - margin.left - margin.right;
    //     const height = 800 - margin.top - margin.bottom;
    //     const x = d3.scaleTime().range([0, width]); // Fix function name to scaleTime
    //     const y = d3.scaleLinear().range([height, 0]); // Fix function name to scaleLinear
    //     const svg = d3
    //       .select(".chart-main")
    //       .append("svg")
    //       .attr("width", width + margin.left + margin.right)
    //       .attr("height", height + margin.top + margin.bottom)
    //       .append("g")
    //       .attr("transform", `translate(${margin.left},${margin.top})`);
    //     x.domain(d3.extent(dataset, (d) => d.Date));
    //     y.domain([0, d3.max(dataset, (d) => d.Close)]);
    //     svg
    //       .append("g")
    //       .attr("transform", `translate(0,${height})`)
    //       .call(
    //         d3.axisBottom(x)
    //           .ticks(d3.timeMonth.every(1))
    //           .tickFormat(d3.timeFormat("%b %d")) // Use timeFormat to format tick labels
    //       );
    //     svg.append("g").call(d3.axisLeft(y));
    //     const line = d3
    //       .line()
    //       .x((d) => x(d.Date))
    //       .y((d) => y(d.Close));
    //     svg
    //       .append("path")
    //       .datum(dataset)
    //       .attr("fill", "none")
    //       .attr("stroke", "blue") // Set stroke color for the line
    //       .attr("stroke-width", 2)
    //       .attr("d", line);
    //   }

    // createChart() {
    //     const dataset = this.data.organizedData;
    //     const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    //     const width = 1600 - (margin.left - margin.right);
    //     const height = 800 - (margin.top - margin.bottom);
    //     const x = d3.scaleTime().range([0, width]);
    //     const y = d3.scaleLinear().range([height, 0]);
    //     const svg = d3
    //       .select(".chart-main")
    //       .append("svg")
    //       .attr("width", width + margin.left + margin.right)
    //       .attr("height", height + margin.top + margin.bottom)
    //       .append("g")
    //       .attr("transform", `translate(${margin.left},${margin.top})`);
    //     x.domain(d3.extent(dataset, (d) => d.Date));
    //     y.domain([0, d3.max(dataset, (d) => d.Close)]);
    //     svg
    //       .append("g")
    //       .attr("transform", `translate(0,${height})`)
    //       .call(
    //         d3.axisBottom(x)
    //           .ticks(d3.timeMonth.every(1))
    //           .tickFormat(d3.timeFormat("%a %d")) // Format the tick labels
    //       );
    //     svg.append("g").call(d3.axisLeft(y));
    //     const line = d3
    //       .line()
    //       .x((d) => x(d.Date))
    //       .y((d) => y(d.Close));
    //     svg
    //       .append("path")
    //       .datum(dataset)
    //       .attr("fill", "none")
    //       .attr("stroke", "blue")
    //       .attr("stroke-width", 2)
    //       .attr("d", line);
    //   }

    // createChart() {

    //     const dataset = this.data.organizedData;
    //     const margin = { top: 20, right: 20, bottom: 60, left: 40 };
    //     const width = 800 - margin.left - margin.right;
    //     const height = 400 - margin.top - margin.bottom;
    //     const x = d3.scaleTime().range([0, width]);
    //     const y = d3.scaleLinear().range([height, 0]);
    //     const svg = d3
    //       .select(".chart-main")
    //       .attr("width", width + margin.left + margin.right)
    //       .attr("height", height + margin.top + margin.bottom)
    //       .append("g")
    //       .attr("transform", `translate(${margin.left},${margin.top})`);

    //     // Calculate the minimum and maximum dates
    //     const minDate = d3.min(dataset, (d) => d.Date);
    //     const maxDate = d3.max(dataset, (d) => d.Date);

    //     x.domain([minDate, maxDate]);
    //     y.domain([0, d3.max(dataset, (d) => d.Close)]);
    //     svg
    //       .append("g")
    //       .attr("transform", `translate(0, ${height})`)
    //       .call(d3.axisBottom(x)
    //         .ticks(d3.timeMonth.every(1))
    //         .tickFormat(d3.timeFormat("%b %d, %Y")))
    //       .selectAll("text")
    //       .style("text-anchor", "end")
    //       .attr("dx", "-0.8em")
    //       .attr("dy", "0.15em")
    //       .attr("transform", "rotate(-65)");
    //     svg.append("g").call(d3.axisLeft(y));
    //     const line = d3
    //       .line()
    //       .x((d) => x(d.Date))
    //       .y((d) => y(d.Close));
    //     svg
    //       .append("path")
    //       .datum(dataset)
    //       .attr("fill", "none")
    //       .attr("stroke", "blue")
    //       .attr("stroke-width", 2)
    //       .attr("d", line);
    //   }














//     // Declare the chart dimensions and margins.

//     // Declare the x (horizontal position) scale.
//     const x = d3.scaleUtc()
//         .domain([new Date("2023-01-01"), new Date("2024-01-01")])
//         .range([marginLeft, width - marginRight]);

//     // Declare the y (vertical position) scale.
//     const y = d3.scaleLinear()
//         .domain([0, 100])
//         .range([height - marginBottom, marginTop]);

//     // Create the SVG container.
//     const svg = d3.create("svg")
//         .attr("width", width)
//         .attr("height", height);

//     // Add the x-axis.
//     svg.append("g")
//         .attr("transform", `translate(0,${height - marginBottom})`)
//         .call(d3.axisBottom(x));

//     // Add the y-axis.
//     svg.append("g")
//         .attr("transform", `translate(${marginLeft},0)`)
//         .call(d3.axisLeft(y));

//     // Return the SVG element.
//     return svg.node();
//   }
