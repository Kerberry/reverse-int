module.exports = function reverse (n) {
    let str = String(n);
    let result = '';
    for(let i = str.length - 1; i > 0; i --){
        if(str[str.length - 1] == 0){
            i = str.length - 2;
        }
        result += str[i];
    }
    if (str[0] != '-'){
        result += str[0];
    }
    return Number(result);
}
