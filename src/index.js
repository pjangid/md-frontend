import './styles/scss/master.scss';
import './scripts/index';
// import './scripts/global/pagination';
import './scripts/LA/reporting-entity-landing'
import './scripts/RE/dashboard'
import './scripts/LA/dashboard'
import './scripts/onboarding';
import './scripts/customize-dashboard';
// import './scripts/document-publishing';
import { exec, init } from 'pell'
import './scripts/onboard-entity';
import './scripts/re-create-disclosure';
import './scripts/RE/create-new-user';
import './scripts/LA/prospectus';
import './scripts/LA/la-revision-disclosure';
import './scripts/LA/announcement';
import './scripts/LA/announcement-listing-authority';
import './scripts/LA/inbox';
import './scripts/LA/create-disclosure';
import './scripts/global/multiselect-dropdown-filter';
import { BIND_FORM_VALIDATION } from "./scripts/forms";

$(document).ready(function () {
    try {
        const editor = init({
            element: document.getElementById('my-custom-content-editor'),
            onChange: html => {
                document.getElementById('html-output').textContent = html
            },
            defaultParagraphSeparator: 'p',
            styleWithCSS: true,
            actions: [
                'bold',
                {
                    name: 'italic',
                    result: () => exec('italic')
                },
                'underline',

                // {
                //   name: 'backColor',
                //   icon: '<div style="background-color:pink;">A</div>',
                //   title: 'Highlight Color',
                //   result: () => exec('backColor', 'pink')
                // },
                // {
                //     name: 'image',
                //     result: () => {
                //         const url = window.prompt('Enter the image URL')
                //         if (url) exec('insertImage', url)
                //     }
                // },
                // {
                //     name: 'link',
                //     result: () => {
                //         const url = window.prompt('Enter the link URL')
                //         if (url) exec('createLink', url)
                //     }
                // }
            ],
            classes: {
                actionbar: 'pell-actionbar-custom-name',
                button: 'action-button',
                content: 'pell-content-custom-name',
                selected: 'pell-button-selected-custom-name'
            }
        })
    } catch (error) { }

    // editor.content<HTMLElement>
    // To change the editor's content:
    // editor.content.innerHTML = '<b><u><i>Initial content!</i></u></b>'


    BIND_FORM_VALIDATION();
    $("#grid-view").click(function () {
        $(".company-list").removeClass("list").addClass("default");
        $(this).addClass("ad-opacity-50");
        $("#list-view").removeClass("ad-opacity-50");
    });
    $("#list-view").click(function () {
        $(".company-list").removeClass("default").addClass("list");
        $(this).addClass("ad-opacity-50");
        $("#grid-view").removeClass("ad-opacity-50");
    });

    $(document).on("click", ".dropDownControl.default", function (e) {
        $('.dropDownControl.multiselect-Without-Chip .dropdown-list').hide()
        $(this).children('.dropdown-list').toggle();
    });

    $(document).on("click", ".mobileNoControl", function (e) {
        if ($(this).children('.dropdown-list').is(":visible")) {
            $(this).children('.dropdown-list').hide();
            $(".dropdown-background").remove();
        } else {
            $(this).children('.dropdown-list').show();
            $(this).prepend("<div class='dropdown-background' style='left:0;top:0;z-index:1;position:fixed;width:100%;height:100%;background-color:transparent'></div>")
        }
    });
    $(document).on("click", ".mobileNoControl li a", function (e) {
        e.preventDefault()
        let value = $(this).data("value");
        let labelValue = $(this).text();
        $(this).closest(".mobileNoControl").children("p").children("label").text(labelValue)
        $(this).closest(".mobileNoControl").attr('data-value', value)
        $(".dropdown-background").remove();
    });
    // $(document).on("click", ".dropDownControl.securityCode", function (e) {
    //   let listElement = $("#securityListData").html()
    //   if($("#securityListElement").children("li").length !=0 ){
    //   }else{
    //     $("#securityListElement").html(listElement)
    //   }
    //   $(this).children('.dropdown-list').toggle();
    // });


    // $(document).on("click", ".dropDownControl.securityCode .dropdown-list", function (e) {
    //   e.stopPropagation()
    // });
    // Below drop down code is specially for onboarding

    $(document).on("click", ".dropDownControl.onboarding", function (e) {
        let element = document.getElementById('disclosureType').innerHTML;
        $(this).children('.dropdown-list').html(element);
        $(this).children('.dropdown-list').toggle();
    });
    $(document).on("click", ".dropDownControl li a", function (e) {
        if ($(this).parents(".dropDownControl").hasClass("dashboard") || $(this).parents(".dropDownControl").hasClass("natural")) {

        } else {
            e.preventDefault()
            let value = $(this).data("value");
            let labelValue = $(this).text();
            $(this).closest(".dropDownControl").children("p").children("label").text(labelValue)
            $(this).closest(".dropDownControl").attr('data-value', value)
            $(this).closest(".dropDownControl.default").css("border-color", "#0051A2")
            $(this).closest(".dropDownControl.default").children("p").children("label").css("color", "#0051A2")
            $(this).closest(".dropDownControl.default").children("p").children("svg").find("path").attr("fill", "#0051A2")
        }
        if (!$(this).parents('.dropDownControl').hasClass('multiselect-Without-Chip')) {
            $(".dropdown-background").remove()
        }
    });



    // Global Select Feature

    $("#new-file-document").click(function () {
        // $("#original-file-button").click()
        $(this).prev().click()
    })
    try {
        [].forEach.call(document.getElementsByClassName("data-tab-control"), function (item) {
            let tabName = item.getAttribute('data-tab');
            let container = item.parentNode;
            let classItems = container.getAttribute('data-active-state').split(',');
            item.addEventListener("click", function () {
                [].forEach.call(container.getElementsByClassName('data-tab-control'), function (button) {
                    classItems.forEach(className => {
                        button.classList.remove(className)
                    });
                });
                classItems.forEach(className => {
                    item.classList.add(className)
                });
                [].forEach.call(container.parentNode.parentNode.getElementsByClassName("tab-content"), function (tabitem) {
                    tabitem.classList.add('ad-hidden')
                });
                container.parentNode.parentNode.getElementsByClassName(tabName)[0].classList.remove('ad-hidden')
            })
        })
    } catch (error) { }
    // Publishing document Section
    $(".close-publish-dialogue").click(function () {
        $("#publish-dialogue").fadeOut(200)
    })
    $(".show-publish-dialogue").click(function () {
        $("#publish-dialogue").show(200)
    })

    // Publish Documennt Section Ends Here
    $(".close-user-dialogue").click(function () {
        $("#new-user-dialogue").fadeOut(200);
        try {
            // Reset fields when Adding a new user modal closes
            $("#new-user-dialogue").find(':input').each(function () {
                switch (this.type) {
                    case 'text':
                    case 'date':
                    case 'number':
                    case 'tel':
                    case 'email':
                        $(this).val('');
                        break;
                }
            });
        } catch (error) {
            console.log(error)
        }
    })
    $(".open-new-user-dialogue").click(function () {
        $("#new-user-dialogue").show(200)
    })

    // customize dahboard dialogue
    $(".close-dashboard-dialogue").click(function () {
        resetFormErrors("customize-dashboard-form");
        $("#customize-dashboard-dialogue").fadeOut(200)
    })
    $(".customize-dahboard-anchor").click(function () {
        $("#customize-dashboard-dialogue").fadeIn(200)
    })
});

