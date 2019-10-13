const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
        this._tail = null;
        this.length = 0;
    }
    append(data) {
        let node = new Node(data);
        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            let currentNode = this._tail;
            node.prev = currentNode;
            currentNode.next = node;
            this._tail = node;
        }
        this.length++;
    } 

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let currentNode = this._head;
        while (index !== 0) {
            currentNode = currentNode.next;
            index--;
        }
        return currentNode.data;
    }

    insertAt(index, data) {
        let currentNode = this._head;
        while (index !== 0) {
            currentNode = currentNode.next;
            index--;
        }
        let next = currentNode.next;
        let prev = currentNode.prev;

        let newNode = new Node(data, prev, currentNode);
        currentNode.prev = newNode;
        prev.next = newNode;
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        }   return false;
    }

    clear() {
        this.length = 0;
        this._head.data = null;
        this._tail.data = null;
        return this;
    }

    deleteAt(index) {
        let currentNode = this._head;
        while (index !== 0) {
            currentNode = currentNode.next;
            index--;
        }
        let next = currentNode.next;
        let prev = currentNode.prev;

        next.prev = prev;
        prev.next = next;
    }

    reverse() {
        let list = new LinkedList();

        let node = this._tail;
        while(node != null) {
            list.append(node.data);
            node = node.prev;
            
        }
        console.log('this._head():', this._head);
        console.log('this._tail():', this._tail);


        this._head = list.head;
        this._tail = list.tail;

        console.log('list.head(): ', list.head());
        console.log('list.tail(): ', list.tail());
        console.log('');
        console.log('this._head():', this._head());
        console.log('this._tail():', this._tail());
        console.log('');
        console.log('list.at(1):', list.at(1));
        console.log('list.at(2):', list.at(2));
        console.log('list.at(3):', list.at(3));
        console.log('list.at(4):', list.at(4));
    }

    indexOf(data) {}
}

module.exports = LinkedList;
