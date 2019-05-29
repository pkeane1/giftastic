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


//add new button//
$("#add-animal").on("click",function() {
    event.preventDefault();
    var newAnimal = $("#animal-input").val();
    topics.push(newAnimal)
    $("#buttondiv").empty();
    buttonappear();
})

});