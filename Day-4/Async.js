// Callback
function fetchData(Callback){
    console.log("fetching data...please wait");

    setTimeout(() => {
        const data = {id: 1, name: "Virat Kohli"};
        Callback(null, data);
    },3000)
}

fetchData((error, result) => {
    if(error){
        console.log("Errorrrr!!!!", error);
    }
    else{
        console.log("Data received: ", result);
    }
}); 

// Promises
function fetchDataPromise(){

return new Promise((resolve, reject) => 
    {
        console.log("Fetching data...please wait");
            
        setTimeout(() => {
            const success = true;
            if(success){
                const data = {id: 1, name: "Virat Kohli"};
                resolve(data);
            }
            else{
                reject("Failed to fetch data");
            }
        }, 3000)
    });
}

fetchDataPromise()
.then((result) => {
    console.log("Data Received: " ,result);
})
.catch((error) => {
    console.log("Errorrrrr!!!!! ", error);
}); 

// Async/await - to perform asynchronous tasks in synchronous way
function fetchDataPromise(){

return new Promise((resolve, reject) => 
    {
        console.log("Fetching data...please wait");
            
        setTimeout(() => {
            const success = true;
            if(success){
                const data = {id: 1, name: "Virat Kohli"};
                resolve(data);
            }
            else{
                reject("Failed to fetch data");
            }
        }, 3000)
    });
}

async function getData(){
    try {
        const result = await fetchDataPromise();
        console.log("Data received: ", result);
    } catch (error) {
        console.log("Errorrrr!!!!! ", error);
    }
}

getData();