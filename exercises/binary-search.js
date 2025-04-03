function binarySearch(arr, num){

    let left = 0;
    let right = arr.length-1

    for(let i = 0; left < right; i++){

        let middle = Math.floor((left+right) / 2)

        if(arr[middle] == num){
            return middle
        }

        if(num > arr[middle]){
            left = middle+1
        }else if (num < arr[middle]){
            right = middle-1
        }

        
    }
    return -1
}
console.log(binarySearch([1, 5, 7, 9, 20, 55, 67], 55))
console.log(binarySearch([1, 5, 7, 9, 20, 55, 67], 56))
