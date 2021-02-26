// 01 what is asynchronous JS
// definition- controls how tasks that take time are perfomred
//code that can start now and finish later
//synchronous runs a statement at a time
//creates request, does collecting outside then call back when data arrives

// 02 async in action

console.log(1)
console.log(4)
// does not block code, fires after 2 secs pass
setTimeout(() => {
  console.log('callback has been fired')  
}, 2000);
console.log(1)
console.log(6)

// 03 http requests

// getting data from another server with http request
// api endpoints like url used to get data

// 04 creatin http requst
const request = new XMLHttpRequest();
// first argument is type of request second is where we want request from
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/' );
// send request
request.send();
//tracking progress
request.addEventListener('readystatechange', () => {
    // the state the request is in
console.log(request, request.readyState)
if(request.readyState === 4 && request.status === 200){
    console.log(request.responseText);
} else if(request.readyState === 4){
    console.log('could not reach data')
}
})

// 05 callback function

const getTodos = () => {
    const request = new XMLHttpRequest();
// first argument is type of request second is where we want request from
request.open('GET', 'https://jsonplaceholder.typicode.com/todos/' );
// send request
request.send();
//tracking progress
request.addEventListener('readystatechange', () => {
    // the state the request is in
console.log(request, request.readyState)
if(request.readyState === 4 && request.status === 200){
    callback(undefined, request.responseText);
} else if(request.readyState === 4){
    callback('could not find data', undefined);
}
})
}

console.log(1)

console.log(1)


getTodos((err, data) => {
console.log('callback fired')
if(err){
    console.log(err)
} else {
    console.log(data)
}
});
console.log(1)
console.log(2)
console.log(3)


// 06 JSON Data

// a string that appear like js objects



request.addEventListener('readystatechange', () => {
console.log(request, request.readyState)
if(request.readyState === 4 && request.status === 200){
    const data = JSON.parse(request.responseText)
    callback(undefined, );
} else if(request.readyState === 4){
    callback('could not find data', undefined);
}
})



request.open('GET', 'todos.JSON')
request.send();


// 07 call back hell


const getTodos = (resource, callback)
request.open('GET', resource)

getTodos('todos/luigi.json', (err, data) => {
    console.log(data);
    getTodos('todos/mario.json', (err, data) => {
        console.log(data)
        getTodos('todos/shaun.json', (err, data) => {
            console.log(data)
        })
    })
})


// 08 promise basics
//promise eEX
const getSomething = () => {


    return new Promise((resolve, reject) => {
        //fetch something
        resolve('some data')
        reject('an error')
    });
}

// succes
return new Promise((resolve, reject) => {
    //fetch something
    resolve('some data')
    // reject('an error')
});

getSomething().then(() => {
    console.log(data)
});
// failuer

return new Promise((resolve, reject) => {
    //fetch something
    // resolve('some data')
    reject('an error')
});
getSomething().then(() => {
    console.log(data)

}, (err) => {
console.log(err);
});

//example with actual code

// const getTodos = () => {
//     // promise code
//     return new Promise((resolve, reject) => {
//         request.addEventListener('readystatechange', () => {
//             console.log(request, request.readyState)
//             if(request.readyState === 4 && request.status === 200){
//                 resolve(date);
//             } else if  (request.readyState === 4){
//                 callback('could not find data', undefined);
//                 reject('error')
//             }
//             });
        
          

getTodos('todos/juigi.json').then((data) => {
console.log('promise reovled:' , data);
}).catch((ERR) => {
    console.log('PROMISE REJECTED:', err)
})

// 09 chaining promises


getTodos('todos/juigi.json').then((data) => {
    console.log('promise 1 reovled:' , data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('promise 2:', data);
    return getTodos('todos/shaun.json');
}).then(data => {
    console.log(' promise 3 resolved:', data)
})
.catch((ERR) => {
        console.log('PROMISE REJECTED:', err)
    })


    // 10 Fetch API
// ednpoint is the argument
fetch('todos/lugi.json').then((responseText) => {
console.log('recsolved', response)
return response.json();
}).then(data => {
    console.log(data)
}).catch((err) => {
console.log('rejected', err)
})


// 11 asynch and await
// helps with large amounts of callbacks and promises
// alwasy retrun a promise
// await stops js until promise is found and then assigns that to the variable
const getTodos = async() => {
const reponse = await fetch('todos/luigi.json');
const data = await response.json();
return data;
};
getTodos().then(data => {
    console.log('resolved:', data)
}).catch

// 12  throwing and catching errors

const getTodos = async() => {
    const reponse = await fetch('todos/luigi.json');
    const data = await response.json();
    return data;
    };
    getTodos().then(data => {
        console.log('resolved:', data)
        //cathing error
    }).catch(err => {
        console.log('rejected:', err.message   ) })


