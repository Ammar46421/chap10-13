// chap 10 & 11
var x = prompt("where is karachi?");
if (x === "Pakistan"){
    alert("Correct!")
}

if (x != "Pakistan"){
    alert("Incorrect!")
}

//chap 12

var yourTicketNumber = prompt("Input Your Ticket Number.")

if (yourTicketNumber == 4) {
    alert("you won rooh afza");
}

else  {
    alert("Better luck next time.");
}

// chap 13

var age = prompt("Enter Your Age.")

if (age <= 17){
    alert("Pay Rs10.")
}

if (age >= 18 && age <= 59){
    alert("Pay Rs20.")
}


if (age >= 60){
    alert("Free Entry.")
}

