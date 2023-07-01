function topProduct(productProfitArray) {
    if (!Object.keys(productProfitArray)?.length) {
        return "No Data"
    }

    let highest = Number.MIN_VALUE
    let result = null

    for (const key of Object.keys(productProfitArray)) {
        if (productProfitArray[key] > highest) {
            highest = productProfitArray[key]
            result = key
        }
    }

    return result
}

function bottomProduct(productProfitArray) {
    if (!Object.keys(productProfitArray)?.length) {
        return "No Data"
    }

    let lowest = Number.MAX_VALUE
    let result = null

    for (const key of Object.keys(productProfitArray)) {
        if (productProfitArray[key] < lowest) {
            lowest = productProfitArray[key]
            result = key
        }
    }

    return result
}

function zeroProfitProduct(productProfitArray) {
    if (!Object.keys(productProfitArray)?.length) {
        return "No Data"
    }
    
    let nearest = Number.MAX_VALUE
    let result = null

    for (const key of Object.keys(productProfitArray)) {
        if (Math.abs(productProfitArray[key]) === Math.abs(nearest)) {
            nearest = productProfitArray[key] > 0 ? productProfitArray[key] : nearest
            result = productProfitArray[key] > 0 ? key : result
            continue
        }

        if (Math.abs(productProfitArray[key]) < Math.abs(nearest)) {
            nearest = productProfitArray[key]
            result = key
        }
    }

    return result
}

console.log(topProduct(productProfitArray))
console.log(bottomProduct(productProfitArray))
console.log(zeroProfitProduct(productProfitArray))