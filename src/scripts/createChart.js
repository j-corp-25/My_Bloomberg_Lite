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
            formatDate = d3.timeFormat("%I:%M:%S %p");
        } else {
            d.datetime = d3.timeParse("%Y-%m-%d")(d.datetime);
            formatDate = d3.timeFormat("%Y-%m-%d");
        }
        //This turns the close: "45.99" into a number we can manipulate which makes it more dynamic
        d.close = parseFloat(d.close);
    });

    //We are making sure axis stay within the svg width x height and the line starts from the lowest to highest close
    const xScale = d3
    .scaleUtc()
    .domain(d3.extent(data, (d) => d.datetime))
    .range([marginLeft, width - marginRight]);

}
export default createChart
