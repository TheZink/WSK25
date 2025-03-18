const list = [10,4,7,2,3,5,8,9,1,6];


function sortArray(a) {
    const sorted = a.sort();
    const reversed = sorted.toReversed();
    return reversed;
}

console.log(sortArray(list));