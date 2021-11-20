function change() {
  const blok = document.getElementById("bolok2");

  if (blok.style.display == "none") {
    blok.style.display = "block";
  } else {
    blok.style.display = "none";
  }
}

function direct() {
  window.location.href = "page6.html";
}

function removing() {
  const mylog = document.getElementById("loader");
  const mydone = document.getElementById("Done");

  mylog.style.display = "none";
  mydone.style.display = "block";
}

window.setTimeout(removing, 6000);

$(document).ready(function () {
  $("#btnpanier").click(function () {
    const blok = document.getElementById("bolok2");

    if (blok.style.display == "none") {
      blok.style.display = "block";
    } else {
      blok.style.display = "none";
    }
  });

  $("#toglmenu").click(function () {
    const blok = document.getElementById("sencodMenu");

    if (blok.style.display == "none") {
      blok.style.display = "flex";
    } else {
      blok.style.display = "none";
    }
  });

  $("#searchtogl").click(function () {
    const blok = document.getElementById("Sencondcontainer-search");

    if (blok.style.display == "none") {
      blok.style.display = "flex";
    } else {
      blok.style.display = "none";
    }
  });


  if ($(window).width() >= 920) {
    $("#fug").toggleClass("listP");
    $("#fug").removeClass("owl-carousel");
  }

  if ($(window).width() <= 920) { 
    $("#fug").toggleClass("listPmobile");
    $("#fug").addClass("owl-carousel");
    

    $("#fug").owlCarousel({
      margin: 5,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 3,
          nav: false,
        },

        450: {
          items: 4,
          nav: false,
        },

        650: {
          items: 5,
          nav: false,
        },

        768: {
          items: 5,
          nav: false,
        },
      },
    });
    $(".foot ").append(
      '<img  class="theImg" src="img/1x/Mes courses - liste (2).png" />'
    );
    $(".foot ").append(
      '<img class="theImgs" src="img/1x/Loading page (4).png" />'
    );
    $(".foot ").append(
      '<img class="theImg" src="img/1x/Mes courses - liste (2).png" />'
    );
    
    $("#fot ").prepend(
      '<img   class="theImg" src="img/1x/Mes courses - liste (2).png" />'
    );
    $("#fot ").append(
      '<img  class="theImg" src="img/1x/Mes courses - liste (2).png" />'
    ); 

    
    $(".footH").prepend(
      '<img   class="theImg" src="img/1x/Mes courses - liste (2).png" />'
    );
   
     $(".footH").append(
      '<img   class="theImg" src="img/1x/Mes courses - liste (2).png" />'
    );



  }
});
$(window).resize(function () {
  location.reload();
});
