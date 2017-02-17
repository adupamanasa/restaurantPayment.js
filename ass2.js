function hidePay() {
document.getElementById('payment').style.display = "none";
document.getElementById('noburgers').checked=true;
document.getElementById('nofries').checked=true;
document.getElementById('nodrinks').checked=true;
}
hidePay();

function showPay() {
document.getElementById('payment').style.display = "block";
}

var func1=function(){ 
var subtotalField = document.getElementById("total");
var radios = document.forms["burgers"].getElementsByTagName("input");
var burgertotal = 0;
  
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            burgertotal += parseFloat(radios[i].value);
        }
    }
    return burgertotal;
};

var func2= function(){ 
var radios = document.forms["fries"].getElementsByTagName("input");
var friestotal = 0;
  
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            friestotal += parseFloat(radios[i].value);
        }
    }
    return friestotal;
};
var func3= function(){ 
var radios = document.forms["drinks"].getElementsByTagName("input");
var drinkstotal = 0;
  
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            drinkstotal += parseFloat(radios[i].value);
        }
    }
    return drinkstotal;
};

var button = document.getElementById("checkout");
button.onclick =function (){
var total = func1()+func2()+func3();
document.getElementById("total").innerHTML = "Total Cost: $" + total;
showPay();
};




