document.addEventListener('DOMContentLoaded', () => {
    try {
        document.getElementById("masterSearch").addEventListener("click", function(element) {
            activateSearch(this);
        });
    } catch (error) {

    }

    $(document).click(function(event) {
        var $target = $(event.target);
        if (!$target.closest('#masterSearch').length &&
            $('#result').is(":visible")) {
            $('#result').hide();
            $("#masterSearch").removeClass(["ad-bg-white"]);
            looseSearchInputFocus()
        }
    });

    // master search

    $(document).on("click", "#masterSearch > span", function(params) {
        $("#masterSearchInput").show(200);
        $(this).parent().prepend("<div class='dropdown-background' style='left:0;top:0;z-index:1;position:fixed;width:100%;height:100%;background-color:transparent'></div>")
    })

})

function activateSearch(ref) {
    // $("#masterSearch").addClass(["ad-bg-white"])
    $('#result').show();
    focusSearchInput();
}

function focusSearchInput() {
    $("#masterSearchInput").focus().addClass('ad-text-blue-header').removeClass('ad-text-white')
}

function looseSearchInputFocus() {
    $("#masterSearchInput").removeClass('ad-text-blue-header').addClass("ad-text-white")
}

$(".re-menu-master").click(function() {
    $(this).prepend("<div class='dropdown-background' style='left:0;top:0;z-index:1;position:fixed;width:100%;height:100%;background-color:transparent'></div>")
    $(this).children(".menuList").toggle()
})