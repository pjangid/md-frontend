$(document).on('keyup', "#companiesListInputCustomizeDashboard", function() {
    let _this = this;
    let filteredList = $('ul#customizeCompaniesList > li');
    let result = filteredList.filter(function(i, li) {
        let list_item_text = $(li).text().toUpperCase();
        let search_text = _this.value.toUpperCase();
        return ~list_item_text.indexOf(search_text);
    });

    filteredList.hide();
    result.show();
})


// Customize Dasboard Feature
$(document).on("click", ".dropDownControl.companyListDasboardCustomize li", function(e) {
    e.stopPropagation()
    let companyId = $(this).data('value');
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        let index = selectedCompaniesForCustomize.indexOf(companyId)
        delete(selectedCompaniesForCustomize[index])
    } else {
        $(this).addClass('active');
        selectedCompaniesForCustomize.push(companyId)
    }
    selectedCompaniesForCustomize = selectedCompaniesForCustomize.filter(function(el) {
        return el != null;
    });

    generateCompanyName(selectedCompaniesForCustomize)
});

function generateCompanyName(companyList) {
    $("#companyListCustomizeDashboard").empty()
    if (companyList.length) {
        for (let index = 0; index < companyList.length; index++) {
            $("#customizeCompaniesList li").each((i, element) => {
                let companyId = $(element).data('value');
                if (companyList[index] == companyId) {
                    $("#companyListCustomizeDashboard").append(`
                    <button type="button" data-value="${companyList[index]}" class="ad-inline-block ad-bg-blue-shadeEight ad-text-blue-shadeFour ad-text-12 ad-p-12 ad-mr-8 ad-mb-8">
                    ${$(element).text()}
                        <svg class="ad-inline ad-ml-8" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z" fill="#0051A2"/>
                        </svg>
                    </button>
                    `);
                }
            })
        }
        $(".companyListDasboardCustomize").attr('data-value',"data")
    } else {
        $(".companyListDasboardCustomize").removeAttr('data-value')

    }
}

$(document).on("click", "#companyListCustomizeDashboard button", function(e) {
    let companyId = $(this).data('value');
    $(this).hide(200)
    setTimeout(() => {
        let index = selectedCompaniesForCustomize.indexOf(companyId)
        delete(selectedCompaniesForCustomize[index])
        selectedCompaniesForCustomize = selectedCompaniesForCustomize.filter(function(el) {
            return el != null;
        });
        generateCompanyName(selectedCompaniesForCustomize);
        $("#customizeCompaniesList li").each((i, element) => {
            if (companyId == $(element).data("value")) {
                $(element).removeClass('active')
            }
        })
    }, 300);
});

$("#addCustomDashboard").click(function(e) {
    if ($("#customizeDashboardName").val() != "" && selectedCompaniesForCustomize.length >= 1) {
        $("#customizeDashboardName").attr('disabled', "disabled");
        let dashboardName = $("#customizeDashboardName").val();
        $(this).text("")
        $(this).append(`<span class="loader"></span>`);
        $("#cancelCustomDashboard").hide()
        submitCustomizeDashboard(selectedCompaniesForCustomize, dashboardName).then((responseDetails) => {
            $("#customizeDashboardName").removeAttr('disabled')
            $("#companyListCustomizeDashboard").empty();
            $("#customizeDashboardName").val("");

            $(this).text("Add")
            $(this).children(`span`).remove();
            $("#cancelCustomDashboard").show()

            selectedCompaniesForCustomize = [];
            $("#customizeCompaniesList li").removeClass("active")
            $("#myFavouritesList").prepend(`
                <li class="ad-flex ad-mb-16 ad-text-12 ad-justify-between ad-items-center">
                    <a href="?dashboardid=${responseDetails.dashboardID}" target="_self" title="${dashboardName}" class="ad-text-blue-shadeFour ad-w-3/4 applyEllipsis">${dashboardName}</a>
                    <button type="button" data-key="${responseDetails.dashboardID}" data-details="${responseDetails.list}" class="ad-cursor-pointer editDashboardRow">
                        <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1 13H15V14H1V13ZM12.7 4.5C13.1 4.1 13.1 3.5 12.7 3.1L10.9 1.3C10.5 0.9 9.9 0.9 9.5 1.3L2 8.8V12H5.2L12.7 4.5ZM10.2 2L12 3.8L10.5 5.3L8.7 3.5L10.2 2ZM3 11V9.2L8 4.2L9.8 6L4.8 11H3Z" fill="#668088"/>
                        </svg>
                    </button>
                    <button type="button" data-uniqueid="${responseDetails.dashboardID}" class="ad-cursor-pointer removeDashboardRow">
                        <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z" fill="#668088"/>
                        </svg>
                    </button>
                </li>
            `);
        })
    } else {
        // alert("Company Name or List Not selected")
    }
});

