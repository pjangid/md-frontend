var publishASRETemplate = `<section class="">
                                <h3 data-handler="eitshipsth"
                                    class="slider-activator-custom ad-mt-16 ad-text-blue-header ad-flex ad-justify-between ad-text-18 ad-font-bold ad-border-b-1 ad-border-gray-shadeOne ad-pb-8 ad-leading-20">
                                <label>Company Information</label> 
                                    <span class="">
                                        <svg class="ad-inline" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.5L19.5 15L18.45 16.05L12 9.6L5.55 16.05L4.5 15L12 7.5Z" fill="black"></path>
                                        </svg>

                                    </span>
                                </h3>

                                <section class="eitshipsth ad-pt-24 ad-mb-32">
                                    <section>
                                        <div class="ad-mb-24 ad-w-full">
                                            <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Company Name</label>
                                                <div class="dropDownControl default disclosureCompany ad-w-full ad-p-12" data-error-default="Selected valid disclosure type">
                                                    <p class="ad-flex ad-justify-between ad-items-center">
                                                        <input autocomplete="off" id="companiesListInput" data-error="disabled" placeholder="Enter entity name" class="ad-w-11/12" type="text">
                                                        <svg class="ad-inline-block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 11L3 5.99999L3.7 5.29999L8 9.59999L12.3 5.29999L13 5.99999L8 11Z" fill="#668088"></path>
                                                        </svg>
                                                    </p>
                                                    <div style="width: 100%;" class="dropdown-list">
                                                    <div class="ad-bg-white ad-py-8">
                                                        <p class="ad-bg-white ad-flex ad-mx-12 ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2">
                                                            <input data-field="not-required" class="ad-bg-white ad-pl-12 ad-w-full ad-text-blue-header single-select-search-dropdown" type="text" placeholder="Search Entity Name">
                                                            <span class="ad-px-12 ad-py-8">
                                                                    <svg class="ad-inline" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 17.8687L14.0312 13.125C16.3746 10.2976 16.0822 6.12774 13.3672 3.65505C10.6522 1.18236 6.47324 1.2799 3.87657 3.87657C1.2799 6.47324 1.18236 10.6522 3.65505 13.3672C6.12774 16.0822 10.2976 16.3746 13.125 14.0312L17.8687 18.75L18.75 17.8687ZM3.125 8.75C3.125 5.64339 5.64339 3.125 8.75 3.125C11.8566 3.125 14.375 5.64339 14.375 8.75C14.375 11.8566 11.8566 14.375 8.75 14.375C5.64339 14.375 3.125 11.8566 3.125 8.75Z" fill="#668088"></path>
                                                                    </svg>
                                                                </span>
                                                        </p>
                                                    </div>
                                                        <ul id="companies-list" class="ad-bg-gray-shadeThree">
                                                        
                                                        </ul>
                                                    </div>
                                            </div>
                                        </div>
                                    </section>
                                    <section class="ad-flex ad-flex-wrap ad-justify-between ad-pt-24">
                                        <div class="ad-mb-24 ad-w-full">
                                            <label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Security Code</label>
                                                <div class="dropDownControl securityCode disclosure ad-w-full ad-p-12" data-error-default="Selected valid disclosure type">
                                                    <div class="ad-flex ad-justify-between ad-items-center">
                                                        <div style="width: 95%;">
                                                            <div>
                                                                <p id="bindCodeList">
                                                                    <label class="selectValue ad-text-blue-header">Select entity code</label>
                                                                </p>
                                                            </div>
                                                        </div>    
                                                        <p style="width: 5%;text-align: right;">
                                                            <svg class="ad-inline-block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M8 11L3 5.99999L3.7 5.29999L8 9.59999L12.3 5.29999L13 5.99999L8 11Z" fill="#668088"></path>
                                                            </svg>
                                                        </p>
                                                        
                                                        
                                                    </div>
                                                    <div style="width: 100%; display: none;" class="dropdown-list">
                                                        <ul id="securityListElement">
                                                        
                                                        </ul>
                                                        <p style="margin-top: -1px;" class="ad-flex ad-justify-between ad-bg-white ad-text-12 ad-p-8 ad-pt-16">
                                                            <button id="clearSecurityData" type="button" class="ad-w-1/2 ad-cursor-pointer ad-bg-gray-shadeTwo ad-text-white ad-px-12 ad-py-8 ad-mr-12">Clear</button>
                                                            <button id="applySecurity" type="button" class="ad-w-1/2 ad-cursor-pointer ad-bg-blue-shadeFour ad-text-white ad-px-12 ad-py-8 ad-ml-12">Apply</button>
                                                        </p>
                                                    </div>
                                            </div>
                                        </div>
                                    </section>
                                </section>
                                </section>`;