$(".close-otp-message").click(function (e) {
    $(".failed-otp ").hide(200);
})

// Datepicker external js starts here
try {
    $(function () {
        var start = moment().subtract(0, 'days');
        var end = moment();
        $('#datePickerDashboard,#datePickerDashboard1').daterangepicker({
            autoUpdateInput: false,
            startDate: start.format('DD/MM/YYYY'),
            endDate: end.format('DD/MM/YYYY'),
            locale: {
                format: "DD/MM/YYYY"
            },
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            }
        });

        $('input[id="datePickerDashboard"]').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
            $(".dropdown-background").remove()
        });
        $('input[id="datePickerDashboard1"]').on('apply.daterangepicker', function (ev, picker) {
            $(this).val(picker.startDate.format('DD/MM/YYYY') + ' - ' + picker.endDate.format('DD/MM/YYYY'));
            $(".dropdown-background").remove()
        });
    });
} catch (error) {

}
// External Js ends Here

// Global handling to show hide unwanted elements of Dropdown
try {
    $(document).on("click", ".dropdown-background", function (e) {
        e.stopPropagation()
        $(".dropdown-list").hide()
        $(".markReadUnread ul").hide();
        $("#masterSearchInput").hide(200);
        $(".dropdown-background").remove();
        $(".re-menu-master .menuList").hide();

    })
    $(document).on("mouseup", function (e) {
        if ($(e.target).parents(".dropDownControl").length == 1) {
            $(e.target).parents(".dropDownControl").parent().prepend("<div class='dropdown-background' style='left:0;top:0;z-index:1;position:fixed;width:100%;height:100%;background-color:transparent'></div>")
        } else if ($(e.target).hasClass("dropDownControl")) {
            $(e.target).parent().prepend("<div class='dropdown-background' style='left:0;top:0;z-index:1;position:fixed;width:100%;height:100%;background-color:transparent'></div>")
        }

        // datepicker code
        if ($(e.target).parents(".datepickerContainer").length == 1) {
            $(e.target).parents(".datepickerContainer").prepend("<div class='dropdown-background' style='left:0;top:0;z-index:1;position:fixed;width:100%;height:100%;background-color:transparent'></div>")
        } else if ($(e.target).hasClass("datepickerContainer")) {
            $(e.target).prepend("<div class='dropdown-background' style='left:0;top:0;z-index:1;position:fixed;width:100%;height:100%;background-color:transparent'></div>")
        }
    });

} catch (error) {

}


