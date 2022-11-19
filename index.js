// Calculator Challenge Lab
let value, number;
function add(a,b){
    value = a + b;  
    //console.log(`${value}`);
    return (value);
    
  }
  function subtract(a,b){
      value = a - b;
     //console.log(`${value}`);
      return (value);
  }
  function multiply(a,b){
    value = a * b;
    //console.log(`${value}`);
    return (value);
  }
  function divide(a,b){
    value = a / b;
    //console.log(`${value}`);
    return (value);
  }
  function increment(number){
    number++;
    //console.log(`${number}`);
    return (number);
  }
  function decrement(number){
    number--;
    //console.log(`${number}`);
    return (number);
  }
  function makeInt(n){
    value = parseInt(n,10);
    return (value);
  }
  function preserveDecimal(n){
    value = parseFloat(n);
    return (value);
  }