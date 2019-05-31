$(document).ready(function() {
// Array of gifs //
var topics = ["beaver","hamster","deer","dog","cat","rat","bird","kangaroo"];




//make buttons appear on the DOM//
function buttonappear(){
    for(i = 0;i < topics.length;i++){
        var addbutton = $("<button>");
        addbutton.html(topics[i]);
        addbutton.addClass("animal-button btn btn-secondary")
        addbutton.attr("data-name",topics[i]);
        $("#buttondiv").append(addbutton);
        
    }
    
}
buttonappear();

//add new button//
$("#add-animal").on("click",function() {
    event.preventDefault();
    var newAnimal = $("#animal-input").val();
    topics.push(newAnimal)
    $("#buttondiv").empty();
    buttonappear();
    $("#animal-input").val(" ");//emptys form
})


$("#buttondiv").on("click",".animal-button",function(){
    //empty past results 
    $("#gifdiv").empty();

    animals = $(this).attr("data-name");    

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animals + "&api_key=0peY2sxo6tPhQcw1sPQvIAdW9MPWRuys&limit=10";

            $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {

            var imageURL = response.data;
        console.log(imageURL);
                for (var i = 0; i < imageURL.length; i++) {
                    console.log(i);
                    
                    var aImage = $("<img>")
                    aImage.attr("src",imageURL[i].images.fixed_height_small.url)
                    
                    
                    aImage.attr("data-still",imageURL[i].images.fixed_height_small_still.url)
                    aImage.attr("data-animate",imageURL[i].images.fixed_height_small.url)
                    
                    
                    aImage.addClass("newgifs");
                    var rate = $("<p>").text("Rating: " + imageURL[i].rating)
                    
                    
                    
                    $("#gifdiv").append(aImage)
                    $("#gifdiv").append(rate)
                    
                }


            })


})
// $(".newgifs")on("click" function(){ ---- 
    function movingGif(){
        var state = $(this).attr("data-state");
        console.log("clicked")
        if (state === "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
          } else {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
          }
    
    }
    $(document).on("click",".newgifs",movingGif);
    });








