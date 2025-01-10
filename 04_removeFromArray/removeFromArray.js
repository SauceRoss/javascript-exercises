const removeFromArray = function(array, remove) {
  let eleToClear = [remove];
  let newArray = [];
  
  for (let i = eleToClear.length-1; i >= 0; i--) {
     newArray = array.slice(eleToClear[i],1)
    }

    console.log(newArray);
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
