



function plus_maius(phone,minusPlus, price){
    // number input
    const number=document.getElementById( phone+ "-number");
    const phoneNumberValue=number.value;
    let phoneNumber;

    // number input btn plus or maius check

    if(minusPlus==true){
        phoneNumber=parseInt(phoneNumberValue)+1;

    }else{
        phoneNumber=parseInt(phoneNumberValue)-1;

    }

    // number value
    if(phoneNumber>0){
    number.value= phoneNumber;
    }

    let phoneTotal=document.getElementById(phone+"-total")
    phoneTotal.innerText=price*phoneNumber;

    totalAmout()

}

// total ammount

function totalAmout(){
    const phoneNumber=document.getElementById( "phone-total");
    const caseNumber=document.getElementById( "case-total");
    
    const totalAmount=parseInt(phoneNumber.innerText)+parseInt(caseNumber.innerText);
    const tax=totalAmount/10;
    const totalPrice=totalAmount+tax;

    document.getElementById('sub-total').innerText=totalAmount;
    document.getElementById('tax-amount').innerText=tax.toFixed(3);
    document.getElementById('total-price').innerText=totalPrice

}





/* ------------phone plus button --------------------------*/
document.getElementById("phone-plus").addEventListener('click', function(){

    plus_maius('phone', true, 1219)
  
})

/* ------------phone maius button --------------------------*/
document.getElementById('phone-minus').addEventListener('click', function(){

    plus_maius('phone', false, 1219)

})
/* ------------phone plus button --------------------------*/
document.getElementById("case-plus").addEventListener('click', function(){

    plus_maius('case', true, 59)
  
})

/* ------------case maius button --------------------------*/
document.getElementById('case-minus').addEventListener('click', function(){

    plus_maius('case', false, 59)

})

