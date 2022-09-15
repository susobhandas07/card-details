console.log('holla');

inputs=document.getElementsByTagName("input");
let ec=[1,1,1,1,1];
let k=4;

function countString(str, letter) {
    let count = 0;

    // looping through the items
    for (let i = 0; i < str.length; i++) {

        // check if the character is at that position
        if (str.charAt(i) == letter) {
            count += 1;
        }
    }
    return count;
}

inputs[0].addEventListener("focusout",()=>{
    if(!inputs[0].value.includes(" ") || countString(inputs[0].value," ")>1){
        document.getElementById("name-error").innerText="worng format";
        inputs[0].classList.add("error");
        ec[0]=1;
    }
    else{
        document.getElementById("card-owner").children[0].innerHTML=inputs[0].value;
        document.getElementById("name-error").innerText="";
        inputs[0].classList.remove("error");
        ec[0]=0;
    }
})

inputs[1].onkeydown = function () {
    if (inputs[1].value.length==k){
        inputs[1].value+=" ";
        k+=5;
        console.log(k);
    }
}

inputs[1].addEventListener("focusout",()=>{
    if (inputs[1].value.length!=20){
        document.getElementById("number-error").innerText="worng format";
        inputs[1].classList.add("error");
        ec[1]=1;
    }
    else if(/[a-zA-Z]/.test(inputs[1].value)){
        document.getElementById("number-error").innerText="worng format, numbers only";
        inputs[1].classList.add("error");
        ec[1]=1;
    }
    else{
        document.getElementById("number-error").innerText="";
        inputs[1].classList.remove("error");
        document.getElementById("card-no").innerText=inputs[1].value;
        ec[1]=0;
    }
})

inputs[2].addEventListener("focusout",()=>{
    if (inputs[2].value.length==0 ){
        document.getElementById("date-error").innerText="cannot be blank";
        inputs[2].classList.add("error");
        ec[2]=1;
    }
    else if (inputs[2].value>12 ||  inputs[2].value<0){
        inputs[2].classList.add("error");
        document.getElementById("date-error").innerText="invalid input";
        ec[2]=1;
    }
    else if(inputs[2].value.length==1){
        inputs[2].value="0"+inputs[2].value;
        textm.innerHTML=inputs[2].value+textm.innerHTML.substring(2);
        inputs[2].classList.remove("error");
        document.getElementById("date-error").innerText="";
        ec[2]=0;
    }
    else{
        textm=document.getElementById("card-owner").children[1];
        textm.innerHTML=inputs[2].value+textm.innerHTML.substring(2);
        inputs[2].classList.remove("error");
        document.getElementById("date-error").innerText="";
        ec[2]=0;
    }
})

inputs[3].addEventListener("focusout",()=>{
    if (inputs[3].value.length==0){
        document.getElementById("date-error").innerText="cannot be blank";
        inputs[3].classList.add("error");
        ec[3]=1;
    }
    else if(inputs[3].value.length==1){
        inputs[3].value="0"+inputs[3].value;
        inputs[3].classList.remove("error");
        document.getElementById("date-error").innerText="";
        ec[3]=0;
    }
    else{
        texty=document.getElementById("card-owner").children[1];
        texty.innerHTML=texty.innerHTML.substring(0,3)+inputs[3].value;
        inputs[3].classList.remove("error");
        document.getElementById("date-error").innerText="";
        ec[3]=0;
    }
})

inputs[4].addEventListener("focusout",()=>{
    if (inputs[4].value.length<3){
        inputs[4].classList.add("error");
        document.getElementById("cvc-error").innerText="cannot be blank";
        ec[4]=1;
    }
    else{
        document.getElementById('cvv').innerText=inputs[4].value;
        inputs[4].classList.remove("error");
        document.getElementById("cvc-error").innerText="";
        ec[4]=0;
    }
})


document.getElementById("submit").addEventListener('click',()=>{
    if(! ec.includes(1)){
        document.getElementById("form").classList.add("hidden");
        document.getElementById("page2").classList.remove("hidden");
    }
})
document.getElementById("continue").addEventListener("click",()=>{
    location.reload();
})
