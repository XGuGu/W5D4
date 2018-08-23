Array.prototype.uniq = function() {
  let arr = [];
  for (var i = 0; i < this.length; i++) {
    if (!arr.includes(this[i])) {
      arr.push(this[i]);
    }
  }
  return arr;
};


Array.prototype.twoSum = function() {
  let arr = [];
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] == 0) {
        arr.push([i, j]);
      }
    }
  }
  return arr;
};

Array.prototype.transpose = function() {
  let arr = [];
  for (var i = 0; i < this.length; i++) {
    arr.push([]);
    for (var j = 0; j < this.length; j++) {
      arr[i].push(this[j][i]);
    }

  }
  return arr;
};
