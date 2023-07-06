async function fetchData(ticker, interval = "1month") {
    // const date = new Date();

    // let day = date.getDate();
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear();

    let startDate = "1985-01-01";
    let endDate = "2023-06-30";
    // let endDate = `${year}-0${month}-${day}`;
    // console.log(endDate)

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

    const url1 = `https://twelve-data1.p.rapidapi.com/time_series?&start_date=${startDate}&end_date=${endDate}&symbol=${ticker}&interval=${interval}&format=json`;
    const options1 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': "be2c5cf9d2mshdd2979e94314598p19c3dbjsnee3000224bd0",
            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
        }
    };

    const url2 = `https://twelve-data1.p.rapidapi.com/time_series?&start_date=${startDate}&end_date=${endDate}&symbol=${ticker}&interval=${interval}&format=json`; // fallback API URL
    const options2 = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': "da67ae36b6mshfed40a4fe258a74p18afdajsn4916c4fb8e2a",
            'X-RapidAPI-Host': 'twelve-data1.p.rapidapi.com'
        }
    };

    try {
        const response1 = await fetch(url1, options1);
        if (! response1.ok)
            throw new Error('API request failed');

        const result1 = await response1.json();

        const dataPoints = result1.values.map((value) => ({datetime: value.datetime, close: value.close}));

        return dataPoints;

    } catch (error1) {

        try {
            const response2 = await fetch(url2, options2);
            if (! response2.ok)
                throw new Error('Fallback API request failed');

            const result2 = await response2.json();

            const dataPoints2 = result2.values.map((value) => ({datetime: value.datetime, close: value.close}));

            return dataPoints2;

        } catch (error2) {
            console.error(error2);
            throw error2; // rethrow the error so the calling function knows something went wrong
        }
    }

}

export default fetchData;
