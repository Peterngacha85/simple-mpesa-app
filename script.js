const allServicesBtn = document.getElementsByClassName('services_hide');
const single_service = document.getElementsByClassName('single_service');
const HOME = document.getElementsByClassName('HOME');
const confirmation = document.getElementById('confirmation_message');
const confirmation_failed = document.getElementsByClassName('confirmation_text');
const phoneNumberNew = document.getElementById('phone_number_new');
const amount_to_Send = document.getElementById('amount_to_Send');
// const amount = document.getElementById("amount");
const amountSent = document.getElementById("amount_sent");

const h = document.getElementById('h5');


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


let mpesa_balance = 1800;
    date = Date();

    function amountToSend(){
        amount_to_Send.style.zIndex = 1;
        console.log("********** method is okay ***********");
    }

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
    // date 
    const current_date = document.getElementById("DATE");
    current_date.innerHTML = date;
    // Balance 
    const Balance = document.getElementById('Balance');
    let amountSENT =  parseInt(document.getElementById("Amount").value);
    const amountSENTcolor = document.getElementById("Amount");
    let new_balance = mpesa_balance - amountSENT;
    if(mpesa_balance > amountSENT){
        Balance.innerHTML = new_balance;
        Balance.style.color = "red";
    }else {

        Tell.style.color = "red";
        h.innerText = "Failed. You do not have enough money in your M-PESA account to send Ksh " + amountSENT +" to "+TELL+". Your M-PESA balance is Ksh"+ mpesa_balance +". Dial *334# to register for the M-PESA overdraw Services Fuliza.";
        amountSENTcolor.style.color = "red";
        TELL.style.color = "red"
    }}
