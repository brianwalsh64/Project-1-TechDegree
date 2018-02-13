/** The Function */
function maximum(array) {
  var numbers = array;
  var numbers2 = numbers;
var g = 0;
var k = 0;
  do { if(numbers[g] >= numbers2[k]) {
         k += 1;
       } else {
         k = 0;
         g += 1;
       }
     } while(k < numbers.length);
  return numbers[g];
}
