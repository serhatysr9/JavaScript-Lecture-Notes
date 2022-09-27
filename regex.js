// REGEX (Düzenli ifadeler) => Kullanıcıdan aldığımız verilerin uygun olup olmadığını veya aradığımız verileri bulmamızı kolaylaştırır

// bir regex ifadesi // arasına yazılır

// bir harfi yada kelime arama

let paragraf1 = `Osman hamdi tanpınar arjin topa vurdu vegol oldu`;
paragraf1.match(/o/); // o harfini seçmek için yazılır ve bize kaçıncı indexte olduğunu verir
paragraf1.match(/o/g); // tüm o harlerini seçmek için yazılır. g(global) yani istenilen tüm verilerin içinde ara anlamında
paragraf1.match(/o/gi); // `i` büyük küçük harf ayrımı yapmaz

// (?) opsiyonel harf veya kelimeler için
// `?` kendisinden önceki karakteri opsiyonel hale getirir yani kelime içinde olsada olmasada o kelimeyi bulur
let paragraf2 = `osman arjin burada mısın?  burda isen ses ver `;
paragraf2.match(/bura?da/gi); //burda ve burada kelimelerini bu şekilde seçeriz.

// *  grup ve opsiyonel kelimelrin birleşimi => (/o*/g) * sembolü ? ve + nın birleşidir
let kelime1 = `alooo ne oluyor burada`; // (/o+/g) tüm oları seçer ve bitişik olan o'ları tek parça olarak alır

// . operatörü
let kelime2 = `şişe riz flamingo pi delta `;
// /./g=> kullaılırsa tüm karakterleri tek tek seçer
// /.+/g  => tüm karakterleri tek parça olarak seçer
// /i./g => i'yi ve sonrasındaki karakteri seçer => iş iz in 'i '(boşlukta seçilir)
// /.i./g => i'yi ve öncesindeki ve sonrasındaki ilk karakteri seçer => şiş riz min 'pi '(boşlukta seçilir)

// Not: .'yı kullandığımız yere göre eger satır başlangıcına veya bitişine (karakter yoksa) denk gelirse onlar seçilmez'

// \w => ingilizce harfler, rakamlar ve _ işaretini seçer
// \W => boşluk ve diğer işaretleri seçer ?=) gibi
// \s => sadece boşlukları alır
// \S => boşluk dışındaki tüm karakterleri alır
// \d => sadece rakamları seçer
// \D => rakam olmayan her şeyi seçer

// {} karakter gruplama => arasına yazılan veriye göre karakterleri gruplandırır

// let kelime2 = `şişe priz flamingo pi delta `
// /.{2}/g veriyi 2'şerli karakterler halinde gruplandırır. => `şi` `şe` ` r` `iz` gibi
// /.{2,5}/g => veriyi min=2 max=5 karakter olacak şekilde gruplandırır. => `şişe `,`priz `,`flami`,`ngo p`,`i del`,`ta`
// /.{3,}/g  => min=3 karakter olan her şeyi tek parça olarak seçer

let paragraf3 = `hat tat cat kat pat 8at 7at _at ?at`;
// /\w{3}/g sadece 3lü kelimeleri seçmek için =>`hat`,`tat` gibi ?at olanı almaz çünkü 'w' ? işaretini kapsamıyor

// [] seçilecek kelime grupları içine yazılır
// /[htckp87_?]at/g => içinde htckp87 karakterlerinden birini içeren ve devamında -at olan 3lü karakterleri seç =>`hat`,`tat` gibi
// /[a-zA-Z0-9?_]/g =>küçük harflerle a'dan z'ye, büyük harflerle A'dan Z'ye,0'dan 9'a ve ?,_ olan karakterleri seç
// /[a-zA-Z0-9?_]at/g =>küçük harfle a'dan z'ye, büyük harfle A'dan Z'ye,0'dan 9'a ve ?,_ ile başlayıp devamı -at olan 3lü grupları seç

let kelime3 = `grey gray color colour`;
// /gr(e|a)y/g => arada kalan harf e yada a olduğu durumları al
// /colou?r/g  => `color`,`colour`
// /colo(u)r/g  => `colour`
// /colo(u)?r/g  => `color`,`colour`

// () gruplandırma yaparak opsiyonel olan yada olmasını istediğimiz karakterleri içine yazarız

