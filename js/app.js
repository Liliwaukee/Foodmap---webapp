
function loadpage() {
  $("#first-view").hide();
  setTimeout(function() {$(".logo-foodmap").fadeOut( 800);}, 1500);
  setTimeout(function() {$("#index").fadeOut(1500);}, 1000);
  setTimeout(function () { $("#first-view").show(); }, 2000);


  $("#searcher").keyup(filterContacts);
}

function paintContactsInHtml (food) {
  // crear elementos con DOM
  var $newContact = $("<article />", {
    "class": "card-panel hoverable"
  });
  var $containerContactName = $("<h4 />");
  var $deleteContactButton = $("<button type='button' />");
  var  $removeIcono = $("<i />", {
    "class": "material-icons"
  });
  var $containerContactPhone = $("<p />");

  // Agregamos atributos y eventos a los elementos creados en el dom
  $deleteContactButton.addClass("btn right");
  $removeIcono.text("delete");


  // Asignando valores

  $deleteContactButton.append($removeIcono);
  $containerContactName.text(food.name);
  $containerContactPhone.text(food.phone);

  $newContact.append($containerContactName);
  $newContact.append($deleteContactButton);
  $newContact.append($containerContactPhone);
  // console.log($newContact);
  // agregamos lo que creamos con el Dom a un elemento existente del html


  $("#publish-contacts").prepend($newContact);

};


function filterContacts (){
  var searchContact = $("#searcher").val().toLowerCase();
    if($("#searcher").val().trim().length > 0) {
      for (var i = 0; i < restaurants.length; i++) {
        var food = restaurants[i].name;
        var filteredContacts = restaurants.filter(function(food) {
          return food.name.toLowerCase().indexOf(searchContact) >= 0;
        });
      }
      $("#publish-contacts").empty();
      filteredContacts.forEach(function(food){
        paintContactsInHtml(food);
      });
    } else {
      $("#publish-contacts").empty();
      restaurants.forEach(function(food){
        paintContactsInHtml(food);
      });
    }
}

  // console.log(filteredContacts);



/*
function filterContacts (){
  var searchContact = $("#searcher").val().toLowerCase();
    if($("#searcher").val().trim().length > 0) {
        var filteredContacts = contacts.filter(function(contact) {
           // console.log(contact);
            return contact.name.toLowerCase().indexOf(searchContact) >= 0;
        });
      $("#publish-contacts").empty();
      filteredContacts.forEach(function(contact){
        paintContactsInHtml(contact);
      });
    } else {
      $("#publish-contacts").empty();
      contacts.forEach(function(contact){
        paintContactsInHtml(contact);
      });
    }
}
*/

$(document).ready(loadpage);
