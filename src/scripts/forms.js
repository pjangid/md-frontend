const ERROR_MESSAGE = "Enter valid ";
const ERROR_ELEMENT = "label";

const errorSVG = `<svg class="ad-inline" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99967 14.6667C11.6816 14.6667 14.6663 11.6819 14.6663 7.99998C14.6663 4.31808 11.6816 1.33331 7.99967 1.33331C4.31778 1.33331 1.33301 4.31808 1.33301 7.99998C1.33301 11.6819 4.31778 14.6667 7.99967 14.6667Z" stroke="#EB5757" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M8 5.33331V7.99998" stroke="#EB5757" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
<path d="M8 10.6667H8.00444" stroke="#EB5757" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"></path>
</svg> &nbsp;&nbsp;`;

// This function simply generated new error element beneath the element passsed in parameter
function generateErrorElement(element, messageTextParam) {
    let errorElement = document.createElement(ERROR_ELEMENT);
    errorElement.setAttribute('class', 'ad-block ad-text-red-error ad-text-12 ad-flex');
    errorElement.style.top = "-5px"
    errorElement.innerHTML = errorSVG + ERROR_MESSAGE + messageTextParam;
    element.classList.add('ad-border-red-error')
    return element.parentNode.insertBefore(errorElement, element.nextSibling);
}


// This function return promise and remove all error element from the form element
// It also validates if there are not errors and remove border from input
function removeErrorLabelIfExists(isValidInput, element, labeltext) {
    return new Promise((resolve, reject) => {
        let elementArray = element.parentNode.getElementsByTagName(ERROR_ELEMENT);
        if (elementArray.length) {
            [].forEach.call(elementArray, function(elem) {
                if (elem.innerHTML == errorSVG + ERROR_MESSAGE + labeltext) {
                    elem.parentNode.removeChild(elem)
                }
            })
        }
        if (isValidInput) {
            element.classList.remove('ad-border-red-error')
            resolve()
        } else {
            reject()
        }
    })

}

