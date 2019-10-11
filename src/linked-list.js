const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = new Node();
        this._tail = new Node();
        this.length = 0;
    }
    //Node это элемент list
    append(data) { 
        
        if (this.length === 0) {
            this._head = new Node(data);
            this._tail = new Node(data);
            this.length++;
        } else {
            this._tail = this._head;
            while(this._tail.next !== null) {
                this._tail = this._tail.next;
            }
            this._tail.next = new Node(data);
            this._tail.next.prev = this._tail;
            this._tail = this._tail.next;
            this.length++;
        }
    } 

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let currentNode = this._head;
        while (index != 0) {
            currentNode = currentNode.next;
            index--;
        }
        return currentNode.data;
    }

    insertAt(index, data) {}

    isEmpty() {
        if (this.length === 0) {
            return true;
        }   return false;
    }

    clear() {}

    deleteAt(index) {}

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
