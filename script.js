function compute()
{
   var p = document.getElementById("principal").value;
   var r = document.getElementById("myRange").value;
   var t = document.getElementById("years").value;
   var si = 0;
   var d = new Date();
   var maturityYear= d.getFullYear();
   if(p>0 && r> 0  && t>0)
   {
        si = (p*r*t)/100
        maturityYear = d.getFullYear(maturityYear + t);
   }
   
}
function updateTextInput(val) {
    var value = parseFloat(val).toFixed(2);
    document.getElementById('rangeValue').value=value; 
  }        