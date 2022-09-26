// SETS and GETS
// => array ve object'e benzer

// SETS => Set benzersiz değerleri tutar. Her veri tipinde değer tutabilir. Fakat aynı değeri birden fazla kez içeremez

let name1 = new Set(); // boş bir set oluşturulur

let name2 = new Set([`nazmi`, `hüsam`, `hüsamettin`]);

for (const isim of name2) {
  console.log(isim);
}

name2.forEach((isim) => console.log(isim)); // for ve forEach sonucu aynı

// NOT: En önemli özelliği aynı eleman içermez. büyük küçük harfe duyarlı. eleman sayısı olarak aynı olanları 1 defa sayar

let isim1 = new Set([
  `serhat`,
  `yasar`,
  `selim`,
  `nur`,
  `helvi`,
  `serhat`,
  `helvi`,
  `nur`,
  `Serhat`,
  `Nur`,
]);
console.log(isim1); // {"serhat","yasar","selim","nur","helvi","Serhat","Nur"}
console.log(isim1.size); // 7

// add => set'e veri eklememizi sağlar
let name3 = new Set(["osman", "arjin", "hamdi"]);

name3.add(`racaizade`);
console.log(name3); // {"osman","arjin","hamdi","racaizade"}

let name4 = new Set();

for (const isim of name3) {
  name4.add(isim);
}
console.log(name4); // {"osman","arjin","hamdi","racaizade"}

// size => uzunluğu verir
console.log(name2.size); //3

// delete => silme

name2.delete(`hüsam`);
console.log(name2); // {`nazmi` , `hüsamettin`}

//has => elemanın olup olmadığını kontrol eder ve true yada false döndürür

console.log(name2.has(`nazmi`)); // True

// clear => tüm elemanları siler
name2.clear();
console.log(name2); // {} => boş

let a = [1, 2, 3, 4, 5, 6];
let b = [4, 5, 6, 7, 8, 9];
let c = [...a, ...b];
console.log(new Set(c)); // {1,2,3,4,5,6,7,8,9}

let a1 = [1, 2, 3, 4, 5, 6];
let b1 = [4, 5, 6, 7, 8, 9];
let a2 = new Set(a1);
let b2 = new Set(b1);
let c1 = new Set(a1.filter((num) => b2.has(num))); // => a1 ve b1'de ortak olanlar
let c2 = new Set(a1.filter((num) => !b2.has(num))); // => a1'de olan b1'de olmayan
let c3 = new Set(b1.filter((num) => !a2.has(num))); // => b1'de olan a1'de olmayan
console.log(c1); //{4,5,6}
console.log(c2); //{1,2,3}
console.log(c3); //{7,8,9}

// MAP => key olarak herhangi bir veri türünü kabul eder

let maps = new Map();

// set => ekleme için lkullanılır

maps.set(`name1`, `osman`);
maps.set(1, `arjin`);
maps.set(true, `bool1`);
maps.set(false, `bool2`);

console.log(maps); // {'name' => 'osman', 1 => 'arjin', true => 'bool1', false => 'bool2'}

// get => elemanı bulmaya yarar

console.log(maps.get(true)); // bool1
console.log(maps.get(1)); // arjin
console.log(maps.get(`name1`)); // osman

// size => eleman sayısını verir
console.log(maps.size); // 4

// Objeleride key olarak kullanabiliyoruz

let isim2 = { name1: `hamdi` };
let isim3 = { name2: `arjin` };
maps.set(isim2, 15).set(isim3, 27); // bu şekildede tanımlanabilir. 2.ke yazmak yerine ilk maps.'nın altında biraz boşluk bırakarak yapabiliriz

console.log(maps); //{'name' => 'osman', 1 => 'arjin', true => 'bool1', false => 'bool2', {…} => 15, {…} => 27} // {...} açıldığında objeler orada yer alıyor

// iteration over map
console.log(maps.keys()); // {'name1', 1, true, false, {…}, …}  // sadece keyleri gösterir

console.log(maps.values()); // {'osman', 'arjin', 'bool1', 'bool2', 15, 27 }

console.log(maps.entries()); // {'name' => 'osman', 1 => 'arjin', true => 'bool1', false => 'bool2', {…} => 15, {…} => 27}

for (let i of maps.keys()) {
  console.log(i);
} // hepsini gösterir

// delete - clear - has  yine sette olduğu gibi kullanılır
