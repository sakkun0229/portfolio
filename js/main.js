$(document).ready(function () {
  $("#googleform").submit(function (event) {
    var name = $("#nameInput").val();
    var email = $("#emailInput").val();
    var msg = $("#msgInput").val();

    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSe4inoWn20WU3gJPJO0nVaqlcRFXAYlx1_6ozPQ1M50kKa08w/formResponse",
      data: {
        "entry.1911405073": name,
        "entry.1152007801": email,
        "entry.1167241958": msg
      },
      type: "POST",
      dataType: "xml",
      statusCode: {
        0: function () {
          alert("Sent Successfully!");
        },
        200: function () {
          alert("Error... Please try again.");
        }
      }
    });
    event.preventDefault();
  });
});