$(document).ready(function () {
    $("#radioPublishASLA").click(function () {
        $(this).children("#radioLA").prop("checked", true)
        $("#publishedASRE").slideUp(function () {
            // $(this).empty()
        })
    })
    $("#radioPublishASRE").click(function () {
        $(this).children("#radioRE").prop("checked", true);
        $("#publishedASRE").html(publishASRETemplate).hide().slideDown()
        setTimeout(() => {
            // Security code for document publishing starts here
            document.getElementById("applySecurity").addEventListener("click", function () {
                $(this).parents(".dropdown-list").hide()
            })
            $("#clearSecurityData").click(function () {
                securityCodeList = [];
                $("#securityListElement > li").removeClass('active')
                addRemoveSecurityChips()
            })

            // New Disclosure entity list generation.
            $(document).on('keyup', "#companiesListInput", function () {
                var _this = this;
                var filteredList = $('ul#companies-list > li');

                var result = filteredList.filter(function (i, li) {
                    var list_item_text = $(li).text().toUpperCase();
                    var search_text = _this.value.toUpperCase();
                    return ~list_item_text.indexOf(search_text);
                });

                filteredList.hide();
                result.show();

            })
        });
    })
});

$(document).on("click", "#companiesListInput", function () {
    let listElement = $("#companiesListData").html()
    if ($("#companies-list").children("li").length != 0) {
    } else {
        $("#companies-list").html(listElement)
    }
})

function addRemoveSecurityChips() {
    securityCodeList = securityCodeList.filter(function (el) {
        return el != null;
    });
    if (securityCodeList.length) {
        $("#bindCodeList").empty()
        securityCodeList.forEach(element => {
            $("#bindCodeList").append(ChipLabel(element));
            // $("#bindCodeList").append(`<label class="selectValue ad-text-blue-header dropdownChip">${element}</label>`)
        });
    } else {
        $("#bindCodeList").empty()
        $("#bindCodeList").append(`<label class="selectValue ad-text-blue-header">Select entity code</label>`)
    }
    $(".dropDownControl.securityCode").attr('data-value', securityCodeList.join(','))

    securityCodeListID = [];
    securityCodeList.forEach(element => {
        let id = $('#securityListData li a[data-value=' + element + ']').data('id');
        securityCodeListID.push(id)
    })
}


$(document).on("click", "#companies-list li", function (e) {
    e.stopPropagation();
    let name = $(this).data('name')
    let _id = $(this).data('id')
    $("#companiesListInput").val(name)
    $(this).parents('.dropDownControl').attr('data-value', _id)
    $(this).parents('.dropdown-list').hide()
    fetchCompanySecurityData(name, _id);
})


$(document).on("click", "#securityListElement > li", function (e) {
    e.stopPropagation()
    let value = $(this).children("a").data("value")
    if (value == "all") {
        $(this).parent().children("li").removeClass("active");
        $(this).addClass('active');
        securityCodeList = [];

        $(this).parent().children("li").each((index, element) => {
            if (index == 0) { } else {
                securityCodeList.push($(element).children("a").data('value'))
            }
        })
    } else {
        if ($(this).parent().children("li")[0].classList.contains('active')) {
            securityCodeList = [];
            $(this).parent().children("li").removeClass('active')
            $(this).addClass("active");
            securityCodeList.push(value)
        } else {
            if ($(this).hasClass('active')) {
                let index = securityCodeList.indexOf(value);
                delete (securityCodeList[index]);
                $(this).removeClass("active")
            } else {
                $(this).addClass("active");
                securityCodeList.push(value)
            }
        }

    }
    addRemoveSecurityChips()
})


function ChipLabel(param) {
    return `<label id="${param}" class="selectValue removeSelectedChip ad-text-blue-header dropdownChip">${param} <span> <svg class="ad-inline ad-relative" style="top:-1px" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z" fill="#0051A2"/>
      </svg>
      </span></label>`
}

$(document).on("click", ".removeSelectedChip", function (e) {
    e.stopPropagation();
    let id = $(this).attr("id");
    let index = securityCodeList.indexOf(id);
    delete (securityCodeList[index])
    addRemoveSecurityChips()
    activateDeactivateChipsSelector(id)
})

function activateDeactivateChipsSelector(id) {
    $("#securityListElement > li").removeClass('active')
    securityCodeList.forEach((elem, index) => {
        $("#securityListElement > li").each((index, element) => {
            if ($(element).children("a").data('value').toLowerCase() == elem.toLowerCase()) {
                $(element).addClass("active")
            } else {
            }
        })
    })
}