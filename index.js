const flavors = prompt("Enter list of flavors seprated by commas");
console.log(flavors);


const flavorArray = flavors.split(",");
console.log(flavorArray)


function flavorCount(array) {

    const flavorObject = {};

    for (const flavor of array) {
            if (!(flavor in flavorObject)) {
                flavorObject[flavor] = 1;
            } else {
                flavorObject[flavor] += 1;
            }
    }

   return flavorObject

}

console.log(flavorCount(flavorArray));