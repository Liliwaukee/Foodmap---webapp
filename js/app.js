
function loadpage() {
  $("#first-view").hide();
  setTimeout(function() {$(".logo-foodmap").fadeOut( 800);}, 1500);
  setTimeout(function() {$("#index").fadeOut(1500);}, 1000);
  setTimeout(function () { $("#first-view").show(); }, 2000);


  $("#searcher").keyup(filterContacts);
}

function paintContactsInHtml (restaurantsInfo) {
  // crear elementos con DOM
  var $newContact = $("<div />", {
    "class": "restaurant-card"
  });
  var $containerRestaurantName = $("<h5 />", {"class": "restaurant-name"});
  var $ratingRestaurantIcon = $("<i />", {"class":"fa fa-star"});
  var $viewMoreButton = $("<button type='button' />");
  var $containerContactRating = $("<p />");

  $viewMoreButton.addClass("btn-view")
  $viewMoreButton.attr({
       "data-toggle" : "modal",
       "data-target" : "#restaurantModal"
   });
  $viewMoreButton.text("More Info");


  // Asignando valores

  //$viewMoreButton.append($removeIcono);
  $containerRestaurantName.text(restaurantsInfo.name);
  $containerContactRating.text(restaurantsInfo.rating);

  $newContact.append($containerRestaurantName);
  $newContact.append($containerContactRating);
  $containerContactRating.prepend($ratingRestaurantIcon);
  $containerContactRating.append($viewMoreButton);
  //$newContact.append();

  // console.log($newContact);
  // agregamos lo que creamos con el Dom a un elemento existente del html


  $("#container-info-restaurants").prepend($newContact);

};


function filterContacts (){
  var searchRestaurants = $("#searcher").val().toLowerCase();
    if($("#searcher").val().trim().length > 0) {
      for (var i = 0; i < restaurants.length; i++) {
        var restaurantsInfo = restaurants[i].name;
        var filteredRestaurants = restaurants.filter(function(restaurantsInfo) {
          return restaurantsInfo.name.toLowerCase().indexOf(searchRestaurants) >= 0;
        });
      }
      $("#container-info-restaurants").empty();
      filteredRestaurants.forEach(function(restaurantsInfo){
        paintContactsInHtml(restaurantsInfo);
      });
    } else {
      $("#container-info-restaurants").empty();
      restaurants.forEach(function(restaurantsInfo){
        paintContactsInHtml(restaurantsInfo);
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
