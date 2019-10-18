const repeatString = function(str, num) {
    if(num === 0){
        return '';
    }else if(num > 0){
        return str.repeat(num);
    } else {
        return 'ERROR';
    }

}

module.exports = repeatString
