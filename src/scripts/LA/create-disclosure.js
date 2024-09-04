$("#radioAnnouncement").click(function() {
    $(".reporting-entity-block").addClass('ad-hidden')
    $(".announcement-block").removeClass('ad-hidden')
})

$("#radioREPublish").click(function() {
    $(".announcement-block").addClass("ad-hidden");
    $(".reporting-entity-block").removeClass('ad-hidden')

})


// $(document).on("click", "#securityAnnouncementButton", function() {
//     $('#securityAnnouncementContainer').removeClass("ad-hidden");
//     $(this).addClass("ad-bg-blue-shadeFour ad-text-white")
//     $("#disclosureReportingEntity").removeClass("ad-bg-blue-shadeFour ad-text-white")
//     $(".announcement-block.common").removeClass("ad-hidden")
//     $(".reporting-entity-block.common").addClass("ad-hidden")
// })

// $(document).on("click", "#disclosureReportingEntity", function() {
//     $('#securityAnnouncementContainer').addClass("ad-hidden");
//     $(this).addClass("ad-bg-blue-shadeFour ad-text-white")
//     $("#securityAnnouncementButton").removeClass("ad-bg-blue-shadeFour ad-text-white")
//     $(".announcement-block.common").addClass("ad-hidden")
//     $(".reporting-entity-block.common").removeClass("ad-hidden")
// })