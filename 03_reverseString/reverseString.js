const reverseString = function(string) {
    let inital = Array.from(string);
    let final = []; 

    if (string != "") {
        final = inital.reverse();
    }

    return final.join('');
};

// Do not edit below this line
module.exports = reverseString;
