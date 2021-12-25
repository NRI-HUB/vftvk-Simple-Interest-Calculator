function compute()
{
    var principal = parseFloat(document.getElementById("principal").value);
    var rate = parseFloat(document.getElementById("rate").value);
    var years=parseInt(document.getElementById("years").value);
    var interest= principal*years*rate/100;
    var year= new Date().getFullyear()+years;
    document.getElementById("result").innerHTML="Interest: If you deposit <mark>"+principal+", </mark> <br> at an interest rate of <mark>"+rate+"%</mark><br>you will receive an amount of <mark>"+amount+",</mark><br>in the year <mark>"+year+"</mark><br>;
}
 function updateRate()
{
    var rateval=document.getElementById("rate").value;
    document.getElementById("val").innerText=rateval;
}
function getSliderValue()
    {
        document.getElementById("ratespan").innerHTML=document.getElementById("rate").value;
    }
function validateAmount()
    {
        var principal=document.getElementById("principal").value;
        var biggerThanZero=parseInt(principal)>0;
        if(!biggerThanZero){
            alert("Enter a positive number"):
            document.getElementById("principal").focus();
        }
    }
