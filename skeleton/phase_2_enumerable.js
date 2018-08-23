Array.prototype.myEach = function(callback) {
  for (var i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  let arr = [];
  for (var i = 0; i < this.length; i++) {
    arr[i] = callback(this[i]);
  }
  return arr;
};

Array.prototype.myReduce = function(callback, initVal) {
  let sum = 0;
  let init = 0;
  if (initVal == undefined) {
    sum = this[0];
    init = 1;
  } else {
    sum = initVal;
  }
  for (var i = init; i < this.length; i++) {
    sum = callback(sum, this[i]);
  }
  return sum;
};
