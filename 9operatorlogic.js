const examScore = 70;
const hadirScore = 70;

const examPassed = examScore >= 75;
document.write("<br>");
document.write(examPassed); // false
document.write("<br>");
const hadirPassed = hadirScore >= 75;
document.write(hadirPassed); // false

const passed = examPassed && hadirPassed;
document.write("<br>"); // true
document.write(passed); // false
