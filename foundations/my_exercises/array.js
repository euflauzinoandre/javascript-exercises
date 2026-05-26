//	============================ ARRAYS E LOOPS

//	Translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split("-")
    .filter(Boolean)
    .map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase())
    .join("");
}
/*
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

//	Filter range
function filterRange(arr, a, b) {
  return arr.filter((item) => item >= a && item <= b);
}
/*
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); // 3,1 (matching values)
alert( arr ); // 5,3,8,1 (not modified)
*/

//	Filter range "in place"
function filterRangeInPlace(arr, a, b) {
  for (let i = 0; i < arr.length; i++) {
    let tosko = arr[i];
    if (tosko < a || tosko > b) {
      arr.splice(i, 1);
      i--;
    }
  }
}
/*
let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
*/

//	Sort in decreasing order
[5, 2, 1, -10, 8]
  .sort(function (a, b) {
    return a - b;
  })
  .reverse();
/*
let arr = [5, 2, 1, -10, 8];
*/

//	Copy and sort array
function copySorted(arr) {
  return arr.slice().sort();
}
/*
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
*/

//	Shuffle an array
function shuffle(arr) {
	return arr.sort(() => Math.random() - 0.5);
}

/*
let arr = [1, 2, 3];
shuffle(arr); // arr = [3, 2, 1]
shuffle(arr); // arr = [2, 1, 3]
shuffle(arr); // arr = [3, 1, 2]
*/

//	Filter unique array members
