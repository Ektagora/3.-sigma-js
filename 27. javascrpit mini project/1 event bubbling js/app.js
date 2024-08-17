let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

div.addEventListener("click", function() {
    console.log("div was clicked");
});

ul.addEventListener("click", function(event) {
    event.stopPropagation();
    console.log("ul was clicked");
});

for(li of lis){
    li.addEventListener("click", function(event){
        event.stopPropagation();
        console.log("li was clicked");
    });
}

// jb ek ko click kr rhe h toh uske bhr Wale (parent) bhi tigger ho rhe h -- event bubbling
// to stop event bubbling -- stopPropagation(); is used