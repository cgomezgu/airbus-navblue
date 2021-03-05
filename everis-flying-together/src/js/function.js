import $ from 'jquery'; 
import imageOriginal from '../images/draggable-comparator/blueprint-wing-web.jpg';

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
  let arrCities = ['Flying', 'Producto', 'Delivery', 'Tecnología', 'Cabina'];
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
 
    switch (numSlide) {
      case 1:
        $slide =
        $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">          
          <div class="slide__wrapper">
            <div class="slide__text-wrapper">
              <h1>everis Flying Together</h1>
              <div class="slide__text--subtitle">
                <h3>We are ready to raise your wings.</h3>
                <h3>We will guide you on this incredible flight</h3>    
              </div>                        
            </div>  
            <div class="card-area">
              <div class="card">
                <p>WE ENGAGE SINCE THE FIRST PI</p>                                  
              </div> 
              <div class="card">
                <p>FOR US, DELIVERY IS FIRST</p>                                  
              </div> 
              <div class="card">
                <p>WE BELIEVE IN ONE TEAM</p>                                  
              </div> 
              <div class="card">
                <p>TOGETHER 'REACH FOR SKIES'</p>                                  
              </div>
            </div> 
          </div>
          <div class="clouds">
            <img class="cloud-1" style="--i:1;"/>
            <img class="cloud-2" style="--i:2;"/>
            <img class="cloud-3" style="--i:3;"/>
            <img class="cloud-4" style="--i:4;"/>
            <img class="cloud-5" style="--i:5;"/>
            <img class="cloud-6" style="--i:10;"/>
            <img class="cloud-7" style="--i:9;"/>
            <img class="cloud-8" style="--i:8;"/>
            <img class="cloud-9" style="--i:7;"/>
            <img class="cloud-10" style="--i:6;"/>
          </div>       
          <div class="slide__darkbg slide--${numSlide}__darkbg slide--${numSlide}__animated-gradient"></div>
        </div>`);
        break;
      case 2 :
        $slide =
          $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">    
            <div class="slide__text-wrapper">
              <h1>Product</h1>
              <div class="slide__text--subtitle">
                <h3>Just like the strong wings of dragonflies, we adapt our products to your needs and get the best out of them</h3>
              </div>
            </div>                    
            <div class="slide-container">
              <div class="${slideComparatorContainer}">
                <figure class="image-container">                                
                  <img src=${imageOriginal} alt="Original Image"> 
                  <div class="resize-image"> 
                  </div>              
                  <span class="handle blob white"></span>
                </figure> 
              </div>
            <div class="slide__darkbg slide--${numSlide}__darkbg slide--${numSlide}__animated-gradient"></div>
          </div>`);
        break;
        case 3:
          $slide =
            $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">  
              <div class="slide__text-wrapper">
                <h1>Planned delivery</h1>
                <div class="slide__text--subtitle">
                  <h3>Like the versatility of a bird's wings, we make the delivery go as planned.</h3>
                </div>
              </div>  
              <div class="clouds">
                <img class="cloud-1" style="--i:1;"/>
                <img class="cloud-2" style="--i:2;"/>
                <img class="cloud-3" style="--i:3;"/>
                <img class="cloud-4" style="--i:4;"/>
                <img class="cloud-5" style="--i:5;"/>
                <img class="cloud-6" style="--i:10;"/>
                <img class="cloud-7" style="--i:9;"/>
                <img class="cloud-8" style="--i:8;"/>
                <img class="cloud-9" style="--i:7;"/>
                <img class="cloud-10" style="--i:6;"/>
              </div>
              <div class="slide__darkbg slide--${numSlide}__darkbg slide--${numSlide}__animated-gradient"></div>  
              <p class="txt-instructions">Watch our film to discover some of our experts.</p>       
              <div class="slide__wrapper-video">                                
                <div class="video-container">
                  <iframe poster="https://www.emailonacid.com/images/blog_images/Emailology/2013/html5_video/bunny_cover.jpg" src="https://player.vimeo.com/video/518638996" class="with-shadow" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div class="bullets-container">
                  <div class="bullet">
                    <p class="bullet-title">INIT</p>
                    <p class="bullet-subtitle">Taking off towards products, teams, and chapters.</p>                     
                  </div>
                  <div class="bullet"> 
                    <p class="bullet-title">INIT</p>
                    <p class="bullet-subtitle">Taking off towards products, teams, and chapters.</p>                    
                  </div>
                  <div class="bullet"> 
                    <p class="bullet-title">INIT</p>
                    <p class="bullet-subtitle">Taking off towards products, teams, and chapters.</p>
                  </div>
                  <div class="bullet"> 
                    <p class="bullet-title">INIT</p>
                    <p class="bullet-subtitle">Taking off towards products, teams, and chapters.</p>
                  </div>
                </div>
              </div> 
            </div>`);
        break;
        case 4:
          $slide =
            $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">   
            <div class="slide__text-wrapper">
              <h1>Let´s take off together</h1>
              <div class="slide__text--subtitle">
                <h3>In the cockpit we will fly to a new destination</h3>
              </div>
            </div>               
            <div class="slide__darkbg slide--${numSlide}__darkbg"></div>
              <div class="draggable-container">
                <div class="draggable-clouds">
                  <div class="ui-widget-content draggable-cloud cloud-1"></div>
                  <div class="ui-widget-content draggable-cloud cloud-2"></div>
                  <div class="ui-widget-content draggable-cloud cloud-3"></div>
                </div> 
                <div class="draggable-hidden-container contain-1">
                  <p class="draggable-hidden-container-title"><span class="icn-arrow"></span>Walk together looking into the future</p>
                  <p class="draggable-hidden-container-subtitle">Continuous discovery methodology fully aligned with your business needs and market trends</p>
                </div>
                <div class="draggable-hidden-container contain-2">
                  <p class="draggable-hidden-container-title"><span class="icn-arrow"></span>From tech radar to the chapter</p>
                  <p class="draggable-hidden-container-subtitle">Accelerate the adoption of new technologies by your delivery teams</p>
                </div>
              </div>        
            </div>
          </div>`);
        break;
        case 5: 
          $slide = 
            $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">           
            <div class="slide__darkbg slide--${numSlide}__darkbg"></div>           
              <div class="slide__text-wrapper">
                <h1>Let´s take off together</h1>
                <div class="slide__text--subtitle">
                  <h3>In the cockpit we will fly to a new destination</h3>
                </div>
              </div>  
              <div class="btn-container">
                <p class="txt-instructions">Remember to check all instruments before take-off</p>
                <div class="btn-wrapper">
                  <span class="step-num">3</span>  
                  <div class="btn-contain"> 
                    <p class="title">PRODUCT</p>
                    <div class="lines"></div>
                    <a class="btn is-disabled" href="#" target="_blank"><span>Lorem ipsum dolor est</span>Inttrend</a>                    
                  </div>
                  <div class="btn-contain">
                    <p class="title">DELIVERY</p>
                    <div class="lines"></div>
                    <div class="btn-flex">
                      <a class="btn is-disabled" href="#" target="_blank"><span>Lorem ipsum dolor est</span>One ticket</a>
                      <a class="btn is-disabled" href="#" target="_blank"><span>Lorem ipsum dolor est</span>genome</a>
                    </div>
                  </div>
                  <div class="btn-contain">
                    <p class="title">TECHNOLOGY</p>
                    <div class="lines"></div>
                    <div class="btn-flex">
                      <a class="btn is-disabled" href="#" target="_blank"><span>Lorem ipsum dolor est</span>everis Winder</a>
                      <a class="btn is-disabled" href="#" target="_blank"><span>Lorem ipsum dolor est</span>Dashboard</a>
                      <a class="btn is-disabled" href="#" target="_blank"><span>Lorem ipsum dolor est</span>AI showcase</a>
                    </div>
                  </div>
                </div>               
              </div>
              <div class="btn-container-bottom">  
                <span class="step-num">1</span>            
                <a id="btnDownload1" class="btn btn-download" href="https://everisgroup-my.sharepoint.com/:p:/g/personal/cgomezgu_everis_com/EXsyikrAS7JOhna0fIgSsWQBO1UD87tCQ5QdZXrrpGFQ-A?e=xfj5HI" target="_blank">
                  <i class="lnr lnr-download"></i>1 Download the proposal
                </a> 
                <span class="step-num">2</span>     
                <a id="btnDownload2" class="btn btn-download bg-blue is-disabled" href="https://everisgroup-my.sharepoint.com/:p:/g/personal/cgomezgu_everis_com/EXsyikrAS7JOhna0fIgSsWQBO1UD87tCQ5QdZXrrpGFQ-A?e=xfj5HI" target="_blank">
                  <i class="lnr lnr-download"></i>2 Download the proposal
                </a>                  
              </div>
              <div class="bg-dark"></div>
              <div class="cd-background-wrapper">
                <figure class="cd-floating-background">
                  <!-- images here -->
                  <div class="cd-floating-background-image-1"></div>
                  <div class="cd-floating-background-image-2"></div>                    
                </figure>
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


  // draggable/fadeOut clouds
  $(".draggable-cloud").draggable({
    start: function() {
      // $(this).fadeTo("slow", 0.1);
    }
  });

  // enable buttons 
  $('#btnDownload1').on("click", function(){
    $('#btnDownload2').removeClass('is-disabled');
  });
  $('#btnDownload2').on("click", function(){
    $('.btn-contain .btn').removeClass('is-disabled');
  });


