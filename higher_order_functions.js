// Higher Order Function => parametre olarak fonksiyon alan yada geriye fonksiyon döndüren fonksiyonlardır

// Callback => parametre alarak fonksiyon gösterilirse buna callback denir

let callback = (sayi) => {
  return sayi ** 2;
};

function ussu(callback, sayi) {
  return callback(sayi) * sayi;
}
console.log(ussu(callback, 4));

// Returning function
let higherOrder = (n) => {
  //3.ADIM => fonk1'i return ettiğimiz için artık higherOrder ===fonk1'e. Yani artık higherOrder gördüğümüz yere fonk1 yazılır. fonk1===`2 * n + 3 * m + t`olduğu için artık higherOrder gördüğümüz yere `2 * n + 3 * m + t` yazılır

  let fonk1 = (m) => {
    // 2.ADIM => fonk2'yi return ettiğimiz için artık fonk1 ===fonk2'ye. Yani artık fon1 gördüğümüz yere fonk2 yazılır. fonk2===`2 * n + 3 * m + t`olduğu için artık fonk1 gördüğümüz yere `2 * n + 3 * m + t` yazılır

    let fonk2 = (t) => {
      //1.ADIM =>`2 * n + 3 * m + t` değerini return ettiğimiz için artık fonk1 ===`2 * n + 3 * m + t`. Yani artık fon1 gördüğümüz yere `2 * n + 3 * m + t`değeri yazılır
      return 2 * n + 3 * m + t;
    };
    return fonk2;
  };
  return fonk1;
};
console.log(higherOrder(2)(3)(10)); //23

// SETTING TIME => fonksiyonların belirleyeceğimiz süreye bağlı olarak çalışmasnı sağlar

// setInterval => belirlediğimiz aralıklarda sürekli çalışır
// setTimeout => belirlediğimiz süreden sonra çalışır
let merhaba1 = () => {
  console.log(`hello`);
};
setTimeout(merhaba1, 2000);

// setInterval => callback kullanır ve süreleri milisaniye cinsinden yazar. 1sn = 1000 milisaniye
let merhaba = () => {
  console.log(`hello`);
};
setInterval(merhaba, 2000); // her 2 saniyede bir `hello` yazdırır

let interval = setInterval(merhaba, 2000);

setTimeout(function () {
  clearInterval(interval);
  console.log(`fonksiyon sonlandırıldı`);
}, 5000); // 5 saniye sonra ekrana yazdırma işlemini sonlandırır

// NOT=> clearInterval ve clearTimeout, setInterval ve setTimeout döngülerini sonlandırır

// FUNCTIONAL PROGRAMMİNG
// forEach, map, filter, reduce, find, every, some, and sort

// forEach
// dizinin veya object'in içindeki elemanları aktarmaya yarar. Sadece dizi içindeki elamanı değil index numarasınıda alabilir.
// arr.forEach(function (element, index, arr) {  console.log(index, element, arr)})

let dizi = [1, 2, 3, 4, 5];
let sonuc = (arr) => {
  let top = 0;
  let hesapyap = function (alinacakSayilar) {
    top += alinacakSayilar;
  };
  arr.forEach(hesapyap);
  return top;
};
// alttaki örnek üstttekinin kısaltılmış halidir
let sonuc1 = (arr) => {
  let top = 0;

  arr.forEach(function (alinacakSayilar) {
    top += alinacakSayilar;
  });
  return top;
};

console.log(sonuc(dizi));

// Map => forEach ile aynı ama map sayesinde diziyi modifiye edebiliyoruz.
let dizi1 = [1, 2, 3, 4, 5];
let dizi2 = dizi1.map((dizi1) => dizi1 * 2); // dizi1'deki her bir elemani 2 ile çarpar
let dizi3 = dizi1.map((dizi1) => dizi1 * dizi1); // dizi1'deki her bir elemanin karesini alır
let sonuc2 = (arr) => {
  let top = 0;
  let hesapyap = function (alinacakSayilar) {
    top += alinacakSayilar;
  };
  arr.forEach(hesapyap);
  return top;
};
console.log(sonuc2(dizi2)); // 30
console.log(dizi2); // [2,4,6,8,10]

