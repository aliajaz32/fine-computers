var cart = [];
var Item = function(price,name,count){
    this.price = price 
    this.name = name
    this.count = count
};





function  checkSelectedIndex(eId,price,name,count,price1,name1,price2,name2,price3,name3){
var android = document.getElementById(eId)
if(android.selectedIndex===0){
    alert("plz select your type of product from dropdown list")
}
    if(android.selectedIndex===1){
      price = price1;
      name = name1;

    };
    if(android.selectedIndex===2){
        price = price2;
        name = name2;
     
    }
    if(android.selectedIndex===3){
        price = price3;
        name = name3;
     
    }

    if(android.selectedIndex != 0){    
        for(  var i  in cart){
        if(cart[i].name === name   ){
               cart[i].count += count  ;
               cart[i].price += price * count
            return
        }
    
    }
    var item = new Item (price,name, count);
    cart.push(item);
    localStorage.setItem("cart",JSON.stringify(cart))
var nas = localStorage.getItem('cart');
console.log(JSON.parse(nas));

}




}
    function addToCart(price,name,count){
        for(  var i  in cart){
            if(cart[i].name === name   ){
                   cart[i].count += count  ;
                   cart[i].price += price * count
                return
            }
        
        }
        var item = new Item (price,name, count);
        cart.push(item);
        localStorage.setItem("cart",JSON.stringify(cart))
var nas = localStorage.getItem('cart');
console.log(JSON.parse(nas));

    }
    var nas = localStorage.getItem('cart');
    var nas1= JSON.parse(nas)
    console.log(nas1);
    var vbn =[];
    console.log(vbn)
    for(var i =0; i<nas1.length ;i++){
        document.getElementById('data').innerHTML += nas1[i].count + " ";
        document.getElementById('data').innerHTML += nas1[i].name + " ";
        document.getElementById('data').innerHTML += nas1[i].price
document.getElementById('data').innerHTML += "<br>";
vbn.push(nas1[i].price);
naan = document.getElementById('amount').innerHTML +=  '+' + vbn[i]  ;
// for(var j=0 ; j< nas1[i].price.length ; j++){
    //     // document.getElementById('amount').innerHTML += nas1[i].price 
    //     console.log(nas1[i].price.length)
    //     }
}
document.getElementById('net').innerHTML="=" + (eval(naan));
console.log(vbn)





document.getElementById('main').innerHTML=cart;
// addToCart(99,"bhai",1);
// addToCart(98,"bhai",1);





