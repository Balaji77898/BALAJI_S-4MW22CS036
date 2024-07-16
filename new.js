function findMax(arr){
    if(arr.length===0){
        return null
    }
    let maxValue=arr[0]
    for(let item=0;item<arr.length;item++){
        if (arr[item]>maxValue) {
            maxValue=arr[item]
        }
    }
    return maxValue
}
let numbers=[67,45,12,20,13,55]
let result = findMax(numbers);
console.log(result);