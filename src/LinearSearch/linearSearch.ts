const linearSearch = (input:number[], searchElement:number):boolean => {
    for(let i=0;i<input.length;i++){
        if(input[i] === searchElement) return true;
    }
    return false;
}

export default linearSearch;