var reverseList = function(head) {
    let cur = head 
    let pre =null
    let next = cur.next 
    while(cur){
        next = cur.next 
        cur.next = pre 
        pre = cur
        cur = next
    }
    return pre
};

// pre  cur next 
//     [1,   2,   3, 4,   5 ,6]

var reverseList = function(head) {
    function helper(cur,pre){
        if(!cur) return pre
        let next = cur.next
        cur.next = pre 
        return helper(next,cur)
    }
    return helper(head,null)
};


var reverseList = function(head) {
    let pre = null 
    let cur = head 
    while(cur){
        let next = cur.next 
        cur.next = pre 
        pre = cur 
        cur = next
    }
    return pre
}



var reverseList = function(head) {
    if(!head) return head 
    
    function helper(pre,cur){
        if(!cur) return pre
        let next = cur.next
        cur.next = pre
        return helper(cur,next)
        
    }
    
    return helper(null,head)
}