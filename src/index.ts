import linearSearch from './LinearSearch/linearSearch';

const input = [1, 2, 3, 4, 5, 6];
const searchKey = 2;

console.log(
    `Linear Search of ${searchKey} -> ${
        linearSearch(input, searchKey) ? 'Found' : 'Not Found'
    }`,
);
