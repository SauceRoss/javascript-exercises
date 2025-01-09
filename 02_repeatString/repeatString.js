const repeatString = function(string, int) {
    let message = ""
    for(let i = 0; i < int; i++ ) {
        message += string;

    }
    
    if (int < 0){
        message = "ERROR"
    }

    return message;
};

// Do not edit below this line
module.exports = repeatString;
