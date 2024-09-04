$(document).ready(function(params) {
    $("#thirdPartyUser").click(function() {
        $(".normalUser").addClass("ad-hidden")
        $(".specialUser").removeClass("ad-hidden")
    })

    $("#newUserSecondary,#newUserPrimary").click(function() {
        $(".normalUser").removeClass("ad-hidden")
        $(".specialUser").addClass("ad-hidden")
    })
})