class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function detectCycle(head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}

let head = new Node(1);
let second = new Node(2);
let third = new Node(3);
let fouth = new Node(4);

head.next = second;
second.next = third;
third.next = fouth;

fouth.next = head;

head = detectCycle(head);

console.log(head);
