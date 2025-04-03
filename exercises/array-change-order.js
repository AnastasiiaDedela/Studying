function changeOrder(array){
    let array2 = [];
    for(let i = array.length - 1; i >= 0; i--){
        array2.push(array[i])
    }
console.log(array2) 
}

changeOrder([9,8,3,7,67])