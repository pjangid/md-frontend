let bindLabelCode = "#bindChipListIssuer";
let originalElement = ".issuerDropdownElement";
let dropDownList = "#issuerListData";
let originalListElement = "#issuerListElement";
let labelMessage = "Select Issuer";
let uniqueChipClass = "removeSelectedChipIssuer";

// function addRemoveSecurityChips() {
//     selectedIssuerList = selectedIssuerList.filter(function(el) {
//         return el != null;
//     });
//     if (selectedIssuerList.length) {
//         $(bindLabelCode).empty()
//         selectedIssuerList.forEach(id => {
//             let name = $("ul#issuerListData").find(`[data-value='${id}']`).text();
//             $(bindLabelCode).append(ChipLabel(name, id));
//         });
//     } else {
//         $(bindLabelCode).empty()
//         $(bindLabelCode).append(`<label class="selectValue ad-text-blue-header">${labelMessage}</label>`)
//     }
//     $(".dropDownControl" + originalElement).attr('data-value', selectedIssuerList.join(','))

//     selectedIssuerIDList = [];
//     selectedIssuerList.forEach(element => {
//         let id = $(dropDownList + ' li a[data-value=' + element + ']').data('id');
//         selectedIssuerIDList.push(id)
//     })

//     // $('#issuerGridListView ul li').each((index,element)=>{
//     //     if(index==0){}else{
//     //         element.remove()
//     //     }
//     // })
//     // if(selectedIssuerList.length){
//     //     selectedIssuerList.forEach(id => {
//     //         let element=$("ul#issuerListData").find(`[data-value='${id}']`);
//     //         let ticker=$(element).data('ticker');
//     //         let securityName=$(element).data('security');
//     //         let securityType=$(element).data('security-type');
//     //         let securityCode=$(element).data('securitycode');
//     //         let status=$(element).data('status');

//     //         $("#issuerGridListView > ul").append(`
//     //             <li class="ad-p-16 ad-text-14 ad-block ad-w-full ad-border-solid ad-border-b-1 ad-border-gray-shadeOne">
//     //                 <label style="width: 15%;" class="ad-inline-block ad-truncate ad-px-8">${ticker}</label>
//     //                 <label style="width: 30%;" class="ad-inline-block ad-truncate ad-px-8">${securityName}</label>
//     //                 <label style="width: 16%;" class="ad-inline-block ad-truncate ad-px-8">${securityType}</label>
//     //                 <label style="width: 20%;" class="ad-inline-block ad-truncate ad-px-8">${securityCode}</label>
//     //                 <label style="width: 15%;" class="ad-inline-block ad-truncate ad-px-8"> <span class="dotIndicator ${status.toLowerCase()}"></span> ${status}</label>
//     //             </li>
//     //         `);
//     //     });

//     //     $("#issuerGridListView").fadeIn(200)

//     // }else{
//     //     $("#issuerGridListView").fadeOut(200)
//     // }
//     setTimeout(() => {
//         $(".dropdown-background").remove()
//     }, 200);
// }

// $(document).on("click", originalListElement + "> li", function(e) {
//     e.stopPropagation()
//     let value = $(this).children("a").data("value")
//     if (value == "all") {
//         $(this).parent().children("li").removeClass("active");
//         $(this).addClass('active');
//         selectedIssuerList = [];

//         $(this).parent().children("li").each((index, element) => {
//             if (index == 0) {} else {
//                 selectedIssuerList.push($(element).children("a").data('value'))
//             }
//         })
//     } else {
//         // if ($(this).parent().children("li")[0].classList.contains('active')) {
//         //     selectedIssuerList = [];
//         //     $(this).parent().children("li").removeClass('active')
//         //     $(this).addClass("active");
//         //     selectedIssuerList.push(value)
//         // } else {
//         if ($(this).hasClass('active')) {
//             let index = selectedIssuerList.indexOf(value);
//             delete(selectedIssuerList[index]);
//             $(this).removeClass("active")
//         } else {
//             $(this).addClass("active");
//             selectedIssuerList.push(value)
//         }
//         // }

//     }
//     addRemoveSecurityChips()
// })


// function ChipLabel(name, id) {
//     return `<label id="${id}" class="selectValue ${uniqueChipClass} ad-text-blue-header dropdownChipIssuer"><span class="text">${name}</span> <span class="icon"> <svg class="ad-inline ad-relative" style="top:-1px" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z" fill="#0051A2"/>
//       </svg>
//       </span></label>`
// }

// $(document).on("click", "." + uniqueChipClass, function(e) {
//     e.stopPropagation();
//     let id = $(this).attr("id");
//     let index = selectedIssuerList.indexOf(id);
//     delete(selectedIssuerList[index])
//     addRemoveSecurityChips()
//     activateDeactivateChipsSelector(id);
//     selectedIssuerList = selectedIssuerList.filter(function(el) {
//         return el != null;
//     });

//     setTimeout(() => {
//         appendValueInGrid()
//     }, 300);

// })

// function activateDeactivateChipsSelector(id) {
//     $(originalListElement + " > li").removeClass('active')
//     selectedIssuerList.forEach((elem, index) => {
//         $(originalListElement + " > li").each((index, element) => {
//             if ($(element).children("a").data('value').toLowerCase() == elem.toLowerCase()) {
//                 $(element).addClass("active")
//             } else {}
//         })
//     })
// }

