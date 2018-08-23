function range(start, end) {
  let arr = [];
  arr.push(start);
  if (start < end) {
    arr = arr.concat(range((start + 1), end));
  }
  return arr;
}

function sumRec(arr) {
  let sum = 0;
  if (arr.length == 1) {
    return arr[0];
  }
  while (arr.length > 1) {
    arr = arr.slice(1);
    sum += sumRec(arr);
  }
  return sum;
}

function exponent1(base, exp) {
  if (exp == 0) {
    return 1;
  }
  if (exp == 1) {
    return base;
  }
  return base * exponent1(base,(exp - 1));
}

function fibonacci(n) {
  if (n == 0) {
    return [];
  }
  if (n == 1) {
    return [0];
  }
  if (n == 2) {
    return [0, 1];
  }
  let arr = fibonacci(n - 1);
  arr.push((arr[arr.length - 1] + arr[arr.length - 2]));
  return arr;
}

function deepDup(arr) {
  let arr2 = [];

  for (var i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr2.push(deepDup(arr[i]));
    }
    else {
      arr2.push(arr.slice(i, i+1));
    }
  }
  return arr2;
}

function bsearch(arr, target) {
  let mid = Math.floor(arr.length / 2);

  if (arr.length < 1) {
    return -1;
  }
  if (arr[mid] == target) {
    return mid;
  }
  else if (arr[mid] > target) {
    return bsearch(arr.slice(0, mid), target);
  }
  else {
    let index = bsearch(arr.slice(mid + 1), target);
    if (index == -1) {
      return -1;
    }
    else {
      return index + mid + 1;
    }
  }

}

function mergesort(arr) {
  if (arr.length == 1) {
    return arr;
  }

  let mid = Math.floor(arr.length / 2);
  let rightArr = arr.slice(mid);
  let leftArr = arr.slice(0, mid);

  let leftSorted = mergesort(leftArr);
  let rightSorted = mergesort(rightArr);
  // debugger
  return merge(leftSorted, rightSorted);
}

function merge(leftArr, rightArr) {
  let arr = [];
  // console.log(rightArr, leftArr);
  while (leftArr.length > 0 && rightArr.length > 0) {
    if (leftArr[0] < rightArr[0]) {
      // let value = leftArr.shift;
      // leftArr = leftArr.slice(1);
      arr.push(leftArr.shift());
    } else {
      // let value = rightArr.shift;
      // rightArr = rightArr.slice(1);
      arr.push(rightArr.shift());
    }
  }
  // console.log(leftArr, rightArr);
  return arr.concat(leftArr.concat(rightArr));
}

function subsets(arr) {
  debugger
  // if (arr.length == 1) {
  //   return [arr];
  // }

  if (arr.length == 0) {
    return [[]];
  }
  let last = arr[arr.length - 1];
  let upperArr = subsets(arr.slice(0,-1));
  let myArr = deepDup(upperArr);
  for (var i = 0; i < upperArr.length; i++) {
    // myArr.push(first.concat(subsets(arr)))
    // myArr.push(arr.slice(0,i).concat(first).concat(arr.slice(i)));
    debugger
    myArr.push(upperArr[i].concat(last));
  }
  return myArr;
  // concat(subsets(arr);
}
