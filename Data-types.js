// DATA TYPES  Primitive(ilkel)  and Non-Primitive (ilkel olmayan)

// Primitive => number , string , booleans (true/false) , null, undefined
// Verilen değerler değiştirilemez
let world = "javaScript";
world[0] = "y"; //1. değeri 'y' yapmaya yarar
console.log(world); // ekrana JavaScript yazar. Çünkü primitive veriler değiştirilemez

//Karşılaştırma yaparken değerlere öre karşılaştırma yapar
let numberOne = 11,
  numberTwo = 11;
console.log(numberOne == numberTwo); //ekrana False yazar

let js = "JavaScript";
let py = "Python";

console.log(js == py); //false

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); // false

// Non-Primitive => Object , function , arrays
// Verilen değerler değiştirilebilir
let nums = [1, 2, 3, 4, "osman", "arjin"]; // it's an array
nums[0] = 21;
console.log(nums); //ekrana 21,2,3,4,osman,arjin yazar

//Karşılaştırma yaparken değerler değil referanslar karşılaştırılır
let num1 = [1, 2, 3, 4, "osman", "arjin"];
let num2 = [1, 2, 3, 4, "osman", "arjin"];
console.log(num1 == nums2); //ekrana False yazar. Çünkü referanslar aynı değil

let userOne = {
  // it's an Object
  name: "Osman-Arjin",
  country: "Indonesia",
  role: "teaching",
};

let userTwo = {
  name: "Osman-Arjin",
  country: "Indonesia",
  role: "teaching",
};
console.log(usurOne == userTwo); // False

let num3 = [1, 2, 3, 4, 5, 6];
num4 = num3;
console.log(num3 == num4); // True Çünkü referanslar aynı

// Numbers Data
let age1 = 35;
const gravity = 9.81; // we use const for non-changing values
let mass = 72;

// Math Object

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

const PI = Math.PI;

console.log(math.round(PI)); //  3 to round values to the nearest number
console.log(math.floor(PI)); //  3 rounding down
console.log(math.ceil(PI)); //  4 rounding up
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, returns the minimum value
console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, returns the maximum value

const randNum = Math.random(); // creates random number between 0 to 0.999999
console.log(randNum);

// create random number between 0 to 10

const num = Math.floor(Math.random() * 11); // creates random number between 0 and 10
console.log(num);

// create random number between 20 to 100
var ustSayi = 100;
var altSayi = 20;

var sayi = Math.random();

sayi = sayi * (ustSayi - altSayi);
sayi = Math.floor(sayi) + altSayi;

console.log(sayi);

// vaya geriye değer döndüren fonsiyonla yapabiliriz
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
randomInt(0, 100);

//Absolute value
console.log(Math.abs(-10)); // 10

//Square root
console.log(Math.sqrt(100)); // 10

console.log(Math.sqrt(2)); // 1.4142135623730951

// Power
console.log(Math.pow(3, 2)); // 9

// STRİNG Data

let name3 = "osman",
  space = " ";
secondName = "arjin";

let fullName = name3 + space + secondName;
console.log(fullName); // osman arjin

// Birden fazla satırlık string yazarken backtick `` kullanılır
let paragraf = `loremkjb ıhoıh
asfasfas
fadfedf
efewf`;

console.log(paragraf); //burada göründüğü gibi alt alta yazar
/*
\n: new line
\t: Tab, means 8 spaces
\\: Back slash
\': Single quote (')   let isim='arjin\'in arabası' arjin'in arası yazdırır
\": Double quote (")    */

//Syntax
let name4 = "osman",
  surname = "hamdi";

let fullName1 = `${name4} ${surname}`; // javaScript ifadesi kullanılacaksa öncelile dolar işareti konur
console.log(fullName1); // osman hamdi

let a = 2;
let b = 3;
console.log(`${a} is greater than ${b}: ${a > b}`); // injecting the data dynamically
//2 is greater than: 3 false

// STRING METHODS

// .length     =>   Uzunluğu bulmak için
let name5 = "OsmanHamdi";
console.log(name5.length); //length kodu bize kaç karakterden oluştuğunu gösterir
let lastletter = name5[9];
let thirdLetter = name5[2];
console.log(lastletter); // ekrana i yazar
console.log(thirdLetter); //ekrana m yazar

//.toUpperCase()  /  toLowerCase()     =>  Kelimeyi büyük harflerle yazmak için

let string = "JavaScript";
string = string.toUpperCase(); // toLowerCase() HArflerin hepsini küçültür
console.log(string); // JAVASCRIPT

// substr  /  Substring  /  split

let name6 = "OsmanHamdi";
name6 = name6.substr(4, 6); // 4. indexten itibaren 6 karakteri alır
name6 = name6.substr(4); // bitiş indeksi verilmezse kalan tüm karakterleri alır
console.log(name6);

name6 = name6.substring(4, 6); // 4. index ile 6 index arasındaki karakterleri alır.
// NOT:Başlangıç indeksi alınır ama bitiş indeksi alınmaz .
name6 = name6.substring(4); // bitiş indeksi verilmezse kalan tüm karakterleri alır

// .split("")     => Alt metni bölme parçalama

