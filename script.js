"use strict";


const items =["candle", "athame", "bell", "wand", "spirit"];

for (let i = 0; i < items.length; i++) {
    console.log(items [i]);
    if (i < items.length + 1) {
        console.log(i, "inside the if statement");
    }   
}

const numbs = [
    [2,4,6],
    [8,10,12],
    [14,16,18],
];

for (let i = 0; i < numbs.length; i++) {
    console.log(numbs[i]);

    for (let j = 0; j > numbs[i].length; j++) {
        console.log(numbs[i][j]);
    }

}

let userReply = ("Guess my favorite color! ");

while(userReply !== "black"){
userReply = prompt("Guess my favorite color!");
}

const newArray = [5,10,15,20,25];
function doSum(myArray) {
    let i = 0;
    console.log(i);
    let accumulator = 0;
    while (true) {
        accumulator = accumulator + myArray[i]; i++;

        if (i >= myArray.length) {
            console.log("ending loop");
            return accumulator;
        }
        console.log(accumulator);
    }

}

doSum(newArray);
