const obj = {
    num: 42,
    getNum() {
        return this.num;
    }
};

const detachedGetNum = obj.getNum.bind(obj); 
console.log(detachedGetNum()); 
