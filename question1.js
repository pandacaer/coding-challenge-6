/* Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. 
For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. 
Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]] */

const filterByType = (array, type) => array.filter(x => typeof x === type);

const groupDuplicates = array => {
    array.sort((a, b) => a - b);
    
    let grouped = [];
    let count = 0; 
    
    for (let i = 0; i < array.length; i++){
        let val = array[i];
        let next = array[i+1];
        
        if (val === next){
            count++;
        }
        else {
            // since array is sorted, if next num is different push single element or subarray and reset counter
            if (count === 0){
                grouped.push(val);
            } else{
                // push duplicate numbers
                console.log (i, count);
                grouped.push(array.slice(i - count, i + 1));
                count = 0;
            }
        }
    }
    return grouped;
}

const cleanTheRoom = arr =>  {
    const numberArray = filterByType(arr, "number");
    const stringArray = filterByType(arr, "string");
    
    if (numberArray.length === 0){
        return groupDuplicates(stringArray);
    } else if (stringArray.length === 0) {
        return groupDuplicates(numberArray);
    } else {
        return [
            groupDuplicates(numberArray),
            groupDuplicates(stringArray)
        ];
    }  
}

const empty = [];
console.log(cleanTheRoom(empty)); // []
const numbers = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
console.log(cleanTheRoom(numbers)); // [ [ 1, 1, 1, 1 ], [ 2, 2, 2 ], 4, 5, 10, [ 20, 20 ], 391, 392, 591 ]
const strings = ["2", "3", "2", "4", "3"];
console.log(cleanTheRoom(strings)); // [ [ '2', '2' ], [ '3', '3' ], '4' ]
const mixed = [1, "2", "3", 2];
console.log(cleanTheRoom(mixed)); // [ [ 1, 2 ], [ '2', '3' ] ]
const mixedDupes = [1, "2", "3", 2, 1, "2"];
console.log(cleanTheRoom(mixedDupes)); // [ [ [ 1, 1 ], 2 ], [ [ '2', '2' ], '3' ] ]

