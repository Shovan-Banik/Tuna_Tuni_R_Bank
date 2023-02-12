document.getElementById('btn-submit').addEventListener('click',function(){
    const emailField=document.getElementById('email-field').value;
    const passwordField=document.getElementById('password-field').value;
    if(emailField==='tuna@tuni.com' && passwordField=='tuni420'){
        window.location.href='bank.html';
    }
    else{
        alert('invalid user.Try again.');
    }
})