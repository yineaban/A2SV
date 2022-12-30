/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    
    
    
    let zeros=0;
    let ones=0;
    let twos=0;
    let N=nums.length
    for(let i=0;i<N;i++){
        if(nums[i]===0)
        {
              zeros++
        }
        else  if (nums[i]===1){

             ones++
        }
        else{
           twos++
        }
   
    }
    console.log(zeros,ones,twos)
    
    for( i=0;i<N;i++){
        if(i<zeros){
            nums[i]=0

        }
        else if(i>=zeros&&i<(zeros+ones)){
             nums[i]=1
        }
        else{
            nums[i]=2
        }
        
    }
    return  nums
}