let paragraf4 = `rerere rarara falan filan read reeeeee`;
// /re+/g  =>`re`,`re`,`re`,`re`,`reeeeee`
// /re[a-z]/g  =>`rer`,`rea`,`ree`
// /re[a-z]+/g  =>`rerere`,`read`,`reeeeee`
// /(re)+/g  =>`rerere`,`re`,`re`
// /re{2}/g  =>`rere`
// /re{2,}/g  =>`rerere`
// /(re|ra){2,}/g  =>`rerere`,`rarara`

// //gm  `m`multiline => her satırı ayrı ayrı kabul eder
// /^/g  `^` satır başını ifade eder
// /$/g  `$` satır sonunu ifade eder

let paragraf5 = `Recaizade osman arjin şiir yazıyordu
Ranzada oturup.
Dışarı bakarken.`;
// /^R/g  => satır başı olan 'R' seçilir 2. satırdaki seçilmez çünkü 2.satırı 1.nin devamı olarak kabul ediyor
// /^R/gm  => her iki satır başındaki 'R' seçilir çünkü 'm'(multiline) özelliği aktif
// /.$/g  => sadece satır sonundaki karakteri alır  '.' çünkü multiline aktif değil
// /.$/gm => satır sonundaki karakteri alır 'u' '.' ve '.'
// /\.$/gm  => satır sonundaki '.' ve '.' yı alır. '\' .'nın herhangibir karakter değil gerçekten '.' olarak görünmesini sağlar

// (?<=rastgelebirkarakter&&kelime)x(?=rastgelebirkarakter&&kelime)
// (lookbehind)x(lookahead)=> başında veya sonunda istenen karaktere göre seçer

// /.(?=j)/g => sonrasında 'j' olan tüm karakterleri seç => 'r'
// /.(?!j)/g => sonrasında 'j' olan tüm karakterleri seçmez (diğer tüm karakterleri seçer)
// /.{2}(?=j)/g => sonrasında 'j' olan 2 karakteri seç => 'ar'
// /(?<=j)./g =>öncesinde 'j' olan tüm karakterleri seç => 'i'
// /(?<!j)./g =>öncesinde 'j' olan tüm karakterleri seçmez (diğer tüm karakterleri seçer)
// /(?<=j).{2}/g => öncesinde 'j' olan 2 karakteri seç => 'in'

let kelime4 = `src="url"`;
// (?<=src=").*(?=") => url seçilir

let numara1 = 5354578976;
let numara2 = 535 - 457 - 8976;

// /\d{3}\d{3}\d{4}/gm => numara1'i 3 3 4 olacak şekilde seçer ama gruplandıramaz ama numara2'yi seçemez
// /(\d{3})(\d{3})(\d{4})/gm => numara1'i 3 3 4 olacak şekilde seçer ve gruplandırır ama numara2'yi seçemez
// /(\d{3})-(\d{3})-(\d{4})/gm => numara2'yi 3 3 4 olacak şekilde seçer ve gruplandırır ama numara1'i seçemez
// /(\d{3})-?(\d{3})-?(\d{4})/gm => numara2 venumara1'i 3 3 4 olacak şekilde seçer ve gruplandırır.

// Peki aralarında boşluk olsaydı nasıl yapmamız gerekirdi?
let numara3 = `535 457 8976`;
// /(\d{3})[ -]?(\d{3})[ -]?(\d{4})/gm => numara1,numara2,numara3'ü 3 3 4 olacak şekilde seçer ve gruplandırır.

// ilk 3 karakter () içinde olsaydı nasıl yapmamız gerekirdi?
let numara4 = `(535) 457 8976`;
// /\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/gm => tüm numaraları 3 3 4 olacak şekilde seçer ve gruplandırır.

// başlangıçta alan kodu olsaydı nasıl yapmamız gerekirdi?
let numara5 = `+90 535 457 8976`;
// /(\+\d{2})?[ ]?\(?(\d{3})\)?[ -]?(\d{3})[ -]?(\d{4})/gm => numara5'i 3 3 3 4, diğerlerini ( empty 3 3 4 ) olacak şekilde seçer ve gruplandırır.

// Grupları isimlendirmek için ?<> işaretleri kullanılır
// /(?<alankodu>\+\d{2})?[ ]?\(?(?<operatörkodu>\d{3})\)?[ -]?(?<üçlükısım>\d{3})[ -]?(?<dörtlükısım>\d{4})/gm   => böylece grup1/2/3/4 isimlendirmesi yerine kendi grup isimlendirmemizi yaptık. alankodu operatörkodu üçlükısım dörtlükısım
