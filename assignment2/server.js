const prompt = require('prompt-sync')();

let totalPrice = 0;
ask();
  function ask(inputTime=0){
    if(inputTime==0){
      console.log("Hey there, We have the following items in our shop:\n");
    }    
    console.log("1) Soap - 10 rupees/item\n 2) Tooth Paste 20 rupees/item \n 3) Ice cream 30 rupees/item");
    let item = prompt('What do you want to purchase today ?');
    let quantity = prompt('How many ?');
    if(item == 1){
      price = 10*quantity;
    }else if(item == 2){
      price = 20*quantity;
    }else if(item == 3){
      price = 30*quantity;
    }
    totalPrice = totalPrice+price;
    askAgain = prompt('Anything else (y/n)?')
    if(askAgain=='y'){
      ask(1)
    }else{
      console.log('calculating your bill...\n your bill is '+totalPrice +' Rupees'); 
    }
  }

