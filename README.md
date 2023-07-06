# My_Bloomberg_Lite

## Description/Background

The Bloomberg_Lite is a a combination of a website like yahoo finance stock search with some colors and styling that a bloomberg terminal has. It would allow the user to enter a ticker and get a graph showing reddit posts from the internet. This would allow users to explore key factors and important ratios that can influence their buying and selling decisions. It would also have very similar styling to how the actual bloomberg terminals look like.

### Motivation

The main motivators for this project is my finance background, I read about company statistics daily and try to keep up with current market trends. I also wanted to explore the complexity of creating a "simple" line graph showing stock prices. I came to realized there is a lot of moving pieces and granularity involved in this process. But its something I enjoyed doing, I learned a lot about using `d3.js` and started liking it because you can change everything about your graph.

## Sample display

![Demo Gif](assets/Screen%20Recording%202023-07-06%20at%2011.15.04%20AM.gif)

## Try it out yourself here! <a href='https://j-corp-25.github.io/My_Bloomberg_Lite/'> My_Bloomberg_Lite </a>
## Wireframe

### Below is the wireframe for the project

![ProjectWireframe](/My_Bloomberg/assets/new_frame.png)



## Functionality, MVPs and Interesting Code construction

### Code Snip to create graph using `d3.js`

```js
//credit to d3.js developers for the template below which I used to create and populate my chart
//https://d3js.org/getting-started#try-d3-online
function createChart(data,selector){
    //Define the chart date format
    //Format will look like "2016-01-01" on the x-axis
    let dateFormat = d3.timeFormat("%Y-%M-%D");

    //Define the chart size and margins
    //This will be the size of the chart inside the svg tag in the html
    const width = 900;
    const height = 500;
    const marginTop = 40;
    const marginRight = 25;
    const marginBottom = 30;
    const marginLeft = 40;

    //This switches the time format to accommodate the smaller intervals on the x-axis when we fetch time data from API
    data.forEach((d) => {
        if (d.datetime.includes(" ")) {
            d.datetime = d3.timeParse("%Y-%m-%d %H:%M:%S")(d.datetime);
            dateFormat = d3.timeFormat("%I:%M:%S %p");
        } else {
            d.datetime = d3.timeParse("%Y-%m-%d")(d.datetime);
            dateFormat = d3.timeFormat("%Y-%m-%d");
        }
        //This turns the close: "45.99" into a number we can manipulate which makes it more dynamic
        d.close = parseFloat(d.close);
    });

    //We are making sure axis stay within the svg width x height and the line starts from the lowest to highest close
    const xScale = d3
    .scaleUtc()
    .domain(d3.extent(data, (d) => d.datetime))
    .range([marginLeft, width - marginRight]);

    const yScale = d3
    .scaleLinear()
    .domain(d3.extent(data, (d) => d.close))
    .range([height - marginBottom, marginTop]); //we reverse where the pixels start here from top left to bottom left

    //This grabs the x-axis line and the y-axis line and creates ticks based on the domain and range above
    const xAxis = d3.axisBottom(xScale).tickFormat(dateFormat);
    const yAxis = d3.axisLeft(yScale)

    //this will add/create gridline to the chart like any normal chart
    const xGridline = d3.axisBottom(xScale).tickSize(-height + marginTop + marginBottom).tickFormat("");
    const yGridline = d3.axisLeft(yScale).tickSize(-width + marginLeft + marginRight).tickFormat("");

    //This will clear anything existing in svg, making it look like we are updating the chart but we are actually
    //erasing everything
    d3
    .select(selector)
    .selectAll("*").
    remove();

    //This selects the container that has the svg and changes its height and width. You can also just create a new container
    //but this is the way I started mine since my svg is already in my html
    const svg = d3
    .select(selector)
    .attr("width", width)
    .attr("height", height)

    //like before, anything we create we need to append to the "group" which is g from x and y gridline above
    svg.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .style("stroke-dasharray",("3,3"))
    .call(xGridline);

    svg.append("g")
    .attr("class", "grid")
    .attr("transform", `translate(${marginLeft},0)`)
    .style("stroke-dasharray",("3,3"))
    .call(yGridline);
    // In d3 we have to append everything we create because just because we create something doesn't mean its
    //"implicitly" added so we add(append) the axis we created earlier inside the chart container by using "g"
    //which "groups" them together
    svg.append("g")
    .attr("transform", `translate(0,${height - marginBottom})`)
    .call(xAxis);


    svg.append("g")
    .attr("transform", `translate(${marginLeft},0)`)
    .call(yAxis);

    //We need to create a line that will eventually follow a path
    const line = d3
    .line()
    .x((d) => xScale(d.datetime))
    .y((d) => yScale(d.close));

    //This will be the path that the line will "follow" we can customize color,fill, and many other things using ".attr"
    svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("d", line);


    svg.selectAll(".dot")
    .data(data)
    .enter().append("circle")
    .attr("class", "dot") // Assign a class for styling
    .attr("cx", function(d, i) { return xScale(d.datetime) })
    .attr("cy", function(d, i) { return yScale(d.close) })
    .attr("r", 5) // Radius size, could be adjusted
    .attr('fill', function (d, i) {
        return dateFormat(d.datetime) // If dateFormat function returns color code
    })
    .style("opacity", 0) // Start invisible
    .on('mouseover', function (d, i) {
        d3.select(this).transition()
            .duration('50')
            .style('fill', 'white')
            .style('opacity', '.85')
            ; // Make visible on mouseover
    })
    .on('mouseout', function (d, i) {
        d3.select(this).transition()
        .duration('50')
        .style('opacity', '0'); // Revert to invisible after mouseout
    });


}


//This function will generate a new chart and delete the old one passing in the data from the fetch and the chart class which is assigned to my svg. I could have selected the svg from the start but this is how I did it
function generateNewChart(data) {
    createChart(data, "#chart");
}

export { createChart, generateNewChart };
```
This is showing how much comlexity is needed just to create and update a simple line graph which is the awesome thing about `d3.js`

