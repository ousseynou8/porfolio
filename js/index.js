

// Ecrit Defiler
var typed = new Typed("#typed", {
  strings: ["Intégrateur", "Développeur", "Concepteur"],
  typedSpeed: 0,
  backSpeed: 70,
  loop: true,
});


 
// let form = document.getElementById('form');

// form.addEventListener('sumbit', function(e){
//     e.preventDefault();
//     console.log('after submit');

// prenomValeur = prenom.value;
// console.log(prenomValeur);

// nomValeur = nom.value;
// console.log(nomValeur);

// emailValeur = email.value;
// console.log(emailValeur);


// // Validation
// if (prenomValeur == "" || nomValeur == "" || emailValeur == "") {
//     console.log('erreur');
//     alertBox.style.display = "block";
// } else {
//     window.location = 'confirmation.html';
// }


// })
 


new WOW().init();





var triggerTabList = [].slice.call(document.querySelectorAll('#myTab a'))
triggerTabList.forEach(function (triggerEl) {
  var tabTrigger = new bootstrap.Tab(triggerEl)

  triggerEl.addEventListener('click', function (event) {
    event.preventDefault()
    tabTrigger.show()
  })
})


