// Initial array of animals:
var animals = ["Dog", "Cat", "Bird", "Butterfly", "Fox", "Mouse"];

function renderButtons() {      // Generate buttons for each animal in the array.
    $("#animal-buttons").empty();
    for (var i = 0; i < animals.length; i++) {
      var button = $("<button>").addClass("btn btn-success");
      button.text(animals[i]);
      button.attr("data-animal", animals[i]);
      button.addClass('animal');
      $("#animal-buttons").append(button);
    }
}

$("#add-animal").on("click", function(event) {  // Input more animal to the array.
    event.preventDefault();
    var addAnimal = $("#gif-input").val().trim(); 
    animals.push(addAnimal);
    renderButtons();
    $("#gif-input").val("");
  });

renderButtons();

function displayAnimalInfo(animal) {

    $("#gifs-appear-here").empty();
    var animal = $(this).attr("data-animal"); //storing the data-animal property value from the button
    // Constructing a queryURL using the animal name   
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animal + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // After data comes back from the request
      .then(function(response) {
        console.log(queryURL);

        console.log(response);
        var results = response.data;

        for (var i = 0; i < results.length; i++) {  // Looping through each result item
            var animalDiv = $("<div>").addClass("animal-case"); // Creating and storing a div tag
            var r = $("<div>").addClass("animal-rating").text("Rating: " + results[i].rating); //result item's rating
            
            var animalImage = $("<img>").addClass("gif"); 
            animalImage.attr("src", results[i].images.fixed_height_small_still.url); // pulled off the result image tag
            animalImage.attr("data-still", results[i].images.fixed_height_small_still.url);
            animalImage.attr("data-animate", results[i].images.fixed_height_small.url);
            animalImage.attr("data-state", "still");
            // Appending the paragraph and image tag to the animalDiv
            animalDiv.append(r);
            animalDiv.append(animalImage);
            // Prependng the animalDiv to the HTML page in the "#gifs-appear-here" div
            $("#gifs-appear-here").prepend(animalDiv);
        }
    });
}

function gifAnimate() {
    var state = $(this).attr("data-state"); // $("<img>").attr("data-state");
    console.log(state);
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "animate");
    }
    else {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "still");
    }
}
    
$(document).on("click", ".animal", displayAnimalInfo);
$(document).on("click", ".gif", gifAnimate);



