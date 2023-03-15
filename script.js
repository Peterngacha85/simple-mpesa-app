const allServicesBtn = document.getElementsByClassName('services_hide');
const single_service = document.getElementsByClassName('single_service');
const HOME = document.getElementsByClassName('HOME');

function home(){
    allServicesBtn[0].style.zIndex = 1;
    single_service[0].style.zIndex = 0;
    single_service[1].style.zIndex = 0;
    single_service[3].style.zIndex = 0;
    single_service[4].style.zIndex = 0;
    single_service[5].style.zIndex = 0;
    single_service[2].style.zIndex = 0;



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
