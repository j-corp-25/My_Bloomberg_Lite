class Example {
    constructor(ele) {
        this.ele = ele
        this.ele.innerHTML = "<h1>It's ALIVE!!!</h1>"
        this.handleClick = this.handleClick.bind(this);


        this.ele.addEventListener("click", this.handleClick);
        console.log(this.getData());

    }
    handleClick() {
        this.ele.children[0].innerText = "Ouch!"
    }

    async getData() {
    const url = 'https://bb-finance.p.rapidapi.com/market/get-price-chart?id=googl%3Aus&interval=y5';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'be2c5cf9d2mshdd2979e94314598p19c3dbjsnee3000224bd0',
                'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com'
            }
        };
        let array = []

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);
            array = array.concat(result)
            console.log(array)

        } catch (error) {
            console.error(error);
        }


    }











}

export default Example;
