// async function fetchData(ticker, interval = "1month") {
    let startDate = "1985-01-01";
    let endDate = "2023-06-30";

    if (interval === "15min") {
      startDate = "2023-06-29";
      endDate = endDate;
    } else if (interval === "1min") {
      startDate = "2023-06-29";
      endDate = endDate;
    } else if (interval === "5min") {
      startDate = "2023-06-28";
      endDate = endDate;
    } else if (interval === "15min") {
      startDate = "2023-06-27";
      endDate = endDate;
    } else if (interval === "30min") {
      startDate = "2023-06-26";
      endDate = endDate;
    } else if (interval === "45min") {
      startDate = "2023-06-23";
      endDate = endDate;
    } else if (interval === "1h") {
      startDate = "2023-06-22";
      endDate = endDate;
    } else if (interval === "2h") {
      startDate = "2023-06-21";
      endDate = endDate;
    } else if (interval === "4h") {
      startDate = "2023-06-16";
      endDate = endDate;
    } else if (interval === "1day") {
      startDate = "2023-06-01";
      endDate = "2023-06-30";
    } else if (interval === "1week") {
      startDate = "2023-03-15";
      endDate = "2023-06-30";
    } else {
      interval = interval;
    }

    const url = `https://twelve-data1.p.rapidapi.com/time_series?&start_date=${startDate}&end_date=${endDate}&symbol=${ticker}&interval=${interval}&format=json`;
    const options = {
  	method: 'GET',
    headers: {
      //hid key in .env
      'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    //iterates over the value key in the response and returns just data and close
    const dataPoints = result.values.map((value) => ({
      datetime: value.datetime,
      close: value.close,
    }));

    return dataPoints;
  } catch (error) {
    console.error(error);
  }
}

export default fetchData;
