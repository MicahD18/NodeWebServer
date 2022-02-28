const fs = require('fs');
const http = require('http');
const url = require('url');

const replaceTemplate = require('./modules/replaceTemplate');

// read HTML files
const tempMain = fs.readFileSync(`${__dirname}/content/main.html`, 'utf-8');
const tempCountry = fs.readFileSync(`${__dirname}/content/country.html`, 'utf-8');
const tempInfo = fs.readFileSync(`${__dirname}/content/info.html`, 'utf-8');

// read JSON
const data = fs.readFileSync(`${__dirname}/data/data.json`, 'utf-8');

const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {

    const { pathname, query } = url.parse(req.url, true);

    if (pathname == "/" || pathname == "/overview") {
        res.writeHead(200, {'Content-type' : 'text/html'});

        const cardsHtml = dataObj.map(el => replaceTemplate(tempCountry, el)).join('');
        const output = tempMain.replace('{%COUNTRY_CARDS%}', cardsHtml);
        res.end(output);
    } else if (pathname == "/product") {
        res.writeHead(200, { 'Content-type': 'text/html' });
        const country = dataObj[query.id]; 
        const output = replaceTemplate(tempInfo, country);

        res.end(output);
    } else {
        res.writeHead(404, {'Content-type' : 'text/html', 'my-own-header' : 'hello-world'});
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(4000, '127.0.0.1', () => {
    console.log("Listening to requests on port 4000");
})