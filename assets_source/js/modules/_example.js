import math from './_math';

class Example {
    
    constructor() {
        this.data = [1, 2];
    }
    
    init() {
        console.log( math(...this.data) );
    }
    
}


module.exports = () => {
    let example = new Example();
    example.init();
}