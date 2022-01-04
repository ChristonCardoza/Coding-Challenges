/* 
    Recursive: 
        Time = O(N)
        Space =  O(N)

    Iterative:
        Time = O(N)
        Space =  O(N)

    N = Total number of node in BST
*/


class Node {

    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}


class BinarySearchTree {

    constructor() {
        this.root = null;
    }

    insert(data) {
        const newNode = new Node(data);

        if (this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode) {

        if (newNode.data < node.data) {

            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        } else {
            
            if(node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right, newNode)
        }
    }

    getRootNode() {

        return this.root;
    }

    levelOrder() {

        if( this.root === null) 
            return null;
        else {
            const result = [];
            const queue = [];
            queue.push(this.root);

            while(queue.length > 0) {
                let node = queue.shift();
                result.push(node.data);
                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
            }

            return result;
        }
    }

    // Iterative
    nodeDepthItr(node) {
        let sumOfDepths = 0;
        const stack = [ {node: node, depth: 0}];

        while (stack.length > 0) {
            let nodeInfo = stack.pop();
            let { node, depth } = nodeInfo;

            if(node === null)
                continue;
            
            sumOfDepths += depth;
            stack.push({node: node.left, depth: depth + 1});
            stack.push({node: node.right, depth: depth + 1});
        }

        return sumOfDepths;
    }

    // Recursive
    nodeDepthRecur (node, depth = 0){
        
        if( node === null) 
            return 0;

        return depth + this.nodeDepthRecur(node.left, depth +1) + this.nodeDepthRecur(node.right, depth+1);
    }
}

var BST = new BinarySearchTree();

BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);

var root = BST.getRootNode();

console.log(BST.levelOrder());
//          15
//         /  \
//        10   25
//       / \   / \
//      7  13 22  27
//     / \    /
//    5   9  17

console.log(BST.nodeDepthItr(root));
console.log(BST.nodeDepthRecur(root));