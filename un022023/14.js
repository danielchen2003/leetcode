var index1 = function(strs) {
  if(strs.length == 0) 
      return "";
  let ans = strs[0];
  for(let i =1;i<strs.length;i++) {
      let j=0;
      for(;j<ans.length && j < strs[i].length;j++) {
          if(ans[j] != strs[i][j])
              break;
      }
      ans = ans.substr(0, j);
      
  }
  return ans;
};

const index = function(strs) {
  if(strs.length == 0){
    return ""
  }
  let ans = strs[0];
  
  for (let i =1; i < strs.length; i++) {
    let j=0;
    for(;j<ans.length && j < strs[i].length;j++) {
      if(ans[j] !== strs[i][j])
        break;
      }
      ans = ans.substr(0, j);
    
  }
  return ans
}




let strs = ["flower","flow","flight"]

let strs2 = ["dog","racecar","car"]

console.log(isValid(strs));

console.log(isValid(strs2));
