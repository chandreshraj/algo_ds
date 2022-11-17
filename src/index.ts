import linearSearch from './LinearSearch/linearSearch';
import binarySearch from './BinaySearch/binarySearch';

const input = [1, 2, 3, 4, 5, 6];
const searchKey = 10;

console.log(
    `Linear Search of ${searchKey} -> ${
        linearSearch(input, searchKey) ? 'Found' : 'Not Found'
    }`,
);

console.log(
    `Binary Search of ${searchKey} -> ${
        binarySearch(input,searchKey) ? 'Found' : 'Not Found'
    }`
);
