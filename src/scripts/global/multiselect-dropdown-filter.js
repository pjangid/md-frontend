/* Below multiselect code is only to be used for filter dropdown without select all 
 and static, rendered from sitecore */

let originalElement = ".multiselect-Without-Chip";
let originalListElement = ".multiselect-list-element";


$(document).on("click", originalListElement + "> li", function (e) {
    try {
        e.stopPropagation();
        // Get dynamic value from the anchor tag
        let value = $(this).children("a").data("value");
        // Getting the variable name dynamically so that we can operate on more than one dropdown by just passing the dynamic variable name.
        let dynamicVariable = $(this).parents(originalElement).data('dynamic-variable');
        let filterKeyDropDown = $(this).parents(originalElement).data('filterkey')
        if ($(this).hasClass('active')) {
            if (value.toLowerCase() == "select-all") {
                $(this).parents(originalElement).attr('data-value', '');
                eval(dynamicVariable).splice(0, eval(dynamicVariable).length);
                $(this).parent().children().each((index, element) => {
                    if ($(this).parents(".multiselect-Without-Chip").hasClass("commonDropdown")) { } else {
                        let value = $(element).children("a").data("value")
                        insertParam(filterKeyDropDown, value)
                    }
                    $(element).removeClass("active");
                    $(element).find("img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZSxDYMwEEW/D1OAKIyUAewRMkI2yAiMlhGyQUbICGYEK0RQYKzcRRRpjVIhXmVZuie7uKfAeO8NUer4aJBHSInuzrlescSWJR513dii0FmWZYkYx3c/zzhrIlxF0rYnbMQOw6sjIJncl/yyzhrCnzhEh2i3IgoxRmxlnQ2SEcMZeVZVY7XOW16RTNM3IxclF9IkyYmUIMvEv0kJNw5b+ADtBziryk+hcQAAAABJRU5ErkJggg==")
                })
            } else {
                let index = eval(dynamicVariable).indexOf(value);
                delete (eval(dynamicVariable)[index]);
                let isSelectAllAvailable = $(this).parent().children()[0].querySelectorAll("a")[0].getAttribute('data-value');
                if (isSelectAllAvailable == "select-all") {
                    $(this).parent().children()[0].classList.remove('active')
                    $(this).parent().children()[0].querySelectorAll("img")[0].setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZSxDYMwEEW/D1OAKIyUAewRMkI2yAiMlhGyQUbICGYEK0RQYKzcRRRpjVIhXmVZuie7uKfAeO8NUer4aJBHSInuzrlescSWJR513dii0FmWZYkYx3c/zzhrIlxF0rYnbMQOw6sjIJncl/yyzhrCnzhEh2i3IgoxRmxlnQ2SEcMZeVZVY7XOW16RTNM3IxclF9IkyYmUIMvEv0kJNw5b+ADtBziryk+hcQAAAABJRU5ErkJggg==")
                }
                if ($(this).parents(".multiselect-Without-Chip").hasClass("commonDropdown")) { } else {
                    insertParam(filterKeyDropDown, value)
                }
                $(this).removeClass("active");
                $(this).find("img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZSxDYMwEEW/D1OAKIyUAewRMkI2yAiMlhGyQUbICGYEK0RQYKzcRRRpjVIhXmVZuie7uKfAeO8NUer4aJBHSInuzrlescSWJR513dii0FmWZYkYx3c/zzhrIlxF0rYnbMQOw6sjIJncl/yyzhrCnzhEh2i3IgoxRmxlnQ2SEcMZeVZVY7XOW16RTNM3IxclF9IkyYmUIMvEv0kJNw5b+ADtBziryk+hcQAAAABJRU5ErkJggg==")
            }

        } else {
            if (value.toLowerCase() == "select-all") {
                eval(dynamicVariable).splice(0, eval(dynamicVariable).length);
                $(this).parent().children().each((index, element) => {
                    if (index == 0) { } else {
                        let value = $(element).children("a").data("value")
                        eval(dynamicVariable).push(value)
                    }
                    if ($(this).parents(".multiselect-Without-Chip").hasClass("commonDropdown")) { } else {
                        insertParam(filterKeyDropDown, value)
                    }
                    $(element).addClass("active");
                    $(element).find("img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC9SURBVHgBrZI/DoIwGMVfu8LApCtx9hCyuDceQK/gBYx6AkdH5Rgu3EQ6MzHI2toP/ENCWin4kqb9kvd7fcPHsLquodgJQAQ/SXC9ZxBpboYYw1TyETAp4hip3gHxJEB+FvXxDiA4Oy7NHZqJ+QW0YVlUSHY3e8C7IkE2WBYPOBqw2kzQYj79CTeESPW3bviCgo/BBXcakKkxV73gToN2k00ywyW7O2FrgI/+sYm6xGBpyaHVlh7wlvlYq8MT/eRbxpLqE6QAAAAASUVORK5CYII=")
                })
            } else {
                if ($(this).parents(".multiselect-Without-Chip").hasClass("commonDropdown")) { } else {
                    insertParam(filterKeyDropDown, value)
                }
                let isSelectAllAvailable = $(this).parent().children()[0].querySelectorAll("a")[0].getAttribute('data-value');
                if (isSelectAllAvailable == "select-all") {
                    $(this).parent().children()[0].classList.remove('active')
                    $(this).parent().children()[0].querySelectorAll("img")[0].setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZSxDYMwEEW/D1OAKIyUAewRMkI2yAiMlhGyQUbICGYEK0RQYKzcRRRpjVIhXmVZuie7uKfAeO8NUer4aJBHSInuzrlescSWJR513dii0FmWZYkYx3c/zzhrIlxF0rYnbMQOw6sjIJncl/yyzhrCnzhEh2i3IgoxRmxlnQ2SEcMZeVZVY7XOW16RTNM3IxclF9IkyYmUIMvEv0kJNw5b+ADtBziryk+hcQAAAABJRU5ErkJggg==")
                }

                $(this).addClass("active");
                $(this).find("img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC9SURBVHgBrZI/DoIwGMVfu8LApCtx9hCyuDceQK/gBYx6AkdH5Rgu3EQ6MzHI2toP/ENCWin4kqb9kvd7fcPHsLquodgJQAQ/SXC9ZxBpboYYw1TyETAp4hip3gHxJEB+FvXxDiA4Oy7NHZqJ+QW0YVlUSHY3e8C7IkE2WBYPOBqw2kzQYj79CTeESPW3bviCgo/BBXcakKkxV73gToN2k00ywyW7O2FrgI/+sYm6xGBpyaHVlh7wlvlYq8MT/eRbxpLqE6QAAAAASUVORK5CYII=")
                eval(dynamicVariable).push(value)
            }

        }
        if (cleanMyArray(eval(dynamicVariable)).length) {
            $(this).parents(".dropDownControl").css("border-color", "#0051A2")
            $(this).parents(".dropDownControl").find(".selectValue").css("color", "#0051A2")
            $(this).parents(".dropDownControl").find(".selectValue").next().find("path").attr("fill", "#0051A2")
            if (!$(this).parents(".dropdown-list").find(".clearFilterValues").length) {
                $(this).parents(".dropdown-list").prepend(`
            <button type="button" class="clearFilterValues ad-bg-white ad-text-blue-shadeSeven ad-absolute ad-text-12" style="right:13px;top:58px;z-index:2;">Clear All</button>
            `);
            }

        } else {
            $(this).parents(".dropDownControl").css("border-color", "#E3E3DF")
            $(this).parents(".dropDownControl").find(".selectValue").css("color", "")
            $(this).parents(".dropDownControl").find(".selectValue").next().find("path").attr("fill", "#668088")
            if ($(this).parents(".dropdown-list").find(".clearFilterValues").length) {
                $(this).parents(".dropdown-list").find(".clearFilterValues").remove()
            }
        }
        if ($(this).parents(originalElement).data('function')) {
            let customFunction = $(this).parents(originalElement).data('function')
            eval(customFunction);
        } else { }
        generateChips(dynamicVariable, $(this).parents(originalElement))
    } catch (error) {
        console.error(error)
    }

})

