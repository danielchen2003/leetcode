var reverseList = function(head) {
    let node = head
    let pre = null
    while(node.next){
        
        let next = node.next 
        node.next = cur
        cur.next = pre
        pre = node
        node = next
    }
    return node
};