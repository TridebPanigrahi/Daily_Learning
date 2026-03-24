class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const mergeTwoSortedList = (list1, list2) => {
  let dummy = new Node(-1);
  let temp = dummy;
  while (list1 !== null && list2 !== null) {
    if (list1.data <= list2.data) {
      temp.next = list1;
      list1 = list1.next;
    } else {
      temp.next = list2;
      list2 = list2.next;
    }
    temp = temp.next;
  }
  if (list1 !== null) temp.next = list1;
  if (list2 !== null) temp.next = list2;
  return dummy.next
};

let l1 = new Node(1);
l1.next = new Node(3);
l1.next.next = new Node(5);

let l2 = new Node(2);
l2.next = new Node(4);
l2.next.next = new Node(6);

let head = mergeTwoLists(l1, l2);
