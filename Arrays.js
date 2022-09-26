// Arrays => [1,2,3,"osman","arjin", null,undefined ]

let arr = Array();
let ar = new Array();
let arr1 = [1, 2, 3, "osman", "arjin", null, undefined]; // bu şekillerde diziler oluşturulabilir.
console.log(arr1[3].split()); // dizinin 3.index'ini parçalara ayırır

let numbers = [0, 3.14, 37, 9.81, 98.6, 100];

console.log(numbers.length); // => kaç adet eleman olduğunu
console.log(numbers); // -> [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers[0]); //  -> 0      0.index
console.log(numbers[5]); //  -> 100     5.index

//Arrays'lar değiştirilebilir
numbers[0] = 21;
numbers[5] = 47; //  0. ve 5. index değiştirildi

// Not js kodları okuma islemini sırayla yaptıgı için  değişim islemlerini ekrana yazdırmadan once yapmak lazım

// Array'ları manipule etme methodları

//Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift bunlar kullanılır

// 1=> Array Constructor => Yapici diziler
let num = Array(7); // 7 elemanlı bir array olusturur ve istedigimiz sekilde doldurabiliriz

// 2=> Fill  => elemanları statik (sabit) değerler doldurmak
console.log(num.fill(8)); // [8,8,8,8,8,8,8]

// 3=> concat => farklı dizileri birlestirmeye yarar
let name1 = ["osman", "Arjin", "Bahattin"];
let name2 = ["Tanpınar"];
let name3 = ["3. adım"];

let con1 = name1.concat(name2).concat(name3);
console.log(con1); // ["osman","Arjin","Bahattin","Tanpınar","3. adım"]

// 4=> indexOf => bir dizide aradıgınız elemanın olup olmadıgını gösterir varsa kacıncı indexte oldugunu gösterir

console.log(name1.indexOf("Bahattin")); // 2 => 2. idexte, eger olmasaydı -1 döndürürdü

// lasftIndexOf => bir dizide aradıgınız elemanın sonuncusunun index numarasını verir
let name4 = ["osman", "Arjin", "Bahattin", "osman", "necmi", "Osman"];
console.log(name4.lastIndexOf("osman")); // 3. index  Ve  büyük kücük harf ayrımı yapar

const numbers = [1, 2, 3, 4, 5, 3, 1, 2];
console.log(numbers.lastIndexOf(2)); // 7. index
console.log(numbers.lastIndexOf(0)); // -1, yani böyle bir eleman yok
console.log(numbers.lastIndexOf(1)); //  6. index

// inculudes() => aradıgımız deger var mı yok mu => true false döndürür

let paragraph = `osman arjin bir gün bir ormana gitti ve kurdu görünce arkasına bakmadan kaçıp gitti`;
console.log(paragraph.includes("osman arjin")); // true
console.log(paragraph.includes("Osman")); // false büyük küçük karakter önemli

// toString => diziyi string'e donusturur
console.log(numbers.toString()); // "1,2,3,4,5"
console.log(name4.toString()); //"osman,Arjin,Bahattin,osman,necmi,Osman"

// join => diziyi birlestirir ve aradaki ifadenin ne olarak gösterilecegini belirler

console.log(name1.join()); // osman,Arjin,Bahattin
console.log(name1.join("")); //osmanArjinBahattin
console.log(name1.join(" ")); //osman Arjin Bahattin
console.log(name1.join(", ")); //osman, Arjin, Bahattin
console.log(name1.join(" # ")); //osman # Arjin # Bahattin

// slice("baslangıc","bitis") =>  istenen başlangıç ve bitiş index numaraları arasındaki degerleri keser
// NOT: normal bir parafta ise her harf, sayı ve boşluğu birer index olarak kabul eder
console.log(name4.slice(1, 6)); // ["Arjin","Bahattin","osman","necmi","Osman"]
console.log(paragraph.slice(1, 6)); // "sman "

// splice("baslangıc", "adet sayısı", "silinen yerine yazılacak", "silinen yerine yazılacak")
// dizide silinecek eleman ve yerine deger yazmayı saglar ( sadece silme islemi icinde kullanılabilir)
let name5 = ["osman", "Arjin", "Bahattin", "osman", "necmi", "Osman"];

console.log(name5.splice()); // tüm degerleri siler => []

let name6 = name5.splice(2, 2);
console.log(name5.splice(2, 2)); // ["Bahattin","osman"] sadece kesilen kısmı gösterir
console.log(name6); // yine ["Bahattin","osman"] sadece kesilen kısmı gösterir

name5.splice(2, 2, "recai", "zade");
console.log(name5); // ["osman","Arjin","recai","zadee","necmi","Osman"]
// === console.log(name5.splice(2,2,"recai" , "zade")) => ["osman","Arjin","recai","zadee","necmi","Osman"] sonuclar aynı

// push => dizinin sonuna yeni bir deger ekleriz

name5.push("sona eleman eklendi");
console.log(name5); // =>["osman","Arjin","Bahattin","osman","necmi","Osman","sona eleman eklendi"]

// pop => son index'i silmek icin kullanılır
//let name4 = ["osman", "Arjin", "Bahattin", "osman", "necmi", "Osman"];
let son1 = name4.pop();
let son2 = name4.pop();
console.log(son1, son2); // "Osman" "necmi"
console.log(name4); // ["osman","Arjin","Bahattin","osman"]

// shift =>  ilk index'i silmek icin kullanılır

let ilk1 = name4.shift();
let ilk2 = name4.shift();
console.log(ilk1, ilk2); //"osman" "Arjin"
console.log(name4); // ["Bahattin","osman","necmi","Osman"]

// unshift() => Array'ın basına eleman ekler
name4.unshift("ilk değer eklendi");
console.log(name4); // ["ilk değer eklendi","Bahattin","osman","necmi","Osman"]

// reverse => array elemanlarını tersine cevirir
console.log(name4.reverse()); // => ["Osman","necmi","osman","Bahattin","Arjin","osman"]
let isim = "Osman Arjin";
console.log(isim.split("").reverse().join()); //"n,i,j,r,A, ,n,a,m,s,O"
console.log(isim.split("").reverse().join("")); // "nijrA namsO"

// sort => sıralama yapar. Callback bölümünde daha detaylı kullanılacak
let name7 = ["osman", "hamdi", "tanpnar", "racaizade", "mahmut", "muhittin"];
console.log(name7.sort()); // ["hamdi","mahmut","muhittin","osman","racaizade","tanpnar"]
console.log(name7.sort().reverse()); // ["tanpnar","racaizade","osman","muhittin","mahmut","hamdi"]

let number1 = [38, 21, [18, 35, 39, 97], 5];
console.log(number1[2][3]); // 2. index'in 3.index'i => 97
