function findKElement(arr, k){
    //keep the original array untouched by [...arr], not just arr.sort(), will change the original array.
    let sortedArray = [...arr].sort((a,b)=> a-b)
    return sortedArray[k-1]
}

console.log(findKElement([5, 8, 3, 1, 9], 3))