const allServicesBtn = document.getElementsByClassName('services_hide');
const single_service = document.getElementsByClassName('single_service');
const HOME = document.getElementsByClassName('HOME');
const confirmation = document.getElementById('confirmation_message');
const phoneNumberNew = document.getElementById('phone_number_new');
const amount_to_Send = document.getElementById('amount_to_Send');
// const amount = document.getElementById("amount");
const amountSent = document.getElementById("amount_sent");


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
    single_service[1].style.zIndex = 1;
    single_service[0].style.zIndex = 0;
}
function buy_airtime(){
    single_service[2].style.zIndex = 1;
    allServicesBtn[0].style.zIndex = 0;
}
function loan_saving(){
    single_service[3].style.zIndex = 1;
    allServicesBtn[0].style.zIndex = 0
}
function lipa_na_mpesa(){
    single_service[4].style.zIndex = 1;
    allServicesBtn[0].style.zIndex = 0;

}
function my_account(){
    single_service[5].style.zIndex = 1;
    allServicesBtn[0].style.zIndex = 0;
}


let mpesa_balance = 10000;
    date = Date();

    function amountToSend(){
        amount_to_Send.style.zIndex = 1;
        console.log("********** method is okay ***********");
    }

function confirmation_message(){
    amount_to_Send.style.zIndex = 0;
    confirmation.style.zIndex = 1 ;
    allServicesBtn[0].style.zIndex = 0;
    amountSent.innerText = document.getElementById("Amount").value;
    phoneNumberNew.innerText = document.getElementById("Phone").value;
}
