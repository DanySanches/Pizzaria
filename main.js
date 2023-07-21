menuListArray = ["Pizza Vegetariana","Pizza Toscana","Pizza Frango", "Pizza Mussarela"];

function getMenu(){
var htmldata="";
//Completar o código
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+menuListArray[i] + '<br>';
}
document.getElementById("displayMenu").innerHTML = htmldata;
}

function addItem(){
var htmldata;
var imgtags='<img id="im1" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
//Completar o código
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';
}
document.getElementById("displayAddedMenu").innerHTML = htmldata;



}

function addTop(){
//Completar o código
var item=document.getElementById("addItem").value;
menuListArray.push(item);
addItem();

}