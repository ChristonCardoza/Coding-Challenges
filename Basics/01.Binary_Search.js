/* 
    Time = O(log(N))
    Space = O(1)
    N = Total number of node in BST
*/

binarySearch = (array, target) => {
    let left = 0;
    let right = array.length - 1;

    while(left <= right) {
        let middle = Math.floor((left + right) / 2);
        let potentialMatch = array[middle];

        if( target === potentialMatch) 
            return middle;
        else if(target < potentialMatch)
            right = middle -1;
        else
            left = middle + 1;
    }
    return -1
}

console.log(binarySearch([0,1,21,33,45,61,71,72,73], 33));
console.log(binarySearch([0,1,21,33,45,61,71,72,73], 74));