const http = require('http');
const PORT = 3018;


const server = http.createServer((req, res) => {
    // Set header means to tell browser what data are we sending, wheather its html or json or anything else.
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/user') {
        const user = {
            name: "Neel Raiyani",
            city: "Rajkot"
        }
        res.end(JSON.stringify(user));
    }
    else if (req.url === '/products') {
        const products = {
            id: 1, name: "Laptop", price: 50000,
            id: 2, name: "Mobile", price: 25000, 
        }
        res.end(JSON.stringify(products));
    }
    else{
        res.statusCode = 404;
        res.write('Error 404 - Page Not Found !!!');
        res.end();
    } 
});


server.listen(PORT,() => {
    console.log(`App runnning on ${PORT}`);
})