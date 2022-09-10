const formSign=document.getElementsByClassName("form-sign")[0];
const formLog=document.getElementsByClassName("form-log")[0];
const signIn=document.getElementsByClassName("sign-in")[0];
const logIn=document.getElementsByClassName("log-in")[0];
signIn.style.borderBottom="5px solid rgba(127, 0, 0, 0.697)";
logIn.style.borderBottom="5px solid rgba(127, 0, 0, 0.697)";
// formSign.style.opacity=0;
formSign.style.visibility="hidden";
formSign.style.opacity=0;
openFormSign();
function openFormSign(){
    closeForms();
    formSign.style.display="block";
    signIn.classList.remove("bg-primary");
    signIn.style.borderBottom="none";
    signIn.style.backgroundColor="whitesmoke";
    formSign.style.opacity=1;
    formSign.style.visibility="visible";
}
function openFormLog(){
    closeForms();
    formLog.style.display="block";
    logIn.classList.remove("bg-primary");
    logIn.style.borderBottom="none";
    logIn.style.backgroundColor="whitesmoke";
}
function closeForms(){
    formSign.style.visibility="hidden";
    formSign.style.opacity=0;
    formSign.style.display="none";
    signIn.classList.add("bg-primary");
    signIn.style.borderBottom="5px solid #0044aa";
    signIn.style.backgroundColor="none";

    formLog.style.display="none";
    logIn.classList.add("bg-primary");
    logIn.style.borderBottom="5px solid #0044aa";
    logIn.style.backgroundColor="none";

}

            //sign form validation start

var signUser = document.getElementById('sign-user');
var signEmail = document.getElementById('sign-email');
var signPass = document.getElementById('sign-pass');
var signNum = document.getElementById('sign-num');
var formSignDivs=document.querySelectorAll("body div#body-container div#form-container div.form-sign>div");
const showpasswordShow=document.getElementsByClassName('showpassword-show')[0];
const showpasswordHide=document.getElementsByClassName('showpassword-hide')[0];
const signNext=document.getElementById("sign-next");
const signBack=document.getElementById("sign-back");
signNext.addEventListener("click",increaseX);
signBack.addEventListener("click",decreaseX);
var signDivsArr=[];
var a;
var x=0;
function formFirstStep(){
    for(n=0;n<formSignDivs.length;n++){
        signDivsArr.push(formSignDivs[n]);
    }
    for(a=0;a<formSignDivs.length;a++){
        signDivsArr[a].style.display="none";
    }
    signDivsArr[x].style.display="block";
}
formFirstStep();
function checkButtons(){
    if(!(x==formSignDivs.length-1)){
        signNext.innerHTML="بعدی";
    }
    if(x==formSignDivs.length-1){
        signNext.innerHTML="ساخت اکانت";
    }   
    if(x>0){
        signBack.disabled=false;
    }
    if(x==0){
        signBack.disabled=true;
    }
}
checkButtons();
function increaseX(){
    var signInputValidation="false";
    switch(x){
        case 0 :
            signInputValidation=checkSignUser();
            break;
        case 1 :
            signInputValidation=checkSignEmail();
            break;
        case 2 :
            signInputValidation=checkSignPass();
            break;
        case 3 :
            signInputValidation=checkSignNum();
            break;
    }
    if((x==formSignDivs.length-1)&&(signInputValidation=="true")){
        x=x;
        signFormSubmit();
    }else if(signInputValidation=="true"){
        x=x+1;
        checkButtons();
        nextInput();    
    }else if(signInputValidation=="false"){
        x=x;
    }
    console.log(x,formSignDivs.length-1);
}
function decreaseX(){
    if(x==0){
        x=x;
    }else{
        x=x-1;
    }
    checkButtons();
    backInput();
}
function nextInput(){
    signDivsArr[x].style.display="block";
    signDivsArr[x-1].style.display="none";
}
function backInput(){
    signDivsArr[x].style.display="block";
    signDivsArr[x+1].style.display="none";
}
function signPassHide(){
    if(signPass.type==="password"){
        signPass.type="text";
    }
    showpasswordShow.style.display="block";
    showpasswordHide.style.display="none";
}
function signPassShow(){
    if(signPass.type==="text"){
        signPass.type="password";
    }
    showpasswordShow.style.display="none";
    showpasswordHide.style.display="block";
}
function signFormSubmit(){
    alert("your information saved and your account created");
}

                // sign form check inputs start

const userErrorNull = document.getElementsByClassName("user-error-null");
const userErrorRepet = document.getElementsByClassName("user-error-repet");
const userErrorRegex = document.getElementsByClassName("user-error-regex");

const emailErrorNull = document.getElementsByClassName("email-error-null");
const emailErrorRepet = document.getElementsByClassName("email-error-repet");
const emailErrorRegex = document.getElementsByClassName("email-error-regex");

const passErrorNull = document.getElementsByClassName("pass-error-null");
const passErrorRegex = document.getElementsByClassName("pass-error-regex");

const numErrorNull = document.getElementsByClassName("num-error-null");
const numErrorRegex = document.getElementsByClassName("num-error-regex");

var errorExist;
var signResult;

