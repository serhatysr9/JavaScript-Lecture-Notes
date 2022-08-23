// LOOPS => Döngüler (for / do while / foreach )
// tekrar edilmesi gereken kodları (defalarca yapılan aynı şeyler) döngülere alarak kod temizliği ve rahatlığı kazanırız

// For loop

for (let i = 0; i < z; i++) {
  // i=> döngünün başlangıç değeri / z=> döngünün sonlanacağı değer / i++ => döngü her okunduğunda bir arttılır ( döngünün sonlanabilmesi için)
  // süslü parantezler arasına tekrarlanacak kodlar yazılır
}

for (let i = 0; i < 3; i++) {
  console.log("bu yazı 3 defa tekrarlanır");
}

for (let i = 0; i < 4; i++) {
  let carp = i * i;
  console.log(carp); // alt alta 0, 1 , 4 , 9
  console.log(`${i} * {i} = ${i * i}`); //"0 * 0 = 0" , "1 * 1 = 1" ekrana yazdırır. NOT: backtick kullanılmazsa yorum olarak yazılır =>"${i} * {i} = ${i*i}"
}

let sonuc;
for (let i = 0; i < 3; i++) {
  sonuc = i * (i + 1);
}
console.log(sonuc); // 6

// FOR, Dizilerde kullanımı
let name1 = [`osman`, `arjin`, `cemşit`, `hamdi`];
let arr = [];
for (let i = 0; i < name1.length; i++) {
  arr.push(name1[i].toUpperCase());
}
console.log(arr); //["OSMAN","ARJIN","CEMŞIT","HAMDI"]

let num = [1, 2, 3, 4, 5, 6, 7];
let son = 0;
for (let i = 0; i < num.length; i++) {
  son = son + num[i];
  // son+=num[i] => son= son+num[i] işleminin kısaltılmış halidir
}
console.log(son);

// While

let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
} // 0 1 2 3 4 5

// do while => while'dan tek farkı önce kodu çalıştırır sonra koşula bakar.koşula uymasa dahi en az bir defa kodu çalıştırır

let a = 0;
do {
  console.log(a);
  a++;
} while (a <= 5); // 0 1 2 3 4 5

let b = 0;
do {
  console.log(b);
  b++;
} while (b >= 5); // 0

// for of loop  => eğer dizideki elemanların index ile ilgilenmiyorsak bu yöntem kullanılır

//let name1 =[`osman`,`arjin`,`cemşit`,`hamdi`]
for (let name2 of name1) {
  // yeni bir değişken tanımlanır sonra eski dizimizin içindeki her bir eleman döngüden geçirelerek yeni hazırlanan değişkenin içine aktarılır
  console.log(`ad : ${name2}`); // "ad : osman" , "ad : arjn" ...
}

let upper = [];
for (let UC of name1) {
  upper.push(UC.toUpperCase());
}
console.log(upper); //["OSMAN","ARJIN","CEMŞIT","HAMDI"]

// BREAK => döngüyü kırmaya yarar. döngünün devam etmesinin istemediğimiz yerde durdurur

for (let i = 0; i < 7; i++) {
  if (i == 3) {
    // console.log(i); // 3
    break;
  }
  console.log(i);
} // 0 1 2

// continue => döngü içindeki istediğimiz koşulu atlamak için

for (let i = 0; i < 7; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i); //0 1 2 4 5 6
}

//let name1 =[`osman`,`arjin`,`cemşit`,`hamdi`]

for (let name3 of name1) {
  // for( i=0; i< name1.length ; i++)
  if (name3 == `arjin`) {
    // if(name1[i]=="arjin")
    console.log(`arjin ismi es geçildi`);
    continue;
  }
  if (name3 == `cemşit`) {
    // if(name1[i]=="cemşit")
    console.log(`döngü kırıldı`);
    break;
  }
  console.log(name3);
} // "osman" / `arjin ismi es geçildi` / `döngü kırıldı`

// Exercises

//1-)    0'dan 10'a kadar olan sayıları yan yana yazdırma while ve do while kullanarak
let i = 0;
let a = [];
do {
  a.push(i);
  i++;
} while (i < 11);
console.log(a);

while (i < 11) {
  a.push(i);
  i++;
}
console.log(a);

//2-)    0'dan 10'a kadar olan sayıları tersten yan yana yazdırma while ve do while
do {
  a.push(i);
  i++;
} while (i < 11);
console.log(a.reverse(""));

//4-)örüntü: her satırda bir öncekine eklenen #

let a = [];
let b = `#`;
for (let i = 0; i < 8; i++) {
  console.log((a += b));
}
