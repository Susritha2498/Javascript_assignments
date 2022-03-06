function getEven(arr) {
    let res = []
    let n = arr.length
    for(i=0;i<n;i++){
        if(arr[i]%2==0){
            res.push(arr[i])
        }
    }
    return res
    /* 
        Return an array containing only even numbers as a result
        Example
            Input: [1,4,5,77,8,90]
            Output: [4,8,90]

        Write you code below
    */

}

function multiplyByN(arr, n) {
    return arr.map(x=>x*n)

    /* 
        Return an array whose elements are multiplied by n
        Example
            Input: [1,3,4,55], 3
            Output: [3,9,13,165]
        Write you code below
    */
}

function removeNthElement(arr, n) {
    arr.splice(n,1)
    return arr
    /*
        Return the array with the element present at index n removed
        Example
            Input: [1,3,4,6,7] 3
            Output: [1,3,4,7]
        Write you code below
    */
}

module.exports = {
    getEven,
    multiplyByN,
    removeNthElement
}