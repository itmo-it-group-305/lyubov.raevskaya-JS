/**
 * Created by Lyubov on 18.11.2015.
 */

/*var arr=[2,3,7,13,5,0,20];
 var sum=0;
 for (var i=0; i<arr.length; i++)
	 {
		 sum=(sum+arr[i]);
		
		}
alert(sum/arr.length);*/

/*window.onload = function() { //функция будет вып-ся при полной загрузке документа
	var keywordList = prompt("Enter keywords, separated by commas",""); //вывод консоли
	var arrayList = keywordList.split(","); //делаем сплит (разделение) запятой
	var resultString = "";
	for (var i=0; i<arrayList.length; i++) {
		resultString += "keyword: " + arrayList[i] + "<br />"; //конкатинация (сложение) строк
		parseInt(resultString)
	}
		var blk=document.getElementById("result"); //этот метод позволяет получить объект divа себе в переменную
		blk.innerHTML= resultString; //вставляем во внутрь нашего хтмл-я результат
}*/

/*arr=['1','2','3'];
arr2=[];
for (var i in arr) {console.log(arr[i])}
for (var i in arr) {arr2.push(+arr[i])}*/

/*var person = {
	name: "Kolobok",
	age: 25,
	heigh: 1,
	nationality: "russian"
}
var window = {
	size: {
	lenght: 200,
	height: 100 }
	color: {

	}
}
var slider = {
	height: 1200,
	lenght: 10,
	color: "gray",

}
var menu = {
	puncts: 3,
	details: {
		1: "main",
		2: "about",
		3: "contacts"
		},
	color: black,
	textColor: white
}*/

var glas=['у','е','ы','а','о','э','я','и','ю'], soglas=['к','н','г','ш','х','ф','в','п','р','л','д','с','т'];
var gramm=['с','г','с'];
function getRandom (min, max){
	Math.floor (Math.random()*(max-min+1))+min;
}
for (var i in gramm) {
	if (gramm[i]=='с'){
	var sogl= soglas[getRandom(0,3)];
	slovo+=sogl;
	}
else { var gl= glas[getRandom(0,3)];
		slovo+=gl;
}
	else {var sogl= soglas[getRandom(0,3)];
		slovo+=sogl;
	}console.log(slovo);
}

//так еще три раза: с г с


