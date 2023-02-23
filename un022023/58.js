var lengthOfLastWord = function(s) {
  let end = s.length - 1;
  while(end >= 0 && s[end] == ' ') end--;
  if(end < 0) return 0;
  let start = end;
  while(start >= 0 && s[start] != ' ') start--;
  return end - start;
};

var lengthOfLastWord = function(s) {
  console.log(s.trim().split(' ').pop())
  console.log(s)
  
}
s = "   fly me   to   the moon  "
console.log(lengthOfLastWord(s))