function checkSignUser(){
    var notIncludeArr = ["`","~","$","%","^","(",")","-","=","+","{","}","[","]","/","?",",",";",":",">","<","|","'"," "];
    errorExist="false";
    signResult="false";
    userErrorRegex[0].style.display="none";
    userErrorNull[0].style.display="none";


    if(signUser.value==""){
        errorExist="true";
        userErrorNull[0].style.display="block";
    }
    for(h=0;h<notIncludeArr.length;h++){
        var testString=notIncludeArr[h];
        if(signUser.value.includes(testString)){
            errorExist="true";
            userErrorRegex[0].style.display="block";
        }
    }
    if(errorExist=="false"){
        signResult="true";
    }
    return signResult;
}
function checkSignEmail(){
    var signEmailReg = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    emailErrorNull[0].style.display="none";
    emailErrorRegex[0].style.display="none";
    errorExist="false";
    signResult="false";
    if(signEmail.value==""){
        errorExist="true";
        emailErrorNull[0].style.display="block";
    }
    if(!(signEmailReg.test(signEmail.value))&&!(signEmail.value=="")){
        errorExist="true";
        emailErrorRegex[0].style.display="block";
    }



    if(errorExist=="false"){
        signResult="true";
    }
    return signResult;
}
function checkSignPass(){
    var notIncludeArr = ["`","~","$","%","^","(",")","-","=","+","{","}","[","]","/","?",",",";",":",">","<","|","'"," "];
    errorExist="false";
    signResult="false";
    passErrorNull[0].style.display="none";
    passErrorRegex[0].style.display="none";
    if(signPass.value==""){
        errorExist="true";
        passErrorNull[0].style.display="block";
    }
    for(h=0;h<notIncludeArr.length;h++){
        var testString=notIncludeArr[h];
        if(signPass.value.includes(testString)||(signPass.value.length>0&&signPass.value.length<8)){
            errorExist="true";
            passErrorRegex[0].style.display="block";
        }
    }


    if(errorExist=="false"){
        signResult="true";
    }
    return signResult;
}
function checkSignNum(){
    var signNumReg = new RegExp('09(1[0-9]|3[1-9]|2[1-9]|0[1-9])-?[0-9]{3}-?[0-9]{4}');
    numErrorNull[0].style.display="none";
    numErrorRegex[0].style.display="none";
    errorExist="false";
    signResult="false";

    if(signNum.value==""){
        errorExist="true";
        numErrorNull[0].style.display="block";
    }
    if(!(signNumReg.test(signNum.value))&&!(signNum.value=="")){
        errorExist="true";
        numErrorRegex[0].style.display="block";
    }


    if(errorExist=="false"){
        signResult="true";
    }
    return signResult;
}


                // sign form check inputs end

                // sign form validation end

                // log form validation start

var logUser = document.getElementById('log-user');
var logPass = document.getElementById('log-pass');
const showpasswordShow1=document.getElementsByClassName('showpassword-show1')[0];
const showpasswordHide1=document.getElementsByClassName('showpassword-hide1')[0];
const logSubmit=document.getElementById("log-submit");
logSubmit.addEventListener("click",checkLogInputs);

function logPassHide(){
    if(logPass.type==="password"){
        logPass.type="text";
    }
    showpasswordShow1.style.display="block";
    showpasswordHide1.style.display="none";
}
function logPassShow(){
    if(logPass.type==="text"){
        logPass.type="password";
    }
    showpasswordShow1.style.display="none";
    showpasswordHide1.style.display="block";
}


                    // log form check inputs start

const userErrorNull1 = document.getElementsByClassName("user-error-null1");
const passErrorNull1 = document.getElementsByClassName("pass-error-null1");
var errorUserExist;
var errorPassExist;
var logUserResult;
var logPassResult;
// var logInputValidation;

function checkLogInputs(){
    checkLogPass();
    checkLogUser();
    if(logPassResult=="true"&&logUserResult=="true"){
        alert("welcome");
    }    
}
function checkLogUser(){
    errorUserExist="false";
    logUserResult="false";
    userErrorNull1[0].style.display="none";


    if(logUser.value==""){
        errorUserExist="true";
        userErrorNull1[0].style.display="block";
    }

    if(errorUserExist=="false"){
        logUserResult="true";
    }
}
function checkLogPass(){
    errorPassExist="false";
    logPassResult="false";
    passErrorNull1[0].style.display="none";
    if(logPass.value==""){
        errorPassExist="true";
        passErrorNull1[0].style.display="block";
    }

    if(errorPassExist=="false"){
        logPassResult="true";
    }
}
                // log form check inputs end

                // log form validation end

var backgroundVideo= document.getElementById('background-video');
// var desktopOrMobile=document.getElementById('desktop-or-mobile');
function myFunction(screenSize) {
    if (screenSize.matches) { // If media query matches
        // desktopOrMobile.src='index.js';
        backgroundVideo.pause();
    }
    else{
        // desktopOrMobile.src="index1.js";
        backgroundVideo.load();
    }
}
  
var screenSize=window.matchMedia("(max-width: 780px)");
myFunction(screenSize); // Call listener function at run time
screenSize.addListener(myFunction);