/* */

 //define store some initial variables
 var halfWindowH = $(window).height()*0.5,
 halfWindowW = $(window).width()*0.5,
 //define a max rotation value (X and Y axises)
 maxRotationY = 5,
 maxRotationX = 3,
 aspectRatio;

//detect if hero <img> has been loaded and evaluate its aspect-ratio
$('.cd-floating-background').find('img').eq(0).on('load', function() {
 aspectRatio = $(this).width()/$(this).height();
   if( $('html').hasClass('preserve-3d') ) initBackground();
}).each(function() {
 //check if image was previously load - if yes, trigger load event
   if(this.complete) $(this).load();
});

//detect mouse movement
$('.cd-background-wrapper').each(function(){
 $(this).on('mousemove', function(event){
   var wrapperOffsetTop = $(this).offset().top;
   if( $('html').hasClass('preserve-3d') ) {
     window.requestAnimationFrame(function(){
       moveBackground(event, wrapperOffsetTop);
     });
   }
 });
});

//on resize - adjust .cd-background-wrapper and .cd-floating-background dimentions and position
$(window).on('load', function(){
 if( $('html').hasClass('preserve-3d') ) {
   window.requestAnimationFrame(function(){
     halfWindowH = $(window).height()*0.5,
     halfWindowW = $(window).width()*0.5;
     initBackground();
   });
 } else {
   $('.cd-background-wrapper').attr('style', '');
   $('.cd-floating-background').attr('style', '').removeClass('is-absolute');
 }
});

