let compare = 5 == 5;
document.writeln("5==5 " + compare); //true
document.writeln("<br>");
compare = 5 === "5";
document.writeln('5==="5" ' + compare); //false
document.writeln("<br>");
compare = 5 < 7;
document.writeln("5<7 " + compare); //true
document.writeln("<br>");
compare = 5 > 7;
document.writeln("5>7 " + compare); //false
document.writeln("<br>");
compare = 5 <= 7;
document.writeln("5<=7 " + compare); //true
document.writeln("<br>");
compare = 5 >= 7;
document.writeln("5>=7 " + compare); //false
document.writeln("<br>");
compare = 5 != 7;
document.writeln("5!=7 " + compare); //true
document.writeln("<br>");
compare = 5 !== "7";
document.writeln('5!=="7" ' + compare); //true
document.writeln("<br>");
compare = 5 == 7;
document.writeln("5==7 " + compare); //false
