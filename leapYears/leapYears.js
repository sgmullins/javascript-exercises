const leapYears = function(year) {
    if(year % 4 === 0 && year % 400 === 0){
      return true;
    } else if (year % 100 === 0 && year % 400 !== 0){
      return false;
    } 
 }

module.exports = leapYears
