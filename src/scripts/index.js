import "../components/master/header.js"
$(document).ready(function () {
    $(document).on("click",".slider-activator-custom",function(){
        if ($(this).hasClass('slideup')) {
            let operatingElement=$(this).data('handler');
            $(this).removeClass('slideup');
            $("."+operatingElement).slideDown();
            $(this).children("span").removeClass("rotate180")
        } else {
            let operatingElement=$(this).data('handler');
            $(this).addClass('slideup')
            $("."+operatingElement).slideUp()
            $(this).children("span").addClass("rotate180")
        }
    })
})