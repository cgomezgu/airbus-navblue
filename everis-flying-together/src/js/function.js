import $ from 'jquery'; 
import imageOriginal from '../images/draggable-comparator/blueprint-wing-web.png';

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
    const firstLetter = arrCitiesDivided[city][0].charAt(0);
 
    switch (numSlide) {
      case 1:
        $slide =
        $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">          
          <div class="slide__wrapper">
            <div class="slide__text-wrapper">
              <h1>Everis Flying Together</h1>
              <h3>We are ready to raise your wings.</h3>
              <h3>We will guide you on this incredible flight.</h3>
              <h3>Before going ahead with this journey, don’t forget to pick these 4 fundamentals. 
              </h3>
            </div>  
            <div class="contact-area">
              <div class="contact contact-1">
                <main>
                  <section>
                    <div class="content">
                      <span class="lnr lnr-star-half"></span>
                      <aside>
                        <h1>WE ENGAGE SINCE THE FIRST PI</h1>
                        <p>Lorem ipsum dolor est</p>
                      </aside>                  
                      <button id="button">
                        <span>Show more</span>                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path> </g> </svg>
                      </button>
                    </div>
                    <div class="title"><p>Lore ipsum dolor est</p></div>
                  </section>             
                </main>
                <nav>
                  <a href="#" class="subsection subsection-1">
                    <div class="icon">
                      <span class="lnr lnr-earth"></span>
                    </div>
                    <div class="content">
                      <h1>Title</h1>
                      <span>Subtitle</span>
                    </div>                
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                  </a>
                  <a href="#" class="subsection subsection-2">
                    <div class="icon">
                      <span class="lnr lnr-chart-bars"></span>
                    </div>
                    <div class="content">
                      <h1>Title</h1>
                      <span>Subtitle</span>
                    </div>                
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                  </a>
                  <a href="#" class="subsection subsection-3">
                    <div class="icon">
                      <span class="lnr lnr-thumbs-up"></span>
                    </div>
                    <div class="content">
                      <h1>Title</h1>
                      <span>Subtitle</span>
                    </div>                
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                  </a>
                </nav>
              </div>
              <div class="contact contact-2">
                <main>
                  <section>
                    <div class="content">
                      <span class="lnr lnr-star-half"></span>
                      <aside>
                        <h1>WE ENGAGE SINCE THE FIRST PI</h1>
                        <p>Lorem ipsum dolor est</p>
                      </aside>                  
                      <button id="button">
                        <span>Show more</span>                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path> </g> </svg>
                      </button>
                    </div>
                    <div class="title"><p>Lorem ipsum dolor est</p></div>
                  </section>             
                </main>
                <nav>
                  <a href="#">
                    <div class="icon">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z" fill-rule="evenodd"/></svg>
                    </div>
                    <div class="content">
                      <h1>Title</h1>
                      <span>Subtitle</span>
                    </div>                
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                  </a>
                  <a href="#">
                    <div class="icon">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
                    </div>
                    <div class="content">
                      <h1>Facebook</h1>
                      <span>Riccardo Cavallo</span>
                    </div>                
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                  </a>
                  <a href="#">
                    <div class="icon">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"/></svg>
                    </div>
                    <div class="content">
                      <h1>Twitter</h1>
                      <span>@RichoxDesign</span>
                    </div>                
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                  </a>
                </nav>
              </div>
              <div class="contact contact-3">
                <main>
                  <section>
                    <div class="content">
                      <span class="lnr lnr-star-half"></span>
                      <aside>
                        <h1>WE ENGAGE SINCE THE FIRST PI</h1>
                        <p>Lorem ipsum dolor est</p>
                      </aside>                  
                      <button id="button">
                        <span>Show more</span>                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path> </g> </svg>
                      </button>
                    </div>
                    <div class="title"><p>Lore ipsum dolor est</p></div>
                  </section>             
                </main>
                <nav>
                  <a href="#">
                    <div class="icon">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z" fill-rule="evenodd"/></svg>
                    </div>
                    <div class="content">
                      <h1>Title</h1>
                      <span>Riccavallo@gmail.com</span>
                    </div>                
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                  </a>
                  <a href="#">
                    <div class="icon">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
                    </div>
                    <div class="content">
                      <h1>Facebook</h1>
                      <span>Riccardo Cavallo</span>
                    </div>                
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                  </a>
                  <a href="#">
                    <div class="icon">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"/></svg>
                    </div>
                    <div class="content">
                      <h1>Twitter</h1>
                      <span>@RichoxDesign</span>
                    </div>                
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                  </a>
                </nav>
              </div>
              <div class="contact contact-4">
                <main>
                  <section>
                    <div class="content">
                      <span class="lnr lnr-star-half"></span>
                      <aside>
                        <h1>WE ENGAGE SINCE THE FIRST PI</h1>
                        <p>Lorem ipsum dolor est</p>
                      </aside>                  
                      <button id="button">
                        <span>Show more</span>                    
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path> </g> </svg>
                      </button>
                    </div>
                    <div class="title"><p>Lore ipsum dolor est</p></div>
                  </section>             
                </main>
                <nav>
                  <a href="#">
                    <div class="icon">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3v10c0 .567-.433 1-1 1h-1V4.925L8 9.233 2 4.925V14H1c-.567 0-1-.433-1-1V3c0-.283.108-.533.287-.712C.467 2.107.718 2 1 2h.333L8 6.833 14.667 2H15c.283 0 .533.108.713.288.179.179.287.429.287.712z" fill-rule="evenodd"/></svg>
                    </div>
                    <div class="content">
                      <h1>Title</h1>
                      <span>Riccavallo@gmail.com</span>
                    </div>                
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                  </a>
                  <a href="#">
                    <div class="icon">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.48-1.195 1.18v1.54h2.39l-.31 2.42h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0" fill-rule="nonzero"/></svg>
                    </div>
                    <div class="content">
                      <h1>Facebook</h1>
                      <span>Riccardo Cavallo</span>
                    </div>                
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                  </a>
                  <a href="#">
                    <div class="icon">
                      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M16 3.038c-.59.26-1.22.437-1.885.517.677-.407 1.198-1.05 1.443-1.816-.634.37-1.337.64-2.085.79-.598-.64-1.45-1.04-2.396-1.04-1.812 0-3.282 1.47-3.282 3.28 0 .26.03.51.085.75-2.728-.13-5.147-1.44-6.766-3.42C.83 2.58.67 3.14.67 3.75c0 1.14.58 2.143 1.46 2.732-.538-.017-1.045-.165-1.487-.41v.04c0 1.59 1.13 2.918 2.633 3.22-.276.074-.566.114-.865.114-.21 0-.41-.02-.61-.058.42 1.304 1.63 2.253 3.07 2.28-1.12.88-2.54 1.404-4.07 1.404-.26 0-.52-.015-.78-.045 1.46.93 3.18 1.474 5.04 1.474 6.04 0 9.34-5 9.34-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" fill-rule="nonzero"/></svg>
                    </div>
                    <div class="content">
                      <h1>Twitter</h1>
                      <span>@RichoxDesign</span>
                    </div>                
                    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"> <g class="nc-icon-wrapper" fill="#444444"> <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"></path> </g> </svg>
                  </a>
                </nav>
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
              <h1>Strong Wings</h1>
              <h3>Just like the strong wings of dragonflies, we adapt our products to your needs and get the best out of them.
              </h3>
            </div>                    
            <div class="slide-container">
              <div class="${slideComparatorContainer}">
                <figure class="image-container">
                  <div class="image-label">
                    <h3>Trend</h3>
                    <ul>
                      <li>texto 1</li>
                      <li>texto 2</li>
                      <li>texto 3</li>
                      <li>texto 4</li>
                    </ul>
                  </div>                   
                  <img src=${imageOriginal} alt="Original Image"> 
                  <div class="resize-image"> 
                  </div>              
                  <span class="handle"></span>
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
                <h3>Like the versatility of a bird's wings, we make the delivery go as planned.
                </h3>
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
              <div class="video-container">
                <iframe poster="https://www.emailonacid.com/images/blog_images/Emailology/2013/html5_video/bunny_cover.jpg" src="https://player.vimeo.com/video/518638996" class="with-shadow" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
              </div>  
            </div>`);
        break;
        case 4:
          $slide =
            $(`<div data-target="${numSlide}" class="slide slide--${numSlide}">   
              <div class="slide__text-wrapper">
                <h1>Everis Flying Together</h1>
                <h3>We are ready to raise your wings.</h3>
                <h3>We will guide you on this incredible flight.</h3>
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
              <div class="slide__darkbg slide--${numSlide}__darkbg"></div>
                <div class="draggable-container">
                  <div class="draggable-clouds">
                    <ul>
                      <li>
                        <div class="ui-widget-content draggable-cloud cloud-1" />
                      </li>
                      <li>
                        <div class="ui-widget-content draggable-cloud cloud-2" />
                      </li>
                    </ul>                      
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
                <h3>We just consolidated an awesome trip together. But it is the beginning of the flight.
                </h3>
                <h3>Experience our different products/demos.</h3>
              </div>  
              <div class="button-container">
                <ul>
                  <li>
                    <button href="#">Descarga PDF</button>
                  </li>
                  <li>
                    <button href="#">Link to</button>
                  </li>
                  <li>
                    <button href="#">CTA</button>
                  </li>
                </ul>
              </div>
              <div class="button-container-bottom">
                <ul>
                  <li>
                    <button href="#">Descarga PDF</button>
                  </li>
                </ul>
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
  $( ".draggable-cloud" ).draggable({
    start: function() {
      $(this).fadeTo("slow", 0.1);
    }
  });

  $('#button').on("click", function(){
    $('#button').toggleClass('active');
    $('.contact-1 .title').toggleClass('active');
    $('.contact-1 nav').toggleClass('active');
    console.log("clicked")
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

