// SCOPE (kapsama) => Kaydettiğimiz verilere erişebildiğimiz sınırlar. window/ global / local

// Window Scope => var let yada const kullanmadan tanımladığımız verler window düzeyindedir

ad = `osman`;
badad = 26; // consola.log'a yazdırmadan sayfa incele bölümünde console ekranına ad yazınca bie ad değişkenini değerini gösterir

// Global Scope // bulunduğumuz dosya içinde her yerden erişebildiğimiz alandır

let name = `Osman`;
let surname = `arjin`;
function isim() {
  console.log(name, surname); // osman arjin
  if (true) {
    let name = `hamdi`; // eger if içerisindeki değişkenlere let vermeseydik  cevap yine `osman arjin ` olacaktı. let vererek local düzeyinde yeni bir değişken olarak atamış olduk
    let surname = `cemşit`;
    console.log(name, surname); // hamdi cemşit
  }
  console.log(name, surname); // osman arjin
}

isim();
console.log(name, surname); //  osman arjin

// Local Scope => verilerimiz sadece belirli bölümlerde calışır tüm dosya içinde erişim sağlanmaz

function isim() {
  if (true) {
    let name = `hamdi`; //
    let surname = `cemşit`;
    console.log(name, surname); // hamdi cemşit
  }
  console.log(name, surname); // değişken tanımlanmamış hatası verir. çünkü if içindeki local olarak çalışıyor ve if dışında erişim sağlayamayız
}

isim();
console.log(name, surname); // değişken tanımlanmamış hatası verir. çünkü if içindeki local olarak çalışıyor ve if dışında erişim sağlayamayız

// Not: {} block scope denir
// NOT: var => function scope olarak'ta tanımlanıyor yani fonksiyon içinde var ile tanımlanan veriler fonksiyon dışında kullanılamaz ama diğer blok scopelarda kullanılan var verileri block skope dışında da erişilebilir.
// NOT: let & const block skope'tur ve block dışında erişilemez

function isim1() {
  var name1 = `hamdi`;
  console.log(name1); // hamdi
}
isim1();
console.log(name1); //Uncaught ReferenceError: name1 is not defined

if (4 < 5) {
  var name3 = `recaizade`;
  let name2 = `cemşit`;
  console.log(name2); // cemşit
}
console.log(name2); //Uncaught ReferenceError: name2 is not defined
console.log(name3); // recaizade

// OBJECT

let user = {}; // bu bir boş objedir
let person = {
  // bu bir obje ve aşagıda her biri bu nesnenin özellikleri ve o özelliklerin değerleridir
  firtName: "osman",
  surName: "Arjin",
  age: 26,
  skills: { sport1: `football`, sport2: `basketball` },
  city: `diyarbakır`,
  language: [`ingilizce`, `almanca`, `fıransızca`, `japonca`],
  isMarried: false,
  "phone number": 6565468165, // ' ' içine alarakta preporty ismi verebiliriz
  getFullName: function () {
    // arrow fonksiyonda this window'u kabul ediyor bu yüzden bu şekilde yazmamız gerekir
    return `${this.firtName} ${this.surName} `; // `this objenin kendisini ifade eder yani `person`
  },
};

//Özelliklere 2 yoldan ulaşabiliriz.
//1-) person.firstname => obje isminden sonra `.` ve preporty ismi yazılarak
console.log(person.isMarried ? `evli` : `evli değil`); // evli değil
console.log(person.skills.sport1); // football
console.log(person.language[1]); // almanca

//2-) person['phone number'] => bu şekilde de ayrı yazılmış isimlere ulaşabiliriz
console.log(person["phone number"]); // 6565468165
console.log(person["firtName"]); // osman  bu şekildede kullanılabilir

console.log(person.getFullName()); //osman Arjin

//özellik ekleyip çıkarabiliyoruz.
person.country = "turkey"; // country property'si ve value'su eklendi
person.skills.push(`çince`); // skills property'sine çince value'su eklendi
person.isMarried = true; // isMarried true olarak değiştirildi

// Object Methods

// 1-) Object.assign() => objeyi kopyalar ama orjinal objeyi bozmadan

let newPerson = Object.assign({}, user);
console.log(newPerson);

//2-)Object.keys() => // sadece preporty'leri yani key'leri yazdırır
let keys = Object.keys(person);

//3-)Object.values() => // sadece value'leri yazdırır
let values = Object.values(person);

//3-)Object.entries() => // her preporty ve value'sunu dizi olarak döndürür.
let entries = Object.entries(person); // ["firtName","osman"] ["surName","Arjin"] şeklinde

//4-)hasOwnProperty() => //   preporty'nın olup olmadığını true yada false döndürür.
console.log(person.hasOwnProperty("turkey")); //false çünkü bu bir value preporty değil
console.log(person.hasOwnProperty("firtName")); // true

//5-)Object.freeze('objeismi') => // objeyi oluşturduktan sonra bunu yazarsak obje üstünde hiçbir oynama yapılamaz

//5-)Object.seal('objeismi') => // objeyi oluşturduktan sonra bunu yazarsak obje üstünde güncelleme yapılabilir ama preporty eklemesi yada çıkarması yapılamaz