$(document).on("click", ".dropDownControl" + originalElement, function(e) {
    try {
        let listElement = $(dropDownList).html()
    if ($(originalListElement).children("li").length != 0) {} else {
        $(originalListElement).html(listElement)
    }
    // appendValueInGrid()

    // if ($(this).children('.dropdown-list').is(":visible")) {
    //     $(this).children('.dropdown-list').hide();
    // } else {
    //     $(this).children('.dropdown-list').show();
    //     $("#issuerGridListView").hide()
    // }
} catch (error) {
        console.log(error)
    }
    
});

window.appendValueInGrid=function() {
    if (cleanMyArray(selectedIssuerList).length) {
        $('#issuerGridListView ul li').each((index, element) => {
            if (index == 0) {} else {
                element.remove()
            }
        })
        getSecurityList(selectedIssuerList).then((issuerList) => {
            issuerList.forEach(element => {
                $("#issuerGridListView > ul").append(`
                    <li class="ad-p-12 ad-text-14 ad-block ad-w-full ad-border-solid ad-border-b-1 ad-border-gray-shadeOne">
                        <label style="width: 16%;" class="ad-inline-block ad-truncate ad-px-8" title="${element.issuerName}">${element.issuerName}</label>
                        <label style="width: 16%;" class="ad-inline-block ad-truncate ad-px-8" title="${element.securityName}">${element.securityName}</label>
                        <label style="width: 15%;" class="ad-inline-block ad-truncate ad-px-8" title="${element.ticker}">${element.ticker}</label>
                        <label style="width: 15%;" class="ad-inline-block ad-truncate ad-px-8" title="${element.securityType}">${element.securityType}</label>
                        <label style="width: 19%;" class="ad-inline-block ad-truncate ad-px-8" title="${element.isinCode}">${element.isinCode}</label>
                        <label style="width: 15%;" class="ad-inline-block ad-truncate ad-px-8 ad-capitalize"> <span class="dotIndicator ${element.securityStatus.toLowerCase()}"></span> ${element.securityStatus}</label>
                    </li>
                `);
            });
        }).catch((e) => {
            throw (e)
        })
        $("#issuerGridListView").fadeIn(200)
    } else {
        $("#issuerGridListView").hide()
    }
}


// $(document).on("click", ".dropDownControl" + originalElement + " .dropdown-list", function(e) {
//     e.stopPropagation()
// });



// Code for add remove issuer dynamic

let issuerDropDownTemplate = `<div class="ad-mb-24 ad-w-full">
<label class="ad-text-blue-header ad-mb-4 ad-leading-20 ad-block ad-font-bold">Issuer Name</label>
<div class="dropDownControl multiselect-Without-Chip issuerDropdownElement disclosure commonDropdown ad-p-12 ad-w-full" data-sync-function="appendValueInGrid" data-dynamic-variable="selectedIssuerList">
    <div class="ad-justify-between ad-items-center">
        <div>
            <div>
                <p class="ad-flex ad-justify-between ad-items-center">
                    <label class="selectValue ad-text-blue-header applyEllipsis">Select Issuer</label>
                    <svg class="ad-inline-block" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 11L3 5.99999L3.7 5.29999L8 9.59999L12.3 5.29999L13 5.99999L8 11Z" fill="#668088"></path>
                        </svg>
                </p>
            </div>
        </div>
    </div>
    <div style="display: none;" class="dropdown-list ad-py-12 ad-bg-white">
        <p class="ad-bg-white ad-flex ad-mx-12 ad-mb-12 ad-border-solid ad-border-1 ad-border-gray-shadeOne ad-rounded-2">
            <input data-field="not-required" class="ad-bg-white ad-pl-12 ad-w-full ad-text-blue-header multiselect-search-within-dropdown" type="text" placeholder="Search Issuer">
            <span class="ad-px-12 ad-py-8">
                    <svg class="ad-inline" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M18.75 17.8687L14.0312 13.125C16.3746 10.2976 16.0822 6.12774 13.3672 3.65505C10.6522 1.18236 6.47324 1.2799 3.87657 3.87657C1.2799 6.47324 1.18236 10.6522 3.65505 13.3672C6.12774 16.0822 10.2976 16.3746 13.125 14.0312L17.8687 18.75L18.75 17.8687ZM3.125 8.75C3.125 5.64339 5.64339 3.125 8.75 3.125C11.8566 3.125 14.375 5.64339 14.375 8.75C14.375 11.8566 11.8566 14.375 8.75 14.375C5.64339 14.375 3.125 11.8566 3.125 8.75Z" fill="#668088"></path>
                    </svg>
                </span>
        </p>
        <ul class="multiselectUL multiselect-list-element" id="issuerListElement" style="max-height: 250px;overflow: scroll;overflow-x: hidden;background-color: #fff;">
            
        </ul>
    </div>
</div>
</div>`;
$("#add-issuer-label").click(function() {
    $("#issuerDropDownContainer").append(issuerDropDownTemplate)
    $("#remove-issuer-label").show()
    $(this).hide()
})
$("#remove-issuer-label").click(function() {
    $("#issuerDropDownContainer").empty()
    $("#add-issuer-label").show()
    $(this).hide()
})


// $(document).on('keyup', "#issuerListSearch", function() {
//     let _this = this;
//     let filteredList = $('ul#issuerListElement > li');
//     let result = filteredList.filter(function(i, li) {
//         let list_item_text = $(li).text().toUpperCase();
//         let search_text = _this.value.toUpperCase();
//         return ~list_item_text.indexOf(search_text);
//     });

//     filteredList.hide();
//     result.show();
// })

// $(document).ready(function() {
//     if ($("#bindChipListIssuer > label").length) {
//         $("#bindChipListIssuer > label").each(function() {
//             selectedIssuerList.push($(this).attr('id'))
//         })
//     }
// })