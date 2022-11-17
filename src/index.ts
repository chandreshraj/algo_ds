import linearSearch from './LinearSearch/linearSearch';
import binarySearch from './BinaySearch/binarySearch';
import crystalball from './CrystalBall/crystalBall';
import bubblesort from './BubbleSort/bubbleSort';

const input = [1, 2, 3, 4, 5, 6];
const searchKey = 10;

console.log(
    `Linear Search of ${searchKey} -> ${
        linearSearch(input, searchKey) ? 'Found' : 'Not Found'
    }`,
);

console.log(
    `Binary Search of ${searchKey} -> ${
        binarySearch(input, searchKey) ? 'Found' : 'Not Found'
    }`,
);

const breakpoint = crystalball([
    false,
    true,
    false,
    false,
    false,
    true,
    false,
    false,
    false,
    false,
]);
console.log(`Find where the Crystall Breaks -> ${breakpoint}`);

const sortMyNumber = [1, 3, 4, 2, 7, 5, 9];

console.log(`Bubble Sort numbers ${sortMyNumber} -> `);
bubblesort(sortMyNumber);
