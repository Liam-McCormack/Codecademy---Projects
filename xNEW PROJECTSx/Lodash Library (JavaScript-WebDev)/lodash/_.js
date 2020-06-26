
let _ = {
    clamp(num, lowerBound, upperBound){
        let lowerClampedValue = Math.max(num, lowerBound)
        let clampedValue = Math.min(num, upperBound)
        return clampedValue
    },
    inRange(num, startNum, endNum) {
        if (endNum === undefined) {
            endNum = startNum;
            startNum = 0;
        } else if (startNum > endNum) {
            let temp = endNum
            endNum = startNum
            startNum = temp
        };
        let isInRange = (num >= startNum && num < endNum) 
        return isInRange;
    },
    words(str) {
        let strArray = str.split(' ')
        return strArray;
    },
    pad(str, length) {
        if (length < str.length) {
            return str;
        } else {
            let targetLength = length - str.length;
            let startPadding = Math.floor(targetLength / 2);
            let endPadding = length - (str.length + startPadding)
            let paddedString = `${' '.repeat(startPadding)}${str}${' '.repeat(endPadding)}`;
            return paddedString;
        }
    },
    has(object, key) {
        //check to see if object contains value at specified key
        //return true if the object contains a value at the key else return false
        if (key in object === true) {
            return true;
        } else {
            return false;
        };
    },
    invert(object) {
        //iterates through each key/value pair in object and swaps the key/value
        let invertedObject = {};
        for (currentKey in object) {
            let originalValue = object[currentKey];
            invertedObject[originalValue] = currentKey
        }
        return invertedObject;
    },
    findKey(object, predFunc) {
        //predicate function - returns boolean value ONLY
        for (currentKey in object) {
            let value = object[currentKey];
            let predicateReturnValue = predFunc(value);
            if (predicateReturnValue) {
                return currentKey;
                } 
            }
        return undefined
    },
    drop(arr, num) {//arr - array to query, num - number of elements to drop
        if (num == undefined) {
            num = 1;
        }
        let copyArr = arr.slice(num)
        return copyArr
    },
    dropWhile(arr, predFunc) {//arr - array to query, predFunc - predicate function invoked per iteration
        //predFunc = three args - current element, current element index, whole array.
        let dropNumber = arr.findIndex(function(element, index) {
            return !predFunc(element, index, arr)
        });
        let droppedArray = this.drop(arr, dropNumber)
        return droppedArray;
    },
    chunk(arr, size) {//arr - array to process, size - the length of each new array ('chunk')
        if (size == undefined) {
            size = 1
        };
        let chunkArr = []
        for (let i = 0; i < arr.length; i+= size) {
            //chunkArr.push(arr[i])
            let arrayChunk = arr.slice(i, i + size);
            chunkArr.push(arrayChunk)
        }
        return chunkArr;
    }
};









// Do not write or modify code below this line.
module.exports = _;