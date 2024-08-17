// // 1st lecture
// function hello(){
//     console.log("inside hello fnx")
//     console.log("hello");
// }

// function demo() {
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo fnx");
// demo();
// console.log("done bye!");

// // 2nd lecture
// function one(){
//     return 1;
// }

// function two(){
//     return one() + one();
// }

// function three(){
//     let ans = two() + one();
//     console.log(ans);
// }

// three();


// // 3rd lecture
// // javascript is single threded language
// // synchronus nature = js

// let a = 25;
// console.log(a);
// let b = 10;
// console.log(b);
// console.log(a+b);
// // things happen one by one


// // if js is singlethreded how it does this ??? 
// // ye kam browser krwa rha h , browser wait bhi kr skta h dusre kam bhi kr skta h toj js ye kam borwser ko hi de deta h
// // yaha asynchronus nature show ho rha h
// setTimeout(() => {
//     console.log("apna college");
// }, 2000);
// setTimeout(() => {
//     console.log("hello");
// }, 2000);

// console.log("hello...");


// callback hell ---callback nesting
// cause of asynchronus nature


// // 1 tarike se
// h1 = document.querySelector("h1");
// setTimeout(() =>{
//     h1.style.color = "red"
// },1000);

// setTimeout(() =>{
//     h1.style.color = "orange"
// },2000);

// setTimeout(() =>{
//     h1.style.color = "green"
// },3000);


// // 2nd tarike se
// h2 = document.querySelector("h2");

// function changeColor(color, delay){
//     setTimeout(() =>{
//         h2.style.color = color;
//     }, delay);
//     h2.style.color = color;
// }

// changeColor("red", 1000);
// changeColor("orange", 2000);
// changeColor("green", 3000);


// // 3rd tarike se
// // callback hell ---> callback nesting

// h3 = document.querySelector("h3");

// function changeColor(color, delay, nextColorChange){
//     setTimeout(() =>{
//         h3.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red",1000, () => {
//     changeColor("orange",1000, () => {
//         changeColor("green",1000,() =>{
//             changeColor("yellow",1000);
//         });
//     });
// });


// 6th lecture -- setting up promises
// to solve the callback hell problem
// the promise object represents the eventual completion (or failure) of an asynchronus operation and its resulting value.

// // 1.
// function saveToDb(data){
//     let interNateSpeed = Math.floor(Math.random()*10)+1;
//     if(interNateSpeed>4){
//         console.log("your data was saved : ",data);
//     }else{
//         console.log("weak connection. data was not saved");
//     }
// }

// saveToDb("apna college");

// // 2.
// function saveToDb(data, success, failure){
//     let interNateSpeed = Math.floor(Math.random()*10)+1;
//     if(interNateSpeed>4){
//         success();
//     }else{
//         failure();
//     }
// }


// // this is really a callback hell
// saveToDb(
//     "apna college",
//     () => {
//         console.log("SUCCESS: your data was saved :");
//         saveToDb(
//             "hello world",
//             () => {
//                 console.log("success2: data2 saved");
//                 saveToDb(
//                     "shradha",
//                     () => {
//                         console.log("sucesss3: data3 saved");
//                     },
//                     () => {
//                         console.log("failure: weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure3: weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("failure2: weak connection");
//     },

//     () => {
//         console.log("FAILURE: weak connection. data not saved");
//     }
// );



// 7th lecture
// ab just upr wali problem(callback hell) ko promises krne ki try krenge


// // 1.
// function saveToDb(data){
//     return new Promise((resolve, reject) => {
//         let interNateSpeed = Math.floor(Math.random()*10)+1;
//         if(interNateSpeed>4){
//             resolve("success : data was saved");
//         }else{
//             reject("failure : weak connection");
//         }
//     });
// }
// saveToDb("apna college");


// // 1. methode 1
// let request = saveToDb("apna college"); //req = prmise object
// request
//     .then(() =>{
//         console.log("promise was resolved");
//         console.log(request);
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//         console.log(request);
//     });


// // 2. methode 2
// saveToDb("apna college")
//     .then(() =>{
//         console.log("promise was resolved");
//         console.log(request);
//     })
//     .catch(() => {
//         console.log("promise was rejected");
//         console.log(request);
//     });


// // promise chaining -- using multiple then
// // 3. methode 3
// saveToDb("apna college")
// .then(() => {
//     console.log("data1 saved");
//     return saveToDb("hello world");
// })

// .then(() => {
//     console.log("data2 saved");
// })

// .then(() => {
//     console.log("data3 saved");
// })

// .catch(() => {
//     console.log("promise was rejected");
// });


// // lecture --
// // promises
// // promises are rejected and resolved with some data (valid results or errors)

// saveToDBPromise("apna college")
// .then((result) =>{
//     console.log("result :", result);
//     console.log("promise1 resolved");
//     return saveToDBPromise("prmise2 resolved")
// })
// .then((result) => {
//     console.log("result : ", result);
//     console.log("promise2 resolved");
// })
// .catch((error) =>{
//     console.log("error : ", error);
//     console.log("some promise rejected");
// });



// lecture --
// colorchange heading wala with promise

h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            h1.style.color = color;
            resolve("color changed");
        }, delay);
    });
}

changeColor("red", 1000)
.then(()=> {
    console.log("red color was complete");
    return changeColor("orange",1000);
})

.then(()=>{
    console.log("green color was completed");
    return changeColor("blue", 1000);
})
.then(()=>{
    console.log("orange color was completed");
    return changeColor("green",1000);
})

.then(()=>{
    console.log("orange color was completed");
    return changeColor("pink",1000);
})
.then(()=>{
    console.log("orange color was completed");
});