let name7 = "Osman hamdi Tanpınar";
böl = name7.split(" "); // her boşluktan itibaren ayrı bir string kabul eder (array'e çeviriyor)
// eğer sadece '' koyarsak
console.log(böl); // ["Osman","hamdi","Tanpınar"] yazar
console.log(name7.split("")); //["O","s","m","a","n"," ","h","a","m","d","i"," ","T","a","n","p","ı","n","a","r"]

// .trim("")     => Trim

let name8 = "   osman  hamdi tanpınar  ";
console.log(name8.trim(" ")); // baştaki ve sondaki boşlukları siler

// .includes("")     =>  Aradığın içerik var mı yok mu

let paragraph = `osman arjin bir gün bir ormana gitti ve kurdu görünce arkasına bakmadan kaçıp gitti`;
console.log(paragraph.includes("osman arjin")); // true
console.log(paragraph.includes("Osman")); // false büyük küçük karakter önemli
console.log(paragraph.includes("recaizade")); // false

// İçeriğin içinde istediğimiz kısımları değiştirmek için
//.replace("","")    / .replaceAll("","")
let paragraph1 = "arjin neredesin, arjin nasılsın";
console.log(paragraph1.replace("arjin", "osman")); // osman neredesin, arjin nasılsın
console.log(paragraph1.replaceAll("arjin", "osman")); // osman neredesin, osman nasılsın

// .charAt(n)   =>  n. indekteki karakter
console.log(paragraph1.charAt(2)); // [] yerine bunuda kullanabiliriz. bize 2.indexteki karakteri yazdırır

// karakterin yada kelimenin kaçıncı indexte olduğunu veya başladığını gösterir
//.indexOf("")   /   .lastIndexOf("")

console.log(paragraph1.indexOf("j")); // j'nin 2. indekte olduğunu gösterir
console.log(paragraph1.indexOf("neredesin")); // neredesin kelimesinin başlangıcının 6.indexte olduğunu gösterir

console.log(paragraph1.lastIndexOf("ı")); // 29 => en sonda bulunan ı harfinin index sırasını yazar
console.log(paragraph1.lastIndexOf("arjin")); // 17 => en sonda bulunan arjin kelimesinin index sırasını yazar

// .startsWith("") / .endsWith("")    => başlangıç ve bitiş kontrolü

console.log(paragraph1.startsWith("arjin")); // True => başlangıcın "arjin" olup olmadığını kontrol eder
console.log(paragraph1.startsWith("Arjin")); // False => başlangıcın "Arjin" olup olmadığını kontrol eder. A harfi büyük
console.log(paragraph1.startsWith("ar")); // True => başlangıcın "ar" olup olmadığını kontrol eder.

console.log(paragraph1.endsWith("nasılsın")); // True => bitişin "nasılsın" olup olmadığını kontrol eder
console.log(paragraph1.endsWith("Nasılsın")); // False => bitişin "Nasılsın" olup olmadığını kontrol eder. N harfi büyük
console.log(paragraph1.endsWith("ın")); // True => bitişin "ın" olup olmadığını kontrol eder.

// .search(/kelime/gi)   => kapsamlı arama yöntemi
let paragraph2 =
  "alt metindeki aradığımız kelimeyi daha kapsamlı aramımazı sağlar";
console.log(paragraph2.search("metin")); // 4.indekten başlar
console.log(paragraph2.search(/aradı/gi)); // 14. index.
// NOT: "gi" deki "g" global alanda ve "i" büyük küçük harf farkını kaldırıyor

// match
let paragraph3 = `regEx yani (//) ileriki konularda işlenecek. burada match komutuna bakacağız. Match aradağımız öge hakkında daha detaylı bilgi edinmemizi sağlar. match`;
console.log(paragraph3.match(/match/)); //match hakkındaki tüm bilgi verir.bulunanların hepsini, index no,group bilgisi,altmetnin tamamını verir.
// NOT: "g" global (in all text) ifadesi  eklemediği için. 1 tane bulur
console.log(paragraph3.match(/match/g)); // adet sayısını ve ["","" ] şeklinde gösterir. => 2 adet ["match","match"]
// NOT: 2 adet buldu çünkü diğeri büyük harfle başlıyor
console.log(paragraph3.match(/match/gi)); // => 3 adet ["match","Match","match"]

// .repeat()  => istenilen bir şeyi tekrarlama

let isim1 = "osman arjin";
let isim2 = "osman arjin ";
console.log(isim1.repeat(5)); // osman arjinosman arjinosman arjinosman arjinosman arjin
console.log(isim2.repeat(5)); // osman arjin osman arjin osman arjin osman arjin osman arjin

// Veri türünü değiştirme Casting

// parseInt() / Number()  / +   =>  String'i Int çevirme

let num4 = "21";
let numint = parseInt(num4);
let numint1 = Number(num4);
let numint2 = +num4;
console.log(numint);

// parseFloat() / Number / +   => String'i Float'a çevirmek

let num5 = "9.81";
let numFloat = parseFloat(num5); // int'te olduğu gibi "Number" ve "+" işaretide kullanılabilir
console.log(numFloat); // 9.81

// parseInt() => Float'ı Int'e çevirmek

let num6 = 9.81;
let numInt = parseInt(num6);

console.log(numInt); // 9

// .concat() => Birden Fazla kelimeyi birleştirme

let java = "30 Days Of ";
let ja = "JavaScript";
let ad = " osman arjin";
console.log(java.concat(ja).concat(ad)); //  30 Days Of JavaScript osman arjin