let users = [
  { id: 1, name: `necmiye`, surname: `guguk`, age: 48, gender: 2 },
  { id: 3, name: `osman`, surname: `arjin`, age: 26, gender: 1 },
  { id: 4, name: `hamdi `, surname: `zade`, age: 36, gender: 1 },
  { id: 2, name: `nazmiye`, surname: `cemşit`, age: 37, gender: 2 },
];

users = users.map((user) => {
  if (user.name === `osman`) {
    user.surname = `hamdi tanpınar`;
  }
  return user;
});
console.log(users);

// filter => dizi veya ojedeki elemanları filtremeyi sağlar

//  dizi 3, `[1, 2, 3, 4, 5]` dizisinin karesiydi
let filter1 = dizi3.filter((filtrele1) => filtrele1 > 3 && filtrele1 < 17);
console.log(filter1); // [4,9,16]

let filter2 = users.filter(function (params) {
  if (params.gender === 1 && params.age > 32) {
    return params;
  }
});
console.log(users); // sadece gender=1 ve yaşı 32den büyük olanları yazdırır

// reduce

// every => dizi veya objedeki tüm elemanlar şartımızı sağlarsa true sağlamazsa alse döndürür

let kontrol1 = users.every((user) => user.gender === 1);
console.log(kontrol1); // false

// some => every ile aynı ama elemanlardan yalnızca biri bile şartımızı sağlıyorsa true döndürür

let kontrol2 = users.some((user) => user.gender === 2);
console.log(kontrol2); // true

// find=> koşulumuza uyan ilk elemanı döndürür

// let dizi1 = [1, 2, 3, 4, 5];

let find1 = dizi1.find((sayi) => sayi > 3);
console.log(find1); // 4

let find2 = users.find((erkek) => erkek.gender === 1);
console.log(find2); //{ id: 3, name: `osman`, surname: `arjin`, age: 26, gender: 1}, yazdırır

// findIndex => şartı sağlayan elemanın kaçıncı indexte olduğunu verir
let findindex1 = dizi1.findIndex((sayi) => sayi > 3);
console.log(findindex1); // 3

let findindex2 = users.findIndex((erkek) => erkek.gender === 1);
console.log(findindex2); // 1

// sort=> sıralama işlemi yapar. sıramala işlemlerini stringlerde yapar, int ile yaparsak hata verir.

let names = [`hamdi`, `osman`, `arjin`, `cemşit`];
names.sort();
console.log(names); // ["arjin","cemşit","hamdi","osman"]

let numbers = [9, 2, 6, 10, 8, 1, 21];
let hatalisıralama = numbers.sort();
let dogrusıralama = numbers.sort((a, b) => a - b);
let tersyöndesırala = numbers.sort((a, b) => b - a);

console.log(hatalisıralama); // [1,10,2,21,6,8,9]
console.log(dogrusıralama); // [1,2,6,8,9,10,21]
console.log(tersyöndesırala); // [21,10,9,8,6,2,1]

// Sorting Object Arrays

//users objesi için
let usersIdSırala = users.sort((a, b) => a.id - b.id);
console.log(usersIdSırala); // id'lere göre sıralar

let alfabetikSırala = users.sort((a, b) => a.name.localeCompare(b.name));
let alfabetikTersSırala = users.sort((a, b) => b.name.localeCompare(a.name));

console.log(alfabetikSırala); // a'dan z'ye doğru sıralar
console.log(alfabetikTersSırala); // z'den a'ya doğru sıralar

// Exercises

let array1 = [2, 5, 17, 6, 7, 13, 9];

let hesapla1 = function name(params) {
  let toplam = 0;
  function hesapla(değerler) {
    toplam += değerler;
  }
  params.forEach(hesapla);
  return toplam;
};
console.log(hesapla1(array1));

let array2 = array1.map((array1) => array1 * 2);
console.log(array2);
