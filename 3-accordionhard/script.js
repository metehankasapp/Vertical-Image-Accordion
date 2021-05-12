var window600 = window.matchMedia("(min-width: 600px)");
var window768 = window.matchMedia("(min-width: 768px)");
var window1000 = window.matchMedia("(min-width: 1000px)");





function accordionimg() {


    $('.accordionbox').click(function() {

        var accordionheader = $(this)[0].children[0].children[0];
        var accordiontext = $(this)[0].children[0].children[1];
        var accordionimg = $(this)[0].children[1];



        $('.frt-accordionimg').removeClass('h-100');
        $('.accordionimg').css('height', '180px');
        $('.accordion-header:first-child').css('display', 'flex');
        $('.accordion-header:first-child').css('justify-content', 'baseline');
        $('.accordion-header:first-child').css('align-items', 'center');




        $('.accordion-text').css('display', 'none'); // ilk önce tüm accordion textlerini gizledik.
        $('.accordion-header').show('slow');

        $(accordionheader).css('display', 'none');
        $(accordionimg).css('height', '100%');
        console.log(accordionimg);
        $(accordiontext).show('slow');
        $(accordiontext).css('display', 'flex');
        $(accordiontext).css('flex-direction', 'column');
        $(accordiontext).css('justify-content', 'center');
        $(accordiontext).css('align-items', 'center');



        if (window600.matches) {

        }
        if (window768.matches) {

        }
        if (window1000.matches) {

        }
    })

}


accordionimg();