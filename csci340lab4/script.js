$(document).ready(function() {
  $('#image-button').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://cataas.com/cat?json=true",
      success: function(results) {
        console.log(results["url"]);
        $("#cat-image").attr("src", "https://cataas.com" + results["url"]).attr("width", 450).attr("height", 350);
    },
    error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });

  $('#fact-button').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://cat-fact.herokuapp.com/facts",
      success: function(results) {
        var random = Math.floor(Math.random() * 4) + 1;
        console.log(results[random]["text"]);
        $("#cat-fact").text(results[random]["text"]);
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  });
});
