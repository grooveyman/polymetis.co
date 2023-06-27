let domain = (new URL(window.location.href));
domain = domain.hostname;
console.log(domain);

console.log();

var element = document.getElementById("nvbar");
window.addEventListener('scroll', (event)=> {
  
  
  if(window.scrollY > 120){
    element.classList.remove("nv");
  element.classList.add("nvblack");

  }else{
    element.classList.remove("nvblack");
  element.classList.add("nv");
  element.style.transition = "all 0.3s";

  }
})


//for tabs
function showimgs(classn){
  var videos = document.getElementsByClassName("videos");
  var graphics = document.getElementsByClassName("graphics");
  switch(classn){
    case "graphics":
      //hide all others
      for(var i =0; i<videos.length; i++){
        videos[i].classList.add("hidetrans");
      }
      setTimeout(function() {
        for(var i =0; i<videos.length; i++){
          videos[i].classList.add("hide");
        }
      }, 200);

      //animate graphics

      
      break;
      default:
        break;
  }
}




(function() {

  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  
  

 /**
   * Porfolio isotope and filter
   */
 window.addEventListener('load', () => {
  let portfolioContainer = select('.portfolio-container');
  if (portfolioContainer) {
    let portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });

    let portfolioFilters = select('#portfolio-flters li', true);

    on('click', '#portfolio-flters li', function(e) {
      e.preventDefault();
      portfolioFilters.forEach(function(el) {
        el.classList.remove('filter-active');
      });
      this.classList.add('filter-active');

      portfolioIsotope.arrange({
        filter: this.getAttribute('data-filter')
      });
      portfolioIsotope.on('arrangeComplete', function() {
        AOS.refresh()
      });
    }, true);
  }

});

/**
 * Initiate portfolio lightbox 
 */
const portfolioLightbox = GLightbox({
  selector: '.portfolio-lightbox'
});

/**
 * Portfolio details slider
 */
new Swiper('.portfolio-details-slider', {
  speed: 400,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  }
});

/**
 * Animation on scroll
 */
window.addEventListener('load', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  })
});

})();