function CreateObject(arr) {
    // Write your code here
    let n = arr.length
    let obj ={}
    for(let i=0;i<n;i+=2){
        obj[arr[i]] = arr[i+1]
    }
    return obj
}

module.exports = CreateObject;