// password character validations
let capitalLetterStatus = false;
let smallLetterStatus = false;
let numberCharacter = false;
let specialCharacter = false;
let passwordLength = 0;
$(document).on('keyup', ".validatePasswordField", function () {
    passwordLength = this.value.length;
    if (this.value.length) {
        $("#passwordValidator").fadeIn(200)
    } else {
        $("#passwordValidatorMessage span").hide()
        $("#passwordValidator").fadeOut(200)
    }
    if (this.value.length >= 10) {
        $("#passwordValidator label.character").addClass('active')
        $("#passwordValidatorMessage span.character").show()
    } else {
        $("#passwordValidatorMessage span.character").hide()
        $("#passwordValidator label.character").removeClass('active')
    }
    capitalLetterStatus = false;
    for (let i = 0; i < this.value.length; i++) {
        if (!capitalLetterStatus) {
            if (this.value[i].match(/^[A-Z]+$/)) {
                capitalLetterStatus = true
                $("#passwordValidator label.uppercase").addClass('active')
                $("#passwordValidatorMessage span.uppercase").show()
                break
            } else {
                capitalLetterStatus = false
                $("#passwordValidatorMessage span.uppercase").hide()
                $("#passwordValidator label.uppercase").removeClass('active')

            }
        }
    }

    smallLetterStatus = false;
    for (let j = 0; j < this.value.length; j++) {
        if (!smallLetterStatus) {
            if (this.value[j].match(/^[a-z]+$/)) {
                smallLetterStatus = true
                $("#passwordValidator label.lowercase").addClass('active')
                $("#passwordValidatorMessage span.lowercase").show()
                break
            } else {
                smallLetterStatus = false
                $("#passwordValidatorMessage span.lowercase").hide()
                $("#passwordValidator label.lowercase").removeClass('active')

            }
        }
    }

    numberCharacter = false;
    for (let j = 0; j < this.value.length; j++) {
        if (!numberCharacter) {
            if (this.value[j].match(/^[0-9]+$/)) {
                numberCharacter = true;
                $("#passwordValidator label.number").addClass('active')
                $("#passwordValidatorMessage span.number").show()
                break
            } else {
                numberCharacter = false
                $("#passwordValidatorMessage span.number").hide()
                $("#passwordValidator label.number").removeClass('active')
            }
        }
    }

    specialCharacter = false;
    for (let p = 0; p < this.value.length; p++) {
        if (!specialCharacter) {
            if (this.value[p].match(/[^a-zA-Z0-9]+/)) {
                specialCharacter = true;
                $("#passwordValidator label.special").addClass('active')
                $("#passwordValidatorMessage span.special").show()
                break;
            } else {
                specialCharacter = false;
                $("#passwordValidatorMessage span.special").hide()
                $("#passwordValidator label.special").removeClass('active')
            }
        }

    }

    let passwordStrength = $("#passwordValidatorMessage .bar").find('span:visible').length;
    normalizePasswordBar()
    if (passwordStrength == 5) {
        $("#passwordValidatorMessage .bar").addClass("good")
    } else if (passwordStrength == 3) {
        $("#passwordValidatorMessage .bar").addClass("average")
    } else if (passwordStrength == 4) {
        $("#passwordValidatorMessage .bar").addClass("average")
    }
    else {
        $("#passwordValidatorMessage .bar").addClass("weak")
    }

});

