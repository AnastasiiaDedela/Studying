function findLongestSequence(arr){
    let longestSeq = []
    let currentSubq = [arr[0]]
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > arr[i-1]){
            currentSubq.push(arr[i])
        }
        
        else {
            if (currentSubq.length > longestSeq.length) {
                longestSeq = [...currentSubq];
            }
            currentSubq = [arr[i]];
        }
    }

    if (currentSubq.length > longestSeq.length) {
        longestSeq = [...currentSubq];
    }

    return longestSeq
}

console.log(findLongestSequence([2,0,1,2,3,2,3,4,5,6]));