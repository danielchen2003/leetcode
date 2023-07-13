let nums = [1,3,5,6]
let target = 554


var searchInsert = function(nums, target) {
    let left = 0 
    let right = nums.length-1
    
    while (left < right) {
        let mid = Math.floor((left + right)/2)
        if(nums[mid] < target){
            left ++
        }else{
            right++
        }
    }
    return left
};