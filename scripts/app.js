console.log("js running successfully123");

var items ={
    androidtvbox:"true"
}
function delete1(){

var rt = document.getElementById('androidtvbox').style.display="none";
 items.androidtvbox="false"

 localStorage.setItem("items",JSON.stringify(items));
 var nas = localStorage.getItem("items");
 console.log(JSON.parse(nas));

}

// document
var bas =JSON.parse( localStorage.getItem("items") );
console.log(bas);
if(bas.androidtvbox=="false"){
    var rt = document.getElementById('androidtvbox').style.display="none";

}


var androidtvbox = document.getElementById('androidtvbox');
var deletebutton = document.createElement('button');

deletebutton.innerHTML="sold";
androidtvbox.appendChild(deletebutton);
deletebutton.onclick = delete1;


// localStorage.setItem("items",JSON.stringify(items));
// var nas = localStorage.getItem("items");
// console.log(JSON.parse(nas));