//ARRAYS E LOOPS

//Translate border-left-width to borderLeftWidth
function camelize(str){
	return str.split("-").filter(Boolean).map((item) => item[0].toUpperCase() + item.slice(1).toLowerCase()).join("");
}
/*
camelize("background-color") == 'backgroundColor';
camelize("list-style-image") == 'listStyleImage';
camelize("-webkit-transition") == 'WebkitTransition';
*/

//Filter range

//Filter range "in place"

//Sort in decreasing order

//Copy and sort array

//Shuffle an array

//Filter unique array members