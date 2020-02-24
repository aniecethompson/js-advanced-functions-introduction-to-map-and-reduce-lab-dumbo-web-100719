// Your code here
const mapToNegativize = (sourceArray) => {
    let negativeArray = []
    for (let i = 0; i < sourceArray.length; i++){
        let negativeNum = -sourceArray[i]
        negativeArray.push(negativeNum)
    }
    return negativeArray
}

const mapToNoChange = (sourceArray) => {
    return sourceArray
}

const mapToDouble = (sourceArray) => {
    let doubleArray = []
    for (let i = 0; i < sourceArray.length; i++){
        let doubleNum = sourceArray[i] * 2
        doubleArray.push(doubleNum)
    }
    return doubleArray
}

const mapToSquare = (src) => {
    let squared = []
    for(let i = 0; i < src.length; i++){
        let sNum = src[i] ** 2
        squared.push(sNum)
    }
    return squared
}

const reduceToTotal = (sourceArray, startingPoint= 0) => {
    let total = startingPoint
    for(let i= 0; i < sourceArray.length; i++ ){
        total = total + sourceArray[i]
    }
    return total
}

const reduceToAllTrue = (array) => {
    let endResults = true
    for(let i = 0; i < array.length; i++){
        if(array[i]=== false){
            endResults = false
        } else{
            endResults = true
        }
    }
    return endResults
}

const reduceToAnyTrue = (array) => {
    let endResults = true
    for(let i = 0; i< array.length; i++){
        if(array[i] !== true){
            endResults = false
        } else{
            endResults = true
        }
    }
    return endResults
}