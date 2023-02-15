function app1(num) {
  if (num <= 10) {
    return true
  }
  let temp = num.toString()
  for (let i = 0; i < temp.length; i++) {
    if (temp[i] !== temp[temp.length - i - 1]) {
      return false
    }
  }
  return true
}

var isPalindrome = function (x) {
  if (x < 0 || (!(x % 10) && x)) return false
  let x2 = x,
    res = 0
  while (x2) {
    res = res * 10 + (x2 % 10)
    x2 = ~~(x2 / 10)
  }
  return res === x
}

function app(num) {
  return num.toString().split("").reverse().join("") === num.toString()
}

let res1 = app(111)

let res2 = app(0)

let res3 = app(5050)
//             p1 p2
let res4 = app(9913)
let res5 = app(-9913)
// [9]
console.log(res1, res2, res3, res4, res5)
