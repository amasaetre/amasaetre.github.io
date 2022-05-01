$(document).ready(function(){

    $(window).scroll(() => {
        let scrollDistanse = $(window).scrollTop();
        $(".section").each((i, el) => {
            if($(el).offset().top  - $("nav").outerHeight() <= scrollDistanse){
                $("nav a").each((i, el) => {
                    if($(el).hasClass("active")){
                        $(el).removeClass("active");
                    }
                });
                $('nav li:eq('+ i +')').find('a').addClass("active");
            }
        });
    });
});

let options = {threshold: [1]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) =>{
        observer.observe(el);
    });

function onEntry (entry){
    entry.forEach(change => {
        if (change.isIntersecting){
            change.target.classList.add('show-animation');
        }
    });
}

function calc() {
    var type_web = document.getElementById("type_web");
    var type_design = document.getElementById("type_design");
    var type_html = document.getElementById("type_html");
    var result = document.getElementById("result"); 

    var price = 0;
    price += parseInt(type_web.options[type_web.selectedIndex].value);
    price += parseInt(type_design.options[type_design.selectedIndex].value);
    price += parseInt(type_html.options[type_html.selectedIndex].value);

    result.innerHTML = price;
}
$(function(){
    $('.rev_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        dots: true,
    })
    $('.cases_slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        dots: true,
    })
})
