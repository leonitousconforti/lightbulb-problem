/*jshint esversion: 6 */
'use strict';
let lightBulbs;

// initializes the lightbulbs in the off poistions
function initLightbulbs() {
    lightBulbs = new Array(101);

    for (let i = 0; i < lightBulbs.length; i++) {
        lightBulbs[i] = 0;
    }
}

/**
 * defines one pass of the walker
 * @param {int} passNumber the pass number the walker is on
 */
function pass(passNumber) {
    for (let i = 0; i < lightBulbs.length; i++) {
        if (i % passNumber == 0) {
            if (lightBulbs[i] == 1) {
                console.log("chaning state of lightbulb: " + i + " on pass: " + passNumber + " -> off");
                lightBulbs[i] = 0;
            } else if (lightBulbs[i] == 0) {
                console.log("chaning state of lightbulb: " + i + " on pass: " + passNumber + " -> on");
                lightBulbs[i] = 1;
            }
        }
    }
    console.log("done with pass: " + passNumber);
}

// run 100 passes over 100 lightbulbs
initLightbulbs();
for (let j = 0; j <= 100; j++) {
    pass(j);
}

// log the results
console.log("\n");
lightBulbs.forEach( (bulb, index, arr) => {
    if (bulb == 1) {
        console.log("lightbulb " + index + " turned on");
    }
});
