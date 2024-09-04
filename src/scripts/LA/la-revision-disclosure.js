let bindLabelCode = "#bindChipListTicker";
let originalElement = ".tickerDropdownElement";
let dropDownList = "#_tickerListElement";
let originalListElement = "#_tickerListElement";
let labelMessage = "Select Ticker";
let uniqueChipClass = "removeSelectedChip_Ticker";

function addRemoveSecurityChips() {
    selectedTickerListRevise = selectedTickerListRevise.filter(function(el) {
        return el != null;
    });
    if (selectedTickerListRevise.length) {
        $(bindLabelCode).empty()
        selectedTickerListRevise.forEach(id => {
            let name = $("ul#_tickerListElement").find(`[data-value='${id}']`).text();
            $(bindLabelCode).append(ChipLabel(name, id));
        });
    } else {
        $(bindLabelCode).empty()
        $(bindLabelCode).append(`<label class="selectValue ad-text-blue-header">${labelMessage}</label>`)
    }
    $(".dropDownControl" + originalElement).attr('data-value', selectedTickerListRevise.join(','))

    selectedIssuerIDList = [];
    selectedTickerListRevise.forEach(element => {
        let id = $(dropDownList + ' li a[data-value=' + element + ']').data('id');
        selectedIssuerIDList.push(id)
    })

    // $('#tickerGridListView ul li').each((index,element)=>{
    //     if(index==0){}else{
    //         element.remove()
    //     }
    // })
    // if(selectedTickerListRevise.length){
    //     selectedTickerListRevise.forEach(id => {
    //         let element=$("ul#tickerListData").find(`[data-value='${id}']`);
    //         let ticker=$(element).data('ticker');
    //         let securityName=$(element).data('security');
    //         let securityType=$(element).data('security-type');
    //         let securityCode=$(element).data('securitycode');
    //         let status=$(element).data('status');

    //         $("#tickerGridListView > ul").append(`
    //             <li class="ad-p-16 ad-text-14 ad-block ad-w-full ad-border-solid ad-border-b-1 ad-border-gray-shadeOne">
    //                 <label style="width: 15%;" class="ad-inline-block ad-truncate ad-px-8">${ticker}</label>
    //                 <label style="width: 30%;" class="ad-inline-block ad-truncate ad-px-8">${securityName}</label>
    //                 <label style="width: 16%;" class="ad-inline-block ad-truncate ad-px-8">${securityType}</label>
    //                 <label style="width: 20%;" class="ad-inline-block ad-truncate ad-px-8">${securityCode}</label>
    //                 <label style="width: 15%;" class="ad-inline-block ad-truncate ad-px-8"> <span class="dotIndicator ${status.toLowerCase()}"></span> ${status}</label>
    //             </li>
    //         `);
    //     });

    //     $("#tickerGridListView").fadeIn(200)

    // }else{
    //     $("#tickerGridListView").fadeOut(200)
    // }
    setTimeout(() => {
        $(".dropdown-background").remove()
    }, 200);
}

$(document).on("click", originalListElement + "> li", function(e) {
    e.stopPropagation()
    let value = $(this).children("a").data("value")
    if (value == "all") {
        $(this).parent().children("li").removeClass("active");
        $(this).addClass('active');
        selectedTickerListRevise = [];

        $(this).parent().children("li").each((index, element) => {
            if (index == 0) {} else {
                selectedTickerListRevise.push($(element).children("a").data('value'))
            }
        })
    } else {
        // if ($(this).parent().children("li")[0].classList.contains('active')) {
        //     selectedTickerListRevise = [];
        //     $(this).parent().children("li").removeClass('active')
        //     $(this).addClass("active");
        //     selectedTickerListRevise.push(value)
        // } else {
        if ($(this).hasClass('active')) {
            let index = selectedTickerListRevise.indexOf(value);
            delete(selectedTickerListRevise[index]);
            $(this).removeClass("active")
        } else {
            $(this).addClass("active");
            selectedTickerListRevise.push(value)
        }
        // }

    }
    addRemoveSecurityChips()
})


function ChipLabel(name, id) {
    return `<label id="${id}" class="selectValue ${uniqueChipClass} ad-text-blue-header dropdownChipIssuer"><span class="text">${name}</span> <span class="icon"> <svg class="ad-inline ad-relative" style="top:-1px" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z" fill="#0051A2"/>
      </svg>
      </span></label>`
}

$(document).on("click", "." + uniqueChipClass, function(e) {
    e.stopPropagation();
    let id = $(this).attr("id");
    let index = selectedTickerListRevise.indexOf(id);
    delete(selectedTickerListRevise[index])
    addRemoveSecurityChips()
    activateDeactivateChipsSelector(id);
    selectedTickerListRevise = selectedTickerListRevise.filter(function(el) {
        return el != null;
    });

    appendValueInGrid()

})

function activateDeactivateChipsSelector(id) {
    $(originalListElement + " > li").removeClass('active')
    selectedTickerListRevise.forEach((elem, index) => {
        $(originalListElement + " > li").each((index, element) => {
            if ($(element).children("a").data('value').toLowerCase() == elem.toLowerCase()) {
                $(element).addClass("active")
            } else {}
        })
    })
}

$(document).on("click", ".dropDownControl" + originalElement, function(e) {
    if ($(this).children('.dropdown-list').is(":visible")) {
        $(this).children('.dropdown-list').hide();
        appendValueInGrid()
    } else {
        $(this).children('.dropdown-list').show();
        $("#tickerGridListView").hide()
    }
});

function appendValueInGrid() {
    if (selectedTickerListRevise.length) {
        $('#tickerGridListView ul li').each((index, element) => {
            if (index == 0) {} else {
                element.remove()
            }
        })
        getReviseIssuerList(selectedTickerListRevise);
        $("#tickerGridListView").fadeIn(200)
    } else {
        $("#tickerGridListView").hide()
    }
}


$(document).on('keyup', "#issuerListSearch", function() {
    let _this = this;
    let filteredList = $('ul#_tickerListElement > li');
    let result = filteredList.filter(function(i, li) {
        let list_item_text = $(li).text().toUpperCase();
        let search_text = _this.value.toUpperCase();
        return ~list_item_text.indexOf(search_text);
    });

    filteredList.hide();
    result.show();
})

$(document).ready(function() {
    if ($("#bindChipListTicker > label").length) {
        $("#bindChipListTicker > label").each(function() {
            selectedTickerListRevise.push($(this).attr('id'))
        })
    }
})