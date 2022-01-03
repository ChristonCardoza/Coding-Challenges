/* 
    Time = O(N)
    Space = O(log(N)) on Balanced and O(N)
    N = Total number of node in BST
    N/2 ~=  leaf node on Balanced
*/

// Node class
class Node
{
	constructor(data)
	{
		this.data = data;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree
{
    constructor()
    {
        this.root = null;
    }
 

    insert(data)
    {

        let newNode = new Node(data);
                        
        if(this.root === null)
            this.root = newNode;
        else
            this.insertNode(this.root, newNode);
    }

    insertNode(node, newNode)
    {

        if(newNode.data < node.data)
        {
            if(node.left === null)
                node.left = newNode;
            else
                this.insertNode(node.left, newNode);
        }
        else
        {
            if(node.right === null)
                node.right = newNode;
            else
                this.insertNode(node.right,newNode);
        }
    }

    getRootNode()
    {
        return this.root;
    }

    levelOrder()
    {
        // Root -> Children -> Grand Children
        if(this.root === null){
            return null;
        }else {
            const result = [];
            const queue = [];
            queue.push(this.root);
            
            while(queue.length >0){

                let node = queue.shift();
                result.push(node.data);

                node.left && queue.push(node.left);
                node.right && queue.push(node.right);
                
            }
            return result;
        }
    }

    branchSums(someNode) {
        const sums = [];
        this.calculateBranchSums(someNode, 0, sums);
        return sums;
    }

    calculateBranchSums(node, runningSum, sums){
        
        if (node === null)
            return;
            
        let newRunningSum = runningSum + node.data;
        
        if( node.left === null && node.right === null) {
            sums.push(newRunningSum);
            return;
        }

        this.calculateBranchSums(node.left, newRunningSum, sums);
        this.calculateBranchSums(node.right, newRunningSum, sums);
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

console.log(BST.branchSums(root))

