var InitialPrice= document.querySelector("#initial-price");
var StocksQuantity=document.querySelector("#Stocks-quantity");
var currentPrice=document.querySelector("#current-price");
var Submitbtn=document.querySelector("#sumbit-btn");
var OutputBox=document.querySelector("#output-box");

Submitbtn.addEventListener("click", submitHandler);

function submitHandler()  {
    var ip=Number(InitialPrice.value);
    var qty=Number(StocksQuantity.value); 
    var curr=Number(currentPrice.value); 
    CalculateProfitAndLoss(ip,qty,curr);
}
 function CalculateProfitAndLoss(initial,quantity,current){
    if (initial>current){
        var loss=(initial-current)* quantity;
        var lossPercentage= (loss/initial)*100;
        showOutput(`Hey, the loss is ${loss} and the percent is ${lossPercentage}%`);
    }
 
else if (current>initial){
    var profit=(current-initial)*quantity;
    var ProfitPercentage=(profit/initial)*100;
    showOutput(`Hey, the profit is ${profit} and the percent is ${ProfitPercentage}%`);

 }
 else{
    showOutput(`no pain no gain and no gain no pain`);
 }
}
function showOutput(message) {
    OutputBox.innerHTML=message;
}