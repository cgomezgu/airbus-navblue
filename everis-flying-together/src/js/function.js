import $ from 'jquery'; 

$(function () {
  const $cont = $('.container');
  const $slider = $('.slider');
  let $slide = 1;
  const $nav = $('.nav');
  const winW = $(window).width();
  const animSpd = 750;
  const distOfLetGo = winW * 0.2;
  let curSlide = 1;
  let animation = false;
  let autoScrollVar = true;
  let diff = 0;
 
  // Generating slides
  let arrCities = ['Why us', 'Producto', 'Delivery', 'Tecnología', 'Cabina'];
  let arrClaims = ['1 - Título', '2 - Título', '3 - Título', '4 - Título', '5 - Título'];
  let arrClaimsDetail = ['Descripción corta del contenido de la sección 1', 'Descripción larga del contenido de la sección 2 Descripción larga del contenido de la sección 2', 'Descripción larga del contenido de la sección 3', 'Descripción larga del contenido de la sección 4', 'Descripción larga del contenido de la sección 5'];
  let numOfCities = arrCities.length;
  let arrCitiesDivided = [];
  let slideComparatorContainer = "slide-comparator-container";
 
  arrCities.map(city => {
    let length = city.length;
    let letters = Math.floor(length / 4);
    let exp = new RegExp(".{1," + letters + "}", "g");
 
    return arrCitiesDivided.push(city.match(exp));
  });

  arrClaims.map(claim => {
    return claim;
  })

  arrClaimsDetail.map(claimDetail => {
    return claimDetail;
  })
 
  let generateSlide = function (city) {
    let frag1 = $(document.createDocumentFragment());
    let frag2 = $(document.createDocumentFragment());
    const numSlide = arrCities.indexOf(arrCities[city]) + 1;
    const firstLetter = arrCitiesDivided[city][0].charAt(0);
 
    switch (numSlide) {
      case 1:
        $slide =
        $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
          <div class="slide__darkbg slide--${numSlide}__darkbg slide--${numSlide}__animated-gradient"></div>
          <div class="slide__text-wrapper slide--${numSlide}__text-wrapper">
            <div class="slide-container">
              <h2>${arrClaims[numSlide - 1]}</h2>
              <p>${arrClaimsDetail[numSlide - 1]}</p>              
            </div>            
          </div>
        </div>`);
        break;
      case 2 :
        $slide =
        $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
          <div class="slide__darkbg slide--${numSlide}__darkbg"></div>
          <div class="slide__text-wrapper slide--${numSlide}__text-wrapper">
            <div class="slide-container">
              <h2>${arrClaims[numSlide - 1]}</h2>
              <p>${arrClaimsDetail[numSlide - 1]}</p>
              <div class="${slideComparatorContainer}">
                <figure class="image-container">
                  <img src="https://webdevtrick.com/wp-content/uploads/skynature.jpg" alt="Original Image">                
                  <span class="image-label" data-type="original">Texto 1</span>              
                  <div class="resize-image"> 
                    <span class="image-label" data-type="modified">Texto 2</span>
                  </div>              
                  <span class="handle"></span>
                </figure> 
              </div>
            </div>          
          </div>
        </div>`);
        break;
        case 3:
          $slide =
        $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
          <div class="slide__darkbg slide--${numSlide}__darkbg"></div>
          <div class="slide__text-wrapper slide--${numSlide}__text-wrapper">
            <div class="video-container">
              <video controls poster="https://www.emailonacid.com/images/blog_images/Emailology/2013/html5_video/bunny_cover.jpg" src="https://www.w3schools.com/html/mov_bbb.mp4" >
                <!-- fallback 1 -->
                <a href="https://www.emailonacid.com" ><img height="176" 
                  src="https://www.emailonacid.com/images/blog_images/Emailology/2013/html5_video/bunny-fallback.jpg" width="320" /></a>
              </video>
            </div>          
          </div>
        </div>`);
        break;
        default: $slide =
        $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">
          <div class="slide__darkbg slide--${numSlide}__darkbg"></div>
          <div class="slide__text-wrapper slide--${numSlide}__text-wrapper">
            <div class="slide-container">
              <h2>${arrClaims[numSlide - 1]}</h2>
              <p>${arrClaimsDetail[numSlide - 1]}</p>              
            </div>            
          </div>
        </div>`);
        break;
      }
 
    const letter =
    $(`<div class="slide__letter slide--${numSlide}__letter">
		${firstLetter}
		</div>`);
 
    for (let i = 0, length = arrCitiesDivided[city].length; i < length; i++) {
      const text =
      $(`<div class="slide__text slide__text--${i + 1}">
		${arrCitiesDivided[city][i]}
		</div>`);
      frag1.append(text);
    }
 
    const navSlide = $(`<li data-target="${numSlide}" class="nav__slide nav__slide--${numSlide}"></li>`);
    frag2.append(navSlide);
    $nav.append(frag2);
 
    $slide.find(`.slide--${numSlide}__text-wrapper`).append(letter).append(frag1);
    $slider.append($slide);
 
    if (arrCities[city].length <= 4) {
      $('.slide--' + numSlide).find('.slide__text').css("font-size", "12vw");
    }
  };
 
  for (let i = 0, length = numOfCities; i < length; i++) {
    generateSlide(i);
  }
 
  $('.nav__slide--1').addClass('nav-active');
 
  // Navigation
  function bullets(dir) {
    $('.nav__slide--' + curSlide).removeClass('nav-active');
    $('.nav__slide--' + dir).addClass('nav-active');
  }
 
  function timeout() {
    animation = false;
  }
 
  function pagination(direction) {
    animation = true;
    diff = 0;
    $slider.addClass('animation');
    $slider.css({
      'transform': 'translate3d(-' + (curSlide - direction) * 100 + '%, 0, 0)' });
 
 
    $slider.find('.slide__darkbg').css({
      'transform': 'translate3d(' + (curSlide - direction) * 50 + '%, 0, 0)' });
 
 
    $slider.find('.slide__letter').css({
      'transform': 'translate3d(0, 0, 0)' });
 
 
    $slider.find('.slide__text').css({
      'transform': 'translate3d(0, 0, 0)' });
 
  }
 
  function navigateRight() {
    if (!autoScrollVar) return;
    if (curSlide >= numOfCities) return;
    pagination(0);
    setTimeout(timeout, animSpd);
    bullets(curSlide + 1);
    curSlide++;
  }
 
  function navigateLeft() {
    if (curSlide <= 1) return;
    pagination(2);
    setTimeout(timeout, animSpd);
    bullets(curSlide - 1);
    curSlide--;
  }
 
  function toDefault() {
    pagination(1);
    setTimeout(timeout, animSpd);
  }
 
  // Events
  $(document).on('mousedown touchstart', '.slide', function (e) {
    if (animation) return;
    let target = +$(this).attr('data-target');
    let startX = e.pageX || e.originalEvent.touches[0].pageX;
    $slider.removeClass('animation');
 
    $(document).on('mousemove touchmove', function (e) {
      let x = e.pageX || e.originalEvent.touches[0].pageX;
      diff = startX - x;
      if ((target === 1 && diff < 0) || (target === numOfCities && diff > 0)) return;
 
      $slider.css({
        'transform': 'translate3d(-' + ((curSlide - 1) * 100 + diff / 30) + '%, 0, 0)' });
 
 
      $slider.find('.slide__darkbg').css({
        'transform': 'translate3d(' + ((curSlide - 1) * 50 + diff / 60) + '%, 0, 0)' });
 
 
      $slider.find('.slide__letter').css({
        'transform': 'translate3d(' + diff / 60 + 'vw, 0, 0)' });
 
 
      $slider.find('.slide__text').css({
        'transform': 'translate3d(' + diff / 15 + 'px, 0, 0)' });
 
    });
  });
 
  $(document).on('mouseup touchend', function (e) {
    $(document).off('mousemove touchmove');
 
    if (animation) return;
 
    if (diff >= distOfLetGo) {
      navigateRight();
    } else if (diff <= -distOfLetGo) {
      navigateLeft();
    } else {
      toDefault();
    }
  });
 
  $(document).on('click', '.nav__slide:not(.nav-active)', function () {
    let target = +$(this).attr('data-target');
    bullets(target);
    curSlide = target;
    pagination(1);
  });
 
  $(document).on('click', '.side-nav', function () {
    let target = $(this).attr('data-target');
 
    if (target === 'right') navigateRight();
    if (target === 'left') navigateLeft();
  });
 
  $(document).on('keydown', function (e) {
    if (e.which === 39) navigateRight();
    if (e.which === 37) navigateLeft();
  });
 
  $(document).on('mousewheel DOMMouseScroll', function (e) {
    if (animation) return;
    let delta = e.originalEvent.wheelDelta;
 
    if (delta > 0 || e.originalEvent.detail < 0) navigateLeft();
    if (delta < 0 || e.originalEvent.detail > 0) navigateRight();
  });


  // comparator-slider
  //check if the .image-container is in the viewport 
    //if yes, animate it
    checkPosition($('.image-container'));
    $(window).on('scroll', function(){
        checkPosition($('.image-container'));
    });
    
    //make the .handle element draggable and modify .resize-image width according to its position
    drags($('.handle'), $('.resize-image'), $('.image-container'), $('.image-label[data-type="original"]'), $('.image-label[data-type="modified"]'));
 
    //upadate images label visibility
    $(window).on('resize', function(){
        updateLabel($('.image-label[data-type="modified"]'), $('.resize-image'), 'left');
        updateLabel($('.image-label[data-type="original"]'), $('.resize-image'), 'right');
    });
});


