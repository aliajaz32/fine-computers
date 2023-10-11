function signup(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var fullname = document.getElementById('fname').value;
    var firstname = document.getElementById('name').value;
    var lastname = document.getElementById('name1').value;

if(fullname==="" || email===""|| password==="" || fullname===" " || email ===" " || password ===" "){
    alert("plz enter required data")
}
else{
    var userObject1 = {
        email:email,
        password:password,
        fullname:fullname,
        firstname:firstname,
        lastname:lastname
    }

    localStorage.setItem("userObject1",JSON.stringify(userObject1));
    var nas = localStorage.getItem("userObject1");
    console.log(JSON.parse(nas));

    setTimeout(function(){
        document.getElementById('loading').innerHTML="creating your account plz wait...."
    },1)


    setTimeout(function(){
        location="./login.html"
    }
    ,5000)
}
}




