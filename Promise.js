// PROMİSE => Bir işlem(süresi belli yada belirsiz) bittikten sonra başka bir işlemi yaptırmak için kullanırız.

// Callback hell=> iç içe yapılan işlemler.
// Html sayfasındaki callback hell için
let box = document.querySelector(".box");

setTimeout(() => {
  box.classList.add("efect");
  setTimeout(() => {
    box.classList.add("circle");
    setTimeout(() => {
      box.classList.add("move");
      setTimeout(() => {
        box.classList.add("color");
        setTimeout(() => {
          box.classList.remove("color");
          setTimeout(() => {
            box.classList.remove("move");
            setTimeout(() => {
              box.classList.remove("circle");
              setTimeout(() => {
                box.classList.remove("efect");
              }, 500);
            }, 500);
          }, 500);
        }, 500);
      }, 500);
    }, 500);
  }, 500);
}, 500);

// yukardaki yapıya callback hell denir .iç içe bir sürü fonksiyor ve hepsinin süresi faklı  yada belirsiz olabilirdi.
// Bu tür durumlarda 'PROMISE'ler kullanılır

// PROMİSE
new Promise((resolve, reject) => {
  //işlem bitmiş ve başarılı ise
  resolve({
    name1: `hamdi`,
    surname: `tanpınar`,
  });
  //işlem hatalı ise
  reject("hata");
})
  .then((data) => {
    // başarılı olduğu zaman çalışır.
    // data dediğiz şey resolve yada reject'in içine yazdıklarımızdır.
    console.log(data);
  })
  .catch((data) => {
    //hatayı yakaladığı zaman çalışır
    console.log();
  });

//   Ilk örneği promise ile yapalım
let box2 = document.querySelector(".box2");

function bekle(ms) {
  return new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });
}

let bekle1 = (ms) => new Promise((resolve) => setTimeout(resolve.apply, ms)); // üsttekinin kısaltılmış halidir

bekle(500)
  .then(() => {
    box2.classList.add("efect");
    return bekle(500); // return ettirmezsek hepsi aynı anda çalışır
  })
  .then(() => {
    box2.classList.add("circle");
    return bekle(500);
  })
  .then(() => {
    box2.classList.add("move");
    return bekle(500);
  })
  .then(() => {
    box2.classList.add("color");
    return bekle(500);
  })
  .then(() => {
    box2.classList.remove("color");
    return bekle(500);
  })
  .then(() => {
    box2.classList.remove("move");
    return bekle(500);
  })
  .then(() => {
    box2.classList.remove("circle");
    return bekle(500);
  })
  .then(() => {
    box2.classList.remove("efect");
    return bekle(500);
  });
// ilk örneği promise ile yapmış olduk

let frontend = new Promise((resolve, reject) => {
  let diller = [`html`, `css`, `js`];
  if (diller.includes("node")) {
    resolve(`fullstack developer`);
  } else {
    reject(`frontend developer`);
  }
}, 1000)
  .then((resolve) => {
    console.log((result) => {
      console.log(result);
    });
  })
  .catch((error) => {
    console.log(error);
  });
// frontend developer yazdırır

getWeather(weatherReceived);

function weatherReceived(data) {
  let weather = data;
  document.body.innerText(weather);
}

function getWeather(callback) {
  setTimeout(() => {
    callback("sunny");
  });
}



let madde1= new Promise(resolve=>setTimeout(resolve,1000,'osman arjin'))
// let madde1= new Promise(resolve=>setTimeout(()=>resolve('osman arjin'),1000,'osman arjin')) üsttekiyle aynı

let madde2= new Promise(resolve=>setTimeout(resolve,700,'recaizadee mahmut'))
let madde3= new Promise((resolve,reject)=> setTimeout(reject,2000,'muhittin şemsi')) // resolve yazmadan reject yazamayız hata verir. reject'i yazabilmek için önce resolve kullanmak zorunludur.

// Promise.all()=> eğer tüm veriler doğruysa çalışır değilse hata verir ama catch özelliğide yazılırsa hatalı olanı kullanır
Promise.all([madde1,madde2,madde3]) // dizi şeklinde koşulları yazarız
.then(response=>console.log(response))
.catch(err=>console.log(err)) // muhittin şemsi

// eğer madde 3 resolve olasaydı =>['osman arjin', 'recaizadee mahmut', 'muhittin şemsi']



// Promise.race()=> ilk sonuçlananı alır. doğru yada hatalı olması önemli değil 
Promise.race([madde1,madde2,madde3])
.then(response=>console.log(response)) // =>recaizadee mahmut. çünkü süreden dolayı ilk sonuçlanan madde2'dir
.catch(err=>console.log(err))
// eğer madde3'ün süresi 500ms olsaydı sonuç =>muhittin şemsi olurdu



// Promise.allSettled()=> işlemi tamamlanan herşeyi return eder

Promise.allSettled([madde1,madde2,madde3])
.then(response=> console.log(response))


// Promise.any() => ilk başarılı çalışanın sonucunu alır. race ile farkı race ilk çalışan reject olsa reject'in sonucunu alır ama any sadece ilk resolve olanın sonucunu alır

Promise.any([madde1,madde2,madde3])
.then(response=> console.log(response)) //=>recaizadee mahmut. çünkü başarılı olarak ilk sonuçlanan madde2'dir



// FETCH => bir yerden veri çekmemizi sağlar.

// https://jsonplaceholder.typicode.com sitesinden alt tarafta bulunan users sayfasındaki verileri çekeceğiz,

let users = `https://jsonplaceholder.typicode.com/users`

fetch(users)
.then(response=>response.json())// biz linki aldığımızda sayfa ile ilgili tüm verileri almış olduk (gerekli veya gereksiz). yazdığımız bu json sayesinde sayfanın body'sindeki verileri objeye çevirir ve bize sunar(yani bize gerekli olan verileri).
.then(data=>{console.log(data);})
.catch(error=>console.error(error))

// async=> fonksiyonun başına yazılır ve fonksiyonun bir promise olduğunu belirtir
// await resolve ve reject görevini üstlenir

const fetchData = async () => {
  try {
    const response = await fetch(users)
    const countries = await response.json()
    console.log(countries)
  } catch (err) {
    console.error(err)
  }
}
console.log('===== async and await')
fetchData()

// iki yöntemlede `users` linkindeki tün key volue verilerini almış olduk