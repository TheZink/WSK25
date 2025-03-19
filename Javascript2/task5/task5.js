function sortArray(list, order) {
    const sorted = list.sort();
    
    if (order === 'asc'){
        const ascending = list.toSorted();
        return ascending;
    } else {
        const descending = list.toReversed();
        return descending;
    }
}

const list1 = [4,7,2,3,5,8,9,1,6];
const list2 = [20,40,64,32,11,56,23,63,123,644,12]

console.log("Descending list 1")
console.log(sortArray(list1, 'desc'));
console.log("Ascending list 1")
console.log(sortArray(list1, "asc"))

console.log("Descending list 2")
console.log(sortArray(list2, 'desc'));
console.log("Ascending list 1")
console.log(sortArray(list2, "asc"))
