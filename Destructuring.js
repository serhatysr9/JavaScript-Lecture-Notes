// Destructuring => dizi veya objelerden elemanları ,preporty'leri çekip başka değişkenlere aktarmamızı ve kullanmamızı sağlar

// Array kullanımı

let isim1 = [`osman`, `hamdi arjin`];
console.log(isim1[0]); // osman
console.log(isim1[1]); // hamdi arjin

// Bu veriyi daha kullanacağımız zaman 0.index yada 1.index neydi diye vakit kaybetmek yerine aşağıdaki yöntem kullanılır

let [name1, surname] = [`osman`, `hamdi arjin`];
console.log(name1); // osman
console.log(surname); // hamdi arjin

let isim2 = [`recaizade`, `mahmut ekrem`];
let [name2, surname2] = isim2; // bu şekilde de tanımlayabiliriz
console.log(name2); // osman
console.log(surname2); // mahmut ekrem

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd); // "HTML","CSS","JS","React"
console.log(backEnd); // 'Node', 'Express', 'MongoDB'

//   Object Kullanımı

let isim3 = { name3: `Serhat`, Sur_name3: `Yasar`, Age: 26 };
let { name3, Sur_name3, Age } = isim3;
console.log(name3, Sur_name3, Age); // "Serhat" "Yasar" 26

// Renaming => objemizdeki isimlendirmeyi istediğimiz bir şekilde çağırabilmemizi sağlar

// Örneğin: backEnd tarafından veri çekerken kendi istediğimiz isimlendirmelerle ilermemizi sağlar.
//isim3 object'i için
let { name3: ad, Sur_name3: soyad, Age: yas } = isim3;
console.log(ad, soyad, yas); //"Serhat" "Yasar" 26

// Function kullanımı

function isimlendirme(
  {
    surname4,
  } /*bir object elemanı olduğu için parantez içinde yazılması şart */
) {
  console.log(surname4);
} // arjin yazdırır

isimlendirme({ name4: `osman`, surname4: `arjin`, age2: 27 });

// Varsayılan olarak değer atamak için
function isimlendirme({ surname5 = `necmi` }) {
  console.log(surname5);
} // necmi yazdırır

isimlendirme({ name4: `osman`, age2: 27 });

function Age1(yas1, yas2) {
  console.log(yas1);
  console.log(yas2);
}

Age1([26, 27]); // [26,27] yazdırır

let user = {
  vahşi: `kaplan`,
  pets: {
    dogs: [`boncuk`, `max`],
    cats: [`bırr`, `miço`, `kirli`],
  },
};
let {
  pets: {
    dogs: [firstdog, seconddog],
  },
} = user;
let {
  pets: { dogs },
} = user;
let {
  pets: { dogs: köpekler },
} = user;

console.log(firstdog, seconddog); //"boncuk" "max"
console.log(dogs); //["boncuk","max"]
console.log(köpekler); //["boncuk","max"]

let {
  pets: {
    cats: [dişikedi, ...diğerkediler],
  },
} = user;
console.log(dişikedi); // bırr
console.log(...diğerkediler); // miço , kirli

function getname() {
  return {
    name3: `nur`,
    name4: `helvi`,
  };
}
let { name3: ad3, name4: ad4 } = getname();
console.log(ad3, ad4); // nur helvi

// içerideki herhangi bir değeri almamak için

let isim4 = [`osman`, `recaizade`, `arjin`, `tanpınar`];
let [name5, , name7, name8] = isim4; // recaizade ismini almamak için onun bulunduğu index nuramarasını ,,(2 virgül arasını) boş bırakırız

console.log(name5, name7, name8); // osman arjin tanpınar
