const forms = document.querySelector(".forms"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

        pwFields.forEach(password => {
            if (password.type === "password") {
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })

    })
})

links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault(); //preventing form submit
        forms.classList.toggle("show-signup");
    })
});


//document.getElementById("loginForm").addEventListener("submit", function (event) {
//    event.preventDefault();

//    var formData = {
//        mail : document.querySelector(".login .input[type='email']").value,
//        password : document.querySelector(".login .password").value
//    };

//    fetch('/Home/Login', {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json'
//        },
//        body: JSON.stringify(formData)
//    })
//        .then(response => response.json())
//        .then(data => {
//            // İsteğin sonucunu işle (isteğe göre)
//            console.log(data);
//        })
//        .catch(error => console.error('Error:', error));
//});

 // HTML'de .forms sınıfına sahip bir form elementini seçer.
// .forms sınıfına sahip form, göster veya gizle butonu için kullanılıyor olabilir.
// const forms = document.querySelector(".forms"),

 // HTML'de .eye-icon sınıfına sahip tüm elementleri seçer.
 // Bu, kullanıcının parola alanındaki şifreyi göstermek veya gizlemek için kullanabileceği göster/gizle simgeleridir.
// pwShowHide = document.querySelectorAll(".eye-icon"),

 // HTML'de .link sınıfına sahip tüm elementleri seçer.
 // Bu, kullanıcıya farklı bir sayfaya gitmek için bağlantılar olabilir.
// links = document.querySelectorAll(".link");

 // Tüm göster/gizle simgeleri için bir döngü oluşturulur.
// pwShowHide.forEach(eyeIcon => {
   // Her göster/gizle simgesi için bir olay dinleyici eklenir.
//   eyeIcon.addEventListener("click", () => {
     // Göster/gizle simgesine tıklanınca yapılacak işlemler:
    // Tıklanan simgenin üst ebeveyninin üst ebeveynini (yani parola alanını içeren div'i) seçer.
//     let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");

     // Seçilen tüm parola alanları için bir döngü oluşturulur.
//     pwFields.forEach(password => {
      // Parola alanının tipi "password" ise:
//       if(password.type === "password"){
         // Parola alanının tipini "text" yaparak şifreyi göster.
//           password.type = "text";
         // Göster simgesinin ikonunu değiştirerek "gizle" simgesi haline getir.
//           eyeIcon.classList.replace("bx-hide", "bx-show");
//           return; // İşlemi sonlandırır ve alttaki kodlara geçmez.
//       }
     // Parola alanının tipi "password" değilse:
      // Parola alanının tipini "password" yaparak şifreyi gizle.
//       password.type = "password";
     // Gizle simgesinin ikonunu değiştirerek "göster" simgesi haline getir.
//       eyeIcon.classList.replace("bx-show", "bx-hide");
//     })
//   })
// })

// Tüm bağlantılar için bir döngü oluşturulur.
// links.forEach(link => {
  // Her bağlantı için bir olay dinleyici eklenir.
//   link.addEventListener("click", e => {
    // Bağlantıya tıklanınca yapılacak işlemler:
//     e.preventDefault(); // Sayfanın yönlendirilmesini önler.
    // .forms sınıfına sahip formun gösterilip gizlenmesini sağlayan "show-signup" sınıfını ekler veya kaldırır.
//     forms.classList.toggle("show-signup");
//   })
// })





