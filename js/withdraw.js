// step-1: add event handler with the withdraw button
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2: get the withdraw amount from the withdraw input field
    const userWithdraw = document.getElementById('user-withdraw');
    // step-3: also make sure to convert the input into a number by using parseFloat
    const newWithDrawAmountString = userWithdraw.value;
    const newWithdrawAmount = parseFloat(newWithDrawAmountString);
     // : clear the input field
     userWithdraw.value = '';
    if (isNaN(newWithdrawAmount)){
        alert('please provide a valid number');
        return;
    }

    // step-4: get previous withdraw total
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    
   
    // step-7:get the previous balance total
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
     
     if(newWithdrawAmount>previousBalanceTotal){
        alert('Bap er bank a taka nei');
        return;
     }
     // step-5: calculate total withdraw amount
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
     // step-6: set total withdraw amount
     withdrawTotalElement.innerText = currentWithdrawTotal;

    // calculate new balance total
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // set the new balance total
    balanceTotalElement.innerText = newBalanceTotal;
   
})