function checkPosition(container) {
  if( $(window).scrollTop() + $(window).height()*0.5 > container.offset().top) {
      container.addClass('is-visible');
      //you can uncomment the following line if you don't have other events to bind to the window scroll
      // $(window).off('scroll');
  }
}

//draggable funtionality
function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
  dragElement.on("mousedown vmousedown", function(e) {
      dragElement.addClass('draggable');
      resizeElement.addClass('resizable');

      var dragWidth = dragElement.outerWidth(),
          xPosition = dragElement.offset().left + dragWidth - e.pageX,
          containerOffset = container.offset().left,
          containerWidth = container.outerWidth(),
          minLeft = containerOffset + 10,
          maxLeft = containerOffset + containerWidth - dragWidth - 10;
      
      dragElement.parents().on("mousemove vmousemove", function(e) {
          let leftValue = e.pageX + xPosition - dragWidth;
          
          //constrain the draggable element to move inside his container
          if(leftValue < minLeft ) {
              leftValue = minLeft;
          } else if ( leftValue > maxLeft) {
              leftValue = maxLeft;
          }

          let widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
          
          $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
              $(this).removeClass('draggable');
              resizeElement.removeClass('resizable');
          });

          $('.resizable').css('width', widthValue); 

          updateLabel(labelResizeElement, resizeElement, 'left');
          updateLabel(labelContainer, resizeElement, 'right');
          
      }).on("mouseup vmouseup", function(e){
          dragElement.removeClass('draggable');
          resizeElement.removeClass('resizable');
      });
      e.preventDefault();
  }).on("mouseup vmouseup", function(e) {
      dragElement.removeClass('draggable');
      resizeElement.removeClass('resizable');
  });
}

function updateLabel(label, resizeElement, position) {
  if(position === 'left') {
      ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
  } else {
      ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
  }
}