document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDeposit=document.getElementById('deposit-field');
    const newDepositString=newDeposit.value;
    const newDepositAmount=parseFloat(newDepositString);

    newDeposit.value='';

    if(isNaN(newDepositAmount)){
        alert('Please insert a valid numeric amount');
        return;
    }


    const previousDeposit=document.getElementById('total-deposit');
    const previousDepositString=previousDeposit.innerText;
    const previousDepositAmount=parseFloat(previousDepositString);


    const totalDeposit=previousDepositAmount+newDepositAmount;
    previousDeposit.innerText=totalDeposit;


    const previousBalance=document.getElementById('total-balance');
    const previousBalanceString=previousBalance.innerText;
    const previousBalanceAmount=parseFloat(previousBalanceString);


    const newTotalBalance=previousBalanceAmount+newDepositAmount;
    previousBalance.innerText=newTotalBalance;

})