function validateMyForm(event) {
    try {
        $(".failed-otp ").hide(200).removeClass('success');
        // To fetch all inputs inside form element
        let queryAllFormInputs = event.target.querySelectorAll("input");
        let queryAllSelect = event.target.querySelectorAll(".dropDownControl");
        let queryMobileControl = event.target.querySelectorAll(".mobileNoContainer");

        // To create an array with default value of false. It will be of the same length as number of inputs in side form 
        let newInputArrayStatus = [...Array(queryAllFormInputs.length)].map((_, i) => false);
        let newSelectArrayStatus = [...Array(queryAllSelect.length)].map((_, i) => false);

        // Promise will validate all inputs and will make sure that inputs are eighter correct or meet condions
        let promise = new Promise((resolve) => {
            queryAllFormInputs.forEach(function(element, currentIndex) {
                let attributeType = element.getAttribute('type');
                let inputTypeText = element.getAttribute('data-error-default');
                if ($(element).parents('.section-block').hasClass("ad-hidden")) {
                    newInputArrayStatus[currentIndex] = true;
                } else {
                    switch (attributeType) {
                        case "text":
                            let inputValidationType = element.getAttribute("data-validation-type");
                            let matchStatus = "";
                            if (inputValidationType == "ignore" && $(element).val() != "") {
                                matchStatus = "";
                            } else {
                                if (element.getAttribute("data-field") == "not-required") {
                                    if ($(element).hasClass("mobile-no-field")) {
                                        matchStatus = ""
                                    } else {
                                        if ($(element).val() != "") {
                                            if (inputValidationType == "alphanumeric") {
                                                matchStatus = /^[0-9a-zA-Z]+$/;
                                            }else if (inputValidationType == "alphanumericSpace") {
                                                matchStatus = /^[0-9a-zA-Z\s ]+$/;
                                            } else if (inputValidationType == "allowspaces") {
                                                matchStatus = /^[A-Za-z\s ]+$/;
                                            } else {
                                                matchStatus = /^[A-Za-z\s]+$/
                                            }
                                        } else {
                                            matchStatus = ""
                                        }
                                    }

                                } else {
                                    if (inputValidationType == "alphanumeric") {
                                        matchStatus = /^[0-9a-zA-Z]+$/;
                                    } else if (inputValidationType == "alphanumericSpace") {
                                        matchStatus = /^[0-9a-zA-Z\s ]+$/;
                                    } else if (inputValidationType == "allowspaces") {
                                        matchStatus = /^[A-Za-z\s ]+$/;
                                    } else {
                                        matchStatus = /^[A-Za-z\s]+$/
                                    }
                                }
                            }

                            removeErrorLabelIfExists(element.value.trim().match(matchStatus), element, inputTypeText)
                                .then(function() {
                                    newInputArrayStatus[currentIndex] = true;
                                }).catch(function() {
                                    newInputArrayStatus[currentIndex] = false;
                                    if (element.getAttribute("data-error") == "disabled") {} else {
                                        generateErrorElement(element, inputTypeText)
                                    }
                                })
                            break;
                        case "email":
                            if (element.getAttribute("data-field") == "not-required") {
                                newInputArrayStatus[currentIndex] = true
                            }else{
                                removeErrorLabelIfExists(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element.value.trim()), element, inputTypeText)
                                .then(function() {
                                    newInputArrayStatus[currentIndex] = true
                                }).catch(function() {
                                    newInputArrayStatus[currentIndex] = false
                                    generateErrorElement(element, inputTypeText)
                                });
                            }
                            break;
                        case "date":
                            removeErrorLabelIfExists(hasNumber(element.value.trim()), element, inputTypeText)
                                .then(function() {
                                    newInputArrayStatus[currentIndex] = true
                                }).catch(function() {
                                    newInputArrayStatus[currentIndex] = false
                                    generateErrorElement(element, inputTypeText)
                                });
                            break;
                        case "hidden":
                            removeErrorLabelIfExists(true, element, inputTypeText)
                                .then(function() {
                                    newInputArrayStatus[currentIndex] = true
                                }).catch(function() {
                                    newInputArrayStatus[currentIndex] = false
                                    generateErrorElement(element, inputTypeText)
                                });
                            break;
                        case "radio":
                            removeErrorLabelIfExists(true, element, inputTypeText)
                                .then(function() {
                                    newInputArrayStatus[currentIndex] = true
                                }).catch(function() {
                                    newInputArrayStatus[currentIndex] = false
                                    generateErrorElement(element, inputTypeText)
                                });
                            break;
                        case "number":
                            let matchStringStatus=/^[0-9]*\.?[0-9]*$/;
                            if($(element).hasClass('mobile-no-field')){
                                matchStringStatus=true;
                            }else{
                                if(element.value.trim()){
                                    matchStringStatus = element.value.trim().match(matchStringStatus)
                                }else{
                                    matchStringStatus=false;
                                }
                            }
                            removeErrorLabelIfExists(matchStringStatus, element, inputTypeText)
                                .then(function() {
                                    newInputArrayStatus[currentIndex] = true
                                }).catch(function() {
                                    newInputArrayStatus[currentIndex] = false
                                    generateErrorElement(element, inputTypeText)
                                });
                            break;
                        case "file":
                            removeErrorLabelIfExists(true, element, inputTypeText)
                                .then(function() {
                                    newInputArrayStatus[currentIndex] = true
                                }).catch(function() {
                                    newInputArrayStatus[currentIndex] = false
                                    generateErrorElement(element, inputTypeText)
                                });
                            break;

                        case "password":
                            removeErrorLabelIfExists(element.value.trim() ? true : false, element, inputTypeText)
                                .then(function() {
                                    newInputArrayStatus[currentIndex] = true
                                }).catch(function() {
                                    newInputArrayStatus[currentIndex] = false
                                    generateErrorElement(element, inputTypeText)
                                })
                            break;
                        case "checkbox":
                            let attribute = element.getAttribute('data-field');
                            let status = false;
                            if (attribute == "required") {
                                status = element.checked
                                if (!status) {
                                    $(element).parent().addClass("ad-relative");
                                    $(element).parent().append(`
                                        <span id="confirmationReminder" class="ad-absolute ad-left-0">
                                           Confirm your submission here
                                        </span>
                                    `);
                                    // $(".failed-otp ").hide(200).removeClass('success');
                                    // $(".failed-otp label").text("Confirmation box not checked");
                                    // $(".failed-otp ").show(200);
                                } else {
                                    $("#confirmationReminder").remove();
                                }
                            } else {
                                status = true
                            }
                            removeErrorLabelIfExists(status, element, inputTypeText)
                                .then(function() {
                                    newInputArrayStatus[currentIndex] = true
                                }).catch(function() {
                                    newInputArrayStatus[currentIndex] = false
                                        // generateErrorElement(element, inputTypeText)
                                });
                            break;
                        default:
                    }
                }

                if (queryAllFormInputs.length - 1 == currentIndex) {
                    resolve(newInputArrayStatus)
                }
            });
        });

        let searchPromise = new Promise((resolve) => {

            queryAllSelect.forEach((element, currentIndex) => {
                if ($(element).parents('.section-block').hasClass("ad-hidden")) {
                    newSelectArrayStatus[currentIndex] = true;
                } else {
                    if (element.getAttribute("data-value")) {
                        newSelectArrayStatus[currentIndex] = true;
                        element.classList.remove('error-border')
                    } else {
                        if (element.getAttribute("data-field") == "not-required") {
                            newSelectArrayStatus[currentIndex] = true;
                            element.classList.remove('error-border')
                        } else {
                            newSelectArrayStatus[currentIndex] = false;
                            element.removeAttribute("style")
                            $(element).find(".selectValue").removeAttr("style");
                            $(element).find(".selectValue").next().find("path").attr("fill", "#668088")
                            element.classList.add('error-border')
                        }

                    }
                }

            });
            resolve()
        });

        searchPromise.then(() => {})
        let isMobileNoValidated=[];
        promise.then((inputArray) => {
            try {
                if (queryMobileControl.length) {
                    queryMobileControl.forEach((element,index)=>{
                        if($(element).find(".selectValue").text()=="+971"){
                            if($(element).children("input").val().length != 9){
                                if ($(element).next().is("label")) {
                                    isMobileNoValidated.push(false)
                                } else {
                                    generateErrorElement(element, "Phone No")
                                    isMobileNoValidated.push(false)
                                    event.preventDefault();
                                }
                            }else{
                                isMobileNoValidated.push(true);
                                if ($(element).next().is("label")) {
                                    $(element).next().remove()
                                }
                            }
                        }else if($(element).find(".selectValue").text()=="+91"){
                            if($(element).children("input").val().length != 10){
                                if ($(element).next().is("label")) {
                                    isMobileNoValidated.push(false)
                                } else {
                                    generateErrorElement(element, "Phone No")
                                    isMobileNoValidated.push(false)
                                    event.preventDefault();
                                }
                            }else{
                                isMobileNoValidated.push(true);
                                if ($(element).next().is("label")) {
                                    $(element).next().remove()
                                }
                            }
                        }
                        // if ($(element).children("input").val().length >= 16 || $(element).children("input").val() == "" || $(element).children("input").val().length < 9) {
                        //     if ($(element).next().is("label")) {
                        //         isMobileNoValidated.push(false)
                        //     } else {
                        //         generateErrorElement(element, "Phone No")
                        //         isMobileNoValidated.push(false)
                        //         event.preventDefault();
                        //     }
                        // } else {
                        //     isMobileNoValidated.push(true);
                        //     if ($(element).next().is("label")) {
                        //         $(element).next().remove()
                        //     }
                        // }
                    })
                    
                }else{
                    isMobileNoValidated.push(true);
                }
            } catch (error) {
             console.log(error)   
            }


            if (inputArray.indexOf(false) >= 0 || newSelectArrayStatus.indexOf(false) >= 0) {
                event.preventDefault()
            } else {
                // if (event.target.getAttribute('id') == "issuer-onboarding") {
                //     validateOnboardingForm(event)
                // } else if (event.target.getAttribute('id') == "entity-onboarding") {
                //     validateREOnboardingForm(event)
                // } else if (event.target.getAttribute('id') == "edit-entity-onboarding") {
                //     validateEntityEditingForm(event)
                // } else {
                   if(isMobileNoValidated.indexOf(false)<=-1){
                    if ($(this).data('function')) {
                        let customFunction = $(this).data('function')
                        eval(customFunction)(event);
                    } else {}

                   }else{
                       event.preventDefault()
                   }
                // }
            }
            try {
                verifyDuplicateSecurity(event)

            } catch (error) {

            }
        })
    } catch (e) {}

}
try {
    $(document).on('keyup', ".custom-security-block input", function(event) {
        verifyDuplicateSecurity(event)
        verifyDuplicateISIN(event)
    });
} catch (error) {

}
function verifyDuplicateISIN(event){
    if ($(".custom-security-block").length) {
        let duplicateValueArray = [];
        $(".custom-security-block").each(function(i, element) {
            let isinValue = $(element).find('input[name="isin-code"]').val()
            if (isinValue) {
                duplicateValueArray.push(isinValue.toLowerCase());
            }
        })
        if (getDuplicateArrayElements(duplicateValueArray).length) {
            if (event) {
                event.preventDefault()
            }
            $(".failed-otp ").hide(200).removeClass('success');
            $(".failed-otp label").text("Duplicate ISIN code");
            $(".failed-otp").show(200);
            event.target.value="";

        } else {
            // $(".failed-otp").hide();
        }

    }
}
function verifyDuplicateSecurity(event) {
    if ($(".custom-security-block").length) {
        let duplicateValueArray = [];
        $(".custom-security-block").each(function(i, element) {
            let securityValue = $(element).find('input[name="security-name"]').val()
            if (securityValue) {
                duplicateValueArray.push(securityValue.toLowerCase());
            }
        })
        if (getDuplicateArrayElements(duplicateValueArray).length) {
            if (event) {
                event.preventDefault()
            }
            $(".failed-otp ").hide(200).removeClass('success');
            $(".failed-otp label").text("Duplicate security name");
            $(".failed-otp").show(200);
            event.target.value="";

        } else {
            // $(".failed-otp").hide();
        }

    }
}

