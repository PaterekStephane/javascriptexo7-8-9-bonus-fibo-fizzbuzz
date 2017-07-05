var printForm = function() {
  var box = document.getElementById('box');
  box.innerHTML =
  "Nom"+ document.getElementById("firstname").value+"<br>"+
  "Prenom"+ document.getElementById("lastname").value+"<br>"+
  "Age"+ document.getElementById("age").value+"<br>"+
  "Adresse"+ document.getElementById("adr").value+"<br>";
}
