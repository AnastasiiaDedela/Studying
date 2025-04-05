function fibonacci(num){
    let fibonacciArray = []
    for(let i = 0; i < num; i++){
        if(i == 0){
            fibonacciArray.push(i)
        }
        if(i == 1){
            fibonacciArray.push(i)
        }
        if(i > 1){
            fibonacciArray.push(fibonacciArray[i-1]+fibonacciArray[i-2])
        }
    }
    return fibonacciArray
}

console.log(fibonacci(10))