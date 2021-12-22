function compute()
{
    //create references to the input elements we wish to validate
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    var amount = interest + principal;

    // I make sure it's a number
    if(years<=0){
        alert('Enter a positive number');
        years.focus();
        return false;
    }
    // validation for "principal" input box 
    if(principal<=0){
        alert('Enter a positive number');
        document.getElementById("principal").focus();
        return false;
    }

    // I make sure output contains the relevant values
    document.getElementById("result").innerHTML=
            "<strong>If</strong> you deposit <mark>"+principal
            +"</mark>,<br><strong>at</strong> an interest rate of <mark>"+rate
            +"%.</mark>\<br\><strong>You</strong> will receive an amount of <mark>"
            +amount+"</mark>,\<br\><strong>in</strong> the year <mark>"
            +year+"</mark>\<br\>" 
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