window.generateChips = function (variable, element) {
    if (cleanMyArray(eval(variable)).length) {
        // $(element).find(".selectValue").parent().addClass("ad-relative")
        // $(element).find(".selectValue").parent().attr("style",'z-index:1')
        $(element).find(".selectValue").hide()
        $(element).find(".chipsContent").remove()

        let label = document.createElement('label');
        label.setAttribute('class', 'chipsContent ad-leading-20 applyEllipsis ad-w-full ad-text-12')
        eval(variable).forEach((value, index) => {
            let span = document.createElement("span");
            // span.append(`<svg class="ad-inline ad-relative" style="top:-1px" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            // <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z" fill="#0051A2"></path>
            // </svg>`)
            span.innerHTML = fetchSelectedValueText(value, $(element).find(".multiselectUL > li"))
            span.setAttribute("style", "padding:4px 8px;padding-right:3px;margin-right:8px;border-radius:5px;")
            span.setAttribute("class", "ad-bg-blue-shadeEight ad-text-blue-shadeFour");
            span.setAttribute("data-id", `${value}`);
            span.setAttribute("title", "Click to remove");
            $(span).append(closeIcon())
            label.appendChild(span);
        })
        $(element).find(".selectValue").parent().prepend(label);
    } else {
        $(element).find(".chipsContent").remove()
        $(element).find(".selectValue").show()
        $(element).css("border-color", "#E3E3DF")
        $(element).find(".selectValue").css("color", "")
        $(element).find(".selectValue").next().find("path").attr("fill", "#668088");
        $(element).find(".clearFilterValues").remove()
        $(element).removeAttr("data-value")
    }
    // $(".dropdown-background").remove()
    if ($(element).attr("data-sync-function")) {
        eval($(element).attr("data-sync-function"))()
    }
}

