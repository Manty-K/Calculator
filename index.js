
var flag=1;
function myFunction(character){
  if(flag==1){
      document.querySelector(".cal_text").value+=""+character+"";
  }
else{
}
}

function calculate(){

var formula=document.querySelector(".cal_text").value;

document.querySelector(".cal_text").value="Ans="+(eval(formula));
flag=0;
}

function clearAll(){
  document.querySelector(".cal_text").value="";
  flag=1;
}

document.addEventListener("keydown",function(event){

switch(event.key){
  case "1":myFunction(event.key);
  break;
  case "2":myFunction(event.key);
  break;
  case "3":myFunction(event.key);
  break;
  case "4":myFunction(event.key);
  break;
  case "5":myFunction(event.key);
  break;
  case "6":myFunction(event.key);
  break;
  case "7":myFunction(event.key);
  break;
  case "8":myFunction(event.key);
  break;
  case "9":myFunction(event.key);
  break;
  case "0":myFunction(event.key);
  break;
  case "+":myFunction(event.key);
  break;
  case "-":myFunction(event.key);
  break;
  case "*":myFunction(event.key);
  break;
  case "/":myFunction(event.key);
  break;
  case ".":myFunction(event.key);
  break;
  case "=": calculate();
  break;
  case "Enter": calculate();
  break;
  case "Backspace":clearAll();
  break;
  default:console.log(event.key);
  break;
}
});
