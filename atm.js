// your code goes here!

document.getElementById('checkingDepositButton').addEventListener('click', depositChecking);
document.getElementById('checkingWithdrawalButton').addEventListener('click', withdrawalChecking);
document.getElementById('savingsDepositButton').addEventListener('click', depositSavings);
document.getElementById('savingsWithdrawalButton').addEventListener('click', withdrawalSavings);


[].forEach.call(document.querySelectorAll('[type=button]'), function(clickedButton) {


 console.log(clickedButton);

});


function depositChecking() {
      var newAmount = parseInt(document.getElementById('checkingBalanceDiv').innerHTML.replace('$','')) + parseInt(document.getElementById('checkingAmount').value);
      document.getElementById('checkingBalanceDiv').innerHTML="$"+newAmount;
}

function withdrawalChecking() {
      var newAmount = parseInt(document.getElementById('checkingBalanceDiv').innerHTML.replace('$','')) - parseInt(document.getElementById('checkingAmount').value);

      if (newAmount<0 && parseInt(document.getElementById('savingsBalanceDiv').innerHTML.replace('$',''))>0) {


          var newNewAmount = (parseInt(document.getElementById('savingsBalanceDiv').innerHTML.replace('$','')) + parseInt(document.getElementById('checkingBalanceDiv').innerHTML.replace('$',''))) - parseInt(document.getElementById('checkingAmount').value);

              if(newNewAmount<0) {
                alert("Your savings balance would be below $0, enter a different amount!");
                return;
              } else {

                document.getElementById('checkingBalanceDiv').innerHTML="$0";
                document.getElementById('savingsBalanceDiv').innerHTML="$" + newNewAmount;
                return;
                }
              }

      document.getElementById('checkingBalanceDiv').innerHTML="$"+newAmount;
}


function depositSavings() {
      var newAmount = parseInt(document.getElementById('savingsBalanceDiv').innerHTML.replace('$','')) + parseInt(document.getElementById('savingsAmount').value);
      document.getElementById('savingsBalanceDiv').innerHTML="$"+newAmount;
}

function withdrawalSavings() {
      var newAmount = parseInt(document.getElementById('savingsBalanceDiv').innerHTML.replace('$','')) - parseInt(document.getElementById('savingsAmount').value);

      if (newAmount<0){
        alert("Your savings balance would be below $0, enter a different amount!");
        return;
      }

      document.getElementById('savingsBalanceDiv').innerHTML="$"+newAmount;
}
