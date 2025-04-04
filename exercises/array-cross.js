function arrayCross(arrA, arrB){
    let result = []
    for(let i = 0; i < arrA.length; i++){
        for(let j = 0 ; j < arrB.length; j++){
            if(arrA[i]===arrB[j] && !result.includes(arrA[i])){
                result.push(arrA[i])
            }
        }
    }
    return result
}
console.log(arrayCross([1,7,8,9,1,7],[3,5,1,4,7,7,1]))










function arrayCross2(arrA, arrB){
    return arrA.filter(x => arrB.includes(x));
}
//console.log(arrayCross2([1,7,8,9,1,7],[3,5,1,4,7]))