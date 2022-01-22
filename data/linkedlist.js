class Node {
    constructor(data, next = null) {
        this.data = data
        this.next = next
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }


insertFirst(data) {
    this.head = new Node(data, this.head);
}

}




// create new linked list 
const linkedlist = new LinkedList()
linkedlist.insertFirst(500)
linkedlist.insertFirst(100)
console.log(linkedlist)
const n1 = new Node(100)
console.log(n1)