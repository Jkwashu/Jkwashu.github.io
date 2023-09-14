$(document).ready(function() {
  $('#image-button').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://placebear.com/200/300.jpg",
      success: function(results) {
        console.log(results["url"]);
        if (results["url"].endsWith(".mp4")) {
          $("#bear-image").attr("src", "bear.png")
        } else {
          $("#bear-image").attr("src", results["url"]).attr("width", 400).attr("height", 500);
      }
    },
    error: function(xhr,status,error) {
        console.log(error);
      }
    });
  });

  $('#reading-button').click(function() {
    $.ajax({
      dataType: "json",
      url: "https://bible-api.com/romans+12:1-2",
      success: function(results) {
        console.log(results["verse"]);
        $("#bible-quote").html(results["verse"]);
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  });
});
