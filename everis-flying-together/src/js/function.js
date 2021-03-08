import $ from 'jquery'; 
import imageOriginal from '../images/draggable-comparator/blueprint-wing-web.jpg';

$(function () {
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
                <h3>Like dragonflies, we have the call to explore new territories at product level.</h3>
              </div>
            </div>    
            <p class="txt-instructions">Scroll along to discover our capacities</p>                
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
                <h1>Delivery</h1>
                <div class="slide__text--subtitle">
                  <h3>Alike the wings of the birds, we combine strength, lightness and flexibility, to make the delivery as planned.</h3>
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
              
              <div class="slide__wrapper-video">  
                <p class="txt-instructions txt-white">Watch our film to discover some of our experts.</p>                                     
                <div class="video-container">
                  <iframe poster="https://www.emailonacid.com/images/blog_images/Emailology/2013/html5_video/bunny_cover.jpg" src="https://player.vimeo.com/video/518638996" class="with-shadow" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                </div>  
                <div class="bullets-container">
                  <div class="bullet">
                    <p class="bullet-title"><span class="icn-arrow"></span>INIT</p>
                    <p class="bullet-subtitle">Taking off towards products, teams, and chapters.</p>                     
                  </div>
                  <div class="bullet"> 
                    <p class="bullet-title"><span class="icn-arrow"></span>TRANSITION & ONBOARDING</p>
                    <p class="bullet-subtitle">Foster collaboration to obtain a deep knowledge of products and its technical specifics.</p>                    
                  </div>
                  <div class="bullet"> 
                    <p class="bullet-title"><span class="icn-arrow"></span>RUNNING</p>
                    <p class="bullet-subtitle">Embrace program execution, transparency, and continuous learning understanding.</p>
                  </div>
                  <div class="bullet"> 
                    <p class="bullet-title"><span class="icn-arrow"></span>TRANSPARENCY AND A COMMON UNDERSTANDING</p>
                    <p class="bullet-subtitle">Following the SAFe principles, a close collaboration with an online dashboard for performance indicators in real time, sharing the same common vision on project outcomes.</p>
                  </div>
                </div>
              </div> 
            </div>`);
        break;
        case 4:
          $slide =
            $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">   
            <div class="slide__text-wrapper">
              <h1>Technology</h1>
              <div class="slide__text--subtitle">
                <h3>To reach the skies, the wings of an airplane use advanced technology and a solid structure enabling them to withstand high pressures and demanding conditions.</h3>
              </div>              
            </div>               
            <div class="slide__darkbg slide--${numSlide}__darkbg"></div>
              <div class="draggable-container">
                <p class="txt-instructions">Clear the clouds to discover our strengths</p>
                <div class="draggable-clouds">
                  <div class="ui-widget-content draggable-cloud cloud-1"></div>
                  <div class="ui-widget-content draggable-cloud cloud-2"></div>
                  <div class="ui-widget-content draggable-cloud cloud-3"></div>
                  <div class="ui-widget-content draggable-cloud cloud-4"></div>
                </div> 
                <div class="hidden-container-centered">
                  <div class="draggable-hidden-container contain-1">
                    <p class="draggable-hidden-container-title"><span class="icn-arrow"></span>From tech radar to the chapter</p>
                    <p class="draggable-hidden-container-subtitle">Accelerate the adoption of new technologies by delivery teams.</p>
                  </div>
                  <div class="draggable-hidden-container contain-2">
                    <p class="draggable-hidden-container-title"><span class="icn-arrow"></span>Generate great impact with your technology</p>
                    <p class="draggable-hidden-container-subtitle">Evolve the tech radar in an agile and dynamic way looking for quality, security, efficiency and excellence.</p>
                  </div>
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
                <h1>Let’s take off together</h1>
                <div class="slide__text--subtitle">
                  <h3>Take control from the cockpit to achieve our goals.</h3>
                </div>
              </div>  
              <div class="btn-container">
                <p class="txt-instructions">Remember to check all instruments before take-off</p>
                <div class="btn-wrapper">
                  <span class="step-num" id="stepNum1">3</span>  
                  <div class="btn-contain"> 
                    <p class="title">PRODUCT</p>
                    <div class="lines"></div>
                    <a class="btn is-disabled" href="https://inttrend.com/" target="_blank"><span>AI-powered market intelligence platform.​</span>Inttrend</a>                    
                  </div>
                  <div class="btn-contain">
                    <p class="title">DELIVERY</p>
                    <div class="lines"></div>
                    <div class="btn-flex">
                      <a class="btn btn-big is-disabled" href="http://globickbacklog.everisflyingtogether.com/" target="_blank">
                        <span>Navigate the product backlog as Globick is being built by the ONETICKET team</span>
                        Globick Product Backlog 
                      </a>
                      <a class="btn btn-big is-disabled" href="http://globickteam.everisflyingtogether.com" target="_blank">
                        <span>Explore how ONETICKET’s team overcome their challenges and fly altogether to deliver a product</span>
                        Globick Team Metrics
                      </a>
                      <a class="btn btn-big is-disabled" href="http://globickcode.everisflyingtogether.com" target="_blank">
                        <span>Review with our team the status of their code metrics as they advance on the product delivery</span>
                        Globick Code Metrics
                      </a>
                    </div>
                  </div>
                  <div class="btn-contain">
                    <p class="title">TECHNOLOGY</p>
                    <div class="lines"></div>
                    <div class="btn-flex">
                      <a class="btn is-disabled" href="http://winder.everisflyingtogether.com" target="_blank"><span>everis asset to accompany and guide organizations in the Digital Architecture Strategy Journey.</span>everis Winder</a>
                      <a class="btn btn-big is-disabled" href="http://dashboard.everisflyingtogether.com" target="_blank"><span>Integrate datasets to analyze trends and take agile decisions in near real time. </span>Real Time Dashboard</a>
                      <a class="btn btn-big is-disabled" href="http://socialmedia.everisflyingtogether.com" target="_blank"><span>Aeronautical social media analysis with AI techniques to identify trends and market behavior.</span>Trend Analysis</a>
                    </div>
                  </div>
                </div>               
              </div>
              <div class="btn-container-bottom">  
                <span class="step-num">1</span>            
                <a id="btnDownload1" class="btn btn-download btn-extrabig" href="http://flightmanual.everisflyingtogether.com/" target="_blank">
                  <i class="icn-download"></i><span>Get the flight manual and let’s travel together.</span>Flight Manual
                </a> 
                <span class="step-num">2</span>     
                <a id="btnDownload2" class="btn btn-download bg-blue btn-extrabig is-disabled" href="http://technicalproposal.everisflyingtogether.com" target="_blank">
                  <i class="icn-download"></i><span>Download our delivery offer and explore how we can work together​</span>Technical Proposal
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
      $(this).fadeTo("slow", 0.1);
    }
  });

  // enable buttons 
  $('#btnDownload1').on("click", function(){
    $('#btnDownload2').removeClass('is-disabled');
  });
  $('#btnDownload2').on("click", function(){
    $('.btn-contain .btn').removeClass('is-disabled');
  });


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
          minLeft = containerOffset + 160,
          maxLeft = containerOffset + containerWidth - dragWidth - 10;
      
      dragElement.parents().on("mousemove vmousemove", function(e) {
          let leftValue = e.pageX + xPosition - dragWidth;          
       
          //constrain the draggable element to move inside his container
          if(leftValue < minLeft ) {
              leftValue = minLeft;
          } else if ( leftValue > maxLeft) {
              leftValue = maxLeft;
          }

          var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';

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
  
  
};

