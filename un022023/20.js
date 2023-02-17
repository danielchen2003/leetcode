var isValid = function (s) {
  let map = {
    '{': "}",
    '[': "]",
    '(': ")",
  }
  let stack = []
  for (let i = 0; i < s.length; i++) {
    let cur = s[i]
    // if (!map[cur]) {
    //   stack.push(cur)
    // }
    
      if (map[cur]) {
        stack.push(cur)
        continue
      }
      if(map[stack.pop()] !== cur){
        return false 
      }
    
    
    
  }
  return stack.length === 0
}
// {[]]}

var isValid2 = function(s) {
  const stack = [], 
      map = {
          "(":")",
          "{":"}",
          "[":"]"
      };
  for(const x of s) {
      if(x in map) {
          stack.push(x);
          continue;
      };
      if(map[stack.pop()] !== x) return false;
  }
  return !stack.length;
};


// [{,[,
let s = "()"

let s2 = "()[]{}"

let s3 = "()[(]{}"


console.log(isValid(s))
console.log(isValid(s3))