$(document).ready(function() {
  $("button#food").click(function() {
    $("ul#cat").prepend("<li>Give me fish!</li>");
    $("ul#dog").prepend("<li>Give me a bone!</li>");
    $("ul#cat").children().first().css("background-color","green");
    $("ul#dog").children().first().css("background-color","green");
    $("li").click(function() {
      $(this).remove();
    });
  });

    $("button#sound").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
    $("ul#cat").children().first().css("background-color","red");
    $("ul#dog").children().first().css("background-color","red");
    $("li").click(function() {
      $(this).remove();
    });
  });

  $("button#action").click(function() {
    $("ul#cat").prepend("<li>Let me jump!</li>");
    $("ul#dog").prepend("<li>Let me run!</li>");
    $("ul#cat").children().first().css("background-color","blue");
    $("ul#dog").children().first().css("background-color","blue");
    $("li").click(function() {
      $(this).remove();
    });
  });
});

// var n = this-childlevel;
// //how do we find this?
// $(cat).childlevel.remove();
// $(dog).childlevel.remove();
// //how do we declare it here?