$("#cancelCustomDashboard").click(function(e) {
    resetFormErrors("customize-dashboard-form");
    $(".disableSection").removeClass("disableSection");
    if ($("#updateCustomDashboard").is(":visible")) {
        cleanSelectBoxSelection();
        $("#updateCustomDashboard").hide(200)
        $("#addCustomDashboard").show(200);
        editDashboardRowID = "";
    } else {
        cleanSelectBoxSelection();
        $("#customize-dashboard-dialogue").fadeOut(200)
    }
})


function cleanSelectBoxSelection() {
    selectedCompaniesForCustomize = [];
    $("#customizeCompaniesList li").removeClass("active");
    generateCompanyName(selectedCompaniesForCustomize);
    $("#customizeDashboardName").val("")
}

var tempElemetFAV="";
$(document).on("click", ".removeDashboardRow", function(e) {
    let name = $(this).prev().prev().text();
    // let confirm = window.confirm("Are you sure you want to delete " + name)
    $("#remove-name-user").text(name);
    $("#confirmation-fav-del").attr("data-val",$(this).data('uniqueid'))
    $("#confirmation-fav-del").show();
    tempElemetFAV=$(this)
    // if (confirm) {
        // removeCustomizeDashboard($(this).data('uniqueid')).then((response) => {
        //     $(this).parent().fadeOut(300, function() { $(this).remove(); });
        // })
    // } else {

    // }

})

$(document).on("click","#submit-fav-del",function(){
    removeCustomizeDashboard($("#confirmation-fav-del").data('val')).then((response) => {
        $(tempElemetFAV).parent().fadeOut(300, function() { $(tempElemetFAV).remove(); });
    })
    $("#confirmation-fav-del").hide();
})

$(document).on("click", "#cancel-fav-del", function(e) {
    $("#confirmation-fav-del").hide();
});

var editDashboardRowID = "";
var selectedElementForEdit = "";
$(document).on("click", ".editDashboardRow", function(e) {
    $(".disableSection").removeClass("disableSection");
    $(this).parent().addClass("disableSection");
    $("#addCustomDashboard").hide(200)
    $("#updateCustomDashboard").show(200)
    $("#updateCustomDashboard").text('Update')
    let key = $(this).data('key');
    editDashboardRowID = key;
    selectedCompaniesForCustomize = $(this).data('details').split(',');
    selectedCompaniesForCustomize = selectedCompaniesForCustomize.filter(function(el) {
        return el != null;
    });
    generateCompanyName(selectedCompaniesForCustomize)
    $("#customizeCompaniesList li").removeClass("active");
    selectedCompaniesForCustomize.forEach(id => {
        $("#customizeCompaniesList li").each((index, element) => {
            let data = $(element).data('value')
            if (id == data) {
                $(element).addClass("active")
            }
        })
    });
    $("#customizeDashboardName").val($(this).prev().text())
    selectedElementForEdit = $(this);
    // details.list.forEach(element => {
    //     selectedCompaniesForCustomize.push(element.id)
    //     $("#companyListCustomizeDashboard").append(
    //         `<button data-value="${element.id}" class="ad-inline-block ad-bg-blue-shadeEight ad-text-blue-shadeFour ad-text-12 ad-p-12 ad-mr-8 ad-mb-8">
    //             ${element.name}
    //             <svg class="ad-inline ad-ml-8" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    //             <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z" fill="#0051A2"></path>
    //             </svg>
    //         </button>`);
    // });
})

$("#updateCustomDashboard").click(function() {
    if($("#customizeDashboardName").val() != "" && $(".companyListDasboardCustomize").attr('data-value')!=""){
        $(this).text("");
        $(this).append(`<span class="loader"></span>`);
        submitCustomizeDashboard(selectedCompaniesForCustomize, $("#customizeDashboardName").val(), editDashboardRowID).then((details) => {
            $("#addCustomDashboard").show(200);
            $("#updateCustomDashboard").hide(200);
            selectedElementForEdit.prev().text(details.title);
            $(selectedElementForEdit).data("details", details.list);
            $(".disableSection").removeClass('disableSection');
            cleanSelectBoxSelection();
        });
    }
    
})