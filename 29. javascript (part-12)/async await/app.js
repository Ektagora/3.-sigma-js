// asyn await -- part 1.


    // arrow fnx ko bhi async bna skte h
    // let hello = async() => {}; //return a promise
    //  throw "some random error"; //ye some random error throw krta h

async function greet(){
    throw "weak connection";
    return "hello world";  //return a promise
}
greet()
    .then((result) =>{
        console.log("promise was resolved");
        console.log("result was : ",result);
    })

    .catch((err) =>{
        console.log("promise was rejected with error",err);
    });

let demo = async() =>{
    return 5;
};



// part 2. await keyword
// pauses the execution of its surrounding async function with the promise is settled (resolved or rejected)
// jb tkk promise fullfill na ho jaye tb tkk asyn funtions ko wait krwayega -- await 

h1 = document.querySelector("h1");
function changeColor(color, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
                reject("promise rejected");
            }
            h1.style.color = color;
            console.log(`color changed to ${color}!`);
            resolve("color changed");
        }, delay);
    });
}

async function demo2() {
    try{
        await colorChange("violet", 1000);
        await colorChange("indigo", 1000);
        await colorChange("green", 1000);
        await colorChange("blue", 1000);
        await colorChange("yellow", 1000);
        await colorChange("orange", 1000);
        await colorChange("red", 1000);
    } catch(err){
        console.log("error caught");
        console.log(err);
    }
}


// 1.
function getNum(){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            let num =Math.floor(Math.random()*10)+1;
            console.log(num);
            resolve();
        }, 1000);
    });
}

async function demo3() {
    await getNum();
    await getNum();
    await getNum();
    getNum();
}