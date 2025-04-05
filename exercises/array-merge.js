function arrayMerge(arr1, arr2){

    let merged = [];
    let i = 0; 
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            merged.push(arr1[i])
            i++
        }else{
            merged.push(arr2[j])
            j++
        }
    }

    while(i < arr1.length){
        merged.push(arr1[i])
        i++
    }

    while(j < arr2.length){
        merged.push(arr2[j])
        j++
    }

    return merged
}

console.log(arrayMerge([1,4,7,9,11,13],[2,3,5,8]))


//bad solution

function arrayMerge2(arr1, arr2){

    let mergedArray = [...arr1,...arr2]

    for(let i = 0; i < mergedArray.length; i++){
        for(let j = 0; j < mergedArray.length; j++){
            if(mergedArray[j]>mergedArray[j+1]){
                let temp = mergedArray[j];
                mergedArray[j] = mergedArray[j+1];
                mergedArray[j+1] = temp
            }
        }
    }
    return mergedArray
}

//console.log(arrayMerge2([1,4,7,9],[2,3,5,8]))

