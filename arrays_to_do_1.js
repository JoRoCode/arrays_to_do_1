

// 1. Push Front
// Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!


function pushFront(arr,num) {
    for(var i = arr.length-1; i >= 0; i--){
        arr[i+1] = arr[i];
    }
    arr[0] = num;
return arr;
}

console.log(pushFront([5,7,2,3],8))


// 2. Pop Front
// Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!

function popFront(arr) {
    popped = arr[0];
    for(var i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length - 1;
    console.log(arr);
    return popped;
}

console.log(popFront([0,5,10,15]));
console.log(popFront([4,5,7,9]));

// 3. Insert At
// Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

function insertAt(arr, idx, val) {
    for(var i = arr.length-1; i >= idx; i--){
        arr[i+1] = arr[i];
    }
    arr[idx] = val;
    return arr;
}

console.log(insertAt([100,200,5],2,311));
console.log(insertAt([9,33,7], 1, 42));

// 4. BONUS: Remove At
// Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).


function removeAt(arr, idx) {
    removed = arr[idx];
    for(var i = idx; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length - 1;
    console.log(arr);
    return removed;
}

console.log(removeAt([1000,3,204,77], 1));
console.log(removeAt([8,20,55,44,98], 3));


// 5. BONUS: Swap Pairs
// Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

function swapPairs(arr) {
    for(i=0; i<arr.length; i++){
        if( i % 2){
            let temp = arr[i-1];
            arr[i-1] = arr[i];
            arr[i] = temp;
        }
    }
    return arr
}

console.log(swapPairs([1,2,3,4]));
console.log(swapPairs(["Brendan",true,42]));