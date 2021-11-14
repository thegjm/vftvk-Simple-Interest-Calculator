function compute(){
    //variables and some math from instructions
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    
    /*This is a much nicer way of formatting strings:
    the quote above ~ on keyboard-> `String around the ${variable} and more string ${otherJS}` rinse and repeat */
    document.getElementById("result").innerHTML=`If you deposit <span class="highlight">${principal}</span>,<br/>
    at an interest rate of <span class="highlight">${rate}%</span>.<br/>
    You will receive an amount of <span class="highlight">${interest}</span>,<br/>
    in the year <span class="highlight">${year}</span>`;
    //also, changed innerText to innerHTML

}

//updates the html for Rates
function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText= `${rateval}%`;
}

//checks that Amount (principal) is not blank and is a positive number greater than 0
function checkValue() {
    //setting principal value to var amount
    var amount = document.getElementById("principal").value;
    //placing focus on principal input if any one condition is true
    if((amount == "") || (amount == undefined) || (amount == NaN) || (amount <= 0)){
        alert("Enter a positive number");
        //resets values on the page if the principal is an invalid value
        document.getElementById("result").innerText = "";
        document.getElementById("principal").value = "";
        document.getElementById("rate").value = 10.25;
        updateRate();
        document.getElementById("years").selectedIndex = 0;
        //sets focus on the principal input box
        principal.focus();
        return false;
    }else{
    //runs compute() if other conditions are false
        return compute();
    }
}