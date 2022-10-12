// Closure => iç içe yazılan fonksiyonların üst fonksiyondaki verilere ulaşması ve üst fonksiyorun alt fonk. kapatma olayıdır

// javascript her zaman son tanımlaan veriye göre hareket eder
let name2 = `arjin`;
function isimler() {
  console.log(name2);
}
isimler(); // => arjin
name2 = `hamdi`;
isimler(); // => hamdi
name2 = `muhittin`;
isimler(); // => muhittin

function add1() {
  // bu şekilde kullandığımız zaman fonksiyon kendini tekrar tekrar çalıştırsada 1 sonucunu verecek çünkü "say" her seferinde "0" olarak tanımlanıyor
  let say = 0; // sadece fonk. içinde ulaşılabilir
  say++;
  return say;
}

let say2 = 0; // her yerden ulaşılabilir.
function add2() {
  // bu şekilde kullandığımız zaman say2 her seferinde artacaktır çünkü fonk dışında tanımlandığı için değer kendini sıfırlamaz ve yeni gelen değere göre kendini günceller
  say2++;
  return say2;
}

function tenmore1() {
  say += 10;
}

function tenmore2() {
  say2 += 10;
}

let add3 = (function () {
  let say3 = 0;
  return function () {
    return say3++;
  };
})();

function pmcount() {
  let count = 0;
  function plus() {
    count++;
    return count;
  }
  function minus() {
    count--;
    return count;
  }

  return {
    plus: plus(),
    minus: minus(),
  };
}
let counts = pmcount();
console.log(counts.plus); // =>1
console.log(counts.minus); // =>0

function üstfonk() {
  let name1; // name1 kapsayıcı fonk içinde olduğu için alt fonk. name1 değişkenine ulaşabilir
  function altfonk() {
    name1 = `osman`;
    return name1;
  }
  return altfonk;
}
let yazdır = üstfonk();
console.log(yazdır()); // => osman

function arttır() {
  let sayi = 0;
  function deger() {
    sayi++;
    return sayi;
  }
  return deger;
}
console.log(arttır()); // => geger fonksiyonun tamamını olduğu gibi yazar işlem sonucunu vermez

let sayiYazdır = arttır();

console.log(sayiYazdır()); // => 1
console.log(sayiYazdır()); // => 2
console.log(sayiYazdır()); // => 3
