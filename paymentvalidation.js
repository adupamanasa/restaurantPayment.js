
var button1 = document.getElementById("submit");
button1.onclick = function() {
   
var card = document.getElementById("cc").value.length;
var cvv = document.getElementById("cvv").value.length;
if(card<16 && cvv<3)
{ 
document.getElementById("result").innerHTML = "Order was not processed beacuse of Invalid Credit Card or CVV"
        + "<br>" +"Your Credit Card Number must be 16 digits and CVS must be 3 digits";
}
else
{
var cc=document.getElementById("cc").value;
var month=document.getElementById("month").value;
var year=document.getElementById("year").value;
document.getElementById("result").innerHTML ="Order was charged to card number"  + cc + "Your Card EXpires on" + month + "/" + year;
}
};


