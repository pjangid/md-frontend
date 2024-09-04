let bindLabelCode = "#bindChipListTicker";
let originalElement = ".tickerDropdownElement";
let dropDownList = "#tickerListElement";
let originalListElement = "#tickerListElement";
let labelMessage = "Select ticker";
let uniqueChipClass = "removeSelectedChipTicker";

function addRemoveSecurityChips() {
    REDisclosureTickerList = REDisclosureTickerList.filter(function(el) {
        return el != null;
    });
    if (REDisclosureTickerList.length) {
        $(bindLabelCode).empty()
        REDisclosureTickerList.forEach(id => {
            let name = $("ul#tickerListElement").find(`[data-value='${id}']`).text();
            $(bindLabelCode).append(ChipLabel(name, id));
        });
    } else {
        $(bindLabelCode).empty()
        $(bindLabelCode).append(`<label class="selectValue ad-text-blue-header">${labelMessage}</label>`)
    }
    $(".dropDownControl" + originalElement).attr('data-value', REDisclosureTickerList.join(','))

    selectedIssuerIDList = [];
    REDisclosureTickerList.forEach(element => {
        let id = $(dropDownList + ' li a[data-value=' + element + ']').data('id');
        selectedIssuerIDList.push(id)
    })
    
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
        REDisclosureTickerList = [];

        $(this).parent().children("li").each((index, element) => {
            if (index == 0) {} else {
                REDisclosureTickerList.push($(element).children("a").data('value'))
            }
        })
    } else {
        if ($(this).hasClass('active')) {
            let index = REDisclosureTickerList.indexOf(value);
            delete(REDisclosureTickerList[index]);
            $(this).removeClass("active")
        } else {
            $(this).addClass("active");
            REDisclosureTickerList.push(value)
        }

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
    let index = REDisclosureTickerList.indexOf(id);
    delete(REDisclosureTickerList[index])
    addRemoveSecurityChips()
    activateDeactivateChipsSelector(id);
    REDisclosureTickerList = REDisclosureTickerList.filter(function(el) {
        return el != null;
    });
})

function activateDeactivateChipsSelector(id) {
    $(originalListElement + " > li").removeClass('active')
    REDisclosureTickerList.forEach((elem, index) => {
        $(originalListElement + " > li").each((index, element) => {
            if ($(element).children("a").data('value').toLowerCase() == elem.toLowerCase()) {
                $(element).addClass("active")
            } else {}
        })
    })
}

$(document).on("click", ".dropDownControl" + originalElement, function(e) {
    let listElement = $(dropDownList).html()
    if ($(originalListElement).children("li").length != 0) {} else {
        $(originalListElement).html(listElement)
    }
    if ($(this).children('.dropdown-list').is(":visible")) {
        $(this).children('.dropdown-list').hide();
    } else {
        $(this).children('.dropdown-list').show();
    }
});


$(document).on("click", ".dropDownControl" + originalElement + " .dropdown-list", function(e) {
    e.stopPropagation()
});

$(document).on('keyup', "#tickerListSearch", function() {
    let _this = this;
    let filteredList = $('ul#tickerListElement > li');
    let result = filteredList.filter(function(i, li) {
        let list_item_text = $(li).text().toUpperCase();
        let search_text = _this.value.toUpperCase();
        return ~list_item_text.indexOf(search_text);
    });

    filteredList.hide();
    result.show();
})