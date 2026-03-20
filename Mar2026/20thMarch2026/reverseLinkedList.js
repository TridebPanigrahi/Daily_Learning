class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function reverseLinklist(head) {
  let prev = null;
  let curr = head;
  while (curr !== null) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

let head = new Node(1);
head.next = new Node(3);
head.next.next = new Node(5);
head.next.next.next = new Node(8);
head.next.next.next.next = new Node(9);

function printList(head) {
  let temp = head;
  let res = "";
  while (temp !== null) {
    res += temp.data + " -> ";
    temp = temp.next;
  }
  console.log(res + " NULL ");
}

printList(head);

head = reverseLinklist(head);

printList(head);
