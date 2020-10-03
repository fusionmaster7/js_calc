document.getElementById('data').value = 0;

//input function
function input(n){
  var num = document.getElementById('data').value;
  num = num*10 + n;
  document.getElementById('data').value = num;
}

function input_op(c){
  document.getElementById('data').value = c;
}

//main calculation function
function confirm(){
  if(ctr == 0){
    num1 = document.getElementById('data').value;
    ctr+=1;
    document.getElementById('data').value = 0;
    alert("Please enter the second number");
  }
  else if(ctr==1){
    num2 = document.getElementById('data').value;
    document.getElementById('data').value= 0;
    alert("Please enter the operation");
    ctr+=1;
  }
  else{
    c = document.getElementById('data').value;
    if(c=='+'){
      document.getElementById('data').value = Number(num1) + Number(num2);
    }
    else if(c=='-'){
      document.getElementById('data').value = Number(num1) - Number(num2);
    }
    else if(c=='*'){
      document.getElementById('data').value = Number(num1) * Number(num2);
    }
    else {
      document.getElementById('data').value = Number(num1) / Number(num2);
    }
  }
}

function reset(){
  document.getElementById('data').value = 0;
}
alert("Please enter the first number");
var ctr = 0;
var num1 = 0;
var num2 = 0;
