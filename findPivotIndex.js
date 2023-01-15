/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(arr) {
    
   
    let leftsum=0
    let total=0
    arr.forEach(n => {
        total+=n
        
    });
    for( let i=0;i<arr.length-1;i++){
        if(total-leftsum-arr[i]===leftsum){
            return i
        }
        leftsum+=arr[i]
    }
    return -1
}
