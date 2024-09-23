var boxc1 = document.getElementById("caja1");
var boxc2 = document.getElementById("caja2");
var boxc3 = document.getElementById("caja3");
var boxc4 = document.getElementById("caja4");
var boxc5 = document.getElementById("caja5");


let ubicacionPrincipal = window.pageYOffset; //0

  AOS.init();

window.addEventListener("scroll", function(){
    let desplazamientoActual = window.pageYOffset; //180
    if(ubicacionPrincipal >= desplazamientoActual){ // 200 > 180
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top = "-100px"
    }
    ubicacionPrincipal= desplazamientoActual; //200

})



// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }

    enlacesHeader.classList.toggle("menudos")
})

// Efecto desvanecimiento servicios

boxc2.onmouseover = function() {
  // boxc1.style.transformStyle. = "1.05";
  boxc3.style.opacity = ".3";
  boxc4.style.opacity = ".3";
  boxc5.style.opacity = ".3";
}
boxc2.onmouseout = function() {
  boxc3.style.opacity = "2";
  boxc4.style.opacity = "2";
  boxc5.style.opacity = "2";
}

boxc3.onmouseover = function() {
  boxc2.style.opacity = ".3";
  boxc4.style.opacity = ".3";
  boxc5.style.opacity = ".3";
}
boxc3.onmouseout = function() {
  boxc2.style.opacity = "2";
  boxc4.style.opacity = "2";
  boxc5.style.opacity = "2";
}

boxc4.onmouseover = function() {
  boxc2.style.opacity = ".3";
  boxc3.style.opacity = ".3";
  boxc5.style.opacity = ".3";
}
boxc4.onmouseout = function() {
  boxc2.style.opacity = "2";
  boxc3.style.opacity = "2";
  boxc5.style.opacity = "2";
}

boxc5.onmouseover = function() {
  boxc2.style.opacity = ".3";
  boxc3.style.opacity = ".3";
  boxc4.style.opacity = ".3";
}
boxc5.onmouseout = function() {
  boxc2.style.opacity = "2";
  boxc3.style.opacity = "2";
  boxc4.style.opacity = "2";
}

// servicios responsive
// DIRTY Responsive pricing table JS

$( "ul" ).on( "click", "li", function() {
    var pos = $(this).index()+2;
    $("tr").find('td:not(:eq(0))').hide();
    $('td:nth-child('+pos+')').css('display','table-cell');
    $("tr").find('th:not(:eq(0))').hide();
    $('li').removeClass('active');
    $(this).addClass('active');
  });
  
  // Initialize the media query
    var mediaQuery = window.matchMedia('(min-width: 640px)');
    
    // Add a listen event
    mediaQuery.addListener(doSomething);
    
    // Function to do something with the media query
    function doSomething(mediaQuery) {    
      if (mediaQuery.matches) {
        $('.sep').attr('colspan',5);
      } else {
        $('.sep').attr('colspan',2);
      }
    }
    
    // On load
    doSomething(mediaQuery);



