function itemsCount(arr){

    let obj = {}

    for(let i = 0; i < arr.length; i++){
        let count = 0
        if(!(arr[i] in obj)){
            for(let j = 0; j < arr.length; j++){
                if(arr[i]===arr[j]){
                    count ++
                }
                obj[arr[i]] = count
            }
        }
    }
    return obj
}

//console.log(itemsCount([1,8,7,5,9,9,4,3,2,7,1,5,4,7,1]))

//variant 2

function itemsCount2(arr) {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
        obj[arr[i]] = (obj[arr[i]] || 0) + 1;
    }
    return obj;
}

console.log(itemsCount2([1, 8, 7, 5, 9, 9, 4, 3, 2, 7, 1, 5, 4, 7, 1]));

//variant 3

function countOccurrences(arr) {
    const countObj = {};
    arr.forEach(item => {
        countObj[item] = (countObj[item] || 0) + 1;
    });
    return countObj;
}

//console.log(itemsCount([1,8,7,5,9,9,4,3,2,7,1,5,4,7,1]))