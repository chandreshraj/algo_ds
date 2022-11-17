const binarySearch = (input: number[], searchElement: number): boolean => {
    let lo = 0;
    let hi = input.length;

    do {
        let m = Math.floor(lo + (hi - lo) / 2);
        const v = input[m];
        if (v == searchElement) return true;
        else if (v > searchElement) hi = m;
        else lo = m + 1;
    } while (lo < hi);

    return false;
};

export default binarySearch;
