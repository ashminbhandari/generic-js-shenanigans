//1. Display current day and time in the given format 
console.log('1. Display current day and time in the given format.');
today = new Date();
console.log("Today is:", today.getDay() == 0 ? 'Sunday' :
    today.getDay() == 1 ? 'Monday' :
        today.getDay() == 2 ? 'Tuesday' :
            today.getDay() == 3 ? 'Wednesday' :
                today.getDay() == 4 ? 'Thursday' :
                    today.getDay() == 5 ? 'Friday' :
                        today.getDay() == 6 ? 'Sunday' :
                            'Sorry, an error occured.');
console.log(
    "Current time is:",
    (today.getHours() % 12) || 12,
    today.getHours() >= 12 ? "PM :" : "AM :",
    today.getMinutes(),
    ":",
    today.getSeconds()
);
console.log('');

//2. Write a JS prog to get the current date
console.log('2. Write a JS prog to get the current date');
mth = (today.getMonth() + 1).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
dte = (today.getDate()).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
console.log(mth + '-' + dte + '-' + today.getFullYear());
console.log('');

//5. JS program to reverse number
console.log("5. Reverse a number problem:")
const reverseNum = (num) => {
    strNum = num.toString();
    revNum = "";
    for (let i = strNum.length; i >= 0; i--) {
        revNum = revNum + strNum.charAt(i);
    }
    return +revNum
}
console.log("CASE 1: 32243: ", reverseNum(32243));
console.log("CASE 2: 3234342434443: ", reverseNum(3234342434443));
console.log("CASE 3: ASD: ", reverseNum('ASD'));
console.log('');

//6. JS function to get second lowest and second greatest numbers from an array.
console.log('6. JS function to get second lowest and second greatest numbers from an array.');
const getSecondLowestAndSecondGreatest = (arr) => {
    //Set up response object
    res = {
        secondLowest: NaN,
        secondGreatest: NaN
    }

    //Generic checks for lengths up to 2, simple comparisons
    if (arr.length == 0) {
        return res;
    } else if (arr.length == 1) {
        res.secondLowest = arr[0];
        res.secondGreatest = arr[0];
        return res;
    } else if (arr.length == 2) {
        sorted = arr.sort();
        res.secondLowest = sorted[1];
        res.secondGreatest = sorted[0];
        return res;
    }

    //Remove repeats, sort, return elems at second index and second to last index
    sorted = [...new Set(arr)].sort();
    res.secondLowest = sorted[1];
    res.secondGreatest = sorted[sorted.length - 2];
    return res;
}

//Test cases
console.log("Case 1: [1,2,3,4,6,4]", getSecondLowestAndSecondGreatest([1,2,3,4,6,4]));
console.log("Case 2: [1,4,5,9,8,0]", getSecondLowestAndSecondGreatest([1,4,5,9,8,0]));
console.log("Case 2: [1,4]", getSecondLowestAndSecondGreatest([1,4]));
console.log('');

//7. JS to get integers in range(x,y)
console.log('7. JS to get integers in range(x,y)');
const getIntsInRange = (x, y) => {
    arr = [];
    for(let i = x + 1; i < y; i++) {
        arr.push(i);
    }
    return arr;
}

//Test cases
console.log("Case 1: (2, 9)", getIntsInRange(2,9));
console.log("Case 1: (6, 6)", getIntsInRange(6,6));
console.log('');

//8. Merge sort in JS
console.log("8. Merge sort in JS");
const mergeSort = (arr) => {
    if(arr.length == 1) return arr;
    let mIndex = Math.floor(arr.length/2);
    let l = mergeSort(arr.slice(0,mIndex));
    let r = mergeSort(arr.slice(mIndex));
    return mergeRoutine(l,r);
}

const mergeRoutine = (a, b) => {
    //two finger routine 
    fingerA = 0
    fingerB = 0
    merged = []
    while (fingerA + fingerB < a.length + b.length) {
        if(fingerB == b.length || a[fingerA] <= b[fingerB]) {
            merged.push(a[fingerA]);
            if(fingerA < a.length) fingerA++;
        } else if (fingerA == a.length || b[fingerB] <= a[fingerA]) {
            merged.push(b[fingerB]);
            if(fingerB < b.length) fingerB++;
        }
    }
    return merged;
} 

console.log("Case 1: [5,1,6,7,2]", mergeSort([5,1,6,7,2]));
console.log("Case 1: [-10,10,-100,1000,-99]", mergeSort([-10,10,-100,1000,-99]));
console.log('');

//9. Conditional statement to find largest of five numbers
console.log('9. Conditional statement to find largest of five numbers');
const findLargestOfFive = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        if (
            arr[i] >= arr[0] &&
            arr[i] >= arr[1] &&
            arr[i] >= arr[2] &&
            arr[i] >= arr[3] &&
            arr[i] >= arr[4]
        ) return arr[i];   
    }
}

//Test cases
console.log("Case 1: [-5, -2, -6, 0, -1]", findLargestOfFive([-5, -2, -6, 0, -1]));
console.log("Case 1: [45, -2, -002, 0992, -10101]", findLargestOfFive([45, -2, -002, 0992, -10101]));
console.log('');

//10. Validate whether or not a value type is NaN
console.log('10. Validate whether or not a value type is NaN');
const isNaN = (data) => {
    return Number.isNaN(data);
}

//Test cases
console.log("Case 1: 2", isNaN(2));
console.log("Case 2: 0 / 0", isNaN(NaN));
console.log('');

//11. Check for same value types 
console.log('11. Check for same value types');
const areSameType = (va, vb)  => {
    if(typeof(va) === typeof(vb)) return true;
    return false;
}

//Test cases
console.log('Case 1: ("a","b")', areSameType("a", "b"));
console.log('Case 1: ("a",1)', areSameType("a", 1));






