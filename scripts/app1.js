console.log("running");
   
function signin(){

var email = document.getElementById('email').value;
var password = document.getElementById('password').value;
    
    
    
    if(password==="" || email==="" || email===" "  || password ===" "){
    alert("plz enter required data")
}
else{

    var nas = localStorage.getItem("userObject1");
    nas = JSON.parse(nas);
    if(nas.email===email && nas.password===password){
        setTimeout(function(){
            document.getElementById('loading1').innerHTML="logging in to your account plz wait...."
        }
    
        ,1)
    
        setTimeout(function(){
            location="./index.html"
        }
        ,5000)
        
    }
    else{
        alert("wrong id or password ")
    }



}
}