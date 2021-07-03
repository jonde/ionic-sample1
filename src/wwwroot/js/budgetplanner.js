const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

//clear button
const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

//add/confirm button
confirmBtn.addEventListener('click', () => {
    //console.log('it works... ole!');
    const enteredReason = reasonInput.value;
    const entreredAmount = amountInput.value;

    //validation
    if(enteredReason.trim().length <= 0 || entreredAmount <= 0 || entreredAmount.trim().length <= 0 ){
       
        /*
        alertCtrl.create({
            message: 'Please enter a valid reason and amount!', 
            header: 'Invalid inputs',
             buttons: ['Okay']
            }).then(alertElement => {
                alertElement.present();
            });
        */  
        presentAlert();
        return;
    }

    //console.log(enteredReason, entreredAmount);

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason +  ': $' + entreredAmount;
    
    expensesList.appendChild(newItem);

    totalExpenses += +entreredAmount  //add '+' in front to automatically convert to number so it gets added properly
    totalExpensesOutput.textContent = '$' + totalExpenses;

    clear();
});

cancelBtn.addEventListener('click', clear);

//create custom alert popup
function presentAlert(){
    const alert = document.createElement('ion-alert');
    alert.cssClass = 'my-custom-class';
    alert.header = 'Invalid input';
    //alert.subHeader = 'Subtitle';
    alert.message = 'Please enter a valid reason and amount!';
    alert.buttons = ['OK'];
  
    document.body.appendChild(alert);
    return alert.present();
}