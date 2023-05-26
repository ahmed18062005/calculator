var display = document.getElementById("display");
var bb = '';
function getvalue(num){
    bb += num;
display.value = bb;
}
function equal(){
    try{
    var value = eval(bb);
    display.value = value
    var bb = '';
}catch(error){
    display.value = 'Error'
    var bb = '';
    
}
}
function clearAll(){
    bb = '';
    display.value = "";
}
function backspace() {
    bb = bb.slice(0, -1);
    display.value = bb;
  }