function getDuplicateArrayElements(arr) {
    var sorted_arr = arr.slice().sort();
    var results = [];
    for (var i = 0; i < sorted_arr.length - 1; i++) {
        if (sorted_arr[i + 1] === sorted_arr[i]) {
            results.push(sorted_arr[i]);
        }
    }
    return results;
}

export const BIND_FORM_VALIDATION = () => {
    [].forEach.call(document.getElementsByTagName('form'), function(element) {
        element.addEventListener("submit", validateMyForm)
    });
}

function hasNumber(myString) {
    return /\d/.test(myString);
}


try {
    var defaultSelectedImageURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC9SURBVHgBrZI/DoIwGMVfu8LApCtx9hCyuDceQK/gBYx6AkdH5Rgu3EQ6MzHI2toP/ENCWin4kqb9kvd7fcPHsLquodgJQAQ/SXC9ZxBpboYYw1TyETAp4hip3gHxJEB+FvXxDiA4Oy7NHZqJ+QW0YVlUSHY3e8C7IkE2WBYPOBqw2kzQYj79CTeESPW3bviCgo/BBXcakKkxV73gToN2k00ywyW7O2FrgI/+sYm6xGBpyaHVlh7wlvlYq8MT/eRbxpLqE6QAAAAASUVORK5CYII=";
    var defaultSelectedRevoked="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZSxDYMwEEW/D1OAKIyUAewRMkI2yAiMlhGyQUbICGYEK0RQYKzcRRRpjVIhXmVZuie7uKfAeO8NUer4aJBHSInuzrlescSWJR513dii0FmWZYkYx3c/zzhrIlxF0rYnbMQOw6sjIJncl/yyzhrCnzhEh2i3IgoxRmxlnQ2SEcMZeVZVY7XOW16RTNM3IxclF9IkyYmUIMvEv0kJNw5b+ADtBziryk+hcQAAAABJRU5ErkJggg==";
    window.resetFormErrors=function(formID){
        $(".failed-otp ").hide(200).removeClass('success');
        let formElement =   document.getElementById(formID)
            let queryAllFormInputs = formElement.querySelectorAll("input");
            let queryAllSelect = formElement.querySelectorAll(".dropDownControl");
            let queryMobileControl = formElement.querySelectorAll(".mobileNoContainer");
        
            // Promise will validate all inputs and will make sure that inputs are eighter correct or meet condions
            let promise = new Promise((resolve) => {
                queryAllFormInputs.forEach(function(element, currentIndex) {
            let attributeType = element.getAttribute('type');
            let inputTypeText = element.getAttribute('data-error-default');

                        switch (attributeType) {
                            case "text":
                                removeErrorLabelIfExists(true, element, inputTypeText);
                                break;
                            case "email":
                                removeErrorLabelIfExists(true, element, inputTypeText)
                                break;
                            case "date":
                                removeErrorLabelIfExists(true, element, inputTypeText);
                                break;
                            case "hidden":
                                removeErrorLabelIfExists(true, element, inputTypeText);
                                break;
                            case "radio":
                                removeErrorLabelIfExists(true, element, inputTypeText);
                                break;
                            case "number":
                                removeErrorLabelIfExists(true, element, inputTypeText);
                                break;
                            case "file":
                                removeErrorLabelIfExists(true, element, inputTypeText);
                                break;
    
                            case "password":
                                removeErrorLabelIfExists(true, element, inputTypeText);
                                break;
                            case "checkbox":
                                $("#confirmationReminder").remove();
                                $(element).prop("checked",false);
                                removeErrorLabelIfExists(true, element, inputTypeText);
                                break;
                            default:
                        }
                    
    
                    if (queryAllFormInputs.length - 1 == currentIndex) {
                        resolve()
                    }
                });
            });
    
            let searchPromise = new Promise((resolve) => {
    
                queryAllSelect.forEach((element, currentIndex) => {
                    element.classList.remove('error-border')    
                });
                resolve()
            });
    
            searchPromise.then(() => {})
            promise.then((inputArray) => {
                try {
                    if (queryMobileControl.length) {
                        queryMobileControl.forEach((element,index)=>{
                            if ($(element).next().is("label")) {
                                $(element).next().remove()
                            }
                        })   
                    }
                } catch (error) {
                 console.log(error)   
                }
            })
    
        $("img").each((index,element)=>{
            console.log(element)
            if($(element).attr("src")==defaultSelectedImageURL){
                $(element).attr("src",defaultSelectedRevoked);
            }
        })
    }
} catch (error) {
    
}