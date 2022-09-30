// CLASS
// key ve value değer çiftleridir ve içinde her türlü veriyi barındırabilir(method,func,int,array...)
// verilerin karmaşıklaşmasını azaltıp ve daha kolay anlaşılır olmasını sağlar
// classlar aslında birer fonksiyon görevi görür.
//projeyi parçalara ayırarak ilerde yapılacak değişiklikleri ve geliştirmeleri daha rahat bir şekilde yaparız
// class'lar kendilerinden türetilen nesnelerin(instance) şablonlarıdır

class Person {
  constructor(name, surname, age) {
    // kurucu methot
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.friends = [`kutbettin`, `muhittin`]; // eğer key(friends)'i parametre olarak yazmazsak yada başına let yazmazsak dahi class özelliği olarak verilen value'ye göre bir key ataması yapıyor().
  }
  fullName() {
    return this.name + " " + this.surname;
  }

  // Static bölümü için
  static isim1 = `hivru`;

  static yazdır() {
    console.log(`yazdır methodu çalıştı`);
  }
}

let osman = new Person(`osman`, `arjin`, 26); // Person clasındaki key'lere value'lar atanır ve bu class `osman`değişkenine atandı
let hamdi = new Person(`racai`, `mükerrem`, 27); // Person clasındaki key'lere value'lar atanır ve bu class `hamdi`değişkenine atandı
console.log(osman.ikinci);
console.log(osman.sayi);

console.log(osman); // osman'a aktarılan value'lara göre class çıktısını verir => tüm verileri verir
console.log(hamdi); // hamdi'ye aktarılan value'lara göre class çıktısını verir => tüm verileri verir
console.log(osman.fullName()); // osman'a aktarılan value'lara göre class içindeki fonksiyonu çalıştırır  => osman arjin
console.log(hamdi.fullName()); // hamdi'ye aktarılan value'lara göre class içindeki fonksiyonu çalıştırır  => kutbettin muhittin
console.log(Person.fullName); // hata verir çünkü person'a ait 2 kişi bilgisi var. hangi kişiyi çağırdığımızı anlamaz

console.log(osman.friends); // osman'a ait friends dizisini ekrana yazdırır => `kutbettin`,`muhittin`
console.log(hamdi.friends); // hamdi'ye ait friends dizisini ekrana yazdırır => `kutbettin`,`muhittin`
osman.friends.push(`cemşit`); // sadece osmana ait frends dizisine çemşit elemanını ekler
console.log(osman.friends); // osman'a ait friends dizisini ekrana yazdırır => `kutbettin`,`muhittin`, `cemşit`
console.log(hamdi.friends); // hamdi'ye ait friends dizisini ekrana yazdırır =>`kutbettin`,`muhittin`

console.log(Person);

// STATIC methot/özellik

// Bazı methodların sadece class'a ait olamsını isteriz. daha sonradan ekleme yapılmayan, instance edilmeyen
// static elemanlar sadece class adıyla çağrılabilir

console.log(osman.isim1); // => undefined. çünkü isim1 static elemandır.
console.log(hamdi.yazdır()); // => hata verir.

console.log(Person.isim1); // => hivru
console.log(Person.yazdır()); // => yazdır methodu çalıştı

// Inheritance (kalıtım) => bir class'ın içindeki tüm verileri başka bir class'a aktarma.(miras alan class ile miras verenin tüm özlelliklerine ulaşabiliriz)
class Engineer extends Person {} // Person class'Inda olan tüm veriler Engineer class'ınada aktarıldı.
let isim2 = new Engineer(`serhat`, `yaşar`, 26);
console.log(isim2); // => {name: 'serhat', surname: 'yaşar', age: 26, friends: Array(2)}

class Tanıtım extends Person {
  constructor(name, surname, age, job) {
    super(name, surname, age); // super(...)'yı kullanmazsak hata alırız.
    this.job = job;
  }
  getMeslek() {
    return this.name + " " + this.surname + " " + this.job;
  }
}

let hurşit = new Tanıtım(`hurşit`, `namzet`, 27, `mühendis`);
console.log(hurşit); // =>{name: 'hurşit', surname: 'namzet', age: 27, friends: Array(2), job: 'mühendis'}
console.log(hurşit.getMeslek); // => hurşit namzet mühendis
console.log(osman.getMeslek); // Hata verir çünkü Tanıtım class'ını person class'ına extends edlmedi(person class'ında getMeslek fonk. tanımlı değil)

// THIS => seçeceğimiz elemanlara referans vermemizi sağlayan bir araçtır. İşaret kipi gibi düşünebiliriz.
// ör: içecek reyonunda olduğunuzu düşünün ve limonatayı aldınız, arkadaşınıza bundan içermisin? diye sorduğumuzda aslında limonatayı ifade ederiz yanis `this` aracını kullanmış oluruz. This'in kullanım şekli böyledir

console.log(this); // herhangi bir nesneyi belirtmediğimiz için otomatik olarak global'i hedef alır ve bize windows'a bağlı tüm key,value, methodları verir
// 1 adım atalım
console.log(this.clientInformation); // window içindeki clientInformation class'ı içindeki tüm verileri alır
// 1 adım daha atalım
console.log(this.clientInformation.permissions); // window içindeki clientInformation içindeki permissions class'ı içindeki tüm verileri alır
// 1 adım daha atalım
console.log(this.clientInformation.permissions); // window içindeki clientInformation içindeki permissions class'ı içindeki tüm verileri alır
console.log(this.clientInformation.permissions.query.name); // => query valuesunu yazdırır
// this yerine referans vereceğiiz class ismini yazarak test edebilirisiniz. size aynı sonucu verecektir.

let name1 = `osman`;

function person() {
  this.name = `hamdi`;
}
person();

console.log(name1); // osman
console.log(this.name1); // person class'ındaki name1 => hamdi