function normalizePasswordBar() {
    $("#passwordValidatorMessage .bar").removeClass('weak good average')
}
$(document).on("keypress", ".mobile-no-field", function (e) {
    var keyCode = e.which ? e.which : e.keyCode
    if (!(keyCode >= 48 && keyCode <= 57)) {
        return false;
    } else { }
})

// Prospectus Page

window.validateMyPassword = function () {
    if (capitalLetterStatus && smallLetterStatus && numberCharacter && specialCharacter && (passwordLength >= 10)) {
        return true;
    } else {
        return false;
    }
}


$(document).on("click", ".dropDownControl.issuer-prospectus li a", function (e) {
    e.preventDefault()
    getSecurityListForPropectus($(this).data('value')).then((securityList) => {
        $("#securityList >li.row").remove();
        selectedSecurityList = [];
        $("#securityListContainer").show()
        securityList.forEach(element => {
            $("#securityList").append(`
        <li class="row ad-p-16 ad-text-14 ad-block ad-w-full ad-border-solid ad-border-b-1 ad-border-gray-shadeOne">
          <label style="width:20px" class="ad-inline-block ad-px-8"><input data-value="${element.securityId}" style="width: 16px; height: 16px;left: -9px;top:-2px;" class="securityCheckbox ad-relative ad-inline-block ad-border-solid ad-border-1 ad-border-gray-shadeOne" type="checkbox"></label>
          <label style="width:95px" class="ad-inline-block ad-px-8 ad-truncate" title="${element.securityType}"> ${element.securityType}</label>
          <label style="width:100px" class="ad-inline-block ad-px-8 ad-truncate" title="${element.securityName}">${element.securityName}</label>
          <label style="width:91px" class="ad-inline-block ad-px-8 ad-truncate" title="${element.isinCode}">${element.isinCode}</label>
          <label style="width:91px" class="ad-inline-block ad-px-8 ad-truncate" title="${element.coupanRate}">${element.coupanRate}</label>
          <label style="width:96px" class="ad-inline-block ad-px-8 ad-truncate" title="${element.maturityDate}">${element.maturityDate}</label>
          <label style="width:97px" class="ad-inline-block ad-px-8 ad-truncate" title="${element.createDate}">${element.createDate}</label>
      </li>
      
      `);
        });
    }).catch(() => {
        alert("Something went wrong.")
    })
});

