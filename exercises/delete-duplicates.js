function deleteDuplicates1(array) {
    let uniques = [];
    for (let i = 0; i < array.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < uniques.length; j++) {
            if (array[i] === uniques[j]) {
                console.log('uniques', uniques[j])
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            uniques.push(array[i]);
        }
    }
    return uniques;
}

function deleteDuplicates2(array) {
    let uniques = [];
    for (let i = 0; i < array.length; i++) {
        if (!uniques.includes(array[i])) {
            uniques.push(array[i]);
        }
    }
    return uniques;
}

function deleteDuplicates3(array) {
    return [...new Set(array)];
}
console.log(deleteDuplicates1([8,9,7,4,5,1,7,8,6,2,9].sort()))
console.log(deleteDuplicates2([8,7,5,6,8,7,1,3,4].sort()))
console.log(deleteDuplicates3([6,9,7,8,6,4,4,2,1,7,0].sort()))