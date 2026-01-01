// -----------Chapter no 31 to 34--------------

// Question no 1

// var today = new Date();
// document.write(today);

// Question no 2(a)
// var today = new Date();
// var month = today.getMonth();
// document.write(month);

// // Question no 2(b)

// var today = new Date();
// var day = today.getDay();
// document.write(day);

// // Question no 2(c)

// var today = new Date();
// var day = today.getDate();
// document.write(day);

// // Question no 3

// var dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var today = new Date();
// var day = today.getDay();
// document.write("Today is " + dayName[day]);

// Question no 4

// var today = new Date();
// var day = today.getDay();
// if (day === 0 || day === 6) {
//     document.write("It's Fun Day");
// }

// Question no 5

// var today = new Date();
// var day = today.getDate();
// if (day < 16) {
//     document.write("First fifteen days of the month");
// }
// else {
//     document.write("Last days of the month");
// }

// Question no 6

// var today = new Date();
// document.write("Current Date: " + today + "<br>");
// var mili = today.getTime();
// document.write("Elapsed miliseconds since January 1, 1970: " + mili + "<br>");

// var mili = today.getTime();
// var sec = mili / 60000;
// document.write  ("Elapsed minutes since January 1, 1970: " + sec );

// Question no 7

// var today = new Date();
// var hour = today.getHours();
// if (hour < 12) {
//     document.write("It's AM");
// }   
//     else {
//         document.write("It's PM");
//     }   

// Question no 8

// var laterDate = new Date("june 03 2003");
// document.write(laterDate);

// Question no 9

// var FirstRamadan = new Date("Feb 18,2026");
// var today = new Date();
// var diff = FirstRamadan.getTime() - today.getTime();
// var days = Math.floor(diff / (1000 * 60 * 60 * 24));
// document.write(days + " days have passed since 1st Ramadan, 2023");

// Question no 10


// var today = new Date();
// document.write("On reference date " + today + ", <br>");
// var date = new Date("Jan 01, 2015");
// var diff = today.getTime() - date.getTime();
// var seconds = Math.floor(diff / 1000);
// document.write(seconds + " seconds had passed since beginning of 2015");

// Question no 11

// var today = new Date();
// document.write("Current date: " + today + "<br>");
// var date = new Date();
// date.setHours(date.getHours() - 1);
// document.write("1 hour ago, it was " + date);

// Question no 12  

// var today = new Date();
// document.write("Current date: " + today + "<br>");
// var date = new Date();
// date.setFullYear(date.getFullYear() - 100);
// document.write("100 years back, it was " + date);   

// Question no 13

// var age = prompt("Enter your age");
// document.write("Your age is " + age + "<br>");
// document.write("Your birth year is " + (2025 - age));

// Question no 14

// var customerName = prompt("Enter your name");
// var CurrentMonth = prompt("Enter current month");
// var numberOfUnits = prompt("Enter number of units");
// var chargesPerUnit = prompt("Enter charges per unit");
// var netAmountPayable = numberOfUnits * chargesPerUnit;
// var latePaymentSurcharge = 50;
// var grossAmountPayable = netAmountPayable + latePaymentSurcharge;
// document.write("<h1>K-Electric Bill</h1>"); 
// document.write("Customer Name: " + customerName + "<br>");
// document.write("Current Month: " + CurrentMonth + "<br>");
// document.write("Number of units: " + numberOfUnits + "<br>");
// document.write("Charges per unit: " + chargesPerUnit + "<br>");
// document.write("Net Amount Payable (within Due Date): " + netAmountPayable + "<br>");
// document.write("Late Payment Surcharge: " + latePaymentSurcharge + "<br>");
// document.write("Gross Amount Payable (after Due Date): " + grossAmountPayable); 