$(document).on("click", ".securityCheckbox", function (e) {
    let data = $(this).data('value')
    if (selectedSecurityList.indexOf(data) !== -1) {
        selectedSecurityList.splice(selectedSecurityList.indexOf(data), 1)
    } else {
        selectedSecurityList.push(data)
    }
    console.log("asdf", selectedSecurityList)
});


$(document).on("click", ".issuer-context-menu", function () {
    if ($(this).hasClass("active")) {
        $(this).css({ "z-index": "0" })
        $(this).children("ul").hide()
        $(this).removeClass("active")
    } else {
        $(".issuer-context-menu").removeClass("active");
        $(".issuer-context-menu").css({ "z-index": "0" });
        $(".issuer-context-menu ul").hide();
        $(this).css({ "z-index": "1" })
        $(this).children("ul").show()
        $(this).addClass("active")
    }
})


$(".entity-issuer-tab").click(function (e) {
    $(this).parent().next().toggle()
    $(this).toggleClass("active")
});


$(".policy-popup-login").click(function (e) {
    e.stopPropagation();
    $(this).fadeOut(200)
    $("body").removeClass("ad-overflow-hidden")
})
$(".policy-popup-login > div").click(function (e) {
    e.stopPropagation();
})
$(".activate-privacy-popup").click(function (e) {
    e.preventDefault()
    $(".policy-popup-login").fadeIn(200)
    $("body").addClass("ad-overflow-hidden")
})

window.setLoader = (status) => {
    if (status) {
        $("body").prepend(`
        <div class="ad-loader-container">
            <div class="ad-loader-grid">
                <div class="ad-loader ad-loader1"></div>
                <div class="ad-loader ad-loader2"></div>
                <div class="ad-loader ad-loader3"></div>
                <div class="ad-loader ad-loader4"></div>
                <div class="ad-loader ad-loader5"></div>
                <div class="ad-loader ad-loader6"></div>
                <div class="ad-loader ad-loader7"></div>
                <div class="ad-loader ad-loader8"></div>
                <div class="ad-loader ad-loader9"></div>
            </div>
        </div>
`);
    } else {
        $(".ad-loader-container").fadeOut(300)
        setTimeout(() => {
            $(".ad-loader-container").remove()
        }, 300);
    }

}


// Single dropdown autoSelection

window.setSingleDropDownValue = (e, id) => {
    // console.log($('#' + element), id)
    let text = $("#" + e + " li a[data-value='" + id + "']").text();
    $("#" + e).attr('data-value', id)
    $("#" + e + " .selectValue").text(text)
}

window.cleanMyArray = (array) => {
    array = array.filter(function (el) {
        return el != null;
    });
    return array;
}

window.generateListFromColumn = (documentList, index, key, columnName) => {
    if (documentList[index][key]) {
        if (documentList[index][key].indexOf(',') >= 0) {
            let element = generateUL(documentList[index][key].split(','));

            return `<a href="${documentList[index]["Link"]}" class="ad-block multipleListUnique ad-relative ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index][key].split(",")[0]} 
                        <svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4C8.55228 4 9 3.55228 9 3C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3C7 3.55228 7.44772 4 8 4ZM8 9C8.55228 9 9 8.55228 9 8C9 7.44772 8.55228 7 8 7C7.44772 7 7 7.44772 7 8C7 8.55228 7.44772 9 8 9ZM8 14C8.55228 14 9 13.5523 9 13C9 12.4477 8.55228 12 8 12C7.44772 12 7 12.4477 7 13C7 13.5523 7.44772 14 8 14Z" fill="#668088"/>
                        </svg>
                    </label>
                    <section style="top:100%;left:0%" class="ad-absolute ad-hidden dropShadow ad-rounded-2 ad-bg-white ad-z-10">
                        <label style="font-size:9px;" class="ad-text-gray-shadeTwo ad-uppercase ad-px-14 ad-pt-12 ad-pb-8 ad-block ad-border-b-1 ad-border-gray-shadeOne">${columnName}</label>
                        ${element}
                    </section>
                    </a>`
        } else {
            return `<a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">${documentList[index][key]}</label></a>`
        }
    } else {
        return `<a href="${documentList[index]["Link"]}" class="ad-block ad-leading-1 ad-w-full"><label class="ad-w-4/5 applyEllipsis ad-inline-block ad-relative ad-cursor-pointer" style="top:4px">&nbsp;</label></a>`
    }
}

