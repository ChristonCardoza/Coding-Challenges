04. Node Depth
    -   
               15 -------------------> 0
              /  \
            10   25 -----------------> 1
           / \   / \
          7  13 22  27 --------------> 2
         / \    /
        5   9  17 -------------------> 3

    - n -> current node, d -> current depth, l -> left child, r -> right child
    - Recursive approach: `f(n,d) = d + f(l, d+1) + f(r, d+1)`
    - Iterative approach:  store node and depth in stack and pop it