document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdraw=document.getElementById('withdraw-field');
    const newWithdrawString=newWithdraw.value;
    const newWithdrawAmount=parseFloat(newWithdrawString);

    newWithdraw.value='';

    if(isNaN(newWithdrawAmount)){
        alert('Please insert numeric amount');
        return;
    }

    const previousWithdraw=document.getElementById('withdraw-total');
    const previousWithdrawString=previousWithdraw.innerText;
    const previousWithdrawAmount=parseFloat(previousWithdrawString);


    const previousBalance=document.getElementById('total-balance');
    const previousBalanceString=previousBalance.innerText;
    const previousBalanceAmount=parseFloat(previousBalanceString);

    if(newWithdrawAmount>previousBalanceAmount){
        alert('You do not have enough balance');
        return;
    }

    const totalPreviousWithdraw= previousWithdrawAmount+newWithdrawAmount;
    previousWithdraw.innerText=totalPreviousWithdraw;

    const previousBalanceTotal=previousBalanceAmount-newWithdrawAmount;
    previousBalance.innerText=previousBalanceTotal;

})