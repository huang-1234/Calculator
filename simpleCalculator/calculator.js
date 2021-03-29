// JavaScript
let results="";
function rec(){
  if (event.srcElement.innerText=="=") {
      return;
  }
  if (event.srcElement.innerText=="归零") {
      results="";
      display.innerText="0";
      return;
  }
  results+=event.srcElement.innerText;
  display.innerText=results;
}
function sum(){
  calresults=eval(results);
  display.innerText=calresults;
}