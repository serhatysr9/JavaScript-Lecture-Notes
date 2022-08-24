// Functions =>  Bir uygulama geliştirirken çoğu zaman aynı işlemi birçok yerde gerçekleştirmemiz gerekir. Aynı kodu tekrar tekrar yazmaktansa, bu kodu fonksiyon aracılığıyla bir kere tanımlayıp istediğimiz yerde kullanmamızı sağlar
// belirli bir görevi yerine getirmek için tasarlanan bir kod blogudur.
// function name(params) {} şeklinde tanımlanır. parametre ekleyebiliriz yada değer ataması yapabiliriz
// dört farklı şekilde tanımlanır => Declaration function / Expression function / Anonymous function / Arrow function

//  Declaration function
function hello() {
  // bu şekilde ekrana herhangibir şey yazdırmaz. fonksiyonu çagırmamız gerekli
  console.log(`hello user`);
}

hello(); // fonk. çagırmış oluruz
let num = 7;
function hesap() {
  let tp = num * num;
  console.log(tp);
}
hesap(); // 49

// NOT: fonk. dışındaki bir değişkeni fonk. içinde kullanabiliriz ama fonk. içindeki değişkeni dışında kullanamayız
// NOT: fonk. dışında tanımlanan değişkenin kod sırası fonk. çağırdığımız kod sırasından önde olmalı

function hesap() {
  let num = 7;
  let tp = num * num;
  return tp; // geriye değer döndüren `tp`
}

console.log(hesap());

// Parametreli fonksiyonlar

function hesap1(num1, num2) {
  // let num1,num2 yi tanımlamak yerine paramtre olarak tanımlıyoruz.
  return num1 * num2; // işlem başka bir değişkene aktarılıp. retörn değişkenAdı 'da yapılabilir
}
let son = hesap1(8, 7); //fonksiyonu bir değişkene atayıp kullanabiliriz. Parametreler değerlerini fonk. çağrıldığı parantez içine yazılır

console.log(`sonuç : `, son); // => "sonuç : " 56

function array1(array2) {
  console.log(array2);
}
let dizi = [1, 2, 8, 5, 9, 8];
array1(dizi); // [1,2,8,5,9,8]

function forlufunc(osman) {
  let total = 0;
  for (let i = 0; i < dizi.length; i++) {
    total += dizi[i];
  }
  return total;
}

console.log(`toplam = `, forlufunc(dizi));

// parametre sayımızı bilmiyorsak yada her zaman değişecekse `arguments` ögesini kullanabiliriz. bu öge  tüm değerlerimi barındırıyor olarak davranıyor

function forlufunc(parametre) {
  let total1 = 0;
  for (let i = 0; i < arguments.length; i++) {
    total1 += arguments[i];
  }
  return total1;
}

console.log(`toplam = `, forlufunc(1, 5, 6, 7, 8, 9, 4, 5, 6, 7)); //"toplam = " 58

// ANONYMOUS Function isimsiz fonksiyon

const yazdır = function () {
  // fonksiyona isim verilmez ve bir değişkene atanabilir
  console.log(`hello hamdi`);
};

yazdır(); //

// EXPRESSION Function

const yazdır1 = function (name1) {
  // fonksiyona isim vermeden bir değişkene atayarak,parametre eklenebilir ve geriye değer döndürür
  return `hello ${name1}`;
};
console.log(yazdır(`hamdi`)); // "hello hamdi"

//Not: ANONYMOUS ve EXPRESSION Function sınırlı bir alanda kullanılması tercih ediliyor

// Self Invoking Functions => kendi kendini çagıran fonksiyonlar
(function (par1) {
  console.log(par1 * par1);
})(7);

let sonuc1 = (function (n) {
  return n * n;
})(7);
console.log(sonuc1);

// ARROW function

function sayhello() {
  return "hello";
}

let sayhello2 = () => "hello";
let sayhello3 = (name1, surname, age) =>
  `hello ${name1} ${surname} ${age} yaşındasın`;
console.log(sayhello); // hello
console.log(sayhello2); // hello
console.log(sayhello3(`osman`, `arjin`, 26)); // "hello osman arjin 26 yaşındasın"

// arrow fonk. arguments operatörü yok .onun yerine ... kullanılıyor. ve arguments ile neredeyse aynı

let toplama = (...numbers) => {
  // eğer istersek num1,num2 gibi parametrede ekleyebiliriz =>[4,8,7,9,8]
  console.log(numbers); // [2,6,4,8,7,9,8]
};

toplama(2, 6, 4, 8, 7, 9, 8);

let namesToUpper = (parametre) => {
  let isimdizisi = [];
  for (const isim of parametre) {
    isimdizisi.push(isim.toUpperCase());
  }
  return isimdizisi;
};
const names = ["Osman", "hamdi", "cemşit", "muhittin", "arjin"];

console.log(namesToUpper(names));

// Function with default parameters => parametresi belirlenmiş fonksiyon

function osman(sayi1 = 5, sayi2 = 6, sayi3) {
  return sayi1 * sayi2 * sayi3;
}

console.log(osman(a, b, 2)); // 60

// EXERCISES

// declare ile ismini yazdır

function name(firstName, LastName) {
  console.log(`ismim: ${firstName} soyadım: ${LastName}`);
}
name(`SERHAT`, `YAŞAR`);

// diktörtgenin alanı ve çevresini hesaplayan 2 parametreli fonk. yaz
let hesap = (genişlik, uzunluk) => {
  let cevre = 2 * (genişlik + uzunluk);
  let alan = genişlik * uzunluk;
  console.log(`cevre= ${cevre} , alan=${alan}`);
};

hesap(11, 13);

// Dairenin alanını hesapla

let daire = (r) => {
  const PI = 3.14;
  let alan = PI * r * r;
  return alan;
};
console.log(daire(7));

let kg = prompt(`kilonuzu giriniz`),
  m = prompt(`boyunuzu giriniz`, `metre cinsinden`);
let bmı = () => {
  let kütleen = kg / (m * m);
  if (kütleen < 18.5) {
    console.log(`kitle index'iniz: ${kütleen}, cok zayıf `);
  }
  if ((18, 5 <= kütleen && 24.9 > kütleen)) {
    console.log(`kitle index'iniz: ${kütleen}, Normal`);
  }
  if (24.5 <= kütleen && 30 > kütleen) {
    console.log(`kitle index'iniz: ${kütleen}, kilolu`);
  }
  if (30 <= kütleen) {
    console.log(`kitle index'iniz: ${kütleen}, obez`);
  }
};
bmı();