function initBackground() {
 var wrapperHeight = Math.ceil(halfWindowW*2/aspectRatio), 
   proportions = ( maxRotationY > maxRotationX ) ? 1.1/(Math.sin(Math.PI / 2 - maxRotationY*Math.PI/180)) : 1.1/(Math.sin(Math.PI / 2 - maxRotationX*Math.PI/180)),
   newImageWidth = Math.ceil(halfWindowW*2*proportions),
   newImageHeight = Math.ceil(newImageWidth/aspectRatio),
   newLeft = halfWindowW - newImageWidth/2,
   newTop = (wrapperHeight - newImageHeight)/2;

 //set an height for the .cd-background-wrapper
 $('.cd-background-wrapper').css({
   'height' : wrapperHeight,
 });
 //set dimentions and position of the .cd-background-wrapper		
 $('.cd-floating-background').addClass('is-absolute').css({
   'left' : newLeft,
   'top' : newTop,
   'width' : newImageWidth,
 });
}

function moveBackground(event, topOffset) {
 var rotateY = ((-event.pageX+halfWindowW)/halfWindowW)*maxRotationY,
   yPosition = event.pageY - topOffset,
   rotateX = ((yPosition-halfWindowH)/halfWindowH)*maxRotationX;

 if( rotateY > maxRotationY) rotateY = maxRotationY;
 if( rotateY < -maxRotationY ) rotateY = -maxRotationY;
 if( rotateX > maxRotationX) rotateX = maxRotationX;
 if( rotateX < -maxRotationX ) rotateX = -maxRotationX;

 $('.cd-floating-background').css({
   '-moz-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
     '-webkit-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
   '-ms-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
   '-o-transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
   'transform': 'rotateX(' + rotateX + 'deg' + ') rotateY(' + rotateY + 'deg' + ') translateZ(0)',
 });
}
/* */
});

(function getPerspective(){
  var element = document.createElement('p'),
      html = document.getElementsByTagName('html')[0],
      body = document.getElementsByTagName('body')[0],
      propertys = {
        'webkitTransformStyle':'-webkit-transform-style',
        'MozTransformStyle':'-moz-transform-style',
        'msTransformStyle':'-ms-transform-style',
        'transformStyle':'transform-style'
      };

    body.insertBefore(element, null);

    for (var i in propertys) {
        if (element.style[i] !== undefined) {
            element.style[i] = "preserve-3d";
        }
    }

    var st = window.getComputedStyle(element, null),
        transform = st.getPropertyValue("-webkit-transform-style") ||
                    st.getPropertyValue("-moz-transform-style") ||
                    st.getPropertyValue("-ms-transform-style") ||
                    st.getPropertyValue("transform-style");

    if(transform!=='preserve-3d'){
      html.className += ' no-preserve-3d';
    } else {
    	html.className += ' preserve-3d';
    }
    document.body.removeChild(element);

})();


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

