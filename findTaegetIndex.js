/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var targetIndices = function(nums, target) {
    nums=nums.sort((a,b)=>{
        return a-b
    })
    result=[]
    for(i=0;i<nums.length;i++){
        if(nums[i]==target){
            result.push(i)
        }
        
    }
    return result
};