function closeIcon() {
    return `<svg onclick="removeSlectedChips(this)" class="ad-inline ad-cursor-pointer ad-relative" style="top:-1px" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4.7L11.3 4L8 7.3L4.7 4L4 4.7L7.3 8L4 11.3L4.7 12L8 8.7L11.3 12L12 11.3L8.7 8L12 4.7Z" fill="#0051A2"></path>
    </svg>`;
}
window.removeSlectedChips = function (element) {
    if ($(element).parents(".dropDownControl").find(".dropdown-list").is(":visible")) {
    } else {
        setTimeout(() => {
            $(".dropdown-list").hide()
            $(".dropdown-background").remove()
        }, 100);
    }
    let dynamicVariable = $(element).parents(".dropDownControl").attr('data-dynamic-variable');
    let value = $(element).parent().attr("data-id")
    let i = eval(dynamicVariable).indexOf(value);
    delete (eval(dynamicVariable)[i]);
    $(element).parents(".dropDownControl").find(".multiselectUL > li").each((index, elem) => {
        if ($(elem).children("a").attr('data-value') == value) {
            $(elem).removeClass("active")
            $(elem).children("a").find("img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZSxDYMwEEW/D1OAKIyUAewRMkI2yAiMlhGyQUbICGYEK0RQYKzcRRRpjVIhXmVZuie7uKfAeO8NUer4aJBHSInuzrlescSWJR513dii0FmWZYkYx3c/zzhrIlxF0rYnbMQOw6sjIJncl/yyzhrCnzhEh2i3IgoxRmxlnQ2SEcMZeVZVY7XOW16RTNM3IxclF9IkyYmUIMvEv0kJNw5b+ADtBziryk+hcQAAAABJRU5ErkJggg==")
        }
    })
    generateChips(dynamicVariable, $(element).parents(".dropDownControl"))
}
function fetchSelectedValueText(value, UL) {
    let text = "";
    $(UL).each((index, element) => {
        if ($(element).children("a").attr('data-value') == value) {
            text = $(element).find("span").text();
        }
    })
    return text;
}

