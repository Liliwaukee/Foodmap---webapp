
function loadpage() { //Función a la que llamamos cuando cargue la página

  setTimeout(function() {$(".logo-foodmap").fadeOut( 800);}, 1500); //splash
  setTimeout(function() {$("#index").fadeOut(1500);}, 1000);//splash
  setTimeout(function () { $("#first-view").removeClass("d-none") }, 2000);

  $("#searcher").keyup(filterRestaurants); //llamamos a la función que va a filtrar los restaurantes
}

//Función para pintar los restaurantes filtrados por su nombre
function paintRestaurant (restaurantsInfo) {
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
       "data-target" : ".restaurantModal"
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

  // agregamos lo que creamos con el Dom a un elemento existente del html
  $("#container-info-restaurants").prepend($newContact);

  // agregamos la data de cada restaurante al modal
  $viewMoreButton.click(function(paintRestaurantModal){
    $(".restaurantModalTitle").text(restaurantsInfo.name);
    $(".rating-restaurant").text(restaurantsInfo.rating);
    $(".description-restaurant").text(restaurantsInfo.description);
    $(".direction-restaurant").text(restaurantsInfo.direction);
    $(".phone-restaurant").text(restaurantsInfo.phone);
    if(restaurantsInfo.petFrendly === true) {
      $(".frendly-restaurant").text("Sì");
    } else {
      $(".frendly-restaurant").text("No");
    }
  });
};

//Función para filtrar los restaurantes por su nombre
function filterRestaurants (){
  var searchRestaurants = $("#searcher").val().toLowerCase();
    if($("#searcher").val().trim().length > 0) {
      for (var i = 0; i < restaurants.length; i++) {
        var restaurantsInfo = restaurants[i].name;
        var filteredRestaurants = restaurants.filter(function(restaurantsInfo) {
          return restaurantsInfo.name.toLowerCase().indexOf(searchRestaurants) >= 0;
          console.log(filteredRestaurants);
        });
      }
      $("#container-info-restaurants").empty();
      filteredRestaurants.forEach(function(restaurantsInfo){
        paintRestaurant(restaurantsInfo);
      });
    } else {
      $("#container-info-restaurants").empty();
      restaurants.forEach(function(restaurantsInfo){
        paintRestaurant(restaurantsInfo);
      });
    }
}



$(document).ready(loadpage);
