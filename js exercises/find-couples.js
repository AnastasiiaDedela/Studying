function findCouples(arr, num){
    let arrayOfCouples = []
    for(let i = 0; i < arr.length; i++){
        
        for(let j = i+1; j< arr.length; j++){
            let couple = []
            if(arr[i]+arr[j]==num){
                couple.push(arr[i],arr[j])
                arrayOfCouples.push(couple)
            }
            
        }

    }

    return arrayOfCouples
}

console.log(findCouples([3,4,5,2,6,0,8], 8))


//variant2 O(n)

function findCouples(arr, num) {
    let seen = new Set();
    let arrayOfCouples = [];

    for (let i = 0; i < arr.length; i++) {
        let complement = num - arr[i];

        // Если complement уже встречалось, то это пара
        if (seen.has(complement)) {
            arrayOfCouples.push([complement, arr[i]]);
        }

        // Добавляем текущее число в Set
        seen.add(arr[i]);
    }

    return arrayOfCouples;
}

console.log(findCouples([3, 4, 5, 2, 6, 0, 8], 8));
// ➜ [[5, 3], [6, 2], [8, 0]]
