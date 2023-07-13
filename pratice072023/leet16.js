var threeSumClosest = function(nums, target) {
    if(nums.length<3) return [];
    let best = Infinity;
    nums.sort((a,b)=> a - b)
    for(let i =0 ; i < nums.length-2 ; i++){
        let j = i+1 
        let k = nums.length -1 
        while(j<k){
            let curSum = nums[i] + nums[j] + nums[k]
            if(Math.abs(curSum-target) < Math.abs(best - target)){
                best = curSum
            }
            if(curSum < target){
                j++
            }else{
                k--
            }
            
        }
    }
    return best
};
let nums = [-1,2,1,-4]
let target = 1
console.log(threeSumClosest(nums,target))
// [-4,-1,1,2]
var threeSumClosest = function(nums, target) {
    if(nums.length<3) return [];
    nums.sort((a,b)=> a-b);
    var best = Infinity; 
    // i =>0 j =i+1 k =len-1 sum  diff gengxin Math.abs sum -target
    for(var i=0; i<nums.length-2 ;i++){
        var j= i+1
        var k  = nums.length-1;
        while (j<k){
            var sum = nums[i]+ nums[j] +nums[k]
           
            if (Math.abs(sum - target) < Math.abs(best - target)) {
                    best = sum;
                }


            if(sum === target){
                return sum;
            }else if (sum> target){
                k--
            }else{
                j++
            }
        }

    }
    return best;


};