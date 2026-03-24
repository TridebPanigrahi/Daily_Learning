class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

const reverseLinkedList = (head) => {
  let prev = null;
  let cur = head;
  while (cur !== null) {
    let next = cur.next;
    cur.next = prev;
    prev = cur;
    cur = next;
    console.log(prev);
  }
  return prev;
};

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

head = reverseLinkedList(head);

// console.log(head);
