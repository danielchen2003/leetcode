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