var dropdownObsessions = document.getElementsByClassName("toggle-obsessions");
var dropdownAbout = document.getElementsByClassName("toggle-about");
var i;



for (i = 0; i < dropdownObsessions.length; i++) {
  dropdownObsessions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
      document.getElementById("moving-images").classList.remove("faded");
      document.getElementById("before-exile").classList.remove("faded");
      document.getElementById("limited-editions").classList.remove("faded");
      document.getElementById("about").classList.remove("faded");
      document.getElementById("contact").classList.remove("faded");
      document.getElementById("return").classList.remove("faded");
      document.getElementById("logo").classList.remove("faded");
      document.getElementById("disclaimer").classList.remove("faded");
      document.getElementById("instagram").classList.remove("faded");
      document.getElementById("dot").classList.remove("faded");
      document.getElementById("facebook").classList.remove("faded");

    } else {
      dropdownContent.style.display = "flex";
      document.getElementById("obsessions").classList.remove("faded");
      document.getElementById("moving-images").classList.add("faded");
      document.getElementById("before-exile").classList.add("faded");
      document.getElementById("limited-editions").classList.add("faded");
      document.getElementById("about").classList.add("faded");
      document.getElementById("contact").classList.add("faded");
      document.getElementById("return").classList.add("faded");
      document.getElementById("logo").classList.add("faded");
      document.getElementById("disclaimer").classList.add("faded");
      document.getElementById("instagram").classList.add("faded");
      document.getElementById("dot").classList.add("faded");
      document.getElementById("facebook").classList.add("faded");
      document.getElementById("about").classList.remove("active")
      document.getElementById("container-about").style.display = "none";

    }
  });
}

for (i = 0; i < dropdownAbout.length; i++) {
  dropdownAbout[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "flex") {
      dropdownContent.style.display = "none";
      document.getElementById("moving-images").classList.remove("faded");
      document.getElementById("before-exile").classList.remove("faded");
      document.getElementById("limited-editions").classList.remove("faded");
      document.getElementById("obsessions").classList.remove("faded");
      document.getElementById("contact").classList.remove("faded");
      document.getElementById("logo").classList.remove("faded");
      document.getElementById("disclaimer").classList.remove("faded");
      document.getElementById("instagram").classList.remove("faded");
      document.getElementById("dot").classList.remove("faded");
      document.getElementById("facebook").classList.remove("faded");

    } else {
      dropdownContent.style.display = "flex";
      document.getElementById("about").classList.remove("faded");
      document.getElementById("moving-images").classList.add("faded");
      document.getElementById("before-exile").classList.add("faded");
      document.getElementById("limited-editions").classList.add("faded");
      document.getElementById("obsessions").classList.add("faded");
      document.getElementById("contact").classList.add("faded");
      document.getElementById("logo").classList.add("faded");
      document.getElementById("disclaimer").classList.add("faded");
      document.getElementById("instagram").classList.add("faded");
      document.getElementById("dot").classList.add("faded");
      document.getElementById("facebook").classList.add("faded");
      document.getElementById("obsessions").classList.remove("active")
      document.getElementById("container-obsessions").style.display = "none";


    }
  });
}


$(document).ready(function() {
  $('body').hide().fadeIn(1000);
  $("a").click(function(e) {
      e.preventDefault();
      $link = $(this).attr("href");
      $("body").fadeOut(1000,function(){
        window.location =  $link; 
      });
  });
});




$(document).ready(function () {
  if (sessionStorage.getItem("stateContainerDisplay"))
  {
      $("#container-obsessions").css("display", sessionStorage.getItem("stateContainerDisplay"));
  }
});
$("#obsessions").click(function () {
  sessionStorage.setItem("stateContainerDisplay", $("#container-obsessions").css("display"));
});

// var el = $('#container-obsessions');
// var style = el.css('display');

// // Store
// localStorage.setItem("savedstyle", style);
// // Retrieve & set
// el.css('display', localStorage.getItem("savedstyle"));