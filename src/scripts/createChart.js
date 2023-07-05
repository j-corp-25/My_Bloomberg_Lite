//credit to d3.js developers for the template below which I used to create and populate my chart
//https://d3js.org/getting-started#try-d3-online
function createChart(data,selector){
    //Define the chart date format
    //Format will look like "2016-01-01" on the x-axis
    let dateFormat = d3.timeFormat("%Y-%M-%D");

    //Define the chart size and margins
    //This will be the size of the chart inside the svg tag in the html
    const width = 875;
    const height = 400;
    const marginTop = 20;
    const marginRight = 20;
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
}

//this function will generate a new chart and delete the old one passing in the data from the fetch and the chart class which is assigned to my svg. I could have selected the svg from the start but this is how I did it
function generateNewChart(data) {
    createChart(data, "#chart");
}

export { createChart, generateNewChart };
