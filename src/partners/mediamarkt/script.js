/* eslint-env jquery */

function changeImage(path) {
  document.getElementById("img-default").src = path;
}

let image = "../../partners/mediamarkt/assets/flower.png";
changeImage(image);

// Load full jQuery
var jQueryScript = document.createElement("script");
jQueryScript.setAttribute(
  "src",
  "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"
);
document.head.appendChild(jQueryScript);

var waitForJQuery = setInterval(function () {
  if (typeof $ !== "undefined") {
    (function ($) {
      $("#img-default").css(
        "transform",
        "rotate(" + Math.floor(Math.random() * 720) + 540 + "deg)"
      );
      $("a").click(function (event) {
        event.preventDefault();
        $(this).hide("slow");
      });
    })(jQuery);

    clearInterval(waitForJQuery);
  }
}, 10);
