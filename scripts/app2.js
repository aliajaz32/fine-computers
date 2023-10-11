console.log(new Date())
function signin(){

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
        
        
        
        if(password==="" || email==="" || email===" "  || password ===" "){
        alert("plz enter required data")
    }
    else{
    
        // var nas = localStorage.getItem("userObject1");
        // nas = JSON.parse(nas);
        // if(nas.userObject1.email=email  && nas.u);
        // var nas = localStorage.getItem("userObject1");
        // console.log(JSON.parse(nas));
        // nas = JSON.parse(nas);
        if(email==="admin" && password==="admin"){
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
