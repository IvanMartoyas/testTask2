$(document).ready(function(){

    try {
        // menu strat
        $(".search__close").click(function(){
            $( ".search__form" ).removeClass('search__form--active');
            // $( ".search__close" ).removeClass('active');
            
        })
        $(".search__open").click(function(){
            
            $( ".search__form" ).addClass('search__form--active');
            // $( ".search__close" ).addClass('active')
            
        })
        // menu end


        // slider functions start
        function headerSlider(index,  conunt) {
            console.log("conunt ",conunt)
            if(conunt < 10 ) {
                conunt = "0"+conunt
            }
            if(index < 10) {
                index = "0"+(index+1)
            }
            // console.log("index ", index)
            let str ="<span class='header__slideri'>"+index+"</span> <div></div> <span>"+conunt+"</span>";
            $("#header__slidercounter").html(str)
            // console.log("str",str)
        }
        // slider functions end


        // header slider strat
        var slider1 = $('#slider__header').bxSlider({
            auto: true,
            pager: true,
            // pagerCustom: '#header_slider_counter',
            nextText: '<img src="./assets/img/right_slide.svg" class="slider__prev" alt="slider__prev">',
            prevText: '<img src="./assets/img/left_slide.svg" class="slider__next" alt=" slider__next">',
            onSliderLoad: function (){
                // let slide_curr = slider1.getCurrentSlide(); 

                let conunt = Number($('#header__slideitem').length+1)

                headerSlider(0, conunt)
            },
            onSlideNext: function (){
                let conunt = slider1.getSlideCount();
                let slide_curr = slider1.getCurrentSlide();
        
                headerSlider(slide_curr, conunt)
            },
            onSlidePrev: function (){
                let conunt = slider1.getSlideCount();
                let slide_curr = slider1.getCurrentSlide();
            
                headerSlider(slide_curr, conunt)
            }
        });
        // header slider end

        // ourExperience slider strat
        var slider2 = $('#ourExperience__slider').bxSlider({
            minSlides: 3,
            maxSlides: 3,
            moveSlides: 1,
            speed: 3000,
            auto: true,
            pagerCustom: '.ourExperience__progerssbar',
            pager: true,
            onSliderLoad: function (currentSlideNumber) {
                // console.log("newIndex ",newIndex)
                try {
                    $('.ourExperience__slider > div:not(.bx-clone)').eq(1).addClass('_active');

                    $("#ourExperience_active_slide").html($('#ourExperience__slider > div').eq(0).html())
                
                    $(".ourEprogerssbar__value").addClass('ourEprogerssbar__value--active');
                }
                catch(e) {
                    console.log("ERR ",e)
                }
            },
            onSlideBefore: function (currentSlide, oldIndex, newIndex) {
                // newIndex показывает очерёдность правильно 
                try {
                    console.log("newIndex ",newIndex)
                    $('.ourExperience__slide').removeClass('_active');
                    $(currentSlide).next().addClass('_active'); 

                    // копирую содержимое активного слайда
                    $('#ourExperience_active_slide').html(" ");
                    $("#ourExperience_active_slide").html(currentSlide.next()[0].innerHTML) 


                    // прогресс бар который листает слайды
                    $(".ourEprogerssbar__value").removeClass('ourEprogerssbar__value--active');
                    setInterval(() => {
                            $(".ourEprogerssbar__value").addClass('ourEprogerssbar__value--active');
                    }, 1);

                }
                catch(e) {
                    console.log("ERROR ",e)
                }
            },
            onSlideAfter: function (currentSlideNumber, oldIndex, newIndex) {

            }
            // сделать активным слайд
            
    });
        // ourExperience slider end

        // ourcommadns slider start
        var slider3 = $('.ourcommadns__slider').bxSlider({
            minSlides: 3,
            maxSlides: 3,
            infiniteLoop: true,
            speed: 3000,  
            auto: true,
            slideMargin: 30,      
            slideWidth: 450,
            controls: true, 
            nextText: '<img src="./assets/img/ourcommadnsNext.png" class="ourcommadns__next" alt="slider__next">',
            prevText: '<img src="./assets/img/ourcommadnsPrev.png" class="ourcommadns__prev" alt="slider__prev">',
        })
        // ourcommadns slider end

        // review slider strat
        $('#review__slider').bxSlider({
            pager: true,
            controls: false,
            auto: true,
            // pause: 7000,
            minSlides: 1,
            maxSlides: 3,
            slideMargin: 30,        
            slideWidth: 450
        });
        // review slider end

        // review slider strat
        $('.howwework__slider').bxSlider({
            controls: true,
            pagerCustom: ".howwework__pager",
            prevSelector: '.howwework__custom--prev',
            nextSelector: '.howwework__custom--next', 
            nextText: '<img src="./assets/img/howwework_button.jpg.png" class="ourcommadns__next" alt="slider__next">',
            prevText: '<img src="./assets/img/howwework_button.jpg.png" class="ourcommadns__prev" alt="slider__prev">',
            pager: true,
            minSlides: 1,
            maxSlides: 3,
            moveSlides: 1,
            auto: true,
            mode: "vertical",
            // onSliderLoad: function () {
            //     // $(".howwework__slider").html($('.howwework__contents')[0]); 
            
            // },
            // onSlideBefore: function (currentSlide, oldIndex, newIndex) {
            //     console.log("click")
            //     // let conunt = Number($('#ourExperience__slider > div:not(.bx-clone)').length+1);
            //     // slider2MakePagination(newIndex,conunt);
            //     // console.log("currentSlide ",currentSlide)
            //     // console.log("currentSlide ",currentSlide[0].children[2])
            //     // $('#ourExperience__slider > div[aria-hidden="true"]').removeClass('_active');
            //     // $('.howwework__pageritem:not(.bx-clone)')[newIndex].addClass('_active');
            //     // console.log("  $('.howwework__pageritem:not(.bx-clone)')[newIndex] ",  $('.howwework__pageritem > div:not(.bx-clone)')[newIndex])
            //     // $('#ourExperience_active_slide').html(" ");
            //     // $("#ourExperience_active_slide").html($('#ourExperience__slider > div[aria-hidden="false"]').html()) 

            //     // $(".howwework__slider").html(currentSlide[0].children[2]); 
        
            // },
        });
        // review slider end
    }
    catch(e) {
        console.log("site error: ",e)
    }

});