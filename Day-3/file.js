const fs = require('fs');

// Sync write file
fs.writeFileSync("./test.txt","Hello World!!! My name is Neel Raiyani.");

// Async write file
fs.writeFile("./test.txt","Hello world",(err) => {
    if(err){
        console.log("Error!!!!")
    }
    else{
        console.log("Success.")
    }
});

//Sync read file
console.log(fs.readFileSync("./test.txt", "utf-8"));

fs.readFile("./test.txt", "utf-8", (err, data) => {
    if(err){
        console.log("Errorrrr!!!");
    }
    else{
        console.log(data);
    }
});

// Sync append file
fs.appendFileSync("./test.txt","Append file (sync) - add content to the existing file \n");

// Async append file
fs.appendFile('./test.txt',"Appended file asynchronously...\n", (err) => {
    if(err){
        console.log("Errorrrr!!!");
    }
    else{
        console.log("Appended successfully.")
    }
})

// Sync copy file
fs.cpSync("./test.txt", "./copied-test.txt");

// Async copy file
fs.cp("./test.txt", "./copied-test1.txt", (err) => {
    if(err){
        console.log("Errorrrr!!!");
    }
    else{
        console.log("Copied successfully.")
    }
})

// // Delete file
fs.unlinkSync("./copied-test.txt");

// Create directory
fs.mkdirSync("./my-docs");

// Remove directory
fs.rmdirSync("./my-docs");