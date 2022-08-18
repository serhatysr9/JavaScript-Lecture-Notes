// BOOLEANS

let isLightOn = true;
let isRaining = false;
let isHungry = false;
let isMarried = true;
let truValue = 4 > 3; // true   karşılaştırma
let falseValue = 4 < 3; // false    karşılaştırma

// Truthy values

/* sıfır dışındaki tüm pozitif ve negafif sayılar
All strings are truthy except an empty string ('')
The boolean true
*/
// Falsy values

/*  0
0n
null
undefined
NaN
the boolean false
'', "", ``, empty string
*/

// Undefined => değer atanmamış
console.log(firstName); // undefined

// Null  => değeri olmayan
let empty = null;
console.log(empty); // Null değeri yok

// OPERATORS

// Assignment operators  => "=" ATAMA Operatörü

x = (y) => (x = y);
x += (y) => (x = x + y);
x -= (y) => (x = x - y);
x /= (y) => (x = x / y);
x *= (y) => (x = x * y);
x %= (y) => (x = x % y);
x **= (y) => (x = x ** y);

let numOne = 4;
let numTwo = 3;
let sum = numOne + numTwo;
console.log(sum); // 12

// Comparison Operators => KARŞILAŞTIRMA Operatörü

x == y; // => x ve y'nin sadece değer olarak eşitliğini kontrol eder. Ör:5 =='5' true
x === y; //  => x ve y'nin hem değer hemde data type olarak eşitliğini kontrol eder. Ör:5 =='5' false
x != y; // => x eşit değil y'ye
x < y;
x > y;
x >= y;
x <= y;

// Logical Operators => MANTIKSAL Operatörler

// && ampersand (Ve operatörü)

const check = 4 > 3 && 10 > 5; // true && true -> true
const check1 = 4 > 3 && 10 < 5; // true && false -> false
const check2 = 4 < 3 && 10 < 5; // false && false -> false

// || pipe or operator (yada Operatörü)

const check3 = 4 > 3 || 10 > 5; // true  || true -> true
const check4 = 4 > 3 || 10 < 5; // true  || false -> true
const check5 = 4 < 3 || 10 < 5; // false || false -> false

//! Negation (Olumsuzlama)

let check6 = 4 > 3; // true
let check7 = !(4 > 3); //  false
let isLightOn1 = true;
let isLightOff1 = !isLightOn; // false
let isMarried1 = !false; // true

// Increment Operator => Arttırma Operatörü
// Pre-increment => önceden arttırma
let count1 = 0;
console.log(++count); // 1
console.log(count); // 1
// Post-increment => önceden arttırma  NOT: En çok kullanılan budur
let count = 0;
console.log(count++); // 0
console.log(count); // 1

// Decrement Operator => Azaltma operatörü. artırma ile aynı mantık

//TERNARY Operator => Üçlü Operatör Koşul sunmamızı sağlıyor. NOT: En önemli operatör çok iyi öğren
// Koşul ? true : false => ? doğruysa bunu yap  =>  : yanlışsa bunu yap

let a = 5,
  b = 7;
console.log(b > a ? "evet b a'dan büyük" : "hayır  b a'dan küçük");

let isRaining1 = true;
isRaining1
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
isRaining1 = false;

isRaining1
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");

//   Window Methods

//   Window alert() method => ekranın üftünde bilgilendirmme kutucuğu açar
let message = `Osman Arjin ne yapıyorsun `;
alert(message);

// Window prompt() method  // bilgilendirme kutusunda bir input bölümü açar ve veri girişi sağlar
let number = prompt("Enter number", "number goes here"); // 1. değer inputun tanımı 2. değer (zorunlu değil) defaultvalue
console.log(number);

// Windows confirm() method  onay => bildirim penceresinde onay penceresi açılır

let sor = confirm("Osman, silmek isteğine emin misin?");
console.log(
  sor
    ? "insallah bir osmanlık yapmadın. Aha sildim. Daha gitti dönüşü yok"
    : "Ne boş boş uğraştırıyorsun Osman!"
);

// DATE OPJECT

getFullYear(); // => (yyyy) 2022
getMonth(); // => (0-11)  3
getDate(); // => (1-31) 21
getHours(); // => (0-23) 14
getMinutes(); // => (0-59) 47
getSeconds(); // => (0-59) 39
getDay(); // => (0-6) 6

// Creating a time object => Zaman nesnesi oluşturma
let date = new Date();
console.log(date); //  Thu Aug 18 2022 16:06:28 GMT+0300 (GMT+03:00)
console.log(date.getFullYears()); // 2022
console.log(date.getMonth()); // 7
console.log(date.getDate()); // 21
console.log(date.getHours()); // 13
console.log(date.getMinutes()); // 37
console.log(date.getSeconds()); // 17
console.log(date.getDay()); // 6
