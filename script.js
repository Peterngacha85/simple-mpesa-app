const allServicesBtn = document.getElementsByClassName('services_hide');
const single_service = document.getElementsByClassName('single_service');
const HOME = document.getElementsByClassName('HOME');
const confirmation = document.getElementById('confirmation_message');
const confirmation_failed = document.getElementsByClassName('confirmation_text');
const phoneNumberNew = document.getElementById('phone_number_new');
const amount_to_Send = document.getElementById('amount_to_Send');
const Transaction = document.getElementById('Transaction');
// const amount = document.getElementById("amount");
const amountSent = document.getElementById("amount_sent");
const SEND = document.getElementById("send");

const h = document.getElementById('h5');
const peter_test = document.querySelectorAll('#h5 span amount_sent phone_number_new DATE Balance Transaction')


function home(){
    allServicesBtn[0].style.zIndex = 1;
    single_service[0].style.zIndex = 0;
    single_service[1].style.zIndex = 0;
    single_service[2].style.zIndex = 0;
    single_service[3].style.zIndex = 0;
    single_service[4].style.zIndex = 0;
    single_service[5].style.zIndex = 0;
    single_service[6].style.zIndex = 0;



}
function sending(){
    single_service[0].style.zIndex = 1;
    allServicesBtn[0].style.zIndex = 0;
}
function withdraw (){
    single_service[3].style.zIndex = 1;
    single_service[0].style.zIndex = 0;
}
function buy_airtime(){
    single_service[4].style.zIndex = 1;
    allServicesBtn[0].style.zIndex = 0;
}
function loan_saving(){
    single_service[5].style.zIndex = 1;
    allServicesBtn[0].style.zIndex = 0
}
function lipa_na_mpesa(){
    single_service[6].style.zIndex = 1;
    allServicesBtn[0].style.zIndex = 0;

}
function my_account(){
    single_service[7].style.zIndex = 1;
    allServicesBtn[0].style.zIndex = 0;
}


let mpesa_balance = 1800, old_mpesa_balance = 1800;

    date = Date();

    function amountToSend(){
        amount_to_Send.style.zIndex = 1;
        console.log("********** method is okay ***********");
    }
    // document.getElementById("send").disabled = true;

function confirmation_message(){
    amount_to_Send.style.zIndex = 0;
    confirmation.style.zIndex = 1 ;
    allServicesBtn[0].style.zIndex = 0;
    amountSent.innerText = parseInt(document.getElementById("Amount").value);
    amountSent.style.color = "red";
    phoneNumberNew.innerText = document.getElementById("Phone").value;
    const TELL = document.getElementById("Phone").value;
    const Tell = document.getElementById("Phone");
    phoneNumberNew.style.color = "red";

// if test 
if(document.getElementById("Phone").value.length = 0){
    document.getElementById("send").disabled = false;
}else{
    document.getElementById("send").disabled = false;
}





    // date 
    const current_date = document.getElementById("DATE");
    current_date.innerHTML = date;
    // Balance 
    const Balance = document.getElementById('Balance');
    let amountSENT =  parseInt(document.getElementById("Amount").value);
    const amountSENTcolor = document.getElementById("Amount");
    let transaction_cost = (0.08 * amountSENT);


    let new_balance = mpesa_balance - amountSENT - transaction_cost;
    mpesa_balance = new_balance;
    transaction_cost = (0.08 * amountSENT);
    Transaction.innerHTML = transaction_cost;
    Transaction.style.color = "red";


    if(old_mpesa_balance > amountSENT && mpesa_balance > 0){
        h.innerHTML = '<h5 id="h5" class="confirmation_text">RCG5XQ2RLB Confirmed. Ksh <span id="amount_sent">' + amountSENT +'</span> sent to <span id="phone_number_new"> '+TELL+' </span> on <span id="DATE"> ' +date+' </span>. New M-PESA balance is Ksh<span id="Balance"> '+ mpesa_balance +' </span>. Transaction cost, Ksh <span id="Transaction"> '+ transaction_cost +' </span>. Amount you can transact within the day is 299,860.00. Use M-PESA app to send money conviniently mpesaapp.page.link/ggGV</h5>'
        mpesa_balance = mpesa_balance.toFixed(2);
        Balance.innerHTML = new_balance;
        old_mpesa_balance =  mpesa_balance;
    }else {
        // old_mpesa_balance =  mpesa_balance;
        mpesa_balance = mpesa_balance + amountSENT + transaction_cost;
        mpesa_balance = mpesa_balance.toFixed(2);
        Tell.style.color = "red";
        Balance.innerHTML = new_balance;
        Balance.style.color = "red";
        transaction_cost = 0;
        h.innerHTML = '<h5 id="h5" class="confirmation_text">Failed. You do not have enough money in your M-PESA account to send Ksh <span id="amount_sent">' + amountSENT +'</span> to <span id="phone_number_new"> '+TELL+' </span> on <span id="DATE"> ' +date+' </span>. Your M-PESA balance is Ksh<span id="Balance"> '+ mpesa_balance +' </span>. Transaction cost, Ksh <span id="Transaction"> '+ transaction_cost +' </span>. Amount you can transact within the day is 299,860.00. Use M-PESA app to send money conviniently mpesaapp.page.link/ggGV</h5>'


        // h.innerText = "Failed. You do not have enough money in your M-PESA account to send Ksh " + amountSENT +" to "+TELL+". Your M-PESA balance is Ksh"+ mpesa_balance +". Dial *334# to register for the M-PESA overdraw Services Fuliza.";
        amountSENTcolor.style.color = "red";
        Tell.style.color = "red";
        Balance.style.color = "red";
    };


     

}
