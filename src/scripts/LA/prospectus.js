// $(document).ready(function() {
//     setTimeout(() => {
//         renderProspectus()
//     }, 300);
// });

window.renderProspectus = function(result) {
    try {
        if (getNumberOfPages(result.totalResults) > 0) {
            $("#renderPageNumbers").empty();
            $("#prospectus-container").empty()


            for (let index = 1; index <= getNumberOfPages(result.totalResults); index++) {
                $("#renderPageNumbers").append(`
                   <button data-page="${index}" style="width: 24px;line-height: 24px;" href="/" class="footer-navigation-page ad-inline-block ad-text-center ad-mr-8 ad-bg-white ad-text-gray-shadeTwo ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ${index==filterPayloadProspectus.PageNo?'active':''}">
                       ${index}
                   </button>
                `);
            }


            for (let index = 0; index < result.prospectusList.length; index++) {
                $("#prospectus-container").append(`
                    <li data-location="${result.prospectusList[index].itemId}" class="ad-cursor-pointer ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-flex ad-justify-between ad-items-center ad-bg-white ad-py-16 ad-px-24 ad-mb-16">
                        <p>
                            <label class="ad-text-18 ad-block ad-mb-4">${result.prospectusList[index].title}</label>
                            <label class="ad-text-blue-shadeFive ad-block"><strong>Prospectus ${result.prospectusList[index].status} Date:</strong> ${result.prospectusList[index].publishedDate    }</label>
                        </p>
                        <a href="${result.prospectusList[index].mediaUrl}" target="_blank" class="ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2 ad-text-blue-shadeFour ad-px-20 ad-py-14">
                            <svg class="ad-inline ad-mr-8" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="#BABBB1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M14 2V8H20" stroke="#BABBB1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16 13H8" stroke="#BABBB1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M16 17H8" stroke="#BABBB1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                <path d="M10 9H9H8" stroke="#BABBB1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                            </svg>
                            View Prospectus Details
                        </a>
                    </li>
                `);
            }
        } else {
            alert("No Product Found")
        }

    } catch (error) {

    }



}

$(document).on("click", "#renderPageNumbers button", function(e) {
    filterPayloadProspectus.PageNo = $(this).data('page');
    renderProspectus()
})

function getNumberOfPages(totalProductCount) {
    try {
        return parseInt(totalProductCount) / resultPerpage

    } catch (error) {

    }
}



// Create Filter

$("#search-prospectus").keyup(function() {
    filterPayloadProspectus.Content = this.value;
})

// Filter Creation Ends Here

$("#clearProspectus").click(function() {
    window.location.href = document.location.href.split("?")[0]
})

// query string manupulation

$(document).on("click", "#prospectus-container > li", function() {
    let url = $(this).attr('data-location')
    window.location.href = "/prospectus/detail?prospectusid=" + url
})