function generateUL(array) {
    var list = `<ul class="ad-p-12" style="width:max-content">`;
    for (var i = 0; i < array.length; i++) {
        list = list + `<li class="ad-pb-12"> 
        <svg class="ad-inline ad-mr-4" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="3" cy="3" r="3" fill="#002A3A"/>
        </svg>
         ${array[i]}</li>`
    }
    return list + `</ul>`;
}


// Video Popup starts here

$(".playVideo").click(function (e) {
    e.preventDefault()
    let videoSource = $(this).data("video-src");
    var video = $('<video/>', {
        src: videoSource,
        controls: true
    });
    $(video).attr('autoplay', '')
    $(video).attr('style', 'max-width:600px');
    $("#watch-video section").append(video)
    $("#watch-video").show();
});
$("#watch-video button").click(function (e) {
    e.preventDefault()
    $("#watch-video section").empty()
    $("#watch-video").hide();
});
// Video Popup ends here


try {
    $(() => {
        $(document).on("click", ".checkboxCustom > li", function () {
            if ($(this).hasClass("active")) {
                reportingEntityRevision.splice(reportingEntityRevision.indexOf($(this).attr("data-value")), 1);
                $(this).removeClass("active");
                $(this).children("img").attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZSxDYMwEEW/D1OAKIyUAewRMkI2yAiMlhGyQUbICGYEK0RQYKzcRRRpjVIhXmVZuie7uKfAeO8NUer4aJBHSInuzrlescSWJR513dii0FmWZYkYx3c/zzhrIlxF0rYnbMQOw6sjIJncl/yyzhrCnzhEh2i3IgoxRmxlnQ2SEcMZeVZVY7XOW16RTNM3IxclF9IkyYmUIMvEv0kJNw5b+ADtBziryk+hcQAAAABJRU5ErkJggg==");
            } else {
                $(this).addClass("active");
                reportingEntityRevision.push($(this).attr("data-value"));
                $(this).children("img").attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC9SURBVHgBrZI/DoIwGMVfu8LApCtx9hCyuDceQK/gBYx6AkdH5Rgu3EQ6MzHI2toP/ENCWin4kqb9kvd7fcPHsLquodgJQAQ/SXC9ZxBpboYYw1TyETAp4hip3gHxJEB+FvXxDiA4Oy7NHZqJ+QW0YVlUSHY3e8C7IkE2WBYPOBqw2kzQYj79CTeESPW3bviCgo/BBXcakKkxV73gToN2k00ywyW7O2FrgI/+sYm6xGBpyaHVlh7wlvlYq8MT/eRbxpLqE6QAAAAASUVORK5CYII=");
            }
        })
    })
} catch (error) {
    console.log(error)
}

try {
    $(() => {
        $(document).on("click", ".documentCheckboxCustom> li", function () {
            if ($(this).hasClass("active")) {
                reviseDocumentCheck.splice(reviseDocumentCheck.indexOf($(this).attr("data-value")), 1);
                $(this).removeClass("active");
                $(this).children("img").attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZSxDYMwEEW/D1OAKIyUAewRMkI2yAiMlhGyQUbICGYEK0RQYKzcRRRpjVIhXmVZuie7uKfAeO8NUer4aJBHSInuzrlescSWJR513dii0FmWZYkYx3c/zzhrIlxF0rYnbMQOw6sjIJncl/yyzhrCnzhEh2i3IgoxRmxlnQ2SEcMZeVZVY7XOW16RTNM3IxclF9IkyYmUIMvEv0kJNw5b+ADtBziryk+hcQAAAABJRU5ErkJggg==");
            } else {
                $(this).addClass("active");
                reviseDocumentCheck.push($(this).attr("data-value"));
                $(this).children("img").attr('src', "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC9SURBVHgBrZI/DoIwGMVfu8LApCtx9hCyuDceQK/gBYx6AkdH5Rgu3EQ6MzHI2toP/ENCWin4kqb9kvd7fcPHsLquodgJQAQ/SXC9ZxBpboYYw1TyETAp4hip3gHxJEB+FvXxDiA4Oy7NHZqJ+QW0YVlUSHY3e8C7IkE2WBYPOBqw2kzQYj79CTeESPW3bviCgo/BBXcakKkxV73gToN2k00ywyW7O2FrgI/+sYm6xGBpyaHVlh7wlvlYq8MT/eRbxpLqE6QAAAAASUVORK5CYII=");
            }
        })
    })
} catch (error) {

}

try {
    $(document).on("click", ".close-RIE", function () {
        $(this).parents(".block").fadeOut(200)
        $("video").each(function () {
            $(this).get(0).pause();
            $(this).removeAttr('autoplay');
        });
    })
    // $(".close-RIE").click(function(){
    // });
    $(".registerButtonRIE").click(function () {
        $("#registerRIE").fadeIn(200)
    })
} catch (error) {

}

try {
    $(document).on("click", ".hidePrivacyPopup", function () {
        $(".policy-popup-login").hide()
    })
} catch (error) {

}

function minDate() {
    let dtToday = new Date();
    let month = dtToday.getMonth() + 1;
    let day = dtToday.getDate();
    let year = dtToday.getFullYear();
    if (month < 10)
        month = '0' + month.toString();
    if (day < 10)
        day = '0' + day.toString();

    let mindate = year + '-' + month + '-' + day;
    return mindate;
}

window.updateMaturityDate = function () {
    try {
        let input = $('input[name="maturity-date"]');
        if (input.attr('data-maturity-date')) {
            $('input[name="maturity-date"]').attr('min', input.attr('data-maturity-date'));
        } else {
            $('input[name="maturity-date"]').attr('min', minDate());
        }

    } catch (error) {
        console.log(error)
    }
    try {
        $('input[name="maturity-date"]').change(function () {
            let selectedDate = new Date($(this).val());
            let minmumDate = new Date(minDate())

            let date = new Date($(this).val())
            if (date.getFullYear().toString().length == 4) {
                if (selectedDate < minmumDate) {
                    $(".failed-otp ").hide(200).removeClass('success');
                    $(".failed-otp label").text("Past date not allowed");
                    $(".failed-otp").show(200);
                    $(this).val("")
                } else {
                    $(".failed-otp").hide();
                }
            }


        });
    } catch (error) {

    }
}

window.updatePropectusApprovalDate = function () {
    try {
        $('input[name="prospectus-approval-date"]').attr('max', minDate());
    } catch (error) {
        console.log(error)
    }
    try {
        $('input[name="prospectus-approval-date"]').change(function () {
            let selectedDate = new Date($(this).val());
            let minmumDate = new Date(minDate())

            let date = new Date($(this).val())
            if (date.getFullYear().toString().length == 4) {
                if (selectedDate > minmumDate) {
                    $(this).val("")
                } else {
                    $(".failed-otp").hide();
                }
            }


        });
    } catch (error) {

    }
}

$(function () {
    updateMaturityDate();
    updatePropectusApprovalDate()
});

