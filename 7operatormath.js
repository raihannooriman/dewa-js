document.writeln("Operator Matematika");
//penjumlahan
let result = 1 + 2;
document.writeln("1+2=" + result); //3
let original = result;
//pengurangan
result = result - 1;
document.writeln(original + "-1=" + result); //2
original = result;
//perkalian
result = result * 2;
document.writeln(original + "*2=" + result); //4
original = result;
//pembagian
result = result / 2;
document.writeln(original + "/2=" + result); //2
original = result;
//modulus
result = result + 8;
document.writeln(original + "+8=" + result); //10
original = result;
result = result % 3;
document.writeln(original + "%3=" + result); //1

// original = result adalah untuk menyimpan nilai result sebelumnya agar bisa di pakai di operasi selanjutnya

//augmented assignment

document.writeln("<br>");
document.writeln("augmented assignment");
let x = 1;
x += 2;
document.writeln("x=" + x); //3
x -= 1;
document.writeln("x=" + x); //2
x *= 2;
document.writeln("x=" + x); //4
x /= 2;
document.writeln("x=" + x); //2
x += 8;
document.writeln("x=" + x); //10
x %= 3;
document.writeln("x=" + x); //1

//increment dan decrement
document.writeln("<br>");
document.writeln("increment dan decrement");
let a = 1;
a++;
document.writeln("a=" + a); //2
a--;
document.writeln("a=" + a); //1