----------------------------------------------------------------

In MyBloomberg Lite, users will be able to:

- Search for stocks and view detailed information about each stock.
- Display real-time stock prices and historical price charts.
- Compare multiple stocks and analyze their performance side by side.
- Have the option to filter the graph of the stock price
- Be able to hover over the graph of the stock price and see the extra details of the stock price.


In addition, this project will include:

- A README with instructions showing how to use this project
- If I have time would like to add news articles and reddit posts from the internet relating the ticker/comapny
- I would also like to add sector information and provide daily information about the sector performance

Technologies, Libraries, APIs:
We plan to use the following technologies, libraries, and APIs:

- D3.js for creating interactive and visually appealing stock price charts.
- Alpha Vantage API for retrieving real-time and historical stock data.
- As a backup I will be using Realtime Stock Data API
- If I have the time would like to  use reddit API and News API

Implementation Timeline:

Thursday:

- Set up the project structure and implement basic layout and navigation.
- Try to create initial rendering of stock graph.

Friday:

- Add filtering functions for the graph of the stock price

Saturday:

- Integrate Alpha Vantage API or Realtime Stock Data to fetch real-time stock data.

Sunday:

- Display stock information and basic charts for a single stock.

Monday:

- Finish basic components and start polishing with html content and css

Tuesday:

- Add reddit API to show posts from the internet that the user can click on to

Wednesday:

- Polish more features and maybe add some animation to the gragh as it loads

Thursday:

- Present Project


## Future Implementation
- Add a news article section show trending articles about the stock
- Revamp the styling to make the website more responsive and user friendly
- Add ratios or more information that the user can see about the stock performance and financials

## Credit and sources
- Used this in my css reset https://www.joshwcomeau.com/css/custom-css-reset/
- Used this layout for my line graph https://d3js.org/getting-started#try-d3-online
- Used this video to have a basic idea how modals work https://www.youtube.com/watch?v=AF6vGYIyV8M&t=72s
- My Api boilerplates came from this amazing website  https://rapidapi.com/hub
- Used this awesome website for ideas and templates for basic css https://www.w3schools.com/css/default.asp
