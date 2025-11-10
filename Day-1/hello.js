// Hello World script
// console.log("Hello World");

// console.log(__dirname);
// console.log(__filename);

// console.log("Process ID: ", process.pid);
// console.log("Process Info: ", process.argv);
// console.log("Node JS version: ", process.version);

// setTimeout(() => {
//     console.log("This runs after 3 seconds...");
// },3000);

// setInterval(() => {
//     console.log("This runs after every 1 second...");
// }, 1000);

const myURL = new URL('https://www.google.com/?name=neel');
console.log(myURL.searchParams.get('name'));  
myURL.searchParams.append('lastname', 'Raiyani');
console.log(myURL.href);