$(document).on('click', '.clearFilterValues', function () {
    try {
        $(this).parents('.dropDownControl').attr('data-value', '');
        let dynamicVariable = $(this).parents('.dropDownControl').attr('data-dynamic-variable');
        let filterKey = $(this).parents('.dropDownControl').attr('data-filterkey');
        for (let index = 0; index < eval(dynamicVariable).length; index++) {
            if (!$(this).parents('.dropDownControl').hasClass('commonDropdown')) {
                insertParam(filterKey, eval(dynamicVariable)[index])
            }
            delete (eval(dynamicVariable)[index])
        }
        $(this).parents(".dropDownControl").find(".multiselect-list-element li").each((index, element) => {
            $(element).removeClass("active")
            $(element).find("img").attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZSxDYMwEEW/D1OAKIyUAewRMkI2yAiMlhGyQUbICGYEK0RQYKzcRRRpjVIhXmVZuie7uKfAeO8NUer4aJBHSInuzrlescSWJR513dii0FmWZYkYx3c/zzhrIlxF0rYnbMQOw6sjIJncl/yyzhrCnzhEh2i3IgoxRmxlnQ2SEcMZeVZVY7XOW16RTNM3IxclF9IkyYmUIMvEv0kJNw5b+ADtBziryk+hcQAAAABJRU5ErkJggg==")
        })
        $(this).parents(".dropDownControl").css("border-color", "#E3E3DF")
        $(this).parents(".dropDownControl").find(".selectValue").css("color", "")
        $(this).parents(".dropDownControl").find(".selectValue").next().find("path").attr("fill", "#668088")
        generateChips(dynamicVariable, $(this).parents('.dropDownControl'))
        $(this).remove();

    } catch (error) {

    }
})

function insertParam(key, value) {
    key = encodeURIComponent(key);
    value = encodeURIComponent(value);
    var parameters = document.location.search.substr(1).split('&');
    let i = 0;

    for (; i < parameters.length; i++) {
        if (parameters[i].startsWith(key + '=')) {
            let pair = parameters[i].split('=');
            if (pair[1].indexOf(value) < 0) {
                if (!pair[1]) {
                    pair[1] = value
                } else {
                    pair[1] = pair[1] + "," + value
                }
            } else {
                let newValue = pair[1].split(",");
                let index = newValue.indexOf(value);
                newValue.splice(index, 1);
                pair[1] = newValue.join(",")
            }
            // pair[1] = value;
            parameters[i] = pair.join('=');
            break;
        }
    }

    if (i >= parameters.length) {
        parameters[parameters.length] = [key, value].join('=');
    }
    let params = parameters.join('&');

    // reload page with new params if required
    // document.location.search = params;
    var pageUrl = '?' + params;
    window.history.pushState('', '', pageUrl);
}


$(document).on("click", ".dropDownControl" + originalElement, function (e) {
    if ($(this).children('.dropdown-list').is(":visible")) {
        $(this).children('.dropdown-list').hide();
        $(".dropdown-background").remove()
    } else {
        $('.dropdown-list').hide()
        $(this).children('.dropdown-list').show();
    }
    $(this).find('.multiselect-search-within-dropdown').val("")
    $(this).find('.multiselectUL > li').show();
});


$(document).on("click", ".dropDownControl" + originalElement + " .dropdown-list", function (e) {
    e.stopPropagation()
});

$(document).on('keyup', ".multiselect-search-within-dropdown", function () {
    let _this = this;
    let filteredList = $(this).parent().next("ul").children();
    let result = filteredList.filter(function (i, li) {
        let list_item_text = $(li).text().toUpperCase();
        let search_text = _this.value.toUpperCase();
        return ~list_item_text.indexOf(search_text);
    });

    filteredList.hide();
    result.show();
})


window.onpopstate = history.onpushstate = function (e) {
    getFilterValues()
};

function getFilterValues() {
    let decodeParams = document.location.search.substr(1).split('&');
    let keyMap = {};
    for (i = 0; i < decodeParams.length; i++) {
        if (!decodeParams[i]) {
            // console.log("Ignore")
        } else {
            let objectKey = decodeParams[i].split("=")[0];
            let value = decodeParams[i].split("=")[1].split(',');
            keyMap[objectKey] = value
        }
    }
    return keyMap;
}

function setMultipleDropDownData() {
    return new Promise(function (resolve, reject) {
        try {
            let filterArray = setFilterMapping();
            filterArray.forEach(element => {
                let key = $("#" + element).data('filterkey');
                let dynamicVariable = $("#" + element).data('dynamic-variable');
                let filters = getFilterValues()[key];
                if (filters) {
                    filters.forEach(e => {
                        e = decodeURIComponent(e)
                        if (e) {
                            if (!$("#" + element).find(".clearFilterValues").length) {
                                $("#" + element).find(".dropdown-list").prepend(`
                                <button type="button" class="clearFilterValues ad-bg-white ad-text-blue-shadeSeven ad-absolute ad-text-12" style="right:13px;top:58px;z-index:2;">Clear All</button>
                                `);
                            }
                            $("#" + element).css('border-color', '#0051A2');
                            $("#" + element + " .selectValue").css("color", "#0051A2")
                            $("#" + element).find(".selectValue").next().find("path").attr("fill", "#0051A2")
                            eval(dynamicVariable).push(e)
                            $("#" + element + ` *[data-value="${e}"]`).parent().addClass('active')
                            $("#" + element + ` *[data-value="${e}"] img`).attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC9SURBVHgBrZI/DoIwGMVfu8LApCtx9hCyuDceQK/gBYx6AkdH5Rgu3EQ6MzHI2toP/ENCWin4kqb9kvd7fcPHsLquodgJQAQ/SXC9ZxBpboYYw1TyETAp4hip3gHxJEB+FvXxDiA4Oy7NHZqJ+QW0YVlUSHY3e8C7IkE2WBYPOBqw2kzQYj79CTeESPW3bviCgo/BBXcakKkxV73gToN2k00ywyW7O2FrgI/+sYm6xGBpyaHVlh7wlvlYq8MT/eRbxpLqE6QAAAAASUVORK5CYII=")
                        }
                    })
                }

            });
        } catch (error) {
            console.log(error)
        } finally {
            resolve()
        }
    })
}

window.setPrerenderData = function (elem) {
    try {
        let dynamicVariable = $(elem).attr('data-dynamic-variable');
        let prerender = $(elem).attr('data-prerender');
        if (prerender) {
            let list = prerender.split(',');
            list.forEach(e => {
                if (!$(elem).find(".clearFilterValues").length) {
                    $(elem).find(".dropdown-list").prepend(`
                        <button type="button" class="clearFilterValues ad-bg-white ad-text-blue-shadeSeven ad-absolute ad-text-12" style="right:13px;top:58px;z-index:2;">Clear All</button>
                        `);
                }
                $(elem).css('border-color', '#0051A2');
                $(elem).find(" .selectValue").css("color", "#0051A2")
                $(elem).find(".selectValue").next().find("path").attr("fill", "#0051A2")
                eval(dynamicVariable).push(e)
                $(elem).find(`*[data-value="${e}"]`).parent().addClass('active')
                $(elem).find(`*[data-value="${e}"] img`).attr("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC9SURBVHgBrZI/DoIwGMVfu8LApCtx9hCyuDceQK/gBYx6AkdH5Rgu3EQ6MzHI2toP/ENCWin4kqb9kvd7fcPHsLquodgJQAQ/SXC9ZxBpboYYw1TyETAp4hip3gHxJEB+FvXxDiA4Oy7NHZqJ+QW0YVlUSHY3e8C7IkE2WBYPOBqw2kzQYj79CTeESPW3bviCgo/BBXcakKkxV73gToN2k00ywyW7O2FrgI/+sYm6xGBpyaHVlh7wlvlYq8MT/eRbxpLqE6QAAAAASUVORK5CYII=")
            });
            generateChips(dynamicVariable, elem)
        } else { }
    } catch (error) {

    }

}

$(document).ready(function (params) {
    setMultipleDropDownData().then(function () {
        try {
            [].forEach.call(document.getElementsByClassName("multiselect-Without-Chip"), function (elem) {
                setPrerenderData(elem)
            });
        } catch (error) {
            console.log(error)
        }

    })
})