const hearts = document.querySelectorAll(".like-btn");

hearts.forEach(function(heart) {

  heart.addEventListener("click", function() {

    if (heart.classList.contains("active")) {
      heart.src = heart.dataset.filled;
      heart.classList.remove("active");
    } else {
      heart.src = heart.dataset.outline;
      heart.classList.add("active");
    }

  });

});


