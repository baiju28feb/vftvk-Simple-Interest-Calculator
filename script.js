function compute()
{
   var p = document.getElementById("principal").value;
   var r = document.getElementById("myRange").value;
   var t = document.getElementById("years").value;
   var si = 0;
   var d = new Date();
   var currentYear= d.getFullYear();
   var maturityYear;
   if (p == null || p == undefined || p.length == 0) {
    alert("Please enter a valid Amount \n");
    return false;
    }
    if(parseInt(p)<=0)
    alert("Amount should be greater than zero");
   if(p>0 && r> 0  && t>0)
   {
        si = (p*r*t)/100
        maturityYear = parseInt(currentYear) + parseInt(t);
        document.getElementById("resultpara").innerHTML = "If you Deposit <span id='yellow'> "+p+"</span></Br> At an Interest rate of <span id='yellow'>"+r+
        " %</span>.</Br> You will receive an amount of <span id='yellow'>"+ si +"</span>,</Br> in the year <span id='yellow'>" +maturityYear+"</span>";
    }  

}
   
function updateTextInput(val) {
    var value = parseFloat(val).toFixed(2);
    document.getElementById('rangeValue').value=value; 
  }        