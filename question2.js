/* Write a javascript function that takes an array of numbers and a target number. 
The function should find two different numbers in the array that, when added together,
give the target number. 
For example: answer([1,2,3], 4)should return [1,3] */

const answer = (array, target) => {
    let map = new Map(), 
        results = [];
    
    for (let i = 0; i < array.length; i++){
        let num = array[i];
        // if key doesn't exist, create it
            // i.e. target = 7; num = 2
            // map { 6 => 1, 5 => 2 }
        // else there's a match
            // i.e. target = 7; num = 6
            // map.get(6) = 1 so push [1,6]
        if (map.get(num) === undefined){
            map.set(target-num, num);
        } else {
            results.push([map.get(num), num]);
        }
    }
//    console.log(map);
    return results;
}

const array = [1,2,3,4,5,6];
console.log(answer(array, 4)); // [ [ 1, 3 ] ]
console.log(answer(array, 6)); // [ [ 2, 4 ], [ 1, 5 ] ]
console.log(answer(array, 7)); // [ [ 3, 4 ], [ 2, 5 ], [ 1, 6 ] ]