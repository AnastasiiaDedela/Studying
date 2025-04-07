function rotateArray(arr, shiftBy, direction) {

    shiftBy = shiftBy % arr.length

    if (arr.length === 0) {
        return arr;
    }

    if (shiftBy === 0 || shiftBy === arr.length){
        return arr
    }

    if(direction === "right"){
        return arr.slice(-shiftBy).concat(arr.slice(0, arr.length - shiftBy))
    }

    if(direction === "left"){
        return arr.slice(shiftBy).concat(arr.slice(0, shiftBy))
    }
}
console.log(rotateArray([1, 2, 3, 4, 5],-7,"left"))
