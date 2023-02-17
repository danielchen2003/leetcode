var mergeTwoLists = function(l1, l2) {
  if(l1 ===null) return l2 
  if(l2 ===null) return l1
  if (l1.val < l2.val) {
  l1.next = mergeTwoLists(l1.next, l2);
  return l1
  }
  else {
  l2.next = mergeTwoLists(l1, l2.next);
  return l2
  }
  
}


var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(0);
  let tail = dummy;
  while(l1 && l2){
    if(l1.val < l2.val){
      tail.next = l1;
      l1 = l1.next;
    }
    else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  
  tail.next = l1? l1 : l2;

  return dummy.next
}