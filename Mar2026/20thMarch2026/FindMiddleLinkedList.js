class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function findMiddle(head) {
  let slow = head;
  let first = head;
  while (first !== null && first.next !== null) {
    slow = slow.next;
    first = first.next.next;
  }
  return slow.data;
}

let head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);

head = findMiddle(head);

console.log(head);
