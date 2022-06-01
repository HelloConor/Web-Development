const cheerio = require('cheerio')

const request = require("request")

let unwomanlyprice = null;
function unwomanlyscrapper() {
    request("https://www.amazon.co.uk/Unwomanly-Face-War-Penguin-Classics/dp/0141983523", (error, Response, html) => {
        if(!error && Response.statusCode ==200){
            const $ = cheerio.load(html)
            unwomanlyprice = $(".a-row a-grid-vertical-align a-grid-center").children("a-size-base a-color-price offer-price a-text-normal").text
            console.log(unwomanlyprice)
        }
    }
}
unwomanlyscrapper()