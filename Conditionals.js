// Conditionals (ıf, if else, switch  vb.) Koşullu ifadeler
// yapılacak işlemlerde koşulların doğruluğuna göre işlem seçimi yapmaya yarar

// If

if (condition /*(koşul)*/) {
  // Koşul doğruysa çalışacak kodlar yazılır
}

if ((num = 17)) {
  num > 0;
  console.log(`${num} sıfırdan büyüktür`); // 17 sıfırdan büyüktür
  console.log(num + ` sıfırdan büyüktür`); // 17 sıfırdan büyüktür
}

let isStudy = true;
if (isStudy) {
  console.log(`Evet o hala bir öğrenci`);
  ` koşulumuza true verdiğimiz için çalıştı. ama değeri vermeseydik yada false verseydik birşey yazmazdı `;
}

// ELSE => (hiçbir koşul doğru veya istenen sonuç değilse)

let islem = prompt(` 14+7  işleminin sonucu kaçtır`, `Sonucu Giriniz`);
if (islem == 21) {
  console.log(`Doğru cevap.`);
} else {
  console.log(`Yanlış cevap.`);
}

// ELSE IF => ( 2'den daha fazla koşul varsa )

let sayi = prompt("lütfen bir sayı giriniz", "sayi girisi yapiniz");
if (sayi === 17) {
  //Eğer sayı 17'ye eşitse
  console.log(`sayı 17\'ye eşit`);
} else if (sayi < 17) {
  //Eğer sayı 17'den küçükse
  console.log(`sayı 17\'den küçüktür`);
} else {
  //Eğer sayı 17'den büyükse
  console.log(`sayı 17\'den büyüktür`);
}

// Not: Eğer sartlardan herhangi biri dogruysa diger kosullara bakmaz.

// Switch => (if / else if/ else isleminin kisaltilmis halidir)

// NOT: sartlar uygun olsa bile tüm kosulları okur. Bunu engellemek icin 'break' komutu kullanılır

switch (
  true // kontrol edilecek veri
) {
  case sayi == 17: // kosul
    console.log(`sayi 17\'ye esittir`);
    break; // dogru ise devamını okumaz ve kodu burada kırar

  case sayi < 17:
    console.log(`sayi 17\'den kucuktur`);
    break;

  case sayi > 17:
    console.log("sayi 17'den buyuktur");
    break;
}

// Ternary Operators

console.log(sayi == 17 ? `sayi 17\'ye esit` : `sayi 17\'ye esit degil`);

let age = prompt("Enter your age:");
if (age >= 18) {
  console.log(`you can take driving licance`);
} else {
  let age1 = 18 - age;
  console.log(`you cant take driving licance. Please try ${age1} years later`);
}
switch (true) {
  case age >= 18:
    console.log(`you can take driving licance`);
    break;

  case age < 18:
    let age1 = 18 - age;
    console.log(
      `you cant take driving licance. Please try ${age1} years later`
    );
    break;
}
let a = 3,
  b = 13;
console.log(a >= b ? `a is greater than b` : `a is less than b`);

for (let i = 0; i < 2; i++) {
  let c = prompt(`sayi gir`);
  let kalan = c % 2;
  if (kalan == 0) {
    console.log(`kalan: ${kalan} so it is a even number`);
  } else {
    console.log(`kalan: ${kalan} so it is not a even number`);
  }
}

let note = prompt("Enter student's note");

switch (true) {
  case 100 > note && note >= 80:
    console.log(`your note: A`);
    break;
  case 79 > note && note >= 70:
    console.log(`your note: B`);
    break;
  case 69 > note && note >= 60:
    console.log(`your note: C`);
    break;
  case 59 > note && note >= 50:
    console.log(`your note: D`);
    break;
  case 49 > note && note >= 0:
    console.log(`your note: F`);
    break;
}

let month = prompt(`enter the name of this month `);
switch (true) {
  case month == `september` || month == `october` || month == `november`:
    console.log(`this month is : Autumn  `);
    break;
  case month == `december` || month == `january` || month == `february`:
    console.log(`this month is : Winter  `);
    break;
  case month == `march` || month == `april` || month == `may`:
    console.log(`this month is : spring `);
    break;
  case month == `june` || month == `july` || month == `august`:
    console.log(`this month is : summer `);
    break;
}