$(function () {
    window.handleChangeCoupon = function (input) {
        if (input.value < 0) input.value = 0;
        if (input.value > 100) input.value = "";
    }

    // try {
    //     $(document).on("click","#bindChipListIssuer,#bindChipListTicker",function(){

    //     })
    // } catch (error) {

    // }

    try {
        $(document).on("click", ".activityCenterButton", function () {
            $(this).next().toggleClass("ad-hidden")
        })
    } catch (error) {

    }

    try {
        $(document).on("click", ".single-select-search-dropdown", function (e) {
            e.stopPropagation()
        })
        $(document).on('keyup', ".single-select-search-dropdown", function (e) {
            let _this = this;
            let filteredList = $(this).parent().parent().next("ul").children();
            let result = filteredList.filter(function (i, li) {
                let list_item_text = $(li).text().toUpperCase();
                let search_text = _this.value.toUpperCase();
                return ~list_item_text.indexOf(search_text);
            });

            filteredList.hide();
            result.show();
        })
    } catch (error) {

    }
})


$(() => {
    $(document).on("mouseenter", ".applyEllipsis", function () {
        $(this).attr("title", $(this).text())
    })


    $(document).on("keypress", "input", function (e) {
        if (e.which == 60 || e.which == 62)
            return false;
    })

    $(document).on("click", ".childVideo", function () {
        let videoURL = $(this).attr("data-video-src")
        let videoTITLE = $(this).attr("data-title")
        $(this).parents(".custom-dialogue").find(".primary-video").attr("src", videoURL)
        $(this).parents(".custom-dialogue").find(".primary-video").attr("autoplay", '')
        $(this).parents(".custom-dialogue").find(".videoTitle").text(videoTITLE)
    })

    $(document).on("click", ".multipleVideo", function (e) {
        e.preventDefault();
        $(this).parents("li").find(".custom-dialogue").show();
        $(this).parents("li").find(".primary-video").attr("autoplay", "")
        $(this).parents("li").find(".primary-video").get(0).play();
    })
})

$(() => {
    try {
        $(document).on("keypress", "input,textarea", function (e) {
            if (e.keyCode == 34 || e.keyCode == 60 || e.keyCode == 62 || e.keyCode == 33 || e.keyCode == 40 || e.keyCode == 41 || e.keyCode == 123 || e.keyCode == 125 || e.keyCode == 92 || e.keyCode == 47 || e.keyCode == 58 || e.keyCode == 94 || e.keyCode == 63 || e.keyCode == 124 || e.keyCode == 91 || e.keyCode == 93) {
                return false
            }
        })

        $(document).on("paste", "input,textarea", function (e) {
            setTimeout(() => {
                let data = e.target.value
                if (data.indexOf("\"") >= 0 || data.indexOf("!") >= 0 || data.indexOf("(") >= 0 || data.indexOf(")") >= 0 || data.indexOf("{") >= 0 || data.indexOf("}") >= 0 || data.indexOf("/") >= 0 || data.indexOf("\\") >= 0 || data.indexOf(":") >= 0 || data.indexOf("<") >= 0 || data.indexOf(">") >= 0 || data.indexOf("^") >= 0 || data.indexOf("?") >= 0 || data.indexOf("|") >= 0 || data.indexOf("[") >= 0 || data.indexOf("]") >= 0) {
                    e.target.value = ""
                }
            }, 100);
        })

        $(document).on("submit", "form", function () {
            window.isUserEditing = false;
        })

    } catch (error) {

    }
})

window.beforeUnloadTrigger = function () {
    try {
        window.isUserEditing = false;
        window.addEventListener("beforeunload", function (e) {
            if (window.isUserEditing) {
                var confirmationMessage = 'Are you sure you want to discard your input or changes?';
                (e || window.event).returnValue = confirmationMessage; //Gecko + IE
                return confirmationMessage;
            } else {

            }
        });

        $(document).on("click", "input,textarea,.dropDownControl,button", function (e) {
            window.isUserEditing = true;
        });

    } catch (error) {

    }
}