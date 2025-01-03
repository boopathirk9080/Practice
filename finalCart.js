'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

const SinglyLinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

const SinglyLinkedList = class {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertNode(nodeData) {
        const node = new SinglyLinkedListNode(nodeData);

        if (this.head == null) {
            this.head = node;
        } else {
            this.tail.next = node;
        }

        this.tail = node;
    }
};

function printSinglyLinkedList(node, sep, ws) {
    while (node != null) {
        ws.write(node.data);

        node = node.next;

        if (node != null) {
            ws.write(sep);
        }
    }
}


/*
 * Complete the 'finalCart' function below.
 *
 * The function is expected to return a STRING_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. STRING_SINGLY_LINKED_LIST head
 *  2. 2D_STRING_ARRAY queries
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     string data;
 *     SinglyLinkedListNode next;
 * }
 *
 */

function finalCart(head, queries) {
    
    function popHead(head) {
        if (!head) return null; 
        return head.next;
    }

    
    function pushTail(head, item) {
        const newNode = new SinglyLinkedListNode(item);
        if (!head) {
            return newNode; 
        }

        let current = head;
        while (current.next) {
            current = current.next; 
        }
        current.next = newNode; 
        return head;
    }

   
    function pushHead(head, item) {
        const newNode = new SinglyLinkedListNode(item);
        newNode.next = head;
        return newNode; 
    }

  
    for (let query of queries) {
        const [command, item] = query;

        if (command === "POP_HEAD") {
            head = popHead(head);
        } else if (command === "PUSH_TAIL") {
            head = pushTail(head, item);
        } else if (command === "PUSH_HEAD") {
            head = pushHead(head, item);
        }
    }

    return head;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    let head = new SinglyLinkedList();

    const headCount = parseInt(readLine().trim(), 10);

    for (let i = 0; i < headCount; i++) {
        const headItem = readLine();
        head.insertNode(headItem);
    }

    const queriesRows = parseInt(readLine().trim(), 10);

    const queriesColumns = parseInt(readLine().trim(), 10);

    let queries = Array(queriesRows);

    for (let i = 0; i < queriesRows; i++) {
        queries[i] = readLine().replace(/\s+$/g, '').split(' ');
    }

    const result = finalCart(head.head, queries);

    printSinglyLinkedList(result, '\n', ws);
    ws.write('\n');

    ws.end();
}
