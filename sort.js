const reducer = (acc, curr) => acc + curr;
var x = [
	[2,3,4,56,7,3],
  [2,3,4,10,7,8],
  [2,3,7,9,7,3],
  [2,3,4,11,7,3],
  [2,3,4,8,7,3]
];
function Comparator(a, b) {
   if (a.reduce(reducer) < b.reduce(reducer)) return 1;
   if (a.reduce(reducer) > b.reduce(reducer)) return -1;
   return 0;
}
x = x.sort(Comparator